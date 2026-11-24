import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  History,
  Trash2,
  BookOpen,
  RotateCcw,
  Sparkles,
  Calendar,
  Clock,
  Award,
  AlertTriangle,
  Play
} from 'lucide-react';
import { storageService } from '../services/storageService';
import { formatDateFR, formatDurationReadable, getScoreAppreciation } from '../utils/formatters';

export const HistoryPage = () => {
  const [results, setResults] = useState([]);
  const [showClearModal, setShowClearModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Charger les résultats depuis LocalStorage
  const loadHistory = () => {
    const data = storageService.getQuizResults();
    setResults(data);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  // Suppression d'un résultat individuel
  const handleDeleteItem = (id) => {
    storageService.deleteQuizResult(id);
    loadHistory();
    setItemToDelete(null);
  };

  // Suppression totale de l'historique
  const handleClearAll = () => {
    storageService.clearHistory();
    loadHistory();
    setShowClearModal(false);
  };

  // Chargement de données de démonstration
  const handleSeedDemo = () => {
    storageService.seedDemoData();
    loadHistory();
  };

  return (
    <div className="history-page section-padding animate-fade-in">
      <div className="container">
        {/* En-tête de la page */}
        <div className="section-header">
          <div>
            <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>
              Journal d’Apprentissage
            </span>
            <h1 className="page-title" style={{ margin: 0 }}>Historique des Résultats</h1>
            <p className="section-subtitle">
              Retrouvez l'ensemble de vos sessions passées, vos scores, vos temps et vos niveaux de réussite.
            </p>
          </div>

          {results.length > 0 && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => setShowClearModal(true)}
              >
                <Trash2 size={16} />
                <span>Effacer tout l’historique</span>
              </button>
            </div>
          )}
        </div>

        {/* Liste des résultats ou État vide */}
        {results.length > 0 ? (
          <div className="history-list">
            {results.map((item) => {
              const appreciation = getScoreAppreciation(item.percentage);

              return (
                <div key={item.id} className="card history-item-card">
                  <div className="history-item-top">
                    <div className="history-item-meta">
                      <span className="badge badge-purple" style={{ marginBottom: '0.4rem' }}>
                        {item.categoryName || item.categoryId}
                      </span>
                      <h3 className="history-item-title">{item.quizTitle}</h3>
                      <div className="history-item-submeta">
                        <span>
                          <Calendar size={14} /> {formatDateFR(item.date)}
                        </span>
                        <span>
                          <Clock size={14} /> {formatDurationReadable(item.timeSpent)}
                        </span>
                      </div>
                    </div>

                    <div className="history-item-score-group">
                      <div className="history-score-badge" style={{ color: appreciation.color, backgroundColor: `${appreciation.color}15` }}>
                        <span className="history-pct">{item.percentage}%</span>
                        <span className="history-ratio">{item.score} / {item.totalQuestions}</span>
                      </div>
                      <span className={`badge ${appreciation.badgeClass}`} style={{ alignSelf: 'center' }}>
                        {item.level || appreciation.level}
                      </span>
                    </div>
                  </div>

                  <div className="history-item-actions">
                    <Link to={`/results/${item.id}`} className="btn btn-outline btn-sm">
                      <Award size={15} />
                      <span>Bilan</span>
                    </Link>

                    <Link to={`/correction/${item.id}`} className="btn btn-primary btn-sm">
                      <BookOpen size={15} />
                      <span>Correction détaillée</span>
                    </Link>

                    <Link to={`/quiz/${item.quizId}`} className="btn btn-secondary btn-sm">
                      <RotateCcw size={15} />
                      <span>Rejouer</span>
                    </Link>

                    <button
                      type="button"
                      className="btn btn-sm btn-outline"
                      style={{ color: 'var(--color-error)', borderColor: 'var(--border-light)', marginLeft: 'auto' }}
                      onClick={() => setItemToDelete(item)}
                      title="Supprimer cette session"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="card text-center empty-state-box">
            <div className="empty-state-icon">
              <History size={42} />
            </div>
            <h2>Aucun historique enregistré</h2>
            <p className="text-muted" style={{ maxWidth: '520px', margin: '0 auto 2rem auto' }}>
              Vous n'avez pas encore réalisé de quiz sur QuizMaster. Lancez votre première session pour
              mesurer vos connaissances et voir apparaître vos résultats ici.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/categories" className="btn btn-primary btn-lg">
                <Play size={18} fill="currentColor" />
                <span>Commencer un quiz maintenant</span>
              </Link>
              <button type="button" className="btn btn-secondary btn-lg" onClick={handleSeedDemo}>
                <Sparkles size={18} />
                <span>Charger des données de démonstration</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modale de Confirmation : Effacer TOUT l'historique */}
      {showClearModal && (
        <div className="modal-backdrop animate-fade-in">
          <div className="modal-card card">
            <div className="modal-icon-wrapper" style={{ backgroundColor: 'var(--color-error-bg)', color: 'var(--color-error)' }}>
              <AlertTriangle size={30} />
            </div>
            <h3 className="modal-title">Effacer tout l'historique ?</h3>
            <p className="modal-text">
              Cette action supprimera définitivement tous vos scores enregistrés et vos statistiques dans le navigateur.
            </p>
            <div className="modal-buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowClearModal(false)}
              >
                Annuler
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClearAll}
              >
                Oui, tout supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modale de Confirmation : Supprimer UN résultat */}
      {itemToDelete && (
        <div className="modal-backdrop animate-fade-in">
          <div className="modal-card card">
            <div className="modal-icon-wrapper" style={{ backgroundColor: 'var(--color-error-bg)', color: 'var(--color-error)' }}>
              <Trash2 size={28} />
            </div>
            <h3 className="modal-title">Supprimer cette session ?</h3>
            <p className="modal-text">
              Voulez-vous supprimer le résultat pour le quiz <strong>« {itemToDelete.quizTitle} »</strong> ?
            </p>
            <div className="modal-buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setItemToDelete(null)}
              >
                Annuler
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteItem(itemToDelete.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
