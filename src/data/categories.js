/**
 * QuizMaster - Définition des Catégories de Quiz
 * Structure prête pour migration vers une API FastAPI / PostgreSQL
 */

export const CATEGORIES = [
  {
    id: 'informatique',
    name: 'Informatique & Web',
    slug: 'informatique',
    icon: 'Code2',
    description: 'Algorithmique, langages de programmation, développement web et technologies numériques modernes.',
    color: '#6366f1',
    bgColor: '#eef2ff'
  },
  {
    id: 'culture-generale',
    name: 'Culture Générale',
    slug: 'culture-generale',
    icon: 'BrainCircuit',
    description: 'Arts, littérature, cinéma, actualités et connaissances encyclopédiques universelles.',
    color: '#8b5cf6',
    bgColor: '#f5f3ff'
  },
  {
    id: 'sciences',
    name: 'Sciences & Nature',
    slug: 'sciences',
    icon: 'Atom',
    description: 'Physique, chimie, astronomie, biologie et découvertes scientifiques fondamentales.',
    color: '#0ea5e9',
    bgColor: '#f0f9ff'
  },
  {
    id: 'histoire',
    name: 'Histoire du Monde',
    slug: 'histoire',
    icon: 'Landmark',
    description: 'Grandes civilisations, événements marquants, révolutions et figures historiques emblématiques.',
    color: '#f59e0b',
    bgColor: '#fffbeb'
  },
  {
    id: 'mathematiques',
    name: 'Mathématiques & Logique',
    slug: 'mathematiques',
    icon: 'Calculator',
    description: 'Calcul, énigmes logiques, probabilités, algèbre et raisonnement mathématique.',
    color: '#10b981',
    bgColor: '#ecfdf5'
  },
  {
    id: 'geographie',
    name: 'Géographie Mondiale',
    slug: 'geographie',
    icon: 'Globe2',
    description: 'Capitales, pays, reliefs, cours d’eau, drapeaux et merveilles naturelles de la Terre.',
    color: '#ec4899',
    bgColor: '#fdf2f8'
  }
];

export const getCategoryById = (id) => CATEGORIES.find(c => c.id === id);
