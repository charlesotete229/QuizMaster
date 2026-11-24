/**
 * QuizMaster - Liste des Quiz disponibles
 * Structure calibrée par niveau :
 * - Niveau Facile : 5 questions (durée 5 min - 300 s)
 * - Niveau Moyen : 10 questions (durée 10 min - 600 s)
 * - Niveau Difficile : 20 questions (durée 20 min - 1200 s)
 */

export const QUIZZES = [
  // ==========================================
  // INFORMATIQUE & WEB
  // ==========================================
  {
    id: 'info-facile',
    categoryId: 'informatique',
    title: 'Initiation au Web & Fondamentaux du Code',
    description: 'HTML5, CSS3, notions de base en JavaScript et culture numérique générale pour débuter sereinement.',
    difficulty: 'facile',
    duration: 300, // 5 minutes
    questionCount: 5
  },
  {
    id: 'info-moyen',
    categoryId: 'informatique',
    title: 'JavaScript Moderne, DOM & Frameworks',
    description: 'ES6+, gestion asynchrone (Promises, async/await), manipulation du DOM, composants React et APIs web.',
    difficulty: 'moyen',
    duration: 600, // 10 minutes
    questionCount: 10
  },
  {
    id: 'info-difficile',
    categoryId: 'informatique',
    title: 'Architecture Logicielle, Algorithmique & Sécurité',
    description: 'Structures de données avancées, complexité Big-O, design patterns, protocoles réseau et cybersécurité.',
    difficulty: 'difficile',
    duration: 1200, // 20 minutes
    questionCount: 20
  },

  // ==========================================
  // CULTURE GÉNÉRALE
  // ==========================================
  {
    id: 'culture-facile',
    categoryId: 'culture-generale',
    title: 'Les Incontournables de la Culture Générale',
    description: 'Repères majeurs en beaux-arts, cinéma, mythologie, musique classique et littérature universelle.',
    difficulty: 'facile',
    duration: 300,
    questionCount: 5
  },
  {
    id: 'culture-moyen',
    categoryId: 'culture-generale',
    title: 'Grands Courants Artistiques & Littéraires',
    description: 'Chefs-d’œuvre de la Renaissance, siècle des Lumières, cinéma d’auteur, philosophie et mouvements d’avant-garde.',
    difficulty: 'moyen',
    duration: 600,
    questionCount: 10
  },
  {
    id: 'culture-difficile',
    categoryId: 'culture-generale',
    title: 'Encyclopédie & Érudition Universelle',
    description: 'Épreuves pointues sur l’histoire des idées, les prix Nobel, la musique savante, l’opéra et le patrimoine mondial.',
    difficulty: 'difficile',
    duration: 1200,
    questionCount: 20
  },

  // ==========================================
  // SCIENCES & NATURE
  // ==========================================
  {
    id: 'sci-facile',
    categoryId: 'sciences',
    title: 'Découvertes Scientifiques & Astronomie',
    description: 'Système solaire, grandes lois de la nature, écologie, faune, flore et inventions majeures.',
    difficulty: 'facile',
    duration: 300,
    questionCount: 5
  },
  {
    id: 'sci-moyen',
    categoryId: 'sciences',
    title: 'Physique-Chimie & Biologie Cellulaire',
    description: 'Tableau périodique, réactions chimiques, mécanique newtonienne, génétique et physiologie humaine.',
    difficulty: 'moyen',
    duration: 600,
    questionCount: 10
  },
  {
    id: 'sci-difficile',
    categoryId: 'sciences',
    title: 'Astrophysique & Sciences Fondamentales',
    description: 'Relativité générale, mécanique quantique, thermodynamique statistique, enzymologie et cosmologie.',
    difficulty: 'difficile',
    duration: 1200,
    questionCount: 20
  },

  // ==========================================
  // HISTOIRE DU MONDE
  // ==========================================
  {
    id: 'hist-facile',
    categoryId: 'histoire',
    title: 'Grandes Époques & Personnages Célèbres',
    description: 'Antiquité égyptienne, empereurs romains, rois emblématiques et dates fondatrices de l’histoire.',
    difficulty: 'facile',
    duration: 300,
    questionCount: 5
  },
  {
    id: 'hist-moyen',
    categoryId: 'histoire',
    title: 'Révolutions, Guerres & Temps Modernes',
    description: 'Grandes découvertes, Révolution française, guerres mondiales, guerre froide et décolonisation.',
    difficulty: 'moyen',
    duration: 600,
    questionCount: 10
  },
  {
    id: 'hist-difficile',
    categoryId: 'histoire',
    title: 'Chroniques Mondiales & Diplomatie',
    description: 'Traités internationaux, dynasties méconnues, crises géopolitiques complexes et tournants historiques cruciaux.',
    difficulty: 'difficile',
    duration: 1200,
    questionCount: 20
  },

  // ==========================================
  // MATHÉMATIQUES & LOGIQUE
  // ==========================================
  {
    id: 'math-facile',
    categoryId: 'mathematiques',
    title: 'Calcul Rapide & Suites Logiques',
    description: 'Opérations fondamentales, pourcentages, suites numériques simples et énigmes de déduction.',
    difficulty: 'facile',
    duration: 300,
    questionCount: 5
  },
  {
    id: 'math-moyen',
    categoryId: 'mathematiques',
    title: 'Algèbre, Géométrie & Probabilités',
    description: 'Théorèmes classiques (Pythagore, Thalès), équations du premier/second degré, aires et probabilités simples.',
    difficulty: 'moyen',
    duration: 600,
    questionCount: 10
  },
  {
    id: 'math-difficile',
    categoryId: 'mathematiques',
    title: 'Analyse, Logique Avancée & Combinatoire',
    description: 'Dérivées, intégrales, combinatoire, arithmétique modulaire, vecteurs et raisonnement déductif complexe.',
    difficulty: 'difficile',
    duration: 1200,
    questionCount: 20
  },

  // ==========================================
  // GÉOGRAPHIE MONDIALE
  // ==========================================
  {
    id: 'geo-facile',
    categoryId: 'geographie',
    title: 'Capitales, Pays & Continents',
    description: 'Les plus grandes capitales du monde, drapeaux célèbres, mers et localisation des nations.',
    difficulty: 'facile',
    duration: 300,
    questionCount: 5
  },
  {
    id: 'geo-moyen',
    categoryId: 'geographie',
    title: 'Reliefs, Fleuves & Climatologie',
    description: 'Chaînes montagneuses, fleuves géants, déserts arides, zones climatiques et fuseaux horaires.',
    difficulty: 'moyen',
    duration: 600,
    questionCount: 10
  },
  {
    id: 'geo-difficile',
    categoryId: 'geographie',
    title: 'Détroits Stratégiques, Enclaves & Records',
    description: 'Frontières insolites, records géographiques mondiaux, géopolitique des détroits et micro-États.',
    difficulty: 'difficile',
    duration: 1200,
    questionCount: 20
  }
];

export const getQuizzesByCategory = (categoryId) => QUIZZES.filter(q => q.categoryId === categoryId);
export const getQuizById = (id) => QUIZZES.find(q => q.id === id);
