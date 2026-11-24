import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, HelpCircle, ArrowRight, Play } from 'lucide-react';
import { formatDurationReadable, getDifficultyMeta } from '../utils/formatters';
import { getCategoryById } from '../data/categories';

export const QuizCard = ({ quiz }) => {
  const category = getCategoryById(quiz.categoryId);
  const difficultyMeta = getDifficultyMeta(quiz.difficulty);

  return (
    <div className="card quiz-card card-interactive">
      <div className="quiz-card-header">
        {category && (
          <span
            className="quiz-category-tag"
            style={{
              backgroundColor: category.bgColor || '#f1f5f9',
              color: category.color || 'var(--color-navy-800)'
            }}
          >
            {category.name}
          </span>
        )}
        <span className={`badge ${difficultyMeta.badgeClass}`}>
          {difficultyMeta.label}
        </span>
      </div>

      <div className="quiz-card-body">
        <h3 className="quiz-title">{quiz.title}</h3>
        <p className="quiz-desc">{quiz.description}</p>
      </div>

      <div className="quiz-meta-row">
        <div className="quiz-meta-item">
          <HelpCircle size={15} />
          <span>{quiz.questionCount} questions</span>
        </div>
        <div className="quiz-meta-item">
          <Clock size={15} />
          <span>{formatDurationReadable(quiz.duration)}</span>
        </div>
      </div>

      <div className="quiz-card-footer">
        <Link to={`/quiz/${quiz.id}`} className="btn btn-primary quiz-start-btn">
          <span>Commencer</span>
          <Play size={15} fill="currentColor" />
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;
