import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  BarChart3,
  BookOpen,
  Award,
  Zap,
  ShieldCheck,
  TrendingUp,
  Brain
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { QUIZZES } from '../data/quizzes';
import { QUESTIONS } from '../data/questions';
import CategoryCard from '../components/CategoryCard';
import { storageService } from '../services/storageService';

export const HomePage = () => {
  const totalCategories = CATEGORIES.length;
  const totalQuizzes = QUIZZES.length;
  const totalQuestions = QUESTIONS.length;
  const userStats = storageService.getUserStats();

  const platformAdvantages = [
    {
      icon: Clock,
      title: 'Défis Chronométrés',
      description: 'Chaque questionnaire intègre un compte à rebours précis pour stimuler vos réflexes sous pression de temps.',
      color: '#6366f1'
    },
    {
      icon: CheckCircle2,
      title: 'Correction Pédagogique',
      description: 'Accédez instantanément à une analyse détaillée de vos réponses avec des explications claires pour chaque question.',
      color: '#10b981'
    },
    {
      icon: BarChart3,
      title: 'Suivi des Performances',
      description: 'Un tableau de bord personnalisé enregistre vos scores, votre taux de réussite et vos catégories de prédilection.',
      color: '#8b5cf6'
    },
    {
      icon: BookOpen,
      title: 'Variété des Disciplines',
      description: 'De l’informatique aux sciences en passant par la géographie et l’histoire, diversifiez vos compétences à votre rythme.',
      color: '#0ea5e9'
    },
    {
      icon: Zap,
      title: 'Niveaux Progressifs',
      description: 'Progressez du niveau facile à moyen puis difficile pour évaluer rigoureusement la profondeur de votre maîtrise.',
      color: '#f59e0b'
    },
    {
      icon: ShieldCheck,
      title: '100% Autonome & Local',
      description: 'Toutes vos données restent privées et sauvegardées localement dans votre navigateur sans création de compte obligatoire.',
      color: '#ec4899'
    }
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* 1. Section Héro & Bienvenue */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge badge-purple hero-badge">
              <Sparkles size={14} /> Plateforme d’Apprentissage & de Quiz Interactifs
            </span>

            <h1 className="hero-title">
              Évaluez, apprenez et maîtrisez vos connaissances avec <span className="brand-accent">QuizMaster</span>
            </h1>

            <p className="hero-subtitle">
              Testez vos compétences dans 6 domaines essentiels, défiez le chronomètre,
              découvrez vos corrections détaillées et suivez votre évolution au fil des parties.
            </p>

            <div className="hero-cta-group">
              <Link to="/categories" className="btn btn-primary btn-lg">
                <span>Commencer un quiz</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/dashboard" className="btn btn-secondary btn-lg">
                <BarChart3 size={18} />
                <span>Mon tableau de bord</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section des Métriques Clés */}
      <section className="stats-banner-section">
        <div className="container">
          <div className="stats-grid card">
            <div className="stat-card">
              <div className="stat-icon-wrapper" style={{ backgroundColor: '#eef2ff', color: 'var(--color-primary)' }}>
                <Brain size={26} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{totalCategories}</span>
                <span className="stat-label">Catégories Majeures</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper" style={{ backgroundColor: '#f5f3ff', color: 'var(--color-secondary)' }}>
                <Award size={26} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{totalQuizzes}</span>
                <span className="stat-label">Quiz Disponibles</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper" style={{ backgroundColor: '#ecfdf5', color: 'var(--color-success)' }}>
                <CheckCircle2 size={26} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{totalQuestions}</span>
                <span className="stat-label">Questions Précises</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper" style={{ backgroundColor: '#fffbeb', color: 'var(--color-warning)' }}>
                <TrendingUp size={26} />
              </div>
              <div className="stat-info">
                <span className="stat-value">
                  {userStats.totalQuizzes > 0 ? `${userStats.averagePercentage}%` : '100%'}
                </span>
                <span className="stat-label">
                  {userStats.totalQuizzes > 0 ? 'Votre Moyenne' : 'Interactif'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Présentation des Catégories */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>Parcours thématiques</span>
              <h2 className="section-title">Explorez nos 6 Catégories</h2>
              <p className="section-subtitle">Sélectionnez une discipline et découvrez des questionnaires conçus pour tous les niveaux.</p>
            </div>
            <Link to="/categories" className="btn btn-outline">
              <span>Voir toutes les catégories</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-cards-3">
            {CATEGORIES.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section Les Avantages de la Plateforme */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="page-header text-center">
            <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>Pourquoi QuizMaster ?</span>
            <h2 className="page-title">Une Expérience d’Apprentissage Optimale</h2>
            <p className="page-subtitle">
              Une plateforme pensée pour les passionnés du savoir, alliant défi intellectuel, ergonomie et suivi personnalisé.
            </p>
          </div>

          <div className="grid-cards-3">
            {platformAdvantages.map((adv, index) => {
              const IconComp = adv.icon;
              return (
                <div key={index} className="advantage-card card">
                  <div className="advantage-icon" style={{ color: adv.color, backgroundColor: `${adv.color}15` }}>
                    <IconComp size={26} />
                  </div>
                  <h3 className="advantage-title">{adv.title}</h3>
                  <p className="advantage-desc">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Section d'Appel à l'action (CTA) */}
      <section className="section-padding cta-section">
        <div className="container">
          <div className="cta-box card">
            <div className="cta-content">
              <h2 className="cta-title">Prêt à tester votre savoir ?</h2>
              <p className="cta-subtitle">
                Choisissez votre premier quiz dès maintenant et mesurez vos compétences en conditions réelles.
              </p>
              <div className="cta-buttons">
                <Link to="/categories" className="btn btn-primary btn-lg">
                  <Sparkles size={18} />
                  <span>Commencer un quiz maintenant</span>
                </Link>
                <Link to="/history" className="btn btn-secondary btn-lg">
                  <span>Voir mon historique</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
