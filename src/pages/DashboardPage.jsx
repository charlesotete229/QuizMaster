import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart2,
  Trophy,
  CheckCircle2,
  Target,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  Play,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { storageService } from '../services/storageService';
import { formatDurationReadable, formatDateFR, getScoreAppreciation } from '../utils/formatters';

export const DashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [recentResults, setRecentResults] = useState([]);

  const loadDashboardData = () => {
    const userStats = storageService.getUserStats();
    const allResults = storageService.getQuizResults();
    setStats(userStats);
    setRecentResults(allResults.slice(0, 4)); // Les 4 dernières sessions
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleSeedDemo = () => {
    storageService.seedDemoData();
    loadDashboardData();
  };

  if (!stats) return null;

  const hasHistory = stats.totalQuizzes > 0;
  const overallAppreciation = getScoreAppreciation(stats.averagePercentage);

  return (
    <div className="dashboard-page section-padding animate-fade-in">
      <div className="container">
        {/* En-tête du Dashboard */}
        <div className="section-header">
          <div>
            <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>
              Statistiques Personnelles
            </span>
            <h1 className="page-title" style={{ margin: 0 }}>Tableau de Bord</h1>
            <p className="section-subtitle">
              Analysez votre progression, votre taux de réussite et vos disciplines les plus travaillées.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/categories" className="btn btn-primary">
              <Play size={16} fill="currentColor" />
              <span>Lancer un nouveau quiz</span>
            </Link>
            {!hasHistory && (
              <button type="button" className="btn btn-secondary" onClick={handleSeedDemo}>
                <Sparkles size={16} />
                <span>Charger démo</span>
              </button>
            )}
          </div>
        </div>

        {/* Grille des 4 Métriques Principales imposées */}
        <div className="dashboard-metrics-grid">
          {/* 1. Total quiz réalisés */}
          <div className="card stat-widget">
            <div className="stat-widget-icon" style={{ backgroundColor: '#eef2ff', color: 'var(--color-primary)' }}>
              <Target size={26} />
            </div>
            <div className="stat-widget-info">
              <span className="stat-widget-val">{stats.totalQuizzes}</span>
              <span className="stat-widget-lbl">Quiz Réalisés</span>
            </div>
          </div>

          {/* 2. Total bonnes réponses */}
          <div className="card stat-widget">
            <div className="stat-widget-icon" style={{ backgroundColor: '#ecfdf5', color: 'var(--color-success)' }}>
              <CheckCircle2 size={26} />
            </div>
            <div className="stat-widget-info">
              <span className="stat-widget-val">{stats.totalCorrectAnswers}</span>
              <span className="stat-widget-lbl">Bonnes Réponses</span>
            </div>
          </div>

          {/* 3. Taux moyen de réussite */}
          <div className="card stat-widget">
            <div className="stat-widget-icon" style={{ backgroundColor: '#f5f3ff', color: 'var(--color-secondary)' }}>
              <BarChart2 size={26} />
            </div>
            <div className="stat-widget-info">
              <span className="stat-widget-val">{stats.averagePercentage}%</span>
              <span className="stat-widget-lbl">Taux Moyen de Réussite</span>
            </div>
          </div>

          {/* 4. Meilleur score */}
          <div className="card stat-widget">
            <div className="stat-widget-icon" style={{ backgroundColor: '#fffbeb', color: 'var(--color-warning)' }}>
              <Trophy size={26} />
            </div>
            <div className="stat-widget-info">
              <span className="stat-widget-val">{stats.bestPercentage}%</span>
              <span className="stat-widget-lbl">Meilleur Score</span>
            </div>
          </div>
        </div>

        {hasHistory ? (
          <div className="dashboard-sections-grid">
            {/* Colonne Gauche : Catégories les plus travaillées */}
            <div className="card dashboard-category-card">
              <div className="card-header-simple">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Layers size={20} color="var(--color-primary)" />
                  <h3 style={{ margin: 0 }}>Catégories les plus travaillées</h3>
                </div>
                <span className="badge badge-purple">{stats.topCategories.length} catégories</span>
              </div>

              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Répartition des quiz complétés selon chaque domaine thématique.
              </p>

              <div className="category-progress-list">
                {stats.topCategories.map((cat, idx) => (
                  <div key={idx} className="category-progress-item">
                    <div className="category-progress-header">
                      <span className="category-name-text">{cat.name}</span>
                      <span className="category-count-text">
                        <strong>{cat.count}</strong> quiz ({cat.percentageOfTotal}%)
                      </span>
                    </div>
                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: `${cat.percentageOfTotal}%`,
                          background: idx === 0
                            ? 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)'
                            : 'linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne Droite : Bilan Général & Temps Cumulé */}
            <div className="card dashboard-overview-card">
              <div className="card-header-simple">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Trophy size={20} color="var(--color-secondary)" />
                  <h3 style={{ margin: 0 }}>Bilan Global de Maîtrise</h3>
                </div>
              </div>

              <div className="overall-badge-box text-center" style={{ backgroundColor: `${overallAppreciation.color}15`, borderColor: `${overallAppreciation.color}35` }}>
                <span className="overall-level-title" style={{ color: overallAppreciation.color }}>
                  {overallAppreciation.level}
                </span>
                <p style={{ margin: '0.35rem 0 0 0', color: 'var(--text-body)', fontSize: '0.95rem' }}>
                  {overallAppreciation.message}
                </p>
              </div>

              <div className="dashboard-meta-list">
                <div className="meta-list-row">
                  <span className="meta-row-lbl">
                    <Clock size={16} /> Temps total d’entraînement
                  </span>
                  <span className="meta-row-val">{formatDurationReadable(stats.totalTimeSpent)}</span>
                </div>
                <div className="meta-list-row">
                  <span className="meta-row-lbl">
                    <Target size={16} /> Questions répondues
                  </span>
                  <span className="meta-row-val">{stats.totalQuestionsAnswered}</span>
                </div>
                <div className="meta-list-row">
                  <span className="meta-row-lbl">
                    <CheckCircle2 size={16} /> Précision des réponses
                  </span>
                  <span className="meta-row-val">
                    {stats.totalQuestionsAnswered > 0
                      ? `${Math.round((stats.totalCorrectAnswers / stats.totalQuestionsAnswered) * 100)}%`
                      : '0%'}
                  </span>
                </div>
              </div>

              <Link to="/history" className="btn btn-outline" style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }}>
                <span>Consulter l'historique complet</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="card text-center empty-state-box" style={{ marginTop: '2rem' }}>
            <div className="empty-state-icon">
              <BarChart2 size={42} />
            </div>
            <h2>Aucune statistique à afficher</h2>
            <p className="text-muted" style={{ maxWidth: '520px', margin: '0 auto 2rem auto' }}>
              Complétez au moins un questionnaire pour que vos statistiques, moyennes et graphiques de progression se calculent automatiquement.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/categories" className="btn btn-primary btn-lg">
                <Play size={18} fill="currentColor" />
                <span>Passer mon premier quiz</span>
              </Link>
              <button type="button" className="btn btn-secondary btn-lg" onClick={handleSeedDemo}>
                <Sparkles size={18} />
                <span>Charger des données de démonstration</span>
              </button>
            </div>
          </div>
        )}

        {/* Section Dernières Activités */}
        {recentResults.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <div className="section-header">
              <h2 className="section-title">Dernières Activités</h2>
              <Link to="/history" className="btn btn-outline btn-sm">
                <span>Voir tout l'historique</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid-cards-2">
              {recentResults.map(item => (
                <div key={item.id} className="card dashboard-recent-item">
                  <div style={{ flex: 1 }}>
                    <span className="badge badge-purple" style={{ marginBottom: '0.25rem' }}>
                      {item.categoryName}
                    </span>
                    <h4 style={{ margin: '0.25rem 0' }}>{item.quizTitle}</h4>
                    <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                      {formatDateFR(item.date)} • {formatDurationReadable(item.timeSpent)}
                    </span>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', display: 'block' }}>
                      {item.percentage}%
                    </span>
                    <Link to={`/results/${item.id}`} className="btn btn-sm btn-secondary" style={{ marginTop: '0.4rem' }}>
                      Bilan
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
