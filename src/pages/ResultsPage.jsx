import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  BookOpen,
  Home,
  ArrowRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { storageService } from '../services/storageService';
import { formatDurationReadable, getScoreAppreciation, formatDateFR } from '../utils/formatters';

export const ResultsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Récupération du résultat depuis le LocalStorage
  const result = useMemo(() => storageService.getQuizResultById(id), [id]);

  if (!result) {
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
          <h2>Résultat introuvable</h2>
          <p className="text-muted" style={{ margin: '1rem 0 2rem 0' }}>
            Aucun résultat correspondant à cet identifiant n'a été trouvé dans votre historique local.
          </p>
          <Link to="/categories" className="btn btn-primary">
            Choisir un autre quiz
          </Link>
        </div>
      </div>
    );
  }

  const appreciation = getScoreAppreciation(result.percentage);

  return (
    <div className="results-page section-padding animate-fade-in">
      <div className="container-sm">
        {/* Carte Principale du Bilan */}
        <div className="results-main-card card text-center">
          {/* Badge & Trophée */}
          <div
            className="results-icon-circle"
            style={{
              backgroundColor: `${appreciation.color}15`,
              color: appreciation.color
            }}
          >
            <Trophy size={48} />
          </div>

          <span className="badge badge-purple" style={{ marginBottom: '0.75rem' }}>
            {result.categoryName || 'Quiz'}
          </span>

          <h1 className="results-title">{result.quizTitle}</h1>

          {/* Appréciation selon le résultat */}
          <div className="results-appreciation-box" style={{ borderColor: `${appreciation.color}40` }}>
            <h3 style={{ color: appreciation.color, marginBottom: '0.35rem' }}>
              {appreciation.level}
            </h3>
            <p style={{ color: 'var(--text-body)', margin: 0, fontSize: '1.05rem' }}>
              {appreciation.message}
            </p>
          </div>

          {/* Grand Cercle de Score / Pourcentage */}
          <div className="score-hero-container">
            <div className="score-percentage" style={{ color: appreciation.color }}>
              {result.percentage}%
            </div>
            <div className="score-ratio-text">
              <strong>{result.score}</strong> bonnes réponses sur <strong>{result.totalQuestions}</strong>
            </div>
          </div>

          {/* Grille des Métriques Clés */}
          <div className="results-metrics-grid">
            <div className="metric-box metric-success">
              <div className="metric-icon">
                <CheckCircle2 size={24} />
              </div>
              <div className="metric-info">
                <span className="metric-val">{result.score}</span>
                <span className="metric-lbl">Bonnes réponses</span>
              </div>
            </div>

            <div className="metric-box metric-error">
              <div className="metric-icon">
                <XCircle size={24} />
              </div>
              <div className="metric-info">
                <span className="metric-val">{result.wrongAnswers}</span>
                <span className="metric-lbl">Mauvaises réponses</span>
              </div>
            </div>

            <div className="metric-box metric-time">
              <div className="metric-icon">
                <Clock size={24} />
              </div>
              <div className="metric-info">
                <span className="metric-val">{formatDurationReadable(result.timeSpent)}</span>
                <span className="metric-lbl">Temps utilisé</span>
              </div>
            </div>
          </div>

          {/* Date de réalisation */}
          <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '2.5rem' }}>
            Quiz complété le {formatDateFR(result.date)}
          </p>

          {/* Boutons d'Action imposés */}
          <div className="results-actions-group">
            <Link to={`/quiz/${result.quizId}`} className="btn btn-secondary btn-lg">
              <RotateCcw size={18} />
              <span>Recommencer le quiz</span>
            </Link>

            <Link to={`/correction/${result.id}`} className="btn btn-primary btn-lg">
              <BookOpen size={18} />
              <span>Voir les corrections</span>
            </Link>

            <Link to="/" className="btn btn-outline btn-lg">
              <Home size={18} />
              <span>Retourner à l'accueil</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
