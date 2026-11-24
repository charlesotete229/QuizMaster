import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Award,
  AlertCircle,
  Filter,
  BookOpen
} from 'lucide-react';
import { storageService } from '../services/storageService';
import { getQuestionsByQuizId } from '../data/questions';

export const CorrectionPage = () => {
  const { id } = useParams();

  // Récupération du résultat
  const result = useMemo(() => storageService.getQuizResultById(id), [id]);
  // Récupération des questions associées : priorité à l'instantané de la session
  const questions = useMemo(() => {
    if (!result) return [];
    if (Array.isArray(result.questions) && result.questions.length > 0) {
      return result.questions;
    }
    return getQuestionsByQuizId(result.quizId);
  }, [result]);

  // Filtre d'affichage des questions (toutes, réussies, échouées)
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'correct' | 'wrong'

  if (!result || questions.length === 0) {
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
            <AlertCircle size={36} />
          </div>
          <h2>Données de correction introuvables</h2>
          <p className="text-muted" style={{ margin: '1rem 0 2rem 0' }}>
            La session de quiz demandée ne dispose pas de données de correction valides.
          </p>
          <Link to="/history" className="btn btn-primary">
            Retour à l'historique
          </Link>
        </div>
      </div>
    );
  }

  const userAnswers = result.userAnswers || {};

  // Filtrage des questions selon l'onglet
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const userSelected = userAnswers[q.id];
      const isCorrect = userSelected === q.correctAnswer;
      if (filterMode === 'correct') return isCorrect;
      if (filterMode === 'wrong') return !isCorrect;
      return true;
    });
  }, [questions, userAnswers, filterMode]);

  return (
    <div className="correction-page section-padding animate-fade-in">
      <div className="container-sm">
        {/* Navigation retour vers les résultats */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <Link to={`/results/${result.id}`} className="back-link" style={{ margin: 0 }}>
            <ArrowLeft size={16} /> Retour au bilan des résultats
          </Link>
          <Link to={`/quiz/${result.quizId}`} className="btn btn-sm btn-secondary">
            <RotateCcw size={14} /> Recommencer ce quiz
          </Link>
        </div>

        {/* Bannière de Synthèse de Correction */}
        <div className="correction-header-card card">
          <div className="correction-header-top">
            <div>
              <span className="badge badge-purple" style={{ marginBottom: '0.4rem' }}>
                Correction Détaillée & Pédagogique
              </span>
              <h1 className="correction-title">{result.quizTitle}</h1>
              <p className="text-muted" style={{ margin: 0 }}>
                Score : <strong>{result.score}</strong> / {result.totalQuestions} ({result.percentage}%) • {result.categoryName}
              </p>
            </div>

            <div className="correction-score-pill">
              <Award size={22} color="var(--color-primary)" />
              <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>{result.percentage}%</span>
            </div>
          </div>

          {/* Filtres de correction */}
          <div className="correction-filter-tabs">
            <button
              className={`filter-tab ${filterMode === 'all' ? 'active' : ''}`}
              onClick={() => setFilterMode('all')}
            >
              Toutes les questions ({questions.length})
            </button>
            <button
              className={`filter-tab ${filterMode === 'correct' ? 'active' : ''}`}
              onClick={() => setFilterMode('correct')}
            >
              Réussies ({result.score})
            </button>
            <button
              className={`filter-tab ${filterMode === 'wrong' ? 'active' : ''}`}
              onClick={() => setFilterMode('wrong')}
            >
              Erreurs ({result.wrongAnswers})
            </button>
          </div>
        </div>

        {/* Liste des Questions & Corrections */}
        <div className="correction-list">
          {filteredQuestions.map((question, index) => {
            const userChoiceId = userAnswers[question.id];
            const isAnswered = Boolean(userChoiceId);
            const isCorrect = userChoiceId === question.correctAnswer;

            return (
              <div
                key={question.id}
                className={`card correction-item-card ${isCorrect ? 'correction-card-correct' : 'correction-card-wrong'}`}
              >
                {/* En-tête de la question : statut et numéro */}
                <div className="correction-item-header">
                  <span className="question-number-badge">
                    Question {index + 1}
                  </span>

                  {isCorrect ? (
                    <span className="badge badge-easy" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <CheckCircle2 size={14} /> Réponse Correcte
                    </span>
                  ) : (
                    <span className="badge badge-hard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <XCircle size={14} /> {isAnswered ? 'Réponse Incorrecte' : 'Non Répondu'}
                    </span>
                  )}
                </div>

                {/* Énoncé */}
                <h3 className="correction-question-text">{question.question}</h3>

                {/* Options avec mise en évidence visuelle distinctive */}
                <div className="correction-options-container">
                  {question.options.map(option => {
                    const isUserSelected = userChoiceId === option.id;
                    const isRightAnswer = option.id === question.correctAnswer;

                    let optionClass = 'correction-option-default';
                    if (isRightAnswer) {
                      optionClass = 'correction-option-right';
                    } else if (isUserSelected && !isCorrect) {
                      optionClass = 'correction-option-wrong';
                    }

                    return (
                      <div key={option.id} className={`correction-option-item ${optionClass}`}>
                        <div className="correction-option-letter">{option.id}</div>
                        <div className="correction-option-text">
                          <span>{option.text}</span>
                          {isUserSelected && (
                            <span className="correction-choice-label">
                              (Votre réponse)
                            </span>
                          )}
                          {isRightAnswer && (
                            <span className="correction-correct-label">
                              (Bonne réponse)
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Encadré d'Explication Pédagogique */}
                <div className="correction-explanation-box">
                  <div className="explanation-header">
                    <BookOpen size={16} color="var(--color-primary)" />
                    <strong>Explication :</strong>
                  </div>
                  <p className="explanation-text">{question.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Boutons d'Action Inférieurs */}
        <div className="text-center" style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={`/results/${result.id}`} className="btn btn-secondary btn-lg">
            <ArrowLeft size={18} /> Retour au bilan
          </Link>
          <Link to="/categories" className="btn btn-primary btn-lg">
            <span>Passer à un autre quiz</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CorrectionPage;
