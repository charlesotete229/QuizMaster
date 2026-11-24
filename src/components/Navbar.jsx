import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Brain, Menu, X, Sparkles, BarChart2, History, LayoutGrid, Home } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Logo & Marque */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <div className="navbar-logo-icon">
            <Brain size={24} />
          </div>
          <span className="navbar-brand-name">
            Quiz<span className="brand-accent">Master</span>
          </span>
        </Link>

        {/* Liens Desktop */}
        <nav className="navbar-nav desktop-only">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            <Home size={18} />
            <span>Accueil</span>
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            <LayoutGrid size={18} />
            <span>Catégories</span>
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            <History size={18} />
            <span>Historique</span>
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            <BarChart2 size={18} />
            <span>Tableau de bord</span>
          </NavLink>
        </nav>

        {/* Bouton Action Desktop */}
        <div className="navbar-actions desktop-only">
          <Link to="/categories" className="btn btn-primary btn-sm">
            <Sparkles size={16} />
            <span>Lancer un Quiz</span>
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="mobile-menu-toggle mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Ouvrir le menu de navigation"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Tiroir Mobile */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-drawer animate-fade-in mobile-only">
          <nav className="navbar-mobile-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <Home size={20} />
              <span>Accueil</span>
            </NavLink>

            <NavLink
              to="/categories"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <LayoutGrid size={20} />
              <span>Catégories de quiz</span>
            </NavLink>

            <NavLink
              to="/history"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <History size={20} />
              <span>Historique des parties</span>
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <BarChart2 size={20} />
              <span>Tableau de bord personnel</span>
            </NavLink>

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
              <Link
                to="/categories"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={closeMobileMenu}
              >
                <Sparkles size={18} />
                <span>Choisir un Quiz</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
