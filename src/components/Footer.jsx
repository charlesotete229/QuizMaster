import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Sparkles, BookOpen, BarChart3, Award } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Colonne Marque */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <Brain size={22} />
            </div>
            <span className="footer-brand-name">
              Quiz<span className="brand-accent">Master</span>
            </span>
          </div>
          <p className="footer-desc">
            Plateforme web interactive et moderne conçue pour tester, développer et mesurer vos connaissances
            à travers des questionnaires immersifs et chronométrés.
          </p>
          <div className="footer-badge">
            <Sparkles size={14} color="var(--color-primary)" />
            <span>Frontend React & Vite</span>
          </div>
        </div>

        {/* Colonne Navigation */}
        <div className="footer-col">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/categories">Toutes les catégories</Link></li>
            <li><Link to="/history">Historique des résultats</Link></li>
            <li><Link to="/dashboard">Tableau de bord statistique</Link></li>
          </ul>
        </div>

        {/* Colonne Catégories phares */}
        <div className="footer-col">
          <h4 className="footer-title">Disciplines</h4>
          <ul className="footer-links">
            <li><Link to="/categories/informatique">Informatique & Web</Link></li>
            <li><Link to="/categories/culture-generale">Culture Générale</Link></li>
            <li><Link to="/categories/sciences">Sciences & Nature</Link></li>
            <li><Link to="/categories/histoire">Histoire du Monde</Link></li>
            <li><Link to="/categories/mathematiques">Mathématiques</Link></li>
            <li><Link to="/categories/geographie">Géographie</Link></li>
          </ul>
        </div>

        {/* Colonne Objectifs & Architecture */}
        <div className="footer-col">
          <h4 className="footer-title">Architecture</h4>
          <p className="footer-text-sm">
            Architecture modulaire prête pour une intégration ultérieure avec un backend Python FastAPI et une base de données relationnelle.
          </p>
          <div className="footer-tags">
            <span className="tech-tag">React 19</span>
            <span className="tech-tag">Vite</span>
            <span className="tech-tag">LocalStorage</span>
            <span className="tech-tag">CSS3</span>
          </div>
        </div>
      </div>

      {/* Barre inférieure de copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} QuizMaster – Tous droits réservés.</p>
          <p className="footer-credit">
            Développé avec rigueur et passion pour l'apprentissage en ligne.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
