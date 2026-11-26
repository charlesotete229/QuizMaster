/**
 * QuizMaster - Utilitaire de Tirage et de Mélange Aléatoire (Fisher-Yates)
 * Permet de générer des épreuves dynamiques, non répétitives et imprévisibles.
 */

/**
 * Mélange un tableau de façon aléatoire selon l'algorithme de Fisher-Yates (Knuth)
 * @param {Array} array Tableau d'origine
 * @returns {Array} Nouveau tableau mélangé (copie superficielle)
 */
export const shuffleArray = (array) => {
  if (!Array.isArray(array)) return [];
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Mélange aléatoirement les 4 propositions d'une question
 * et réassigne proprement les lettres A, B, C, D ainsi que la clé correctAnswer.
 * @param {Object} question Question d'origine
 * @returns {Object} Nouvelle question avec propositions mélangées et correctAnswer mis à jour
 */
export const shuffleQuestionOptions = (question) => {
  if (!question || !Array.isArray(question.options)) return question;

  // Trouver le texte de la bonne réponse
  const rightOption = question.options.find(opt => opt.id === question.correctAnswer);
  const rightText = rightOption ? rightOption.text : null;

  // Mélanger les propositions
  const shuffledRawOptions = shuffleArray(question.options);

  // Réassigner les lettres standards A, B, C, D
  const letters = ['A', 'B', 'C', 'D'];
  let newCorrectAnswer = 'A';

  const newOptions = shuffledRawOptions.slice(0, 4).map((opt, index) => {
    const letter = letters[index] || opt.id;
    if (opt.text === rightText) {
      newCorrectAnswer = letter;
    }
    return {
      id: letter,
      text: opt.text
    };
  });

  return {
    ...question,
    options: newOptions,
    correctAnswer: newCorrectAnswer
  };
};

/**
 * Génère une épreuve de quiz unique, aléatoire et à rotation intelligente :
 * 1. Détermine le vivier de questions de la catégorie et du niveau demandé.
 * 2. Partitionne le vivier en deux groupes :
 *    - Questions fraîches (non vues lors des dernières sessions)
 *    - Questions déjà vues récemment
 * 3. Pioche en priorité absolue dans les questions fraîches pour éviter toute répétition.
 *    Si le vivier frais est épuisé, complète avec les questions les plus anciennes.
 * 4. Mélange les 4 propositions de chaque question pour une expérience inédite.
 * 
 * @param {Object} quiz Définition du quiz
 * @param {Array} allAvailableQuestions Vivier global de questions
 * @param {Set|Array} [recentlySeenIds] Identifiants des questions vues récemment
 * @returns {Array} Liste des questions aléatoires et mélangées pour la session
 */
export const buildRandomizedQuiz = (quiz, allAvailableQuestions = [], recentlySeenIds = new Set()) => {
  if (!allAvailableQuestions || allAvailableQuestions.length === 0) return [];

  const seenSet = recentlySeenIds instanceof Set ? recentlySeenIds : new Set(recentlySeenIds || []);

  // Ne jamais compléter avec des questions d’un autre niveau.
  const pool = allAvailableQuestions.filter(q =>
    q.categoryId === quiz.categoryId && q.difficulty === quiz.difficulty
  );

  // 2. Partitionner entre questions fraîches (inédites) et déjà vues récemment
  const freshQuestions = [];
  const seenQuestions = [];

  pool.forEach(q => {
    if (seenSet.has(q.id)) {
      seenQuestions.push(q);
    } else {
      freshQuestions.push(q);
    }
  });

  // Mélanger chaque sous-groupe indépendamment
  const shuffledFresh = shuffleArray(freshQuestions);
  const shuffledSeen = shuffleArray(seenQuestions);

  // 3. Sélection prioritaire des questions fraîches
  const neededCount = Math.min(quiz.questionCount || 5, pool.length);
  let pickedQuestions = [];

  if (shuffledFresh.length >= neededCount) {
    // Vivier frais suffisant : 100% de questions inédites !
    pickedQuestions = shuffledFresh.slice(0, neededCount);
  } else {
    // Si le vivier frais est inférieur au besoin : prendre toutes les fraîches + compléter avec les vues
    pickedQuestions = [
      ...shuffledFresh,
      ...shuffledSeen.slice(0, neededCount - shuffledFresh.length)
    ];
  }

  // 4. Mélanger l'ordre d'apparition final des questions
  const finalOrderedQuestions = shuffleArray(pickedQuestions);

  // 5. Mélanger les 4 propositions de chaque question
  return finalOrderedQuestions.map(q => shuffleQuestionOptions(q));
};
