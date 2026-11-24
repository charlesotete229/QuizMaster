/**
 * QuizMaster - Fonctions Utilitaires & Formatage
 */

/**
 * Formate un temps exprimé en secondes en chaîne lisible MM:SS
 * @param {number} seconds
 * @returns {string} ex: "04:35"
 */
export const formatTimeMMSS = (seconds) => {
  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
    return '00:00';
  }
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Formate une durée en texte explicite (ex: "4 min 35 s")
 * @param {number} seconds
 * @returns {string}
 */
export const formatDurationReadable = (seconds) => {
  if (!seconds || seconds <= 0) return '0 s';
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) return `${secs} s`;
  if (secs === 0) return `${mins} min`;
  return `${mins} min ${secs} s`;
};

/**
 * Formate une date ISO en format français convivial
 * @param {string|Date} dateInput
 * @returns {string} ex: "24 nov. 2026 à 09:30"
 */
export const formatDateFR = (dateInput) => {
  if (!dateInput) return '-';
  try {
    const d = new Date(dateInput);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(d);
  } catch {
    return String(dateInput);
  }
};

/**
 * Détermine l'appréciation textuelle et le niveau selon le pourcentage de réussite
 * @param {number} percentage
 * @returns {{ level: string, message: string, color: string, badgeClass: string }}
 */
export const getScoreAppreciation = (percentage) => {
  if (percentage >= 90) {
    return {
      level: 'Excellent',
      message: 'Performance magistrale ! Vous maîtrisez parfaitement ce sujet.',
      color: '#10b981',
      badgeClass: 'badge-easy'
    };
  }
  if (percentage >= 70) {
    return {
      level: 'Très bien',
      message: 'Très bon résultat ! Vos connaissances sont solides.',
      color: '#6366f1',
      badgeClass: 'badge-purple'
    };
  }
  if (percentage >= 50) {
    return {
      level: 'Encourageant',
      message: 'Bonne base, mais certains points méritent d’être approfondis.',
      color: '#f59e0b',
      badgeClass: 'badge-medium'
    };
  }
  return {
    level: 'À retravailler',
    message: 'N’abandonnez pas ! Révisez la correction détaillée et retentez votre chance.',
    color: '#ef4444',
    badgeClass: 'badge-hard'
  };
};

/**
 * Retourne les classes et labels de difficulté pour les badges
 * @param {string} difficulty 'facile' | 'moyen' | 'difficile'
 */
export const getDifficultyMeta = (difficulty) => {
  switch ((difficulty || '').toLowerCase()) {
    case 'facile':
      return { label: 'Facile', badgeClass: 'badge-easy' };
    case 'moyen':
      return { label: 'Moyen', badgeClass: 'badge-medium' };
    case 'difficile':
      return { label: 'Difficile', badgeClass: 'badge-hard' };
    default:
      return { label: difficulty, badgeClass: 'badge-secondary' };
  }
};
