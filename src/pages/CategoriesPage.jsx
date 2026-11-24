import React, { useState, useMemo } from 'react';
import { Search, Layers, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { QUIZZES } from '../data/quizzes';
import CategoryCard from '../components/CategoryCard';

export const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrage réactif selon la saisie utilisateur
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return CATEGORIES;
    const term = searchTerm.toLowerCase();
    return CATEGORIES.filter(cat =>
      cat.name.toLowerCase().includes(term) ||
      cat.description.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="categories-page section-padding animate-fade-in">
      <div className="container">
        {/* En-tête de la page */}
        <div className="page-header text-center">
          <span className="badge badge-purple" style={{ marginBottom: '0.6rem' }}>
            <Sparkles size={14} /> Catalogue Officiel
          </span>
          <h1 className="page-title">Toutes les Catégories de Quiz</h1>
          <p className="page-subtitle">
            Explorez notre éventail de disciplines et testez vos connaissances dans le domaine de votre choix.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="search-bar-container">
          <div className="search-input-wrapper card">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Rechercher une catégorie (ex: Informatique, Histoire, Sciences...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => setSearchTerm('')}
              >
                Effacer
              </button>
            )}
          </div>
          <div className="search-results-count">
            <Layers size={16} />
            <span>{filteredCategories.length} {filteredCategories.length > 1 ? 'catégories trouvées' : 'catégorie trouvée'}</span>
          </div>
        </div>

        {/* Grille des catégories */}
        {filteredCategories.length > 0 ? (
          <div className="grid-cards-3">
            {filteredCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="card text-center" style={{ padding: '3.5rem 2rem' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 600 }}>
              Aucune catégorie ne correspond à « {searchTerm} »
            </p>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
              Essayez avec un autre mot-clé ou réinitialisez la recherche pour afficher toutes les catégories.
            </p>
            <button className="btn btn-primary" onClick={() => setSearchTerm('')}>
              Afficher toutes les catégories
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
