import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="container section-padding text-center animate-fade-in" style={{ maxWidth: '600px' }}>
      <div className="card" style={{ padding: '3.5rem 2rem' }}>
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
          <AlertCircle size={36} />
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--color-navy-900)' }}>404</h1>
        <h2>Page introuvable</h2>
        <p className="text-muted" style={{ margin: '1rem 0 2rem 0' }}>
          Oups ! La page que vous recherchez semble inexistante ou a été déplacée.
        </p>
        <Link to="/" className="btn btn-primary">
          <Home size={18} /> Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
