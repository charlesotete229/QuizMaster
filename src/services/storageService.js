/**
 * QuizMaster - Service de Persistance LocalStorage
 * Centralise toutes les opérations de stockage local :
 * - Sauvegarde des résultats de quiz
 * - Historique complet
 * - Suppression individuelle et totale
 * - Calcul des statistiques pour le tableau de bord
 * - Injection de données de démonstration pour évaluation
 */

const STORAGE_KEYS = {
  RESULTS: 'quizmaster_results',
  ACTIVE_SESSION: 'quizmaster_active_session'
};

export const storageService = {
  /**
   * Récupère l'ensemble des résultats de quiz enregistrés
   * @returns {Array} Liste des résultats triés du plus récent au plus ancien
   */
  getQuizResults() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RESULTS);
      if (!data) return [];
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error('Erreur lors de la lecture du LocalStorage:', error);
      return [];
    }
  },

  /**
   * Sauvegarde le résultat d'un quiz
   * @param {Object} resultData Données du résultat
   * @returns {Object} Le résultat sauvegardé avec son ID unique
   */
  saveQuizResult(resultData) {
    try {
      const existing = this.getQuizResults();
      const newResult = {
        id: resultData.id || `res_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        quizId: resultData.quizId,
        quizTitle: resultData.quizTitle,
        categoryId: resultData.categoryId,
        categoryName: resultData.categoryName,
        score: resultData.score,
        totalQuestions: resultData.totalQuestions,
        wrongAnswers: resultData.wrongAnswers,
        percentage: resultData.percentage,
        timeSpent: resultData.timeSpent, // en secondes
        date: resultData.date || new Date().toISOString(),
        level: resultData.level,
        userAnswers: resultData.userAnswers || {}, // { [questionId]: 'A' }
        questions: resultData.questions || [] // Instantané des questions et options mélangées de cette session
      };

      const updated = [newResult, ...existing];
      localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(updated));
      return newResult;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du résultat:', error);
      throw error;
    }
  },

  /**
   * Récupère un résultat spécifique par son identifiant unique
   * @param {string} resultId
   * @returns {Object|null}
   */
  getQuizResultById(resultId) {
    const results = this.getQuizResults();
    return results.find(r => r.id === resultId) || null;
  },

  /**
   * Supprime un résultat par son identifiant
   * @param {string} resultId
   * @returns {boolean} Succès de la suppression
   */
  deleteQuizResult(resultId) {
    try {
      const results = this.getQuizResults();
      const filtered = results.filter(r => r.id !== resultId);
      localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Erreur lors de la suppression du résultat:', error);
      return false;
    }
  },

  /**
   * Supprime l'intégralité de l'historique
   */
  clearHistory() {
    try {
      localStorage.removeItem(STORAGE_KEYS.RESULTS);
      return true;
    } catch (error) {
      console.error('Erreur lors de la réinitialisation de l’historique:', error);
      return false;
    }
  },

  /**
   * Injecte des données de démonstration réalistes pour tester et évaluer l'application
   */
  seedDemoData() {
    const demoResults = [
      {
        id: 'res_demo_1',
        quizId: 'info-js-bases',
        quizTitle: 'JavaScript & Écosystème Web',
        categoryId: 'informatique',
        categoryName: 'Informatique & Web',
        score: 5,
        totalQuestions: 5,
        wrongAnswers: 0,
        percentage: 100,
        timeSpent: 145,
        date: new Date(Date.now() - 3600000 * 2).toISOString(),
        level: 'Excellent',
        userAnswers: { 'js-1': 'B', 'js-2': 'C', 'js-3': 'C', 'js-4': 'A', 'js-5': 'B' }
      },
      {
        id: 'res_demo_2',
        quizId: 'culture-essentiels',
        quizTitle: 'Les Incontournables de la Culture Générale',
        categoryId: 'culture-generale',
        categoryName: 'Culture Générale',
        score: 4,
        totalQuestions: 5,
        wrongAnswers: 1,
        percentage: 80,
        timeSpent: 210,
        date: new Date(Date.now() - 3600000 * 24).toISOString(),
        level: 'Très bien',
        userAnswers: { 'cult-1': 'B', 'cult-2': 'B', 'cult-3': 'C', 'cult-4': 'B', 'cult-5': 'A' }
      },
      {
        id: 'res_demo_3',
        quizId: 'geo-capitales-monde',
        quizTitle: 'Capitales & Pays du Monde',
        categoryId: 'geographie',
        categoryName: 'Géographie Mondiale',
        score: 3,
        totalQuestions: 5,
        wrongAnswers: 2,
        percentage: 60,
        timeSpent: 180,
        date: new Date(Date.now() - 3600000 * 48).toISOString(),
        level: 'Encourageant',
        userAnswers: { 'geo-cap-1': 'C', 'geo-cap-2': 'C', 'geo-cap-3': 'A', 'geo-cap-4': 'C', 'geo-cap-5': 'A' }
      }
    ];

    try {
      localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(demoResults));
      return demoResults;
    } catch (e) {
      console.error('Erreur seed demo data:', e);
      return [];
    }
  },

  /**
   * Calcule les statistiques globales pour le tableau de bord
   * - Total de quiz réalisés
   * - Total de bonnes réponses
   * - Taux moyen de réussite (%)
   * - Meilleur score (%)
   * - Catégories les plus travaillées
   */
  getUserStats() {
    const results = this.getQuizResults();

    if (results.length === 0) {
      return {
        totalQuizzes: 0,
        totalCorrectAnswers: 0,
        totalQuestionsAnswered: 0,
        averagePercentage: 0,
        bestPercentage: 0,
        totalTimeSpent: 0,
        topCategories: []
      };
    }

    const totalQuizzes = results.length;
    let totalCorrectAnswers = 0;
    let totalQuestionsAnswered = 0;
    let sumPercentages = 0;
    let bestPercentage = 0;
    let totalTimeSpent = 0;
    const categoryCounts = {};

    results.forEach(res => {
      totalCorrectAnswers += Number(res.score) || 0;
      totalQuestionsAnswered += Number(res.totalQuestions) || 0;
      const pct = Number(res.percentage) || 0;
      sumPercentages += pct;
      if (pct > bestPercentage) bestPercentage = pct;
      totalTimeSpent += Number(res.timeSpent) || 0;

      const catName = res.categoryName || res.categoryId || 'Inconnue';
      categoryCounts[catName] = (categoryCounts[catName] || 0) + 1;
    });

    const averagePercentage = Math.round(sumPercentages / totalQuizzes);

    // Trier les catégories les plus travaillées
    const topCategories = Object.entries(categoryCounts)
      .map(([name, count]) => ({
        name,
        count,
        percentageOfTotal: Math.round((count / totalQuizzes) * 100)
      }))
      .sort((a, b) => b.count - a.count);

    return {
      totalQuizzes,
      totalCorrectAnswers,
      totalQuestionsAnswered,
      averagePercentage,
      bestPercentage,
      totalTimeSpent,
      topCategories
    };
  }
};
