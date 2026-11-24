import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Layers } from 'lucide-react';
import DynamicIcon from './DynamicIcon';
import { getQuizzesByCategory } from '../data/quizzes';

export const CategoryCard = ({ category }) => {
  const quizzes = getQuizzesByCategory(category.id);
  const quizCount = quizzes.length;

  return (
    <div className="card category-card card-interactive">
      <div className="category-card-header">
        <div
          className="category-icon-wrapper"
          style={{
            backgroundColor: category.bgColor || '#eef2ff',
            color: category.color || 'var(--color-primary)'
          }}
        >
          <DynamicIcon name={category.icon} size={28} />
        </div>
        <span className="category-quiz-badge">
          <Layers size={13} />
          {quizCount} {quizCount > 1 ? 'quiz disponibles' : 'quiz disponible'}
        </span>
      </div>

      <div className="category-card-body">
        <h3 className="category-title">{category.name}</h3>
        <p className="category-desc">{category.description}</p>
      </div>

      <div className="category-card-footer">
        <Link
          to={`/categories/${category.id}`}
          className="btn btn-outline category-btn"
          style={{
            borderColor: category.color || 'var(--color-primary)',
            color: category.color || 'var(--color-primary)'
          }}
        >
          <span>Explorer les quiz</span>
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
