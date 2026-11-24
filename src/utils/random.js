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
 * Génère une épreuve de quiz unique et aléatoire :
 * 1. Sélectionne le vivier de questions disponibles (par quiz ou catégorie/difficulté).
 * 2. Pioche aléatoirement le nombre exact de questions requis (ex: 5 pour facile, 10 pour moyen, 20 pour difficile).
 * 3. Mélange les 4 propositions de chaque question pour éviter tout apprentissage de position.
 * 
 * @param {Object} quiz Définition du quiz
 * @param {Array} allAvailableQuestions Vivier de questions
 * @returns {Array} Liste des questions aléatoires et mélangées pour la session
 */
export const buildRandomizedQuiz = (quiz, allAvailableQuestions = []) => {
  if (!allAvailableQuestions || allAvailableQuestions.length === 0) return [];

  // Filtrer par quizId ou par categoryId
  let pool = allAvailableQuestions.filter(q => q.quizId === quiz.id);

  // Si le vivier spécifique est inférieur au nombre demandé, élargir à la catégorie et difficulté
  if (pool.length < quiz.questionCount) {
    const categoryPool = allAvailableQuestions.filter(q =>
      q.categoryId === quiz.categoryId &&
      (!q.difficulty || q.difficulty === quiz.difficulty)
    );
    // Fusionner sans doublons d'ID
    const seenIds = new Set(pool.map(q => q.id));
    categoryPool.forEach(q => {
      if (!seenIds.has(q.id)) {
        pool.push(q);
        seenIds.add(q.id);
      }
    });

    // Si toujours insuffisant, prendre l'ensemble de la catégorie
    if (pool.length < quiz.questionCount) {
      allAvailableQuestions
        .filter(q => q.categoryId === quiz.categoryId)
        .forEach(q => {
          if (!seenIds.has(q.id)) {
            pool.push(q);
            seenIds.add(q.id);
          }
        });
    }
  }

  // Mélanger le pool de questions
  const shuffledPool = shuffleArray(pool);

  // Prendre exactement le nombre de questions imposé
  const selectedCount = Math.min(quiz.questionCount || 5, shuffledPool.length);
  const pickedQuestions = shuffledPool.slice(0, selectedCount);

  // Mélanger les 4 propositions de chaque question sélectionnée
  return pickedQuestions.map(q => shuffleQuestionOptions(q));
};
