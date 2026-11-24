/**
 * QuizMaster - Banque Élargie de Questions
 * 150 questions réparties sur les 6 catégories et 3 niveaux de difficulté.
 * Utilisée pour composer des épreuves aléatoires inédites à chaque session :
 * - Niveau Facile : 5 questions tirées au sort
 * - Niveau Moyen : 10 questions tirées au sort
 * - Niveau Difficile : 20 questions tirées au sort
 */

export const QUESTIONS = [
  // =========================================================================
  // 1. INFORMATIQUE & WEB (25 questions)
  // =========================================================================
  {
    id: 'info-1',
    categoryId: 'informatique',
    difficulty: 'facile',
    question: 'Que signifie l’acronyme HTML en développement web ?',
    options: [
      { id: 'A', text: 'HyperText Markup Language' },
      { id: 'B', text: 'High Tech Modern Language' },
      { id: 'C', text: 'Hyperlinks and Text Manipulation Language' },
      { id: 'D', text: 'Home Tool Markup Language' }
    ],
    correctAnswer: 'A',
    explanation: 'HTML (HyperText Markup Language) est le langage de balisage standard conçu pour structurer et créer des pages web.'
  },
  {
    id: 'info-2',
    categoryId: 'informatique',
    difficulty: 'facile',
    question: 'Quelle balise HTML est utilisée pour insérer une image dans une page ?',
    options: [
      { id: 'A', text: '<picture-src>' },
      { id: 'B', text: '<img>' },
      { id: 'C', text: '<image>' },
      { id: 'D', text: '<src>' }
    ],
    correctAnswer: 'B',
    explanation: 'La balise auto-fermante <img> avec l’attribut src permet d’afficher une image dans un document HTML.'
  },
  {
    id: 'info-3',
    categoryId: 'informatique',
    difficulty: 'facile',
    question: 'En CSS, quelle propriété permet de modifier la couleur de fond d’un élément ?',
    options: [
      { id: 'A', text: 'color' },
      { id: 'B', text: 'bgcolor' },
      { id: 'C', text: 'background-color' },
      { id: 'D', text: 'surface-color' }
    ],
    correctAnswer: 'C',
    explanation: 'La propriété "background-color" spécifie la couleur de remplissage du fond d’un élément HTML.'
  },
  {
    id: 'info-4',
    categoryId: 'informatique',
    difficulty: 'facile',
    question: 'Quelle est la différence fondamentale entre les mots-clés "let" et "var" en JavaScript ?',
    options: [
      { id: 'A', text: '"var" a une portée de bloc, tandis que "let" a une portée de fonction.' },
      { id: 'B', text: '"let" a une portée de bloc, tandis que "var" a une portée de fonction.' },
      { id: 'C', text: '"let" rend la variable immuable et impossible à modifier.' },
      { id: 'D', text: 'Il n’existe aucune différence de comportement.' }
    ],
    correctAnswer: 'B',
    explanation: 'Depuis ES6, "let" respecte la portée de bloc ({...}), contrairement à "var" qui a une portée de fonction et subit le hissage (hoisting).'
  },
  {
    id: 'info-5',
    categoryId: 'informatique',
    difficulty: 'facile',
    question: 'Quelle commande Git initialise un nouveau dépôt local dans le dossier courant ?',
    options: [
      { id: 'A', text: 'git start' },
      { id: 'B', text: 'git create' },
      { id: 'C', text: 'git init' },
      { id: 'D', text: 'git clone' }
    ],
    correctAnswer: 'C',
    explanation: '"git init" crée un nouveau sous-dossier .git et initialise le répertoire de travail comme dépôt Git.'
  },
  {
    id: 'info-6',
    categoryId: 'informatique',
    difficulty: 'facile',
    question: 'Que renvoie l’expression typeof NaN en JavaScript standard ?',
    options: [
      { id: 'A', text: '"undefined"' },
      { id: 'B', text: '"nan"' },
      { id: 'C', text: '"number"' },
      { id: 'D', text: '"object"' }
    ],
    correctAnswer: 'C',
    explanation: 'NaN (Not a Number) est une valeur numérique spéciale définie par le standard IEEE 754, typeof NaN renvoie donc "number".'
  },
  {
    id: 'info-7',
    categoryId: 'informatique',
    difficulty: 'facile',
    question: 'Quel symbole représente l’égalité stricte (valeur ET type) en JavaScript ?',
    options: [
      { id: 'A', text: '==' },
      { id: 'B', text: '===' },
      { id: 'C', text: '=' },
      { id: 'D', text: 'eq' }
    ],
    correctAnswer: 'B',
    explanation: 'L’opérateur === vérifie à la fois l’égalité des valeurs et la correspondance exacte des types sans conversion implicite.'
  },
  {
    id: 'info-8',
    categoryId: 'informatique',
    difficulty: 'facile',
    question: 'Quelle méthode de tableau JavaScript renvoie un nouveau tableau transformé ?',
    options: [
      { id: 'A', text: 'Array.prototype.map()' },
      { id: 'B', text: 'Array.prototype.forEach()' },
      { id: 'C', text: 'Array.prototype.push()' },
      { id: 'D', text: 'Array.prototype.splice()' }
    ],
    correctAnswer: 'A',
    explanation: 'map() est une fonction pure qui génère et retourne un nouveau tableau sans muter le tableau initial.'
  },
  {
    id: 'info-9',
    categoryId: 'informatique',
    difficulty: 'moyen',
    question: 'Quel Hook React est spécifiquement conçu pour mémoriser le résultat d’un calcul coûteux ?',
    options: [
      { id: 'A', text: 'useCallback' },
      { id: 'B', text: 'useMemo' },
      { id: 'C', text: 'useEffect' },
      { id: 'D', text: 'useRef' }
    ],
    correctAnswer: 'B',
    explanation: 'useMemo mémorise une valeur calculée et ne la recalcule que si l’une de ses dépendances a changé.'
  },
  {
    id: 'info-10',
    categoryId: 'informatique',
    difficulty: 'moyen',
    question: 'Pourquoi ne faut-il pas muter directement l’état dans React (ex: state.count = 5) ?',
    options: [
      { id: 'A', text: 'Parce que cela bloque le moteur JavaScript.' },
      { id: 'B', text: 'Car React ne détecte pas le changement par référence et ne déclenche aucun re-render.' },
      { id: 'C', text: 'Car le DOM est immédiatement supprimé.' },
      { id: 'D', text: 'Parce que le navigateur déclenche une erreur réseau.' }
    ],
    correctAnswer: 'B',
    explanation: 'React utilise la comparaison par référence. Muter l’état directement empêche la détection des changements et la réconciliation.'
  },
  {
    id: 'info-11',
    categoryId: 'informatique',
    difficulty: 'moyen',
    question: 'Que retourne la fonction de nettoyage (cleanup) renvoyée par useEffect ?',
    options: [
      { id: 'A', text: 'Une promesse résolue.' },
      { id: 'B', text: 'Une fonction exécutée avant le prochain effet ou lors du démontage du composant.' },
      { id: 'C', text: 'Un objet JSON.' },
      { id: 'D', text: 'L’état initial du composant.' }
    ],
    correctAnswer: 'B',
    explanation: 'La fonction de nettoyage permet de désabonner les écouteurs, d’annuler les timers et d’éviter les fuites mémoire.'
  },
  {
    id: 'info-12',
    categoryId: 'informatique',
    difficulty: 'moyen',
    question: 'Quel code de statut HTTP indique une ressource non trouvée ?',
    options: [
      { id: 'A', text: '200 OK' },
      { id: 'B', text: '401 Unauthorized' },
      { id: 'C', text: '404 Not Found' },
      { id: 'D', text: '500 Internal Server Error' }
    ],
    correctAnswer: 'C',
    explanation: 'Le code HTTP 404 signale que le serveur n’a pas trouvé la ressource demandée à l’URL spécifiée.'
  },
  {
    id: 'info-13',
    categoryId: 'informatique',
    difficulty: 'moyen',
    question: 'En SQL, quelle clause permet de filtrer les résultats agrégés d’un GROUP BY ?',
    options: [
      { id: 'A', text: 'WHERE' },
      { id: 'B', text: 'HAVING' },
      { id: 'C', text: 'ORDER BY' },
      { id: 'D', text: 'FILTER' }
    ],
    correctAnswer: 'B',
    explanation: 'La clause HAVING filtre les groupes formés par GROUP BY, alors que WHERE filtre les lignes individuelles avant agrégation.'
  },
  {
    id: 'info-14',
    categoryId: 'informatique',
    difficulty: 'moyen',
    question: 'Qu’est-ce qu’une fermeture (closure) en JavaScript ?',
    options: [
      { id: 'A', text: 'Une balise HTML mal fermée.' },
      { id: 'B', text: 'Une fonction qui a accès aux variables de sa portée lexicale parente même après son exécution.' },
      { id: 'C', text: 'L’arrêt forcé d’un thread.' },
      { id: 'D', text: 'Une méthode de chiffrement SSL.' }
    ],
    correctAnswer: 'B',
    explanation: 'Une closure est une fonction liée à son environnement lexical, capable de mémoriser et d’accéder aux variables de sa portée parente.'
  },
  {
    id: 'info-15',
    categoryId: 'informatique',
    difficulty: 'moyen',
    question: 'Quelle est la fonction du Virtual DOM dans React ?',
    options: [
      { id: 'A', text: 'Remplacer complètement le navigateur web.' },
      { id: 'B', text: 'Calculer les différences en mémoire (diffing) pour appliquer les mutations minimales au DOM réel.' },
      { id: 'C', text: 'Chiffrer les requêtes HTTP.' },
      { id: 'D', text: 'Compiler le code en assembleur x86.' }
    ],
    correctAnswer: 'B',
    explanation: 'Le Virtual DOM optimise les performances en comparant les arbres en mémoire et en minimisant les écritures coûteuses dans le vrai DOM.'
  },
  {
    id: 'info-16',
    categoryId: 'informatique',
    difficulty: 'moyen',
    question: 'Quelle commande Git permet de fusionner une branche secondaire dans la branche active ?',
    options: [
      { id: 'A', text: 'git push' },
      { id: 'B', text: 'git merge' },
      { id: 'C', text: 'git branch --combine' },
      { id: 'D', text: 'git union' }
    ],
    correctAnswer: 'B',
    explanation: '"git merge <branche>" intègre l’historique et les commits de la branche spécifiée dans la branche actuellement extraite.'
  },
  {
    id: 'info-17',
    categoryId: 'informatique',
    difficulty: 'difficile',
    question: 'Quelle est la complexité temporelle moyenne d’une recherche par dichotomie (Binary Search) ?',
    options: [
      { id: 'A', text: 'O(1)' },
      { id: 'B', text: 'O(log n)' },
      { id: 'C', text: 'O(n)' },
      { id: 'D', text: 'O(n log n)' }
    ],
    correctAnswer: 'B',
    explanation: 'En divisant l’espace de recherche par deux à chaque étape, la dichotomie s’exécute en temps logarithmique O(log n).'
  },
  {
    id: 'info-18',
    categoryId: 'informatique',
    difficulty: 'difficile',
    question: 'Quelle structure de données repose sur le principe LIFO (Last In, First Out) ?',
    options: [
      { id: 'A', text: 'File (Queue)' },
      { id: 'B', text: 'Pile (Stack)' },
      { id: 'C', text: 'Table de hachage' },
      { id: 'D', text: 'Arbre binaire' }
    ],
    correctAnswer: 'B',
    explanation: 'Une pile (Stack) insère et retire les données par son sommet : le dernier élément ajouté est le premier extrait (LIFO).'
  },
  {
    id: 'info-19',
    categoryId: 'informatique',
    difficulty: 'difficile',
    question: 'Quel algorithme de tri garantit une complexité au pire des cas en O(n log n) ?',
    options: [
      { id: 'A', text: 'Tri à bulles (Bubble Sort)' },
      { id: 'B', text: 'Tri fusion (Merge Sort)' },
      { id: 'C', text: 'Tri rapide naïf (Quick Sort)' },
      { id: 'D', text: 'Tri par sélection' }
    ],
    correctAnswer: 'B',
    explanation: 'Le tri fusion divise systématiquement le tableau en deux et fusionne les sous-tableaux triés, garantissant O(n log n) en toutes circonstances.'
  },
  {
    id: 'info-20',
    categoryId: 'informatique',
    difficulty: 'difficile',
    question: 'En cybersécurité, qu’est-ce qu’une attaque par injection SQL ?',
    options: [
      { id: 'A', text: 'Une surchauffe physique du processeur.' },
      { id: 'B', text: 'L’insertion malveillante de fragments SQL dans un champ utilisateur pour altérer les requêtes de la base de données.' },
      { id: 'C', text: 'Le vol de mot de passe par écoute passive du Wi-Fi.' },
      { id: 'D', text: 'Une attaque par déni de service distribué (DDoS).' }
    ],
    correctAnswer: 'B',
    explanation: 'L’injection SQL exploite des entrées utilisateur non échappées ou non paramétrées pour exécuter des commandes arbitraires sur la base.'
  },
  {
    id: 'info-21',
    categoryId: 'informatique',
    difficulty: 'difficile',
    question: 'Quel principe SOLID stipule qu’une entité logicielle doit être ouverte à l’extension mais fermée à la modification ?',
    options: [
      { id: 'A', text: 'Single Responsibility Principle' },
      { id: 'B', text: 'Open/Closed Principle' },
      { id: 'C', text: 'Liskov Substitution Principle' },
      { id: 'D', text: 'Dependency Inversion Principle' }
    ],
    correctAnswer: 'B',
    explanation: 'Le principe Ouvert/Fermé (Open/Closed) invite à concevoir des modules extensibles (via héritage/polymorphisme) sans modifier le code source existant.'
  },
  {
    id: 'info-22',
    categoryId: 'informatique',
    difficulty: 'difficile',
    question: 'Comment fonctionne l’Event Loop (boucle d’événements) de Node.js et du moteur V8 ?',
    options: [
      { id: 'A', text: 'Elle crée un thread natif pour chaque ligne de code JavaScript.' },
      { id: 'B', text: 'Elle traite la pile d’appels synchrone (Call Stack) puis dépile les microtâches (Promises) avant les macrotâches (setTimeout).' },
      { id: 'C', text: 'Elle redémarre le système d’exploitation en continu.' },
      { id: 'D', text: 'Elle désactive le garbage collector lors des requêtes HTTP.' }
    ],
    correctAnswer: 'B',
    explanation: 'L’Event Loop ordonnance l’exécution asynchrone non-bloquante : la Call Stack est vidée, puis la microtask queue est prioritaire sur les timers et I/O.'
  },
  {
    id: 'info-23',
    categoryId: 'informatique',
    difficulty: 'difficile',
    question: 'Quelle est la complexité d’accès moyenne à une valeur dans une table de hachage bien équilibrée ?',
    options: [
      { id: 'A', text: 'O(1)' },
      { id: 'B', text: 'O(log n)' },
      { id: 'C', text: 'O(n)' },
      { id: 'D', text: 'O(n²)' }
    ],
    correctAnswer: 'A',
    explanation: 'Grâce au calcul direct de l’index via la fonction de hachage, l’accès s’effectue en temps constant moyen O(1).'
  },
  {
    id: 'info-24',
    categoryId: 'informatique',
    difficulty: 'difficile',
    question: 'Qu’est-ce qu’un jeton JWT (JSON Web Token) et de combien de parties est-il composé ?',
    options: [
      { id: 'A', text: '2 parties : Header et Payload' },
      { id: 'B', text: '3 parties séparées par des points : Header, Payload et Signature' },
      { id: 'C', text: '4 parties avec certificat SSL' },
      { id: 'D', text: '1 chaîne cryptée unique sans structure' }
    ],
    correctAnswer: 'B',
    explanation: 'Un JWT est composé de 3 parties encodées en base64url et séparées par des points : l’en-tête (Header), la charge utile (Payload) et la signature.'
  },
  {
    id: 'info-25',
    categoryId: 'informatique',
    difficulty: 'difficile',
    question: 'Quel protocole de communication réseau fonctionne en mode connecté avec garantie de remise ordonnée des paquets ?',
    options: [
      { id: 'A', text: 'UDP' },
      { id: 'B', text: 'TCP' },
      { id: 'C', text: 'ICMP' },
      { id: 'D', text: 'DNS' }
    ],
    correctAnswer: 'B',
    explanation: 'TCP (Transmission Control Protocol) établit une connexion fiable (handshake 3 voies) avec accusés de réception, réordonnancement et contrôle de congestion.'
  },

  // =========================================================================
  // 2. CULTURE GÉNÉRALE (25 questions)
  // =========================================================================
  {
    id: 'cult-1',
    categoryId: 'culture-generale',
    difficulty: 'facile',
    question: 'Qui a peint le célèbre tableau de "La Joconde" exposé au musée du Louvre ?',
    options: [
      { id: 'A', text: 'Michel-Ange' },
      { id: 'B', text: 'Léonard de Vinci' },
      { id: 'C', text: 'Raphaël' },
      { id: 'D', text: 'Sandro Botticelli' }
    ],
    correctAnswer: 'B',
    explanation: 'Léonard de Vinci a peint le portrait de Monna Lisa au début du XVIe siècle en employant sa célèbre technique du sfumato.'
  },
  {
    id: 'cult-2',
    categoryId: 'culture-generale',
    difficulty: 'facile',
    question: 'En quelle année a eu lieu la prise de la Bastille, symbole de la Révolution française ?',
    options: [
      { id: 'A', text: '1776' },
      { id: 'B', text: '1789' },
      { id: 'C', text: '1799' },
      { id: 'D', text: '1804' }
    ],
    correctAnswer: 'B',
    explanation: 'Le 14 juillet 1789, le peuple parisien s’empare de la forteresse royale de la Bastille.'
  },
  {
    id: 'cult-3',
    categoryId: 'culture-generale',
    difficulty: 'facile',
    question: 'Quel dramaturge anglais a écrit la célèbre tragédie "Romeo et Juliette" ?',
    options: [
      { id: 'A', text: 'William Shakespeare' },
      { id: 'B', text: 'Charles Dickens' },
      { id: 'C', text: 'Oscar Wilde' },
      { id: 'D', text: 'Arthur Conan Doyle' }
    ],
    correctAnswer: 'A',
    explanation: 'William Shakespeare a composé "Roméo et Juliette" à la fin du XVIe siècle, immortalisant les amants maudits de Vérone.'
  },
  {
    id: 'cult-4',
    categoryId: 'culture-generale',
    difficulty: 'facile',
    question: 'Quel compositeur autrichien a créé "La Flûte enchantée" et "Les Noces de Figaro" ?',
    options: [
      { id: 'A', text: 'Ludwig van Beethoven' },
      { id: 'B', text: 'Wolfgang Amadeus Mozart' },
      { id: 'C', text: 'Johann Sebastian Bach' },
      { id: 'D', text: 'Franz Schubert' }
    ],
    correctAnswer: 'B',
    explanation: 'Mozart, génie prodige de la période classique, a composé ces opéras universellement acclamés avant sa mort en 1791.'
  },
  {
    id: 'cult-5',
    categoryId: 'culture-generale',
    difficulty: 'facile',
    question: 'Dans quelle ville peut-on visiter la célèbre statue de la Liberté ?',
    options: [
      { id: 'A', text: 'Washington D.C.' },
      { id: 'B', text: 'New York' },
      { id: 'C', text: 'Boston' },
      { id: 'D', text: 'Chicago' }
    ],
    correctAnswer: 'B',
    explanation: 'Offerte par la France en signe d’amitié, la statue de la Liberté veille sur le port de New York à Liberty Island depuis 1886.'
  },
  {
    id: 'cult-6',
    categoryId: 'culture-generale',
    difficulty: 'facile',
    question: 'Quel héros de bande dessinée belge est toujours accompagné de son chien Milou ?',
    options: [
      { id: 'A', text: 'Spirou' },
      { id: 'B', text: 'Tintin' },
      { id: 'C', text: 'Lucky Luke' },
      { id: 'D', text: 'Gaston Lagaffe' }
    ],
    correctAnswer: 'B',
    explanation: 'Tintin, le jeune reporter créé par Hergé en 1929, voyage à travers le monde avec son fidèle fox-terrier blanc Milou.'
  },
  {
    id: 'cult-7',
    categoryId: 'culture-generale',
    difficulty: 'facile',
    question: 'Quel est l’instrument de musique à vent emblématique de la culture traditionnelle écossaise ?',
    options: [
      { id: 'A', text: 'La flûte traversière' },
      { id: 'B', text: 'La cornemuse' },
      { id: 'C', text: 'Le cor de chasse' },
      { id: 'D', text: 'L’accordéon' }
    ],
    correctAnswer: 'B',
    explanation: 'La cornemuse des Highlands (Great Highland Bagpipe) est l’instrument national traditionnel d’Écosse.'
  },
  {
    id: 'cult-8',
    categoryId: 'culture-generale',
    difficulty: 'facile',
    question: 'Quel monument parisien a été construit pour l’Exposition universelle de 1889 ?',
    options: [
      { id: 'A', text: 'L’Arc de Triomphe' },
      { id: 'B', text: 'La Tour Eiffel' },
      { id: 'C', text: 'Le Panthéon' },
      { id: 'D', text: 'L’Opéra Garnier' }
    ],
    correctAnswer: 'B',
    explanation: 'Conçue par les ingénieurs de Gustave Eiffel, la Tour Eiffel célébrait le centenaire de la Révolution française.'
  },
  {
    id: 'cult-9',
    categoryId: 'culture-generale',
    difficulty: 'moyen',
    question: 'Quel écrivain français a composé le chef-d’œuvre "À la recherche du temps perdu" ?',
    options: [
      { id: 'A', text: 'Marcel Proust' },
      { id: 'B', text: 'Gustave Flaubert' },
      { id: 'C', text: 'Émile Zola' },
      { id: 'D', text: 'Honoré de Balzac' }
    ],
    correctAnswer: 'A',
    explanation: 'Marcel Proust a révolutionné le roman moderne avec cette œuvre magistrale en sept tomes publiée entre 1913 et 1927.'
  },
  {
    id: 'cult-10',
    categoryId: 'culture-generale',
    difficulty: 'moyen',
    question: 'Quel mouvement artistique Claude Monet a-t-il contribué à baptiser avec son tableau de 1872 ?',
    options: [
      { id: 'A', text: 'Le Cubisme' },
      { id: 'B', text: 'L’Impressionnisme' },
      { id: 'C', text: 'Le Surréalisme' },
      { id: 'D', text: 'Le Fauvisme' }
    ],
    correctAnswer: 'B',
    explanation: '"Impression, soleil levant" de Monet a donné son nom au mouvement impressionniste après la critique satirique de Louis Leroy.'
  },
  {
    id: 'cult-11',
    categoryId: 'culture-generale',
    difficulty: 'moyen',
    question: 'Qui est l’auteur du roman dystopique "1984" mettant en scène Big Brother ?',
    options: [
      { id: 'A', text: 'Aldous Huxley' },
      { id: 'B', text: 'George Orwell' },
      { id: 'C', text: 'Ray Bradbury' },
      { id: 'D', text: 'Philip K. Dick' }
    ],
    correctAnswer: 'B',
    explanation: 'George Orwell a publié "1984" en 1949 pour dénoncer le totalitarisme, la novlangue et la surveillance omnisciente.'
  },
  {
    id: 'cult-12',
    categoryId: 'culture-generale',
    difficulty: 'moyen',
    question: 'Quel sculpteur français a réalisé "Le Penseur" et "Le Baiser" ?',
    options: [
      { id: 'A', text: 'Auguste Rodin' },
      { id: 'B', text: 'Camille Claudel' },
      { id: 'C', text: 'Jean-Baptiste Carpeaux' },
      { id: 'D', text: 'Antoine Bourdelle' }
    ],
    correctAnswer: 'A',
    explanation: 'Auguste Rodin est considéré comme le géant de la sculpture moderne française du XIXe siècle.'
  },
  {
    id: 'cult-13',
    categoryId: 'culture-generale',
    difficulty: 'moyen',
    question: 'Dans quel musée new-yorkais est exposée "La Nuit étoilée" de Vincent van Gogh ?',
    options: [
      { id: 'A', text: 'Le Met' },
      { id: 'B', text: 'Le MoMA' },
      { id: 'C', text: 'Le Guggenheim' },
      { id: 'D', text: 'Le Whitney Museum' }
    ],
    correctAnswer: 'B',
    explanation: '"La Nuit étoilée" (1889) fait partie intégrante de la collection permanente du Museum of Modern Art (MoMA) de New York.'
  },
  {
    id: 'cult-14',
    categoryId: 'culture-generale',
    difficulty: 'moyen',
    question: 'Quel cinéaste a réalisé "2001, l’Odyssée de l’espace" et "Orange mécanique" ?',
    options: [
      { id: 'A', text: 'Stanley Kubrick' },
      { id: 'B', text: 'Ridley Scott' },
      { id: 'C', text: 'Alfred Hitchcock' },
      { id: 'D', text: 'George Lucas' }
    ],
    correctAnswer: 'A',
    explanation: 'Stanley Kubrick est réputé pour sa précision visuelle maniaque et ses chefs-d’œuvre visionnaires du 7ème art.'
  },
  {
    id: 'cult-15',
    categoryId: 'culture-generale',
    difficulty: 'moyen',
    question: 'Quel philosophe grec antique a été le maître d’Alexandre le Grand ?',
    options: [
      { id: 'A', text: 'Socrate' },
      { id: 'B', text: 'Platon' },
      { id: 'C', text: 'Aristote' },
      { id: 'D', text: 'Épicure' }
    ],
    correctAnswer: 'C',
    explanation: 'Aristote a été invité par le roi Philippe II de Macédoine pour instruire son jeune fils, le futur Alexandre le Grand.'
  },
  {
    id: 'cult-16',
    categoryId: 'culture-generale',
    difficulty: 'moyen',
    question: 'Quel opéra de Georges Bizet met en scène une bohémienne séductrice à Séville ?',
    options: [
      { id: 'A', text: 'La Traviata' },
      { id: 'B', text: 'Carmen' },
      { id: 'C', text: 'Tosca' },
      { id: 'D', text: 'Madame Butterfly' }
    ],
    correctAnswer: 'B',
    explanation: 'Créé en 1875 à l’Opéra-Comique de Paris, "Carmen" de Bizet est l’un des opéras les plus joués dans le monde.'
  },
  {
    id: 'cult-17',
    categoryId: 'culture-generale',
    difficulty: 'difficile',
    question: 'Quel peintre espagnol a peint l’immense toile engagée "Guernica" en 1937 ?',
    options: [
      { id: 'A', text: 'Salvador Dalí' },
      { id: 'B', text: 'Pablo Picasso' },
      { id: 'C', text: 'Joan Miró' },
      { id: 'D', text: 'Francisco de Goya' }
    ],
    correctAnswer: 'B',
    explanation: 'Picasso a peint "Guernica" en réponse au bombardement de la ville basque par l’aviation nazie au service des franquistes.'
  },
  {
    id: 'cult-18',
    categoryId: 'culture-generale',
    difficulty: 'difficile',
    question: 'Quel poète persan du XIIIe siècle est l’auteur des célèbres distiques spirituels du "Masnavi" ?',
    options: [
      { id: 'A', text: 'Omar Khayyam' },
      { id: 'B', text: 'Rûmî (Djalâl ad-Dîn Rûmî)' },
      { id: 'C', text: 'Hafez de Chiraz' },
      { id: 'D', text: 'Ferdowsi' }
    ],
    correctAnswer: 'B',
    explanation: 'Rûmî est le grand maître soufi dont la poésie mystique universelle rayonne dans le monde entier.'
  },
  {
    id: 'cult-19',
    categoryId: 'culture-generale',
    difficulty: 'difficile',
    question: 'Quelle est la première femme à avoir reçu le prix Nobel de littérature (en 1909) ?',
    options: [
      { id: 'A', text: 'Virginia Woolf' },
      { id: 'B', text: 'Selma Lagerlöf' },
      { id: 'C', text: 'Gabriela Mistral' },
      { id: 'D', text: 'Pearl Buck' }
    ],
    correctAnswer: 'B',
    explanation: 'L’autrice suédoise Selma Lagerlöf ("Le Merveilleux Voyage de Nils Holgersson") fut la première lauréate en 1909.'
  },
  {
    id: 'cult-20',
    categoryId: 'culture-generale',
    difficulty: 'difficile',
    question: 'Dans la mythologie nordique, comment se nomme le crépuscule des dieux et la fin du monde ?',
    options: [
      { id: 'A', text: 'Le Valhalla' },
      { id: 'B', text: 'Le Ragnarök' },
      { id: 'C', text: 'L’Yggdrasil' },
      { id: 'D', text: 'Le Midgard' }
    ],
    correctAnswer: 'B',
    explanation: 'Le Ragnarök annonce la bataille eschatologique au cours de laquelle périrent Odin, Thor et Loki avant la renaissance du monde.'
  },
  {
    id: 'cult-21',
    categoryId: 'culture-generale',
    difficulty: 'difficile',
    question: 'Quel architecte hispano-suisse a conçu le musée Guggenheim de Bilbao ?',
    options: [
      { id: 'A', text: 'Santiago Calatrava' },
      { id: 'B', text: 'Frank Gehry' },
      { id: 'C', text: 'Renzo Piano' },
      { id: 'D', text: 'Zaha Hadid' }
    ],
    correctAnswer: 'B',
    explanation: 'L’architecte canado-américain Frank Gehry a signé cette prouesse déconstructiviste en titane inaugurée en 1997.'
  },
  {
    id: 'cult-22',
    categoryId: 'culture-generale',
    difficulty: 'difficile',
    question: 'Quel roman de James Joyce relate en détail la journée du 16 juin 1904 à Dublin ?',
    options: [
      { id: 'A', text: 'Ulysse (Ulysses)' },
      { id: 'B', text: 'Finnegans Wake' },
      { id: 'C', text: 'Gens de Dublin' },
      { id: 'D', text: 'Portrait de l’artiste en jeune homme' }
    ],
    correctAnswer: 'A',
    explanation: 'Dans "Ulysse", Joyce suit les pérégrinations de Leopold Bloom au fil de cette journée commémorée sous le nom de "Bloomsday".'
  },
  {
    id: 'cult-23',
    categoryId: 'culture-generale',
    difficulty: 'difficile',
    question: 'À quel courant philosophique rattache-t-on Jean-Paul Sartre et Simone de Beauvoir ?',
    options: [
      { id: 'A', text: 'Le Structuralisme' },
      { id: 'B', text: 'L’Existentialisme' },
      { id: 'C', text: 'Le Positivisme' },
      { id: 'D', text: 'Le Pragmatisme' }
    ],
    correctAnswer: 'B',
    explanation: 'L’existentialisme proclame que "l’existence précède l’essence", plaçant la liberté et la responsabilité humaine au centre.'
  },
  {
    id: 'cult-24',
    categoryId: 'culture-generale',
    difficulty: 'difficile',
    question: 'Quelle cantate profane de Carl Orff s’ouvre sur le chœur magistral "O Fortuna" ?',
    options: [
      { id: 'A', text: 'Carmina Burana' },
      { id: 'B', text: 'Catulli Carmina' },
      { id: 'C', text: 'Trionfo di Afrodite' },
      { id: 'D', text: 'De Temporum Fine Comoedia' }
    ],
    correctAnswer: 'A',
    explanation: '"Carmina Burana", composée en 1935-1936, s’inspire de poèmes médiévaux célébrant la roue de la fortune et les plaisirs terrestres.'
  },
  {
    id: 'cult-25',
    categoryId: 'culture-generale',
    difficulty: 'difficile',
    question: 'Quel peintre néerlandais est surnommé le maître du clair-obscur avec sa toile "La Ronde de nuit" (1642) ?',
    options: [
      { id: 'A', text: 'Johannes Vermeer' },
      { id: 'B', text: 'Rembrandt van Rijn' },
      { id: 'C', text: 'Frans Hals' },
      { id: 'D', text: 'Jan Steen' }
    ],
    correctAnswer: 'B',
    explanation: 'Rembrandt a révolutionné la peinture hollandaise de l’âge d’or par son sens dramatique de la lumière et du mouvement.'
  },

  // =========================================================================
  // 3. SCIENCES & NATURE (25 questions)
  // =========================================================================
  {
    id: 'sci-1',
    categoryId: 'sciences',
    difficulty: 'facile',
    question: 'Quelle est la planète la plus proche du Soleil dans notre Système solaire ?',
    options: [
      { id: 'A', text: 'Vénus' },
      { id: 'B', text: 'Mercure' },
      { id: 'C', text: 'Mars' },
      { id: 'D', text: 'La Terre' }
    ],
    correctAnswer: 'B',
    explanation: 'Mercure orbite à environ 58 millions de kilomètres du Soleil, ce qui en fait la planète la plus proche de l’étoile.'
  },
  {
    id: 'sci-2',
    categoryId: 'sciences',
    difficulty: 'facile',
    question: 'Quelle molécule les plantes absorbent-elles principalement lors de la photosynthèse ?',
    options: [
      { id: 'A', text: 'L’Oxygène (O2)' },
      { id: 'B', text: 'Le Dioxyde de carbone (CO2)' },
      { id: 'C', text: 'L’Azote (N2)' },
      { id: 'D', text: 'Le Méthane (CH4)' }
    ],
    correctAnswer: 'B',
    explanation: 'Grâce à la lumière solaire et à la chlorophylle, les végétaux transforment l’eau et le CO2 en glucose en libérant de l’oxygène.'
  },
  {
    id: 'sci-3',
    categoryId: 'sciences',
    difficulty: 'facile',
    question: 'Quelle est la formule chimique exacte de l’eau pure ?',
    options: [
      { id: 'A', text: 'HO2' },
      { id: 'B', text: 'H2O' },
      { id: 'C', text: 'H2O2' },
      { id: 'D', text: 'CO2' }
    ],
    correctAnswer: 'B',
    explanation: 'Une molécule d’eau est constituée de deux atomes d’hydrogène liés à un atome d’oxygène (H2O).'
  },
  {
    id: 'sci-4',
    categoryId: 'sciences',
    difficulty: 'facile',
    question: 'Quel organe du corps humain pompe le sang à travers le système circulatoire ?',
    options: [
      { id: 'A', text: 'Le foie' },
      { id: 'B', text: 'Le cœur' },
      { id: 'C', text: 'Les poumons' },
      { id: 'D', text: 'Les reins' }
    ],
    correctAnswer: 'B',
    explanation: 'Le cœur est un muscle creux contractile qui assure la propulsion du sang vers tous les organes.'
  },
  {
    id: 'sci-5',
    categoryId: 'sciences',
    difficulty: 'facile',
    question: 'À quelle température l’eau pure gèle-t-elle à pression atmosphérique normale ?',
    options: [
      { id: 'A', text: '-10 °C' },
      { id: 'B', text: '0 °C' },
      { id: 'C', text: '4 °C' },
      { id: 'D', text: '32 °C' }
    ],
    correctAnswer: 'B',
    explanation: 'Sur l’échelle Celsius, le point de congélation de l’eau sous une pression de 1 atm est par définition fixé à 0 °C.'
  },
  {
    id: 'sci-6',
    categoryId: 'sciences',
    difficulty: 'facile',
    question: 'Quelle est la vitesse approximative de la lumière dans le vide ?',
    options: [
      { id: 'A', text: '30 000 km/s' },
      { id: 'B', text: '300 000 km/s' },
      { id: 'C', text: '1 000 000 km/s' },
      { id: 'D', text: '3 000 km/s' }
    ],
    correctAnswer: 'B',
    explanation: 'La vitesse de la lumière (constante c) vaut exactement 299 792 458 m/s, soit environ 300 000 kilomètres par seconde.'
  },
  {
    id: 'sci-7',
    categoryId: 'sciences',
    difficulty: 'facile',
    question: 'Quel gaz compose environ 78% de l’atmosphère terrestre ?',
    options: [
      { id: 'A', text: 'L’Oxygène' },
      { id: 'B', text: 'L’Azote (Diazote)' },
      { id: 'C', text: 'L’Argon' },
      { id: 'D', text: 'Le Dioxyde de carbone' }
    ],
    correctAnswer: 'B',
    explanation: 'L’air sec terrestre est composé d’environ 78,08% de diazote (N2) et 20,95% de dioxygène (O2).'
  },
  {
    id: 'sci-8',
    categoryId: 'sciences',
    difficulty: 'facile',
    question: 'Quel astronome polonais a formulé au XVIe siècle la théorie héliocentrique ?',
    options: [
      { id: 'A', text: 'Galilée' },
      { id: 'B', text: 'Nicolas Copernic' },
      { id: 'C', text: 'Johannes Kepler' },
      { id: 'D', text: 'Isaac Newton' }
    ],
    correctAnswer: 'B',
    explanation: 'Nicolas Copernic a démontré dans "De revolutionibus orbium coelestium" (1543) que la Terre tourne autour du Soleil.'
  },
  {
    id: 'sci-9',
    categoryId: 'sciences',
    difficulty: 'moyen',
    question: 'Quel est l’élément chimique le plus abondant dans l’Univers observable ?',
    options: [
      { id: 'A', text: 'L’Oxygène' },
      { id: 'B', text: 'L’Hydrogène' },
      { id: 'C', text: 'L’Hélium' },
      { id: 'D', text: 'Le Fer' }
    ],
    correctAnswer: 'B',
    explanation: 'L’hydrogène constitue approximativement 75% de la masse de toute la matière baryonique de l’Univers.'
  },
  {
    id: 'sci-10',
    categoryId: 'sciences',
    difficulty: 'moyen',
    question: 'Quelle est la fonction principale des globules rouges (hématies) dans le sang ?',
    options: [
      { id: 'A', text: 'Combattre les infections bactériennes.' },
      { id: 'B', text: 'Transporter l’oxygène grâce à l’hémoglobine.' },
      { id: 'C', text: 'Assurer la coagulation.' },
      { id: 'D', text: 'Filtrer l’urée.' }
    ],
    correctAnswer: 'B',
    explanation: 'Les érythrocytes transportent le dioxygène depuis les alvéoles pulmonaires jusqu’aux tissus de l’organisme.'
  },
  {
    id: 'sci-11',
    categoryId: 'sciences',
    difficulty: 'moyen',
    question: 'Quelle particule subatomique porte une charge électrique négative ?',
    options: [
      { id: 'A', text: 'Le proton' },
      { id: 'B', text: 'L’électron' },
      { id: 'C', text: 'Le neutron' },
      { id: 'D', text: 'Le positron' }
    ],
    correctAnswer: 'B',
    explanation: 'L’électron possède une charge électrique élémentaire négative (-1e) et gravite autour du noyau atomique.'
  },
  {
    id: 'sci-12',
    categoryId: 'sciences',
    difficulty: 'moyen',
    question: 'Quelle est la valeur du pH d’une solution parfaitement neutre à 25 °C ?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '7' },
      { id: 'C', text: '14' },
      { id: 'D', text: '1' }
    ],
    correctAnswer: 'B',
    explanation: 'À 25 °C, une solution aqueuse neutre présente une concentration en ions H+ égale à celle des ions OH-, d’où un pH de 7.'
  },
  {
    id: 'sci-13',
    categoryId: 'sciences',
    difficulty: 'moyen',
    question: 'Quelle organite cellulaire est souvent qualifiée de "centrale énergétique" de la cellule ?',
    options: [
      { id: 'A', text: 'L’appareil de Golgi' },
      { id: 'B', text: 'La mitochondrie' },
      { id: 'C', text: 'Le réticulum endoplasmique' },
      { id: 'D', text: 'Le lysosome' }
    ],
    correctAnswer: 'B',
    explanation: 'Les mitochondries produisent la majorité de l’ATP cellulaire par la respiration cellulaire aérobie.'
  },
  {
    id: 'sci-14',
    categoryId: 'sciences',
    difficulty: 'moyen',
    question: 'Quelle force fondamentale retient les planètes en orbite autour du Soleil ?',
    options: [
      { id: 'A', text: 'La force électromagnétique' },
      { id: 'B', text: 'La gravitation' },
      { id: 'C', text: 'L’interaction forte' },
      { id: 'D', text: 'L’interaction faible' }
    ],
    correctAnswer: 'B',
    explanation: 'La force gravitationnelle, proportionnelle aux masses et inversement proportionnelle au carré de la distance, gouverne le mouvement orbital.'
  },
  {
    id: 'sci-15',
    categoryId: 'sciences',
    difficulty: 'moyen',
    question: 'Qui a découvert la pénicilline en 1928, inaugurant l’ère des antibiotiques ?',
    options: [
      { id: 'A', text: 'Louis Pasteur' },
      { id: 'B', text: 'Alexander Fleming' },
      { id: 'C', text: 'Robert Koch' },
      { id: 'D', text: 'Edward Jenner' }
    ],
    correctAnswer: 'B',
    explanation: 'Sir Alexander Fleming a observé qu’une moisissure, Penicillium notatum, détruisait des colonies de staphylocoques.'
  },
  {
    id: 'sci-16',
    categoryId: 'sciences',
    difficulty: 'moyen',
    question: 'Comment nomme-t-on le passage direct de l’état solide à l’état gazeux sans passer par l’état liquide ?',
    options: [
      { id: 'A', text: 'La condensation' },
      { id: 'B', text: 'La sublimation' },
      { id: 'C', text: 'L’évaporation' },
      { id: 'D', text: 'La fusion' }
    ],
    correctAnswer: 'B',
    explanation: 'La sublimation est la transition de phase directe de l’état solide à l’état gazeux (ex: neige carbonique / CO2 solide).'
  },
  {
    id: 'sci-17',
    categoryId: 'sciences',
    difficulty: 'difficile',
    question: 'Quelle est la frontière d’un trou noir d’où même la lumière ne peut s’échapper ?',
    options: [
      { id: 'A', text: 'La magnétopause' },
      { id: 'B', text: 'L’horizon des événements' },
      { id: 'C', text: 'La sphère de photon' },
      { id: 'D', text: 'L’ergosphère' }
    ],
    correctAnswer: 'B',
    explanation: 'L’horizon des événements marque la surface théorique où la vitesse de libération égale la vitesse de la lumière.'
  },
  {
    id: 'sci-18',
    categoryId: 'sciences',
    difficulty: 'difficile',
    question: 'Quelle équation fondamentale d’Albert Einstein exprime l’équivalence masse-énergie ?',
    options: [
      { id: 'A', text: 'F = m * a' },
      { id: 'B', text: 'E = m * c²' },
      { id: 'C', text: 'PV = nRT' },
      { id: 'D', text: 'v = d / t' }
    ],
    correctAnswer: 'B',
    explanation: 'Publiée en 1905 dans le cadre de la relativité restreinte, E = mc² prouve que la matière peut être convertie en énergie.'
  },
  {
    id: 'sci-19',
    categoryId: 'sciences',
    difficulty: 'difficile',
    question: 'Quel principe de mécanique quantique stipule qu’on ne peut connaître simultanément avec une précision infinie la position et la vitesse d’une particule ?',
    options: [
      { id: 'A', text: 'Le principe d’exclusion de Pauli' },
      { id: 'B', text: 'Le principe d’incertitude de Heisenberg' },
      { id: 'C', text: 'La dualité onde-corpuscule de De Broglie' },
      { id: 'D', text: 'Le théorème de Noether' }
    ],
    correctAnswer: 'B',
    explanation: 'Énoncé par Werner Heisenberg en 1927, ce principe impose une limite fondamentale : Δx * Δp >= h / (4π).'
  },
  {
    id: 'sci-20',
    categoryId: 'sciences',
    difficulty: 'difficile',
    question: 'Quel boson, prédit dans les années 1960 et découvert au CERN en 2012, confère leur masse aux particules élémentaires ?',
    options: [
      { id: 'A', text: 'Le boson W' },
      { id: 'B', text: 'Le boson de Higgs' },
      { id: 'C', text: 'Le gluon' },
      { id: 'D', text: 'Le graviton' }
    ],
    correctAnswer: 'B',
    explanation: 'Le boson de Higgs est le quantum du champ scalaire de Higgs qui donne une masse aux bosons faibles et aux fermions.'
  },
  {
    id: 'sci-21',
    categoryId: 'sciences',
    difficulty: 'difficile',
    question: 'Combien de paires de chromosomes compte une cellule somatique humaine normale ?',
    options: [
      { id: 'A', text: '21 paires' },
      { id: 'B', text: '23 paires' },
      { id: 'C', text: '24 paires' },
      { id: 'D', text: '46 paires' }
    ],
    correctAnswer: 'B',
    explanation: 'Le caryotype humain normal comporte 23 paires de chromosomes homologues, soit un total de 46 chromosomes (2n = 46).'
  },
  {
    id: 'sci-22',
    categoryId: 'sciences',
    difficulty: 'difficile',
    question: 'Quel type de rayonnement électromagnétique possède la plus haute énergie et la plus courte longueur d’onde ?',
    options: [
      { id: 'A', text: 'Les ondes radio' },
      { id: 'B', text: 'Les rayons Gamma' },
      { id: 'C', text: 'Les rayons X' },
      { id: 'D', text: 'Les ultraviolets' }
    ],
    correctAnswer: 'B',
    explanation: 'Les rayons gamma (émis lors des désintégrations nucléaires) ont les fréquences les plus élevées (> 10^19 Hz) du spectre.'
  },
  {
    id: 'sci-23',
    categoryId: 'sciences',
    difficulty: 'difficile',
    question: 'Quelle est la deuxième loi de la thermodynamique ?',
    options: [
      { id: 'A', text: 'L’énergie se conserve.' },
      { id: 'B', text: 'L’entropie d’un système isolé ne peut que croître ou rester constante lors de transformations réversibles.' },
      { id: 'C', text: 'Le zéro absolu peut être atteint.' },
      { id: 'D', text: 'La pression est constante.' }
    ],
    correctAnswer: 'B',
    explanation: 'Le second principe affirme que tout processus spontané augmente l’entropie globale (le désordre) de l’Univers.'
  },
  {
    id: 'sci-24',
    categoryId: 'sciences',
    difficulty: 'difficile',
    question: 'Quel télescope spatial infrarouge d’avant-garde a été lancé en décembre 2021 pour succéder à Hubble ?',
    options: [
      { id: 'A', text: 'Spitzer' },
      { id: 'B', text: 'James Webb (JWST)' },
      { id: 'C', text: 'Chandra' },
      { id: 'D', text: 'Kepler' }
    ],
    correctAnswer: 'B',
    explanation: 'Le JWST, doté d’un miroir primaire de 6,5 m de diamètre, observe l’Univers profond depuis le point de Lagrange L2.'
  },
  {
    id: 'sci-25',
    categoryId: 'sciences',
    difficulty: 'difficile',
    question: 'Quelle molécule d’acide nucléique forme la célèbre structure en double hélice découverte par Watson et Crick ?',
    options: [
      { id: 'A', text: 'L’ARN messager' },
      { id: 'B', text: 'L’ADN (Acide Désoxyribonucléique)' },
      { id: 'C', text: 'L’ATP' },
      { id: 'D', text: 'Le ribosome' }
    ],
    correctAnswer: 'B',
    explanation: 'L’ADN stocke l’information génétique sous forme de deux brins antiparallèles hélicoïdaux reliés par des paires de bases azotées.'
  },

  // =========================================================================
  // 4. HISTOIRE DU MONDE (25 questions)
  // =========================================================================
  {
    id: 'hist-1',
    categoryId: 'histoire',
    difficulty: 'facile',
    question: 'Qui est considéré comme le tout premier empereur romain ?',
    options: [
      { id: 'A', text: 'Jules César' },
      { id: 'B', text: 'Auguste (Octave)' },
      { id: 'C', text: 'Néron' },
      { id: 'D', text: 'Trajan' }
    ],
    correctAnswer: 'B',
    explanation: 'Octave fonde le principat sous le titre d’Auguste en 27 av. J.-C. Jules César n’a été que dictateur à vie.'
  },
  {
    id: 'hist-2',
    categoryId: 'histoire',
    difficulty: 'facile',
    question: 'En quelle année Christophe Colomb a-t-il atteint le continent américain ?',
    options: [
      { id: 'A', text: '1453' },
      { id: 'B', text: '1492' },
      { id: 'C', text: '1515' },
      { id: 'D', text: '1588' }
    ],
    correctAnswer: 'B',
    explanation: 'Le 12 octobre 1492, l’expédition financée par les rois catholiques espagnols débarque sur l’île de Guanahani.'
  },
  {
    id: 'hist-3',
    categoryId: 'histoire',
    difficulty: 'facile',
    question: 'Quel roi de France était surnommé le "Roi-Soleil" et a fait ériger le château de Versailles ?',
    options: [
      { id: 'A', text: 'Henri IV' },
      { id: 'B', text: 'Louis XIV' },
      { id: 'C', text: 'François Ier' },
      { id: 'D', text: 'Louis XVI' }
    ],
    correctAnswer: 'B',
    explanation: 'Louis XIV a régné pendant 72 ans (1643-1715), incarnant l’apogée de la monarchie absolue en France.'
  },
  {
    id: 'hist-4',
    categoryId: 'histoire',
    difficulty: 'facile',
    question: 'En quelle année a pris fin la Seconde Guerre mondiale ?',
    options: [
      { id: 'A', text: '1940' },
      { id: 'B', text: '1945' },
      { id: 'C', text: '1950' },
      { id: 'D', text: '1918' }
    ],
    correctAnswer: 'B',
    explanation: 'Le conflit s’est achevé en mai 1945 en Europe et en septembre 1945 en Asie après la capitulation du Japon.'
  },
  {
    id: 'hist-5',
    categoryId: 'histoire',
    difficulty: 'facile',
    question: 'Quelle civilisation antique vénérait les pharaons et bâtissait des pyramides le long du Nil ?',
    options: [
      { id: 'A', text: 'Les Mayas' },
      { id: 'B', text: 'Les Égyptiens' },
      { id: 'C', text: 'Les Perses' },
      { id: 'D', text: 'Les Mésopotamiens' }
    ],
    correctAnswer: 'B',
    explanation: 'L’Égypte antique a prospéré pendant plus de trois millénaires grâce aux crues nourricières du Nil.'
  },
  {
    id: 'hist-6',
    categoryId: 'histoire',
    difficulty: 'facile',
    question: 'Quel empereur français a été couronné à Notre-Dame de Paris en 1804 ?',
    options: [
      { id: 'A', text: 'Napoléon Ier (Bonaparte)' },
      { id: 'B', text: 'Napoléon III' },
      { id: 'C', text: 'Charlemagne' },
      { id: 'D', text: 'Clovis' }
    ],
    correctAnswer: 'A',
    explanation: 'Le 2 décembre 1804, Napoléon Bonaparte est sacré empereur des Français par le pape Pie VII.'
  },
  {
    id: 'hist-7',
    categoryId: 'histoire',
    difficulty: 'facile',
    question: 'En quelle année a eu lieu la chute du mur de Berlin ?',
    options: [
      { id: 'A', text: '1975' },
      { id: 'B', text: '1989' },
      { id: 'C', text: '1991' },
      { id: 'D', text: '1995' }
    ],
    correctAnswer: 'B',
    explanation: 'Dans la nuit du 9 novembre 1989, les Berlinois franchissent les postes-frontières, annonçant la fin du rideau de fer.'
  },
  {
    id: 'hist-8',
    categoryId: 'histoire',
    difficulty: 'facile',
    question: 'Qui était le dirigeant de l’Inde qui a prôné la non-violence (Ahimsa) pour obtenir l’indépendance ?',
    options: [
      { id: 'A', text: 'Jawaharlal Nehru' },
      { id: 'B', text: 'Mahatma Gandhi' },
      { id: 'C', text: 'Indira Gandhi' },
      { id: 'D', text: 'Subhas Chandra Bose' }
    ],
    correctAnswer: 'B',
    explanation: 'Le Mahatma Gandhi a conduit des millions d’Indiens à l’indépendance en 1947 par la désobéissance civile pacifique.'
  },
  {
    id: 'hist-9',
    categoryId: 'histoire',
    difficulty: 'moyen',
    question: 'En quelle année s’est déroulée la bataille de Hastings, consacrant Guillaume le Conquérant ?',
    options: [
      { id: 'A', text: '1066' },
      { id: 'B', text: '1215' },
      { id: 'C', text: '1337' },
      { id: 'D', text: '1415' }
    ],
    correctAnswer: 'A',
    explanation: 'Le 14 octobre 1066, la victoire normande à Hastings transforme l’Angleterre et unit les destins anglo-normands.'
  },
  {
    id: 'hist-10',
    categoryId: 'histoire',
    difficulty: 'moyen',
    question: 'Quel roi franc a été couronné empereur d’Occident par le pape à Rome à Noël 800 ?',
    options: [
      { id: 'A', text: 'Clovis' },
      { id: 'B', text: 'Charlemagne' },
      { id: 'C', text: 'Charles Martel' },
      { id: 'D', text: 'Pépin le Bref' }
    ],
    correctAnswer: 'B',
    explanation: 'Charlemagne restaure l’Empire romain d’Occident par son couronnement impérial dans la basilique Saint-Pierre.'
  },
  {
    id: 'hist-11',
    categoryId: 'histoire',
    difficulty: 'moyen',
    question: 'La Magna Carta, socle de limitation du pouvoir royal en Angleterre, a été signée en :',
    options: [
      { id: 'A', text: '1066' },
      { id: 'B', text: '1215' },
      { id: 'C', text: '1348' },
      { id: 'D', text: '1492' }
    ],
    correctAnswer: 'B',
    explanation: 'Imposée au roi Jean sans Terre en 1215, la Grande Charte garantit les libertés des barons contre l’arbitraire royal.'
  },
  {
    id: 'hist-12',
    categoryId: 'histoire',
    difficulty: 'moyen',
    question: 'Quel traité signé en 1919 dans la galerie des Glaces a mis fin à la Première Guerre mondiale ?',
    options: [
      { id: 'A', text: 'Le Traité de Rome' },
      { id: 'B', text: 'Le Traité de Versailles' },
      { id: 'C', text: 'Le Traité d’Utrecht' },
      { id: 'D', text: 'Le Traité de Westphalie' }
    ],
    correctAnswer: 'B',
    explanation: 'Le traité de Versailles (28 juin 1919) impose des conditions strictes et la création de la Société des Nations.'
  },
  {
    id: 'hist-13',
    categoryId: 'histoire',
    difficulty: 'moyen',
    question: 'Quel Premier ministre britannique a mené son pays lors des heures sombres de la Seconde Guerre mondiale ?',
    options: [
      { id: 'A', text: 'Neville Chamberlain' },
      { id: 'B', text: 'Winston Churchill' },
      { id: 'C', text: 'Clement Attlee' },
      { id: 'D', text: 'Anthony Eden' }
    ],
    correctAnswer: 'B',
    explanation: 'Winston Churchill a galvanisé le peuple britannique par sa détermination inébranlable et ses discours historiques.'
  },
  {
    id: 'hist-14',
    categoryId: 'histoire',
    difficulty: 'moyen',
    question: 'En quelle année a été promulguée la Déclaration universelle des droits de l’homme par l’ONU ?',
    options: [
      { id: 'A', text: '1945' },
      { id: 'B', text: '1948' },
      { id: 'C', text: '1952' },
      { id: 'D', text: '1960' }
    ],
    correctAnswer: 'B',
    explanation: 'Adoptée le 10 décembre 1948 à Paris au palais de Chaillot, elle consacre les droits fondamentaux inaliénables.'
  },
  {
    id: 'hist-15',
    categoryId: 'histoire',
    difficulty: 'moyen',
    question: 'Quelle crise diplomatique de 1962 a frôlé le déclenchement d’une guerre nucléaire entre les USA et l’URSS ?',
    options: [
      { id: 'A', text: 'La guerre de Corée' },
      { id: 'B', text: 'La crise des missiles de Cuba' },
      { id: 'C', text: 'Le blocus de Berlin' },
      { id: 'D', text: 'La crise du canal de Suez' }
    ],
    correctAnswer: 'B',
    explanation: 'La découverte de bases de missiles nucléaires soviétiques à Cuba a entraîné 13 jours d’extrême tension entre Kennedy et Khrouchtchev.'
  },
  {
    id: 'hist-16',
    categoryId: 'histoire',
    difficulty: 'moyen',
    question: 'Quelle héroïne française a mené les armées royales à Orléans durant la guerre de Cent Ans ?',
    options: [
      { id: 'A', text: 'Aliénor d’Aquitaine' },
      { id: 'B', text: 'Jeanne d’Arc' },
      { id: 'C', text: 'Catherine de Médicis' },
      { id: 'D', text: 'Marie-Antoinette' }
    ],
    correctAnswer: 'B',
    explanation: 'Jeanne d’Arc a délivré Orléans assiégée en 1429 et fait couronner Charles VII à Reims avant son martyre à Rouen.'
  },
  {
    id: 'hist-17',
    categoryId: 'histoire',
    difficulty: 'difficile',
    question: 'En quelle année la ville de Constantinople est-elle tombée aux mains des Ottomans, mettant fin à l’Empire byzantin ?',
    options: [
      { id: 'A', text: '1453' },
      { id: 'B', text: '1492' },
      { id: 'C', text: '1520' },
      { id: 'D', text: '1571' }
    ],
    correctAnswer: 'A',
    explanation: 'Le 29 mai 1453, les troupes du sultan Mehmed II s’emparent de Constantinople, événement majeur clôturant le Moyen Âge.'
  },
  {
    id: 'hist-18',
    categoryId: 'histoire',
    difficulty: 'difficile',
    question: 'Quel traité européen de 1648 a instauré le principe de souveraineté des États et mis fin à la guerre de Trente Ans ?',
    options: [
      { id: 'A', text: 'Les traités de Westphalie' },
      { id: 'B', text: 'Le traité des Pyrénées' },
      { id: 'C', text: 'Le traité d’Utrecht' },
      { id: 'D', text: 'La paix d’Augsbourg' }
    ],
    correctAnswer: 'A',
    explanation: 'Les traités de Westphalie (Munster et Osnabrück) fondent le système westphalien d’équilibre des puissances souveraines.'
  },
  {
    id: 'hist-19',
    categoryId: 'histoire',
    difficulty: 'difficile',
    question: 'Quel pharaon de la XVIIIe dynastie a tenté d’imposer le culte monothéiste exclusif du disque solaire Aton ?',
    options: [
      { id: 'A', text: 'Ramsès II' },
      { id: 'B', text: 'Akhénaton (Aménophis IV)' },
      { id: 'C', text: 'Toutânkhamon' },
      { id: 'D', text: 'Thoutmôsis III' }
    ],
    correctAnswer: 'B',
    explanation: 'Akhénaton a banni le clergé d’Amon, fondé la cité d’Amarna et instauré le culte solaire avec son épouse Néfertiti.'
  },
  {
    id: 'hist-20',
    categoryId: 'histoire',
    difficulty: 'difficile',
    question: 'En quelle année l’URSS a-t-elle été officiellement dissoute, marquant la fin de la guerre froide ?',
    options: [
      { id: 'A', text: '1989' },
      { id: 'B', text: '1991' },
      { id: 'C', text: '1993' },
      { id: 'D', text: '1985' }
    ],
    correctAnswer: 'B',
    explanation: 'Le 26 décembre 1991, après la démission de Mikhaïl Gorbatchev, le drapeau soviétique est descendu du Kremlin.'
  },
  {
    id: 'hist-21',
    categoryId: 'histoire',
    difficulty: 'difficile',
    question: 'Quelle bataille navale de 1805 a consacré la suprématie maritime britannique de l’amiral Nelson sur la flotte franco-espagnole ?',
    options: [
      { id: 'A', text: 'La bataille d’Aboukir' },
      { id: 'B', text: 'La bataille de Trafalgar' },
      { id: 'C', text: 'La bataille de Lépante' },
      { id: 'D', text: 'La bataille de Waterloo' }
    ],
    correctAnswer: 'B',
    explanation: 'Le 21 octobre 1805 au large de l’Espagne, la Royal Navy anéantit les ambitions d’invasion britannique de Napoléon.'
  },
  {
    id: 'hist-22',
    categoryId: 'histoire',
    difficulty: 'difficile',
    question: 'Quel réformateur allemand a affiché ses 95 thèses à Wittenberg en 1517, initiant la Réforme protestante ?',
    options: [
      { id: 'A', text: 'Jean Calvin' },
      { id: 'B', text: 'Martin Luther' },
      { id: 'C', text: 'Ulrich Zwingli' },
      { id: 'D', text: 'Érasme' }
    ],
    correctAnswer: 'B',
    explanation: 'En critiquant le commerce des indulgences, Luther a déclenché une scission religieuse et politique majeure en Europe.'
  },
  {
    id: 'hist-23',
    categoryId: 'histoire',
    difficulty: 'difficile',
    question: 'Quel général carthaginois a traversé les Alpes avec des éléphants de guerre durant la deuxième guerre punique ?',
    options: [
      { id: 'A', text: 'Hamilcar Barca' },
      { id: 'B', text: 'Hannibal Barca' },
      { id: 'C', text: 'Hasdrubal' },
      { id: 'D', text: 'Scipion l’Africain' }
    ],
    correctAnswer: 'B',
    explanation: 'En 218 av. J.-C., Hannibal franchit les Alpes et inflige d’éclatantes défaites à Rome (Trébie, Trasimène, Cannes).'
  },
  {
    id: 'hist-24',
    categoryId: 'histoire',
    difficulty: 'difficile',
    question: 'Quel chancelier prussien a orchestré l’unification allemande au XIXe siècle ("par le fer et par le sang") ?',
    options: [
      { id: 'A', text: 'Otto von Bismarck' },
      { id: 'B', text: 'Guillaume II' },
      { id: 'C', text: 'Metternich' },
      { id: 'D', text: 'Hindenburg' }
    ],
    correctAnswer: 'A',
    explanation: 'Bismarck mène trois guerres victorieuses (Danemark, Autriche, France) pour proclamer l’Empire allemand à Versailles en 1871.'
  },
  {
    id: 'hist-25',
    categoryId: 'histoire',
    difficulty: 'difficile',
    question: 'Quel traité signé en 1957 est l’acte fondateur de la Communauté économique européenne (CEE) ?',
    options: [
      { id: 'A', text: 'Le Traité de Maastricht' },
      { id: 'B', text: 'Le Traité de Rome' },
      { id: 'C', text: 'Le Traité de Paris' },
      { id: 'D', text: 'Le Traité de Lisbonne' }
    ],
    correctAnswer: 'B',
    explanation: 'Les traités de Rome instituent la CEE et Euratom entre six pays fondateurs (France, RFA, Italie, Belgique, Pays-Bas, Luxembourg).'
  },

  // =========================================================================
  // 5. MATHÉMATIQUES & LOGIQUE (25 questions)
  // =========================================================================
  {
    id: 'math-1',
    categoryId: 'mathematiques',
    difficulty: 'facile',
    question: 'Combien vaut 15% de 240 ?',
    options: [
      { id: 'A', text: '32' },
      { id: 'B', text: '36' },
      { id: 'C', text: '38' },
      { id: 'D', text: '40' }
    ],
    correctAnswer: 'B',
    explanation: '10% de 240 = 24. 5% de 240 = 12. Donc 15% = 24 + 12 = 36.'
  },
  {
    id: 'math-2',
    categoryId: 'mathematiques',
    difficulty: 'facile',
    question: 'Quelle est la valeur suivante dans la suite arithmétique : 3, 7, 11, 15, ... ?',
    options: [
      { id: 'A', text: '17' },
      { id: 'B', text: '18' },
      { id: 'C', text: '19' },
      { id: 'D', text: '21' }
    ],
    correctAnswer: 'C',
    explanation: 'La raison de la suite est +4 à chaque étape : 15 + 4 = 19.'
  },
  {
    id: 'math-3',
    categoryId: 'mathematiques',
    difficulty: 'facile',
    question: 'Quel est le résultat du calcul : 8 + 2 * 5 ?',
    options: [
      { id: 'A', text: '50' },
      { id: 'B', text: '18' },
      { id: 'C', text: '20' },
      { id: 'D', text: '26' }
    ],
    correctAnswer: 'B',
    explanation: 'Selon les priorités opératoires, la multiplication prime : 2 * 5 = 10, puis 8 + 10 = 18.'
  },
  {
    id: 'math-4',
    categoryId: 'mathematiques',
    difficulty: 'facile',
    question: 'Combien de côtés possède un hexagone régulier ?',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '6' },
      { id: 'C', text: '7' },
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'B',
    explanation: 'Un hexagone est par définition un polygone à 6 côtés et 6 sommets.'
  },
  {
    id: 'math-5',
    categoryId: 'mathematiques',
    difficulty: 'facile',
    question: 'Quel est le seul nombre premier qui est pair ?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '2' },
      { id: 'C', text: '4' },
      { id: 'D', text: 'Il n’en existe aucun' }
    ],
    correctAnswer: 'B',
    explanation: '2 n’a que deux diviseurs (1 et lui-même). Tous les autres nombres pairs sont divisibles par 2.'
  },
  {
    id: 'math-6',
    categoryId: 'mathematiques',
    difficulty: 'facile',
    question: 'Quelle est la racine carrée de 144 ?',
    options: [
      { id: 'A', text: '11' },
      { id: 'B', text: '12' },
      { id: 'C', text: '13' },
      { id: 'D', text: '14' }
    ],
    correctAnswer: 'B',
    explanation: '12 * 12 = 144, donc √144 = 12.'
  },
  {
    id: 'math-7',
    categoryId: 'mathematiques',
    difficulty: 'facile',
    question: 'Si 3 stylos coûtent 4,50 €, combien coûtent 5 stylos au même tarif unitaire ?',
    options: [
      { id: 'A', text: '6,50 €' },
      { id: 'B', text: '7,50 €' },
      { id: 'C', text: '8,00 €' },
      { id: 'D', text: '9,00 €' }
    ],
    correctAnswer: 'B',
    explanation: 'Un stylo coûte 4,50 / 3 = 1,50 €. Donc 5 stylos coûtent 5 * 1,50 = 7,50 €.'
  },
  {
    id: 'math-8',
    categoryId: 'mathematiques',
    difficulty: 'facile',
    question: 'Quel est le périmètre d’un carré dont chaque côté mesure 7 cm ?',
    options: [
      { id: 'A', text: '14 cm' },
      { id: 'B', text: '21 cm' },
      { id: 'C', text: '28 cm' },
      { id: 'D', text: '49 cm' }
    ],
    correctAnswer: 'C',
    explanation: 'Le périmètre d’un carré vaut 4 * côté = 4 * 7 = 28 cm (49 cm² étant son aire).'
  },
  {
    id: 'math-9',
    categoryId: 'mathematiques',
    difficulty: 'moyen',
    question: 'Dans un triangle rectangle, les côtés de l’angle droit mesurent 6 cm et 8 cm. Que mesure l’hypoténuse ?',
    options: [
      { id: 'A', text: '9 cm' },
      { id: 'B', text: '10 cm' },
      { id: 'C', text: '12 cm' },
      { id: 'D', text: '14 cm' }
    ],
    correctAnswer: 'B',
    explanation: 'D’après Pythagore : c² = 6² + 8² = 36 + 64 = 100, donc l’hypoténuse mesure √100 = 10 cm.'
  },
  {
    id: 'math-10',
    categoryId: 'mathematiques',
    difficulty: 'moyen',
    question: 'Quelle est la solution de l’équation 4x - 9 = 23 ?',
    options: [
      { id: 'A', text: 'x = 6' },
      { id: 'B', text: 'x = 7' },
      { id: 'C', text: 'x = 8' },
      { id: 'D', text: 'x = 9' }
    ],
    correctAnswer: 'C',
    explanation: '4x = 23 + 9 = 32, d’où x = 32 / 4 = 8.'
  },
  {
    id: 'math-11',
    categoryId: 'mathematiques',
    difficulty: 'moyen',
    question: 'Quelle est la formule de calcul de l’aire d’un disque de rayon r ?',
    options: [
      { id: 'A', text: '2 * π * r' },
      { id: 'B', text: 'π * r²' },
      { id: 'C', text: '4/3 * π * r³' },
      { id: 'D', text: 'π * d' }
    ],
    correctAnswer: 'B',
    explanation: 'L’aire d’un disque est donnée par π * r², le périmètre étant 2 * π * r.'
  },
  {
    id: 'math-12',
    categoryId: 'mathematiques',
    difficulty: 'moyen',
    question: 'Quelle est la dérivée de la fonction polynomiale f(x) = 5x³ - 4x² + 7 ?',
    options: [
      { id: 'A', text: 'f’(x) = 15x² - 8x' },
      { id: 'B', text: 'f’(x) = 15x² - 8x + 7' },
      { id: 'C', text: 'f’(x) = 10x² - 4x' },
      { id: 'D', text: 'f’(x) = 5x² - 4' }
    ],
    correctAnswer: 'A',
    explanation: 'La dérivée de 5x³ est 15x², celle de -4x² est -8x et la constante 7 s’annule.'
  },
  {
    id: 'math-13',
    categoryId: 'mathematiques',
    difficulty: 'moyen',
    question: 'Quelle est la somme des angles intérieurs de n’importe quel triangle dans le plan euclidien ?',
    options: [
      { id: 'A', text: '90°' },
      { id: 'B', text: '180°' },
      { id: 'C', text: '270°' },
      { id: 'D', text: '360°' }
    ],
    correctAnswer: 'B',
    explanation: 'Dans l’espace euclidien, la somme des trois angles d’un triangle égale invariablement 180° (ou π radians).'
  },
  {
    id: 'math-14',
    categoryId: 'mathematiques',
    difficulty: 'moyen',
    question: 'Quelle est la probabilité d’obtenir un total de 7 en lançant deux dés équilibrés à 6 faces ?',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/12' },
      { id: 'C', text: '7/36' },
      { id: 'D', text: '5/36' }
    ],
    correctAnswer: 'A',
    explanation: 'Il y a 6 combinaisons totalisant 7 ((1,6), (2,5), (3,4), (4,3), (5,2), (6,1)) sur 36 résultats possibles : 6/36 = 1/6.'
  },
  {
    id: 'math-15',
    categoryId: 'mathematiques',
    difficulty: 'moyen',
    question: 'Si un produit coûte 100 € et subit une hausse de 20%, puis une baisse de 20%, quel est son prix final ?',
    options: [
      { id: 'A', text: '100 €' },
      { id: 'B', text: '96 €' },
      { id: 'C', text: '98 €' },
      { id: 'D', text: '104 €' }
    ],
    correctAnswer: 'B',
    explanation: '100 € + 20% = 120 €. Puis 120 € - 20% (soit 24 €) = 96 €.'
  },
  {
    id: 'math-16',
    categoryId: 'mathematiques',
    difficulty: 'moyen',
    question: 'Quel est le terme suivant dans la suite : 2, 6, 12, 20, 30, ... ?',
    options: [
      { id: 'A', text: '38' },
      { id: 'B', text: '40' },
      { id: 'C', text: '42' },
      { id: 'D', text: '44' }
    ],
    correctAnswer: 'C',
    explanation: 'Les incréments successifs augmentent de 2 (+4, +6, +8, +10, +12) : 30 + 12 = 42 (ou n*(n+1)).'
  },
  {
    id: 'math-17',
    categoryId: 'mathematiques',
    difficulty: 'difficile',
    question: 'Quelle est la valeur exacte du logarithme népérien du nombre d’Euler : ln(e) ?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: 'e' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'B',
    explanation: 'Le logarithme népérien étant la réciproque de l’exponentielle, ln(e^1) = 1.'
  },
  {
    id: 'math-18',
    categoryId: 'mathematiques',
    difficulty: 'difficile',
    question: 'Combien vaut l’intégrale définie de 0 à 1 de la fonction f(x) = 3x² dx ?',
    options: [
      { id: 'A', text: '0.5' },
      { id: 'B', text: '1' },
      { id: 'C', text: '1.5' },
      { id: 'D', text: '3' }
    ],
    correctAnswer: 'B',
    explanation: 'Une primitive de 3x² est x³. Évaluée entre 0 et 1 : 1³ - 0³ = 1.'
  },
  {
    id: 'math-19',
    categoryId: 'mathematiques',
    difficulty: 'difficile',
    question: 'Quel est le nombre de façons différentes de choisir 3 personnes parmi un groupe de 5 (combinaison C(5, 3)) ?',
    options: [
      { id: 'A', text: '10' },
      { id: 'B', text: '15' },
      { id: 'C', text: '20' },
      { id: 'D', text: '60' }
    ],
    correctAnswer: 'A',
    explanation: 'C(5, 3) = 5! / (3! * 2!) = (5 * 4) / 2 = 10.'
  },
  {
    id: 'math-20',
    categoryId: 'mathematiques',
    difficulty: 'difficile',
    question: 'Quelle est la relation remarquable d’Euler reliant cinq constantes fondamentales des mathématiques ?',
    options: [
      { id: 'A', text: 'e^(i * π) + 1 = 0' },
      { id: 'B', text: 'e^π + i = 1' },
      { id: 'C', text: 'π * e = i' },
      { id: 'D', text: 'ln(π) + e = 0' }
    ],
    correctAnswer: 'A',
    explanation: 'L’identité d’Euler e^(iπ) + 1 = 0 unifie 0, 1, e, i et π en une équation unanimement considérée comme la plus belle des mathématiques.'
  },
  {
    id: 'math-21',
    categoryId: 'mathematiques',
    difficulty: 'difficile',
    question: 'Quelle est la limite de (sin(x) / x) quand x tend vers 0 ?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: 'Indéterminée (l’infini)' },
      { id: 'D', text: 'π' }
    ],
    correctAnswer: 'B',
    explanation: 'C’est une limite trigonométrique remarquable fondamentale, également dérivable de la règle de L’Hôpital.'
  },
  {
    id: 'math-22',
    categoryId: 'mathematiques',
    difficulty: 'difficile',
    question: 'Si deux vecteurs u et v sont orthogonaux dans un repère orthonormé, que vaut leur produit scalaire u · v ?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '0' },
      { id: 'C', text: '-1' },
      { id: 'D', text: '||u|| * ||v||' }
    ],
    correctAnswer: 'B',
    explanation: 'Le produit scalaire est proportionnel au cosinus de l’angle. Pour 90° (π/2 rad), cos(90°) = 0, donc u · v = 0.'
  },
  {
    id: 'math-23',
    categoryId: 'mathematiques',
    difficulty: 'difficile',
    question: 'Dans un espace vectoriel, que signifie que des vecteurs sont "linéairement indépendants" ?',
    options: [
      { id: 'A', text: 'Leur somme est nulle.' },
      { id: 'B', text: 'La seule combinaison linéaire qui donne le vecteur nul est celle où tous les coefficients sont nuls.' },
      { id: 'C', text: 'Ils ont tous la même norme.' },
      { id: 'D', text: 'Ils sont tous colinéaires.' }
    ],
    correctAnswer: 'B',
    explanation: 'Si Σ (λi * vi) = 0 implique nécessairement que chaque scalaire λi = 0, la famille de vecteurs est libre.'
  },
  {
    id: 'math-24',
    categoryId: 'mathematiques',
    difficulty: 'difficile',
    question: 'Quel mathématicien français a formulé le "Dernier Théorème" résolu par Andrew Wiles plus de 350 ans plus tard ?',
    options: [
      { id: 'A', text: 'René Descartes' },
      { id: 'B', text: 'Pierre de Fermat' },
      { id: 'C', text: 'Blaise Pascal' },
      { id: 'D', text: 'Henri Poincaré' }
    ],
    correctAnswer: 'B',
    explanation: 'Pierre de Fermat affirmait en 1637 qu’il n’existe aucun entier non nul pour x^n + y^n = z^n dès que n > 2.'
  },
  {
    id: 'math-25',
    categoryId: 'mathematiques',
    difficulty: 'difficile',
    question: 'Combien d’arêtes possède un icosaèdre régulier (polyèdre régulier à 20 faces triangulaires) ?',
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '30' },
      { id: 'C', text: '12' },
      { id: 'D', text: '24' }
    ],
    correctAnswer: 'B',
    explanation: 'L’icosaèdre régulier compte 20 faces, 12 sommets et 30 arêtes, vérifiant la formule d’Euler S - A + F = 12 - 30 + 20 = 2.'
  },

  // =========================================================================
  // 6. GÉOGRAPHIE MONDIALE (25 questions)
  // =========================================================================
  {
    id: 'geo-1',
    categoryId: 'geographie',
    difficulty: 'facile',
    question: 'Quelle est la capitale politique de l’Australie ?',
    options: [
      { id: 'A', text: 'Sydney' },
      { id: 'B', text: 'Melbourne' },
      { id: 'C', text: 'Canberra' },
      { id: 'D', text: 'Brisbane' }
    ],
    correctAnswer: 'C',
    explanation: 'Canberra a été fondée en 1908 comme capitale fédérale de compromis entre Sydney et Melbourne.'
  },
  {
    id: 'geo-2',
    categoryId: 'geographie',
    difficulty: 'facile',
    question: 'Quelle est la capitale officielle du Canada ?',
    options: [
      { id: 'A', text: 'Toronto' },
      { id: 'B', text: 'Montréal' },
      { id: 'C', text: 'Ottawa' },
      { id: 'D', text: 'Vancouver' }
    ],
    correctAnswer: 'C',
    explanation: 'Ottawa, située en Ontario au bord de la frontière québécoise, a été choisie par la reine Victoria en 1857.'
  },
  {
    id: 'geo-3',
    categoryId: 'geographie',
    difficulty: 'facile',
    question: 'Quelle est la capitale du Brésil ?',
    options: [
      { id: 'A', text: 'Rio de Janeiro' },
      { id: 'B', text: 'São Paulo' },
      { id: 'C', text: 'Brasília' },
      { id: 'D', text: 'Salvador' }
    ],
    correctAnswer: 'C',
    explanation: 'Inaugurée en 1960 pour déplacer la capitale vers l’intérieur des terres, Brasília a été conçue par Oscar Niemeyer.'
  },
  {
    id: 'geo-4',
    categoryId: 'geographie',
    difficulty: 'facile',
    question: 'Sur quel continent se trouve le mont Kilimandjaro ?',
    options: [
      { id: 'A', text: 'L’Asie' },
      { id: 'B', text: 'L’Afrique' },
      { id: 'C', text: 'L’Amérique du Sud' },
      { id: 'D', text: 'L’Océanie' }
    ],
    correctAnswer: 'B',
    explanation: 'Le Kilimandjaro culmine à 5 895 mètres en Tanzanie, constituant le point culminant du continent africain.'
  },
  {
    id: 'geo-5',
    categoryId: 'geographie',
    difficulty: 'facile',
    question: 'Quel océan est le plus étendu de la planète ?',
    options: [
      { id: 'A', text: 'L’océan Atlantique' },
      { id: 'B', text: 'L’océan Pacifique' },
      { id: 'C', text: 'L’océan Indien' },
      { id: 'D', text: 'L’océan Arctique' }
    ],
    correctAnswer: 'B',
    explanation: 'L’océan Pacifique couvre plus de 165 millions de km², soit un tiers de la surface de la Terre.'
  },
  {
    id: 'geo-6',
    categoryId: 'geographie',
    difficulty: 'facile',
    question: 'Quel fleuve traverse la ville de Paris ?',
    options: [
      { id: 'A', text: 'La Loire' },
      { id: 'B', text: 'La Seine' },
      { id: 'C', text: 'Le Rhône' },
      { id: 'D', text: 'La Garonne' }
    ],
    correctAnswer: 'B',
    explanation: 'La Seine serpente sur 777 km du plateau de Langres jusqu’à la Manche en traversant le cœur de Paris.'
  },
  {
    id: 'geo-7',
    categoryId: 'geographie',
    difficulty: 'facile',
    question: 'Quel est le pays le plus vaste du monde en superficie terrestre ?',
    options: [
      { id: 'A', text: 'Le Canada' },
      { id: 'B', text: 'La Russie' },
      { id: 'C', text: 'La Chine' },
      { id: 'D', text: 'Les États-Unis' }
    ],
    correctAnswer: 'B',
    explanation: 'La Russie s’étend sur plus de 17 millions de km², à cheval sur l’Europe de l’Est et l’Asie du Nord.'
  },
  {
    id: 'geo-8',
    categoryId: 'geographie',
    difficulty: 'facile',
    question: 'Quelle est la capitale du Japon ?',
    options: [
      { id: 'A', text: 'Kyoto' },
      { id: 'B', text: 'Osaka' },
      { id: 'C', text: 'Tokyo' },
      { id: 'D', text: 'Nagoya' }
    ],
    correctAnswer: 'C',
    explanation: 'Tokyo (anciennement Edo) est la capitale de l’archipel nippon et abrite la résidence impériale.'
  },
  {
    id: 'geo-9',
    categoryId: 'geographie',
    difficulty: 'moyen',
    question: 'Quel est le plus haut sommet du monde au-dessus du niveau de la mer ?',
    options: [
      { id: 'A', text: 'Le K2' },
      { id: 'B', text: 'L’Everest' },
      { id: 'C', text: 'Le Kangchenjunga' },
      { id: 'D', text: 'Le Makalu' }
    ],
    correctAnswer: 'B',
    explanation: 'L’Everest culmine à 8 848,86 mètres dans l’Himalaya, à la frontière entre le Népal et le Tibet.'
  },
  {
    id: 'geo-10',
    categoryId: 'geographie',
    difficulty: 'moyen',
    question: 'Quel est le fleuve le plus puissant du monde en débit volumique ?',
    options: [
      { id: 'A', text: 'Le Nil' },
      { id: 'B', text: 'L’Amazone' },
      { id: 'C', text: 'Le Yangzi Jiang' },
      { id: 'D', text: 'Le Mississippi' }
    ],
    correctAnswer: 'B',
    explanation: 'L’Amazone déverse en moyenne 209 000 m³/s dans l’océan Atlantique, un volume supérieur aux 7 fleuves suivants réunis.'
  },
  {
    id: 'geo-11',
    categoryId: 'geographie',
    difficulty: 'moyen',
    question: 'Quel est le plus grand désert chaud de notre planète ?',
    options: [
      { id: 'A', text: 'Le désert de Gobi' },
      { id: 'B', text: 'Le Sahara' },
      { id: 'C', text: 'Le désert du Kalahari' },
      { id: 'D', text: 'Le désert d’Atacama' }
    ],
    correctAnswer: 'B',
    explanation: 'Le Sahara s’étend sur plus de 9 millions de km² à travers l’Afrique du Nord.'
  },
  {
    id: 'geo-12',
    categoryId: 'geographie',
    difficulty: 'moyen',
    question: 'Quel détroit sépare l’Espagne (Europe) du Maroc (Afrique) ?',
    options: [
      { id: 'A', text: 'Le détroit du Bosphore' },
      { id: 'B', text: 'Le détroit de Gibraltar' },
      { id: 'C', text: 'Le détroit d’Ormuz' },
      { id: 'D', text: 'Le détroit des Dardanelles' }
    ],
    correctAnswer: 'B',
    explanation: 'Le détroit de Gibraltar relie la mer Méditerranée à l’océan Atlantique avec seulement 14 km de largeur minimale.'
  },
  {
    id: 'geo-13',
    categoryId: 'geographie',
    difficulty: 'moyen',
    question: 'Quel lac d’eau douce de Sibérie est le plus profond et le plus ancien du monde ?',
    options: [
      { id: 'A', text: 'Le lac Supérieur' },
      { id: 'B', text: 'Le lac Baïkal' },
      { id: 'C', text: 'Le lac Victoria' },
      { id: 'D', text: 'Le lac Ladoga' }
    ],
    correctAnswer: 'B',
    explanation: 'Le lac Baïkal atteint 1 642 mètres de profondeur et renferme un cinquième des réserves mondiales d’eau douce non gelée.'
  },
  {
    id: 'geo-14',
    categoryId: 'geographie',
    difficulty: 'moyen',
    question: 'Quelle est la capitale administrative de l’Afrique du Sud ?',
    options: [
      { id: 'A', text: 'Johannesburg' },
      { id: 'B', text: 'Pretoria' },
      { id: 'C', text: 'Le Cap' },
      { id: 'D', text: 'Durban' }
    ],
    correctAnswer: 'B',
    explanation: 'L’Afrique du Sud a trois capitales : Pretoria (siège administratif), Le Cap (législatif) et Bloemfontein (judiciaire).'
  },
  {
    id: 'geo-15',
    categoryId: 'geographie',
    difficulty: 'moyen',
    question: 'Quel canal maritime artificiel inauguré en 1869 relie la mer Méditerranée à la mer Rouge ?',
    options: [
      { id: 'A', text: 'Le canal de Panama' },
      { id: 'B', text: 'Le canal de Suez' },
      { id: 'C', text: 'Le canal de Corinthe' },
      { id: 'D', text: 'Le canal de Kiel' }
    ],
    correctAnswer: 'B',
    explanation: 'Percé en Égypte sous la direction de Ferdinand de Lesseps, le canal de Suez évite de contourner l’Afrique.'
  },
  {
    id: 'geo-16',
    categoryId: 'geographie',
    difficulty: 'moyen',
    question: 'Quelle chaîne de montagnes sépare traditionnellement la Russie européenne de la Russie asiatique ?',
    options: [
      { id: 'A', text: 'Le Caucase' },
      { id: 'B', text: 'L’Oural' },
      { id: 'C', text: 'L’Altaï' },
      { id: 'D', text: 'Les Carpates' }
    ],
    correctAnswer: 'B',
    explanation: 'Les monts Oural s’étendent du nord au sud sur 2 500 km et matérialisent la frontière géographique entre Europe et Asie.'
  },
  {
    id: 'geo-17',
    categoryId: 'geographie',
    difficulty: 'difficile',
    question: 'Quel pays d’Amérique du Sud possède la plus longue côte sur l’océan Pacifique avec un territoire très étroit ?',
    options: [
      { id: 'A', text: 'Le Pérou' },
      { id: 'B', text: 'Le Chili' },
      { id: 'C', text: 'L’Argentine' },
      { id: 'D', text: 'L’Équateur' }
    ],
    correctAnswer: 'B',
    explanation: 'Le Chili s’étire sur plus de 4 300 km du nord au sud entre la cordillère des Andes et l’océan Pacifique.'
  },
  {
    id: 'geo-18',
    categoryId: 'geographie',
    difficulty: 'difficile',
    question: 'Quelle est la capitale politique de la Nouvelle-Zélande ?',
    options: [
      { id: 'A', text: 'Auckland' },
      { id: 'B', text: 'Wellington' },
      { id: 'C', text: 'Christchurch' },
      { id: 'D', text: 'Dunedin' }
    ],
    correctAnswer: 'B',
    explanation: 'Bien qu’Auckland soit la ville la plus peuplée, Wellington (à la pointe sud de l’île du Nord) est la capitale depuis 1865.'
  },
  {
    id: 'geo-19',
    categoryId: 'geographie',
    difficulty: 'difficile',
    question: 'Quelle est la capitale de la Mongolie ?',
    options: [
      { id: 'A', text: 'Astana' },
      { id: 'B', text: 'Oulan-Bator' },
      { id: 'C', text: 'Tachkent' },
      { id: 'D', text: 'Bichkek' }
    ],
    correctAnswer: 'B',
    explanation: 'Oulan-Bator abrite près de la moitié de la population mongole et est réputée comme la capitale la plus froide du monde.'
  },
  {
    id: 'geo-20',
    categoryId: 'geographie',
    difficulty: 'difficile',
    question: 'Quel détroit maritime stratégique sépare l’Iran et Oman, reliant le golfe Persique au golfe d’Oman ?',
    options: [
      { id: 'A', text: 'Le détroit de Malacca' },
      { id: 'B', text: 'Le détroit d’Ormuz' },
      { id: 'C', text: 'Le détroit de Bab-el-Mandeb' },
      { id: 'D', text: 'Le détroit de Béring' }
    ],
    correctAnswer: 'B',
    explanation: 'Le détroit d’Ormuz est le point de passage maritime pétrolier le plus stratégique au monde.'
  },
  {
    id: 'geo-21',
    categoryId: 'geographie',
    difficulty: 'difficile',
    question: 'Quel État enclavé d’Afrique australe est entièrement entouré par le territoire de l’Afrique du Sud ?',
    options: [
      { id: 'A', text: 'L’Eswatini (Swaziland)' },
      { id: 'B', text: 'Le Lesotho' },
      { id: 'C', text: 'Le Botswana' },
      { id: 'D', text: 'La Namibie' }
    ],
    correctAnswer: 'B',
    explanation: 'Le royaume du Lesotho est un État souverain montagnard intégralement enclavé au sein de l’Afrique du Sud.'
  },
  {
    id: 'geo-22',
    categoryId: 'geographie',
    difficulty: 'difficile',
    question: 'Quelle est la capitale de l’Islande ?',
    options: [
      { id: 'A', text: 'Oslo' },
      { id: 'B', text: 'Reykjavik' },
      { id: 'C', text: 'Helsinki' },
      { id: 'D', text: 'Tórshavn' }
    ],
    correctAnswer: 'B',
    explanation: 'Reykjavik est la capitale nationale située le plus au nord de la planète (environ 64° de latitude nord).'
  },
  {
    id: 'geo-23',
    categoryId: 'geographie',
    difficulty: 'difficile',
    question: 'Quel désert côtier d’Amérique du Sud est considéré comme l’un des endroits les plus arides de la planète ?',
    options: [
      { id: 'A', text: 'Le désert du Kalahari' },
      { id: 'B', text: 'Le désert d’Atacama' },
      { id: 'C', text: 'Le désert de Sonora' },
      { id: 'D', text: 'Le désert des Mojaves' }
    ],
    correctAnswer: 'B',
    explanation: 'Situé au nord du Chili, le désert d’Atacama connaît des stations météo où aucune goutte de pluie n’a été enregistrée depuis des décennies.'
  },
  {
    id: 'geo-24',
    categoryId: 'geographie',
    difficulty: 'difficile',
    question: 'Quelle étendue d’eau salée fermée, située entre la Jordanie et Israël, possède la plus basse altitude émergée du globe (-430 m) ?',
    options: [
      { id: 'A', text: 'La mer Caspienne' },
      { id: 'B', text: 'La mer Morte' },
      { id: 'C', text: 'Le lac d’Aral' },
      { id: 'D', text: 'La mer Noire' }
    ],
    correctAnswer: 'B',
    explanation: 'La mer Morte a une salinité extrême (~34%) empêchant tout poisson d’y vivre, d’où son nom.'
  },
  {
    id: 'geo-25',
    categoryId: 'geographie',
    difficulty: 'difficile',
    question: 'Quel détroit maritime sépare la péninsule malaise de l’île indonésienne de Sumatra ?',
    options: [
      { id: 'A', text: 'Le détroit de la Sonde' },
      { id: 'B', text: 'Le détroit de Malacca' },
      { id: 'C', text: 'Le détroit de Torrès' },
      { id: 'D', text: 'Le détroit de Magellan' }
    ],
    correctAnswer: 'B',
    explanation: 'Le détroit de Malacca est l’une des voies maritimes commerciales les plus fréquentées de la planète entre l’océan Indien et le Pacifique.'
  }
];

export const getQuestionsByCategory = (categoryId) => QUESTIONS.filter(q => q.categoryId === categoryId);
export const getQuestionsByQuizId = (quizId) => QUESTIONS.filter(q => q.quizId === quizId || q.categoryId === quizId);
export const getQuestionById = (id) => QUESTIONS.find(q => q.id === id);
