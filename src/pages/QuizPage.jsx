import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  Sparkles,
  ShieldAlert,
  Send
} from 'lucide-react';
import { getQuizById } from '../data/quizzes';
import { getCategoryById } from '../data/categories';
import { QUESTIONS } from '../data/questions';
import { buildRandomizedQuiz } from '../utils/random';
import { storageService } from '../services/storageService';
import { formatTimeMMSS, getScoreAppreciation } from '../utils/formatters';

export const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Données du quiz et catégorie
  const quiz = useMemo(() => getQuizById(id), [id]);
  const category = useMemo(() => quiz ? getCategoryById(quiz.categoryId) : null, [quiz]);

  // Épreuve de questions générées dynamiquement et aléatoirement
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [questionId]: 'A' }
  const [timeLeft, setTimeLeft] = useState(quiz ? quiz.duration : 300);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timerRef = useRef(null);

  // Génération d'une nouvelle épreuve aléatoire anti-répétition à chaque lancement ou changement de quiz
  useEffect(() => {
    if (quiz) {
      const recentlySeen = storageService.getRecentlySeenQuestionIds(quiz.categoryId, 1);
      const randomized = buildRandomizedQuiz(quiz, QUESTIONS, recentlySeen);
      setQuestions(randomized);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setTimeLeft(quiz.duration);
      setIsTimeUp(false);
      setIsSubmitting(false);
    }
  }, [id, quiz]);

  // Gestion du chronomètre avec compte à rebours précis
  useEffect(() => {
    if (!quiz || questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [quiz, questions.length]);

  // Déclenchement automatique de la fin du quiz lorsque le temps est écoulé
  useEffect(() => {
    if (isTimeUp && !isSubmitting) {
      handleFinishQuiz(true);
    }
  }, [isTimeUp, isSubmitting]);

  // Question active
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercentage = totalQuestions > 0 ? Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100) : 0;
  const timeUsed = quiz ? quiz.duration - timeLeft : 0;

  // Sélection d'une proposition (exclusive par question)
  const handleSelectOption = (optionId) => {
    if (!currentQuestion) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  // Navigation vers la question précédente
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Navigation vers la question suivante
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // Correction automatique et calcul des scores
  const handleFinishQuiz = (forcedByTime = false) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    if (timerRef.current) clearInterval(timerRef.current);

    let correctCount = 0;
    let wrongCount = 0;

    questions.forEach(q => {
      const selected = selectedAnswers[q.id];
      if (selected && selected === q.correctAnswer) {
        correctCount += 1;
      } else {
        wrongCount += 1;
      }
    });

    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const appreciation = getScoreAppreciation(percentage);

    const resultPayload = {
      quizId: quiz.id,
      quizTitle: quiz.title,
      categoryId: quiz.categoryId,
      categoryName: category ? category.name : quiz.categoryId,
      score: correctCount,
      totalQuestions: totalQuestions,
      wrongAnswers: wrongCount,
      percentage: percentage,
      timeSpent: forcedByTime ? quiz.duration : timeUsed,
      date: new Date().toISOString(),
      level: appreciation.level,
      userAnswers: selectedAnswers,
      questions: questions // Sauvegarde de l'épreuve exacte pour la correction
    };

    try {
      const savedResult = storageService.saveQuizResult(resultPayload);
      navigate(`/results/${savedResult.id}`, { replace: true });
    } catch (error) {
      console.error('Erreur lors de l’enregistrement du résultat:', error);
      setIsSubmitting(false);
    }
  };

  // Cas où le quiz est introuvable
  if (!quiz || questions.length === 0) {
    return (
      <div className="container section-padding text-center">
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3.5rem 2rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-warning-bg)',
            color: 'var(--color-warning)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}>
            <HelpCircle size={36} />
          </div>
          <h2>Quiz non disponible</h2>
          <p className="text-muted" style={{ margin: '1rem 0 2rem 0' }}>
            Ce quiz ne comporte aucune question ou son identifiant est invalide.
          </p>
          <Link to="/categories" className="btn btn-primary">
            <ArrowLeft size={16} /> Retour aux catégories
          </Link>
        </div>
      </div>
    );
  }

  const isTimerCritical = timeLeft <= 60; // Moins de 60 secondes : alerte visuelle

  return (
    <div className="quiz-page section-padding animate-fade-in">
      <div className="container-sm">
        {/* Barre Supérieure : Infos Quiz & Chronomètre */}
        <div className="quiz-header-card card">
          <div className="quiz-header-top">
            <div className="quiz-info-col">
              <span className="badge badge-purple" style={{ marginBottom: '0.35rem' }}>
                {category ? category.name : 'Quiz'}
              </span>
              <h2 className="quiz-header-title">{quiz.title}</h2>
            </div>

            {/* Chronomètre avec animation si critique */}
            <div className={`quiz-timer ${isTimerCritical ? 'quiz-timer-critical' : ''}`}>
              <Clock size={20} className={isTimerCritical ? 'animate-pulse' : ''} />
              <div className="timer-text-group">
                <span className="timer-label">Temps restant</span>
                <span className="timer-countdown">{formatTimeMMSS(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Barre de Progression */}
          <div className="quiz-progress-section">
            <div className="quiz-progress-labels">
              <span className="progress-step-text">
                Question <strong>{currentQuestionIndex + 1}</strong> sur <strong>{totalQuestions}</strong>
              </span>
              <span className="progress-answered-text">
                {answeredCount} / {totalQuestions} répondue{answeredCount > 1 ? 's' : ''}
              </span>
            </div>
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Alerte si temps critique */}
        {isTimerCritical && (
          <div className="alert-timer-warning card animate-fade-in">
            <AlertTriangle size={18} />
            <span>Attention, il vous reste moins d'une minute pour finaliser le questionnaire !</span>
          </div>
        )}

        {/* Carte de la Question Active */}
        <div className="card question-card animate-fade-in" key={currentQuestion.id}>
          <div className="question-header">
            <span className="question-number-badge">
              Question {currentQuestionIndex + 1}
            </span>
          </div>

          <h3 className="question-text">{currentQuestion.question}</h3>

          {/* Propositions de réponses */}
          <div className="options-container">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswers[currentQuestion.id] === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  className={`option-btn ${isSelected ? 'option-selected' : ''}`}
                  onClick={() => handleSelectOption(option.id)}
                >
                  <div className="option-letter">{option.id}</div>
                  <div className="option-content">{option.text}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Barre de Navigation du Questionnaire */}
        <div className="quiz-actions-card card">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft size={16} />
            <span>Question précédente</span>
          </button>

          <div className="quiz-actions-right">
            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
              >
                <span>Question suivante</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
                onClick={() => setShowConfirmModal(true)}
              >
                <CheckCircle size={18} />
                <span>Terminer le quiz</span>
              </button>
            )}
          </div>
        </div>

        {/* Bouton d'abandon / Terminer anticipé */}
        <div className="text-center" style={{ marginTop: '1.5rem' }}>
          <button
            type="button"
            className="btn btn-sm btn-outline"
            style={{ color: 'var(--text-muted)', borderColor: 'var(--border-medium)' }}
            onClick={() => setShowConfirmModal(true)}
          >
            <span>Clôturer et évaluer le quiz maintenant</span>
          </button>
        </div>
      </div>

      {/* Modal de Confirmation avant soumission */}
      {showConfirmModal && (
        <div className="modal-backdrop animate-fade-in">
          <div className="modal-card card">
            <div className="modal-icon-wrapper" style={{ backgroundColor: '#eef2ff', color: 'var(--color-primary)' }}>
              <Send size={28} />
            </div>

            <h3 className="modal-title">Valider et terminer le quiz ?</h3>

            <p className="modal-text">
              Vous avez répondu à <strong>{answeredCount}</strong> sur <strong>{totalQuestions}</strong> questions.
              {answeredCount < totalQuestions && (
                <span style={{ display: 'block', marginTop: '0.5rem', color: 'var(--color-warning-text)' }}>
                  ⚠️ Attention : les questions sans réponse seront considérées comme erronées.
                </span>
              )}
            </p>

            <div className="modal-buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowConfirmModal(false)}
              >
                Continuer à répondre
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setShowConfirmModal(false);
                  handleFinishQuiz(false);
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Évaluation en cours...' : 'Oui, voir mes résultats'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
