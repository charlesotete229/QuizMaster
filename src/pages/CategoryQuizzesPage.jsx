import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter, Layers, BookOpen, AlertCircle } from 'lucide-react';
import { getCategoryById } from '../data/categories';
import { getQuizzesByCategory } from '../data/quizzes';
import QuizCard from '../components/QuizCard';
import DynamicIcon from '../components/DynamicIcon';

export const CategoryQuizzesPage = () => {
  const { id } = useParams();
  const category = getCategoryById(id);
  const allCategoryQuizzes = useMemo(() => getQuizzesByCategory(id), [id]);

  const [selectedDifficulty, setSelectedDifficulty] = useState('tous');

  // Filtrage selon le niveau de difficulté
  const filteredQuizzes = useMemo(() => {
    if (selectedDifficulty === 'tous') return allCategoryQuizzes;
    return allCategoryQuizzes.filter(q => q.difficulty.toLowerCase() === selectedDifficulty);
  }, [allCategoryQuizzes, selectedDifficulty]);

  if (!category) {
    return (
      <div className="container section-padding text-center">
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem 2rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-error-bg)',
            color: 'var(--color-error)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}>
            <AlertCircle size={32} />
          </div>
          <h2>Catégorie introuvable</h2>
          <p className="text-muted" style={{ margin: '1rem 0 2rem 0' }}>
            La catégorie demandée n'existe pas ou l'identifiant renseigné est invalide.
          </p>
          <Link to="/categories" className="btn btn-primary">
            <ArrowLeft size={16} /> Retour à toutes les catégories
          </Link>
        </div>
      </div>
    );
  }

  // Comptage par niveau de difficulté
  const countEasy = allCategoryQuizzes.filter(q => q.difficulty === 'facile').length;
  const countMedium = allCategoryQuizzes.filter(q => q.difficulty === 'moyen').length;
  const countHard = allCategoryQuizzes.filter(q => q.difficulty === 'difficile').length;

  return (
    <div className="category-quizzes-page section-padding animate-fade-in">
      <div className="container">
        {/* Fil d'Ariane & Retour */}
        <Link to="/categories" className="back-link">
          <ArrowLeft size={16} /> Retour aux catégories
        </Link>

        {/* Bannière de Catégorie Immersive */}
        <div
          className="category-banner card"
          style={{
            borderLeft: `6px solid ${category.color || 'var(--color-primary)'}`,
            marginBottom: '2.5rem'
          }}
        >
          <div className="category-banner-content">
            <div
              className="category-banner-icon"
              style={{
                backgroundColor: category.bgColor || '#eef2ff',
                color: category.color || 'var(--color-primary)'
              }}
            >
              <DynamicIcon name={category.icon} size={36} />
            </div>

            <div className="category-banner-text">
              <span className="badge badge-purple" style={{ marginBottom: '0.4rem' }}>
                Discipline Thématique
              </span>
              <h1 className="category-banner-title">{category.name}</h1>
              <p className="category-banner-desc">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Barre de Filtres de Difficulté */}
        <div className="filter-bar card">
          <div className="filter-label">
            <Filter size={16} />
            <span>Filtrer par difficulté :</span>
          </div>

          <div className="filter-tabs">
            <button
              className={`filter-tab ${selectedDifficulty === 'tous' ? 'active' : ''}`}
              onClick={() => setSelectedDifficulty('tous')}
            >
              Tous ({allCategoryQuizzes.length})
            </button>
            <button
              className={`filter-tab ${selectedDifficulty === 'facile' ? 'active' : ''}`}
              onClick={() => setSelectedDifficulty('facile')}
            >
              Facile ({countEasy})
            </button>
            <button
              className={`filter-tab ${selectedDifficulty === 'moyen' ? 'active' : ''}`}
              onClick={() => setSelectedDifficulty('moyen')}
            >
              Moyen ({countMedium})
            </button>
            {countHard > 0 && (
              <button
                className={`filter-tab ${selectedDifficulty === 'difficile' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('difficile')}
              >
                Difficile ({countHard})
              </button>
            )}
          </div>
        </div>

        {/* Titre et Nombre de quiz affichés */}
        <div className="section-header">
          <div>
            <h2 className="section-title">
              {selectedDifficulty === 'tous'
                ? `Tous les quiz disponibles (${filteredQuizzes.length})`
                : `Quiz de niveau ${selectedDifficulty} (${filteredQuizzes.length})`}
            </h2>
            <p className="section-subtitle">
              Sélectionnez un questionnaire pour lancer le chronomètre et débuter le test.
            </p>
          </div>
        </div>

        {/* Grille des Quiz de la Catégorie */}
        {filteredQuizzes.length > 0 ? (
          <div className="grid-cards-2">
            {filteredQuizzes.map(quiz => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        ) : (
          <div className="card text-center" style={{ padding: '3rem 2rem' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: 600 }}>
              Aucun quiz disponible pour ce niveau de difficulté dans cette catégorie.
            </p>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
              Choisissez un autre niveau de difficulté ou réinitialisez le filtre.
            </p>
            <button className="btn btn-primary" onClick={() => setSelectedDifficulty('tous')}>
              Afficher tous les quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryQuizzesPage;
