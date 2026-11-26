import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

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
      </div>

      {/* Barre inférieure de copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} QuizMaster – Tous droits réservés.</p>
          <p className="footer-credit">
            Développé avec passion pour l'apprentissage en ligne.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
