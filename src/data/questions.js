import { ADDITIONAL_QUESTIONS } from './additionalQuestions.js';

/**
 * QuizMaster - Banque de Questions (660 Questions)
 * 110 questions par discipline sur les 6 catégories et 3 niveaux de difficulté.
 * Utilisée avec le moteur anti-répétition pour composer des épreuves inédites à chaque session :
 * - Niveau Facile : 5 questions (tirage sans répétition)
 * - Niveau Moyen : 10 questions (tirage sans répétition)
 * - Niveau Difficile : 20 questions (tirage sans répétition)
 */

const BASE_QUESTIONS = [
  {
    "id": "info-1",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Que signifie l’acronyme HTML en développement web ?",
    "options": [
      {
        "id": "A",
        "text": "HyperText Markup Language"
      },
      {
        "id": "B",
        "text": "High Tech Modern Language"
      },
      {
        "id": "C",
        "text": "Hyperlinks and Text Manipulation Language"
      },
      {
        "id": "D",
        "text": "Home Tool Markup Language"
      }
    ],
    "correctAnswer": "A",
    "explanation": "HTML (HyperText Markup Language) est le langage de balisage standard conçu pour structurer et créer des pages web."
  },
  {
    "id": "info-2",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Quelle balise HTML est utilisée pour insérer une image dans une page ?",
    "options": [
      {
        "id": "A",
        "text": "<picture-src>"
      },
      {
        "id": "B",
        "text": "<img>"
      },
      {
        "id": "C",
        "text": "<image>"
      },
      {
        "id": "D",
        "text": "<src>"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La balise auto-fermante <img> avec l’attribut src permet d’afficher une image dans un document HTML."
  },
  {
    "id": "info-3",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "En CSS, quelle propriété permet de modifier la couleur de fond d’un élément ?",
    "options": [
      {
        "id": "A",
        "text": "color"
      },
      {
        "id": "B",
        "text": "bgcolor"
      },
      {
        "id": "C",
        "text": "background-color"
      },
      {
        "id": "D",
        "text": "surface-color"
      }
    ],
    "correctAnswer": "C",
    "explanation": "La propriété \"background-color\" spécifie la couleur de remplissage du fond d’un élément HTML."
  },
  {
    "id": "info-4",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Quelle est la différence fondamentale entre les mots-clés \"let\" et \"var\" en JavaScript ?",
    "options": [
      {
        "id": "A",
        "text": "\"var\" a une portée de bloc, tandis que \"let\" a une portée de fonction."
      },
      {
        "id": "B",
        "text": "\"let\" a une portée de bloc, tandis que \"var\" a une portée de fonction."
      },
      {
        "id": "C",
        "text": "\"let\" rend la variable immuable et impossible à modifier."
      },
      {
        "id": "D",
        "text": "Il n’existe aucune différence de comportement."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Depuis ES6, \"let\" respecte la portée de bloc ({...}), contrairement à \"var\" qui a une portée de fonction et subit le hissage (hoisting)."
  },
  {
    "id": "info-5",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Quelle commande Git initialise un nouveau dépôt local dans le dossier courant ?",
    "options": [
      {
        "id": "A",
        "text": "git start"
      },
      {
        "id": "B",
        "text": "git create"
      },
      {
        "id": "C",
        "text": "git init"
      },
      {
        "id": "D",
        "text": "git clone"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"git init\" crée un nouveau sous-dossier .git et initialise le répertoire de travail comme dépôt Git."
  },
  {
    "id": "info-6",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Que renvoie l’expression typeof NaN en JavaScript standard ?",
    "options": [
      {
        "id": "A",
        "text": "\"undefined\""
      },
      {
        "id": "B",
        "text": "\"nan\""
      },
      {
        "id": "C",
        "text": "\"number\""
      },
      {
        "id": "D",
        "text": "\"object\""
      }
    ],
    "correctAnswer": "C",
    "explanation": "NaN (Not a Number) est une valeur numérique spéciale définie par le standard IEEE 754, typeof NaN renvoie donc \"number\"."
  },
  {
    "id": "info-7",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Quel symbole représente l’égalité stricte (valeur ET type) en JavaScript ?",
    "options": [
      {
        "id": "A",
        "text": "=="
      },
      {
        "id": "B",
        "text": "==="
      },
      {
        "id": "C",
        "text": "="
      },
      {
        "id": "D",
        "text": "eq"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’opérateur === vérifie à la fois l’égalité des valeurs et la correspondance exacte des types sans conversion implicite."
  },
  {
    "id": "info-8",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Quelle méthode de tableau JavaScript renvoie un nouveau tableau transformé ?",
    "options": [
      {
        "id": "A",
        "text": "Array.prototype.map()"
      },
      {
        "id": "B",
        "text": "Array.prototype.forEach()"
      },
      {
        "id": "C",
        "text": "Array.prototype.push()"
      },
      {
        "id": "D",
        "text": "Array.prototype.splice()"
      }
    ],
    "correctAnswer": "A",
    "explanation": "map() est une fonction pure qui génère et retourne un nouveau tableau sans muter le tableau initial."
  },
  {
    "id": "info-9",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Quel Hook React est spécifiquement conçu pour mémoriser le résultat d’un calcul coûteux ?",
    "options": [
      {
        "id": "A",
        "text": "useCallback"
      },
      {
        "id": "B",
        "text": "useMemo"
      },
      {
        "id": "C",
        "text": "useEffect"
      },
      {
        "id": "D",
        "text": "useRef"
      }
    ],
    "correctAnswer": "B",
    "explanation": "useMemo mémorise une valeur calculée et ne la recalcule que si l’une de ses dépendances a changé."
  },
  {
    "id": "info-10",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Pourquoi ne faut-il pas muter directement l’état dans React (ex: state.count = 5) ?",
    "options": [
      {
        "id": "A",
        "text": "Parce que cela bloque le moteur JavaScript."
      },
      {
        "id": "B",
        "text": "Car React ne détecte pas le changement par référence et ne déclenche aucun re-render."
      },
      {
        "id": "C",
        "text": "Car le DOM est immédiatement supprimé."
      },
      {
        "id": "D",
        "text": "Parce que le navigateur déclenche une erreur réseau."
      }
    ],
    "correctAnswer": "B",
    "explanation": "React utilise la comparaison par référence. Muter l’état directement empêche la détection des changements et la réconciliation."
  },
  {
    "id": "info-11",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Que retourne la fonction de nettoyage (cleanup) renvoyée par useEffect ?",
    "options": [
      {
        "id": "A",
        "text": "Une promesse résolue."
      },
      {
        "id": "B",
        "text": "Une fonction exécutée avant le prochain effet ou lors du démontage du composant."
      },
      {
        "id": "C",
        "text": "Un objet JSON."
      },
      {
        "id": "D",
        "text": "L’état initial du composant."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La fonction de nettoyage permet de désabonner les écouteurs, d’annuler les timers et d’éviter les fuites mémoire."
  },
  {
    "id": "info-12",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Quel code de statut HTTP indique une ressource non trouvée ?",
    "options": [
      {
        "id": "A",
        "text": "200 OK"
      },
      {
        "id": "B",
        "text": "401 Unauthorized"
      },
      {
        "id": "C",
        "text": "404 Not Found"
      },
      {
        "id": "D",
        "text": "500 Internal Server Error"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Le code HTTP 404 signale que le serveur n’a pas trouvé la ressource demandée à l’URL spécifiée."
  },
  {
    "id": "info-13",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "En SQL, quelle clause permet de filtrer les résultats agrégés d’un GROUP BY ?",
    "options": [
      {
        "id": "A",
        "text": "WHERE"
      },
      {
        "id": "B",
        "text": "HAVING"
      },
      {
        "id": "C",
        "text": "ORDER BY"
      },
      {
        "id": "D",
        "text": "FILTER"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La clause HAVING filtre les groupes formés par GROUP BY, alors que WHERE filtre les lignes individuelles avant agrégation."
  },
  {
    "id": "info-14",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Qu’est-ce qu’une fermeture (closure) en JavaScript ?",
    "options": [
      {
        "id": "A",
        "text": "Une balise HTML mal fermée."
      },
      {
        "id": "B",
        "text": "Une fonction qui a accès aux variables de sa portée lexicale parente même après son exécution."
      },
      {
        "id": "C",
        "text": "L’arrêt forcé d’un thread."
      },
      {
        "id": "D",
        "text": "Une méthode de chiffrement SSL."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Une closure est une fonction liée à son environnement lexical, capable de mémoriser et d’accéder aux variables de sa portée parente."
  },
  {
    "id": "info-15",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Quelle est la fonction du Virtual DOM dans React ?",
    "options": [
      {
        "id": "A",
        "text": "Remplacer complètement le navigateur web."
      },
      {
        "id": "B",
        "text": "Calculer les différences en mémoire (diffing) pour appliquer les mutations minimales au DOM réel."
      },
      {
        "id": "C",
        "text": "Chiffrer les requêtes HTTP."
      },
      {
        "id": "D",
        "text": "Compiler le code en assembleur x86."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le Virtual DOM optimise les performances en comparant les arbres en mémoire et en minimisant les écritures coûteuses dans le vrai DOM."
  },
  {
    "id": "info-16",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Quelle commande Git permet de fusionner une branche secondaire dans la branche active ?",
    "options": [
      {
        "id": "A",
        "text": "git push"
      },
      {
        "id": "B",
        "text": "git merge"
      },
      {
        "id": "C",
        "text": "git branch --combine"
      },
      {
        "id": "D",
        "text": "git union"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"git merge <branche>\" intègre l’historique et les commits de la branche spécifiée dans la branche actuellement extraite."
  },
  {
    "id": "info-17",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quelle est la complexité temporelle moyenne d’une recherche par dichotomie (Binary Search) ?",
    "options": [
      {
        "id": "A",
        "text": "O(1)"
      },
      {
        "id": "B",
        "text": "O(log n)"
      },
      {
        "id": "C",
        "text": "O(n)"
      },
      {
        "id": "D",
        "text": "O(n log n)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En divisant l’espace de recherche par deux à chaque étape, la dichotomie s’exécute en temps logarithmique O(log n)."
  },
  {
    "id": "info-18",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quelle structure de données repose sur le principe LIFO (Last In, First Out) ?",
    "options": [
      {
        "id": "A",
        "text": "File (Queue)"
      },
      {
        "id": "B",
        "text": "Pile (Stack)"
      },
      {
        "id": "C",
        "text": "Table de hachage"
      },
      {
        "id": "D",
        "text": "Arbre binaire"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Une pile (Stack) insère et retire les données par son sommet : le dernier élément ajouté est le premier extrait (LIFO)."
  },
  {
    "id": "info-19",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quel algorithme de tri garantit une complexité au pire des cas en O(n log n) ?",
    "options": [
      {
        "id": "A",
        "text": "Tri à bulles (Bubble Sort)"
      },
      {
        "id": "B",
        "text": "Tri fusion (Merge Sort)"
      },
      {
        "id": "C",
        "text": "Tri rapide naïf (Quick Sort)"
      },
      {
        "id": "D",
        "text": "Tri par sélection"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le tri fusion divise systématiquement le tableau en deux et fusionne les sous-tableaux triés, garantissant O(n log n) en toutes circonstances."
  },
  {
    "id": "info-20",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "En cybersécurité, qu’est-ce qu’une attaque par injection SQL ?",
    "options": [
      {
        "id": "A",
        "text": "Une surchauffe physique du processeur."
      },
      {
        "id": "B",
        "text": "L’insertion malveillante de fragments SQL dans un champ utilisateur pour altérer les requêtes de la base de données."
      },
      {
        "id": "C",
        "text": "Le vol de mot de passe par écoute passive du Wi-Fi."
      },
      {
        "id": "D",
        "text": "Une attaque par déni de service distribué (DDoS)."
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’injection SQL exploite des entrées utilisateur non échappées ou non paramétrées pour exécuter des commandes arbitraires sur la base."
  },
  {
    "id": "info-21",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quel principe SOLID stipule qu’une entité logicielle doit être ouverte à l’extension mais fermée à la modification ?",
    "options": [
      {
        "id": "A",
        "text": "Single Responsibility Principle"
      },
      {
        "id": "B",
        "text": "Open/Closed Principle"
      },
      {
        "id": "C",
        "text": "Liskov Substitution Principle"
      },
      {
        "id": "D",
        "text": "Dependency Inversion Principle"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le principe Ouvert/Fermé (Open/Closed) invite à concevoir des modules extensibles (via héritage/polymorphisme) sans modifier le code source existant."
  },
  {
    "id": "info-22",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Comment fonctionne l’Event Loop (boucle d’événements) de Node.js et du moteur V8 ?",
    "options": [
      {
        "id": "A",
        "text": "Elle crée un thread natif pour chaque ligne de code JavaScript."
      },
      {
        "id": "B",
        "text": "Elle traite la pile d’appels synchrone (Call Stack) puis dépile les microtâches (Promises) avant les macrotâches (setTimeout)."
      },
      {
        "id": "C",
        "text": "Elle redémarre le système d’exploitation en continu."
      },
      {
        "id": "D",
        "text": "Elle désactive le garbage collector lors des requêtes HTTP."
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’Event Loop ordonnance l’exécution asynchrone non-bloquante : la Call Stack est vidée, puis la microtask queue est prioritaire sur les timers et I/O."
  },
  {
    "id": "info-23",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quelle est la complexité d’accès moyenne à une valeur dans une table de hachage bien équilibrée ?",
    "options": [
      {
        "id": "A",
        "text": "O(1)"
      },
      {
        "id": "B",
        "text": "O(log n)"
      },
      {
        "id": "C",
        "text": "O(n)"
      },
      {
        "id": "D",
        "text": "O(n²)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Grâce au calcul direct de l’index via la fonction de hachage, l’accès s’effectue en temps constant moyen O(1)."
  },
  {
    "id": "info-24",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Qu’est-ce qu’un jeton JWT (JSON Web Token) et de combien de parties est-il composé ?",
    "options": [
      {
        "id": "A",
        "text": "2 parties : Header et Payload"
      },
      {
        "id": "B",
        "text": "3 parties séparées par des points : Header, Payload et Signature"
      },
      {
        "id": "C",
        "text": "4 parties avec certificat SSL"
      },
      {
        "id": "D",
        "text": "1 chaîne cryptée unique sans structure"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Un JWT est composé de 3 parties encodées en base64url et séparées par des points : l’en-tête (Header), la charge utile (Payload) et la signature."
  },
  {
    "id": "info-25",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quel protocole de communication réseau fonctionne en mode connecté avec garantie de remise ordonnée des paquets ?",
    "options": [
      {
        "id": "A",
        "text": "UDP"
      },
      {
        "id": "B",
        "text": "TCP"
      },
      {
        "id": "C",
        "text": "ICMP"
      },
      {
        "id": "D",
        "text": "DNS"
      }
    ],
    "correctAnswer": "B",
    "explanation": "TCP (Transmission Control Protocol) établit une connexion fiable (handshake 3 voies) avec accusés de réception, réordonnancement et contrôle de congestion."
  },
  {
    "id": "cult-1",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Qui a peint le célèbre tableau de \"La Joconde\" exposé au musée du Louvre ?",
    "options": [
      {
        "id": "A",
        "text": "Michel-Ange"
      },
      {
        "id": "B",
        "text": "Léonard de Vinci"
      },
      {
        "id": "C",
        "text": "Raphaël"
      },
      {
        "id": "D",
        "text": "Sandro Botticelli"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Léonard de Vinci a peint le portrait de Monna Lisa au début du XVIe siècle en employant sa célèbre technique du sfumato."
  },
  {
    "id": "cult-2",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "En quelle année a eu lieu la prise de la Bastille, symbole de la Révolution française ?",
    "options": [
      {
        "id": "A",
        "text": "1776"
      },
      {
        "id": "B",
        "text": "1789"
      },
      {
        "id": "C",
        "text": "1799"
      },
      {
        "id": "D",
        "text": "1804"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le 14 juillet 1789, le peuple parisien s’empare de la forteresse royale de la Bastille."
  },
  {
    "id": "cult-3",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Quel dramaturge anglais a écrit la célèbre tragédie \"Romeo et Juliette\" ?",
    "options": [
      {
        "id": "A",
        "text": "William Shakespeare"
      },
      {
        "id": "B",
        "text": "Charles Dickens"
      },
      {
        "id": "C",
        "text": "Oscar Wilde"
      },
      {
        "id": "D",
        "text": "Arthur Conan Doyle"
      }
    ],
    "correctAnswer": "A",
    "explanation": "William Shakespeare a composé \"Roméo et Juliette\" à la fin du XVIe siècle, immortalisant les amants maudits de Vérone."
  },
  {
    "id": "cult-4",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Quel compositeur autrichien a créé \"La Flûte enchantée\" et \"Les Noces de Figaro\" ?",
    "options": [
      {
        "id": "A",
        "text": "Ludwig van Beethoven"
      },
      {
        "id": "B",
        "text": "Wolfgang Amadeus Mozart"
      },
      {
        "id": "C",
        "text": "Johann Sebastian Bach"
      },
      {
        "id": "D",
        "text": "Franz Schubert"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mozart, génie prodige de la période classique, a composé ces opéras universellement acclamés avant sa mort en 1791."
  },
  {
    "id": "cult-5",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Dans quelle ville peut-on visiter la célèbre statue de la Liberté ?",
    "options": [
      {
        "id": "A",
        "text": "Washington D.C."
      },
      {
        "id": "B",
        "text": "New York"
      },
      {
        "id": "C",
        "text": "Boston"
      },
      {
        "id": "D",
        "text": "Chicago"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Offerte par la France en signe d’amitié, la statue de la Liberté veille sur le port de New York à Liberty Island depuis 1886."
  },
  {
    "id": "cult-6",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Quel héros de bande dessinée belge est toujours accompagné de son chien Milou ?",
    "options": [
      {
        "id": "A",
        "text": "Spirou"
      },
      {
        "id": "B",
        "text": "Tintin"
      },
      {
        "id": "C",
        "text": "Lucky Luke"
      },
      {
        "id": "D",
        "text": "Gaston Lagaffe"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tintin, le jeune reporter créé par Hergé en 1929, voyage à travers le monde avec son fidèle fox-terrier blanc Milou."
  },
  {
    "id": "cult-7",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Quel est l’instrument de musique à vent emblématique de la culture traditionnelle écossaise ?",
    "options": [
      {
        "id": "A",
        "text": "La flûte traversière"
      },
      {
        "id": "B",
        "text": "La cornemuse"
      },
      {
        "id": "C",
        "text": "Le cor de chasse"
      },
      {
        "id": "D",
        "text": "L’accordéon"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La cornemuse des Highlands (Great Highland Bagpipe) est l’instrument national traditionnel d’Écosse."
  },
  {
    "id": "cult-8",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Quel monument parisien a été construit pour l’Exposition universelle de 1889 ?",
    "options": [
      {
        "id": "A",
        "text": "L’Arc de Triomphe"
      },
      {
        "id": "B",
        "text": "La Tour Eiffel"
      },
      {
        "id": "C",
        "text": "Le Panthéon"
      },
      {
        "id": "D",
        "text": "L’Opéra Garnier"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Conçue par les ingénieurs de Gustave Eiffel, la Tour Eiffel célébrait le centenaire de la Révolution française."
  },
  {
    "id": "cult-9",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel écrivain français a composé le chef-d’œuvre \"À la recherche du temps perdu\" ?",
    "options": [
      {
        "id": "A",
        "text": "Marcel Proust"
      },
      {
        "id": "B",
        "text": "Gustave Flaubert"
      },
      {
        "id": "C",
        "text": "Émile Zola"
      },
      {
        "id": "D",
        "text": "Honoré de Balzac"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Marcel Proust a révolutionné le roman moderne avec cette œuvre magistrale en sept tomes publiée entre 1913 et 1927."
  },
  {
    "id": "cult-10",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel mouvement artistique Claude Monet a-t-il contribué à baptiser avec son tableau de 1872 ?",
    "options": [
      {
        "id": "A",
        "text": "Le Cubisme"
      },
      {
        "id": "B",
        "text": "L’Impressionnisme"
      },
      {
        "id": "C",
        "text": "Le Surréalisme"
      },
      {
        "id": "D",
        "text": "Le Fauvisme"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Impression, soleil levant\" de Monet a donné son nom au mouvement impressionniste après la critique satirique de Louis Leroy."
  },
  {
    "id": "cult-11",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Qui est l’auteur du roman dystopique \"1984\" mettant en scène Big Brother ?",
    "options": [
      {
        "id": "A",
        "text": "Aldous Huxley"
      },
      {
        "id": "B",
        "text": "George Orwell"
      },
      {
        "id": "C",
        "text": "Ray Bradbury"
      },
      {
        "id": "D",
        "text": "Philip K. Dick"
      }
    ],
    "correctAnswer": "B",
    "explanation": "George Orwell a publié \"1984\" en 1949 pour dénoncer le totalitarisme, la novlangue et la surveillance omnisciente."
  },
  {
    "id": "cult-12",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel sculpteur français a réalisé \"Le Penseur\" et \"Le Baiser\" ?",
    "options": [
      {
        "id": "A",
        "text": "Auguste Rodin"
      },
      {
        "id": "B",
        "text": "Camille Claudel"
      },
      {
        "id": "C",
        "text": "Jean-Baptiste Carpeaux"
      },
      {
        "id": "D",
        "text": "Antoine Bourdelle"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Auguste Rodin est considéré comme le géant de la sculpture moderne française du XIXe siècle."
  },
  {
    "id": "cult-13",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Dans quel musée new-yorkais est exposée \"La Nuit étoilée\" de Vincent van Gogh ?",
    "options": [
      {
        "id": "A",
        "text": "Le Met"
      },
      {
        "id": "B",
        "text": "Le MoMA"
      },
      {
        "id": "C",
        "text": "Le Guggenheim"
      },
      {
        "id": "D",
        "text": "Le Whitney Museum"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"La Nuit étoilée\" (1889) fait partie intégrante de la collection permanente du Museum of Modern Art (MoMA) de New York."
  },
  {
    "id": "cult-14",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel cinéaste a réalisé \"2001, l’Odyssée de l’espace\" et \"Orange mécanique\" ?",
    "options": [
      {
        "id": "A",
        "text": "Stanley Kubrick"
      },
      {
        "id": "B",
        "text": "Ridley Scott"
      },
      {
        "id": "C",
        "text": "Alfred Hitchcock"
      },
      {
        "id": "D",
        "text": "George Lucas"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Stanley Kubrick est réputé pour sa précision visuelle maniaque et ses chefs-d’œuvre visionnaires du 7ème art."
  },
  {
    "id": "cult-15",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel philosophe grec antique a été le maître d’Alexandre le Grand ?",
    "options": [
      {
        "id": "A",
        "text": "Socrate"
      },
      {
        "id": "B",
        "text": "Platon"
      },
      {
        "id": "C",
        "text": "Aristote"
      },
      {
        "id": "D",
        "text": "Épicure"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Aristote a été invité par le roi Philippe II de Macédoine pour instruire son jeune fils, le futur Alexandre le Grand."
  },
  {
    "id": "cult-16",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel opéra de Georges Bizet met en scène une bohémienne séductrice à Séville ?",
    "options": [
      {
        "id": "A",
        "text": "La Traviata"
      },
      {
        "id": "B",
        "text": "Carmen"
      },
      {
        "id": "C",
        "text": "Tosca"
      },
      {
        "id": "D",
        "text": "Madame Butterfly"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Créé en 1875 à l’Opéra-Comique de Paris, \"Carmen\" de Bizet est l’un des opéras les plus joués dans le monde."
  },
  {
    "id": "cult-17",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel peintre espagnol a peint l’immense toile engagée \"Guernica\" en 1937 ?",
    "options": [
      {
        "id": "A",
        "text": "Salvador Dalí"
      },
      {
        "id": "B",
        "text": "Pablo Picasso"
      },
      {
        "id": "C",
        "text": "Joan Miró"
      },
      {
        "id": "D",
        "text": "Francisco de Goya"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Picasso a peint \"Guernica\" en réponse au bombardement de la ville basque par l’aviation nazie au service des franquistes."
  },
  {
    "id": "cult-18",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel poète persan du XIIIe siècle est l’auteur des célèbres distiques spirituels du \"Masnavi\" ?",
    "options": [
      {
        "id": "A",
        "text": "Omar Khayyam"
      },
      {
        "id": "B",
        "text": "Rûmî (Djalâl ad-Dîn Rûmî)"
      },
      {
        "id": "C",
        "text": "Hafez de Chiraz"
      },
      {
        "id": "D",
        "text": "Ferdowsi"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rûmî est le grand maître soufi dont la poésie mystique universelle rayonne dans le monde entier."
  },
  {
    "id": "cult-19",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quelle est la première femme à avoir reçu le prix Nobel de littérature (en 1909) ?",
    "options": [
      {
        "id": "A",
        "text": "Virginia Woolf"
      },
      {
        "id": "B",
        "text": "Selma Lagerlöf"
      },
      {
        "id": "C",
        "text": "Gabriela Mistral"
      },
      {
        "id": "D",
        "text": "Pearl Buck"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’autrice suédoise Selma Lagerlöf (\"Le Merveilleux Voyage de Nils Holgersson\") fut la première lauréate en 1909."
  },
  {
    "id": "cult-20",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Dans la mythologie nordique, comment se nomme le crépuscule des dieux et la fin du monde ?",
    "options": [
      {
        "id": "A",
        "text": "Le Valhalla"
      },
      {
        "id": "B",
        "text": "Le Ragnarök"
      },
      {
        "id": "C",
        "text": "L’Yggdrasil"
      },
      {
        "id": "D",
        "text": "Le Midgard"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le Ragnarök annonce la bataille eschatologique au cours de laquelle périrent Odin, Thor et Loki avant la renaissance du monde."
  },
  {
    "id": "cult-21",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel architecte hispano-suisse a conçu le musée Guggenheim de Bilbao ?",
    "options": [
      {
        "id": "A",
        "text": "Santiago Calatrava"
      },
      {
        "id": "B",
        "text": "Frank Gehry"
      },
      {
        "id": "C",
        "text": "Renzo Piano"
      },
      {
        "id": "D",
        "text": "Zaha Hadid"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’architecte canado-américain Frank Gehry a signé cette prouesse déconstructiviste en titane inaugurée en 1997."
  },
  {
    "id": "cult-22",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel roman de James Joyce relate en détail la journée du 16 juin 1904 à Dublin ?",
    "options": [
      {
        "id": "A",
        "text": "Ulysse (Ulysses)"
      },
      {
        "id": "B",
        "text": "Finnegans Wake"
      },
      {
        "id": "C",
        "text": "Gens de Dublin"
      },
      {
        "id": "D",
        "text": "Portrait de l’artiste en jeune homme"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Dans \"Ulysse\", Joyce suit les pérégrinations de Leopold Bloom au fil de cette journée commémorée sous le nom de \"Bloomsday\"."
  },
  {
    "id": "cult-23",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "À quel courant philosophique rattache-t-on Jean-Paul Sartre et Simone de Beauvoir ?",
    "options": [
      {
        "id": "A",
        "text": "Le Structuralisme"
      },
      {
        "id": "B",
        "text": "L’Existentialisme"
      },
      {
        "id": "C",
        "text": "Le Positivisme"
      },
      {
        "id": "D",
        "text": "Le Pragmatisme"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’existentialisme proclame que \"l’existence précède l’essence\", plaçant la liberté et la responsabilité humaine au centre."
  },
  {
    "id": "cult-24",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quelle cantate profane de Carl Orff s’ouvre sur le chœur magistral \"O Fortuna\" ?",
    "options": [
      {
        "id": "A",
        "text": "Carmina Burana"
      },
      {
        "id": "B",
        "text": "Catulli Carmina"
      },
      {
        "id": "C",
        "text": "Trionfo di Afrodite"
      },
      {
        "id": "D",
        "text": "De Temporum Fine Comoedia"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Carmina Burana\", composée en 1935-1936, s’inspire de poèmes médiévaux célébrant la roue de la fortune et les plaisirs terrestres."
  },
  {
    "id": "cult-25",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel peintre néerlandais est surnommé le maître du clair-obscur avec sa toile \"La Ronde de nuit\" (1642) ?",
    "options": [
      {
        "id": "A",
        "text": "Johannes Vermeer"
      },
      {
        "id": "B",
        "text": "Rembrandt van Rijn"
      },
      {
        "id": "C",
        "text": "Frans Hals"
      },
      {
        "id": "D",
        "text": "Jan Steen"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rembrandt a révolutionné la peinture hollandaise de l’âge d’or par son sens dramatique de la lumière et du mouvement."
  },
  {
    "id": "sci-1",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quelle est la planète la plus proche du Soleil dans notre Système solaire ?",
    "options": [
      {
        "id": "A",
        "text": "Vénus"
      },
      {
        "id": "B",
        "text": "Mercure"
      },
      {
        "id": "C",
        "text": "Mars"
      },
      {
        "id": "D",
        "text": "La Terre"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mercure orbite à environ 58 millions de kilomètres du Soleil, ce qui en fait la planète la plus proche de l’étoile."
  },
  {
    "id": "sci-2",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quelle molécule les plantes absorbent-elles principalement lors de la photosynthèse ?",
    "options": [
      {
        "id": "A",
        "text": "L’Oxygène (O2)"
      },
      {
        "id": "B",
        "text": "Le Dioxyde de carbone (CO2)"
      },
      {
        "id": "C",
        "text": "L’Azote (N2)"
      },
      {
        "id": "D",
        "text": "Le Méthane (CH4)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Grâce à la lumière solaire et à la chlorophylle, les végétaux transforment l’eau et le CO2 en glucose en libérant de l’oxygène."
  },
  {
    "id": "sci-3",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quelle est la formule chimique exacte de l’eau pure ?",
    "options": [
      {
        "id": "A",
        "text": "HO2"
      },
      {
        "id": "B",
        "text": "H2O"
      },
      {
        "id": "C",
        "text": "H2O2"
      },
      {
        "id": "D",
        "text": "CO2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Une molécule d’eau est constituée de deux atomes d’hydrogène liés à un atome d’oxygène (H2O)."
  },
  {
    "id": "sci-4",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quel organe du corps humain pompe le sang à travers le système circulatoire ?",
    "options": [
      {
        "id": "A",
        "text": "Le foie"
      },
      {
        "id": "B",
        "text": "Le cœur"
      },
      {
        "id": "C",
        "text": "Les poumons"
      },
      {
        "id": "D",
        "text": "Les reins"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le cœur est un muscle creux contractile qui assure la propulsion du sang vers tous les organes."
  },
  {
    "id": "sci-5",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "À quelle température l’eau pure gèle-t-elle à pression atmosphérique normale ?",
    "options": [
      {
        "id": "A",
        "text": "-10 °C"
      },
      {
        "id": "B",
        "text": "0 °C"
      },
      {
        "id": "C",
        "text": "4 °C"
      },
      {
        "id": "D",
        "text": "32 °C"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sur l’échelle Celsius, le point de congélation de l’eau sous une pression de 1 atm est par définition fixé à 0 °C."
  },
  {
    "id": "sci-6",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quelle est la vitesse approximative de la lumière dans le vide ?",
    "options": [
      {
        "id": "A",
        "text": "30 000 km/s"
      },
      {
        "id": "B",
        "text": "300 000 km/s"
      },
      {
        "id": "C",
        "text": "1 000 000 km/s"
      },
      {
        "id": "D",
        "text": "3 000 km/s"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La vitesse de la lumière (constante c) vaut exactement 299 792 458 m/s, soit environ 300 000 kilomètres par seconde."
  },
  {
    "id": "sci-7",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quel gaz compose environ 78% de l’atmosphère terrestre ?",
    "options": [
      {
        "id": "A",
        "text": "L’Oxygène"
      },
      {
        "id": "B",
        "text": "L’Azote (Diazote)"
      },
      {
        "id": "C",
        "text": "L’Argon"
      },
      {
        "id": "D",
        "text": "Le Dioxyde de carbone"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’air sec terrestre est composé d’environ 78,08% de diazote (N2) et 20,95% de dioxygène (O2)."
  },
  {
    "id": "sci-8",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quel astronome polonais a formulé au XVIe siècle la théorie héliocentrique ?",
    "options": [
      {
        "id": "A",
        "text": "Galilée"
      },
      {
        "id": "B",
        "text": "Nicolas Copernic"
      },
      {
        "id": "C",
        "text": "Johannes Kepler"
      },
      {
        "id": "D",
        "text": "Isaac Newton"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Nicolas Copernic a démontré dans \"De revolutionibus orbium coelestium\" (1543) que la Terre tourne autour du Soleil."
  },
  {
    "id": "sci-9",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quel est l’élément chimique le plus abondant dans l’Univers observable ?",
    "options": [
      {
        "id": "A",
        "text": "L’Oxygène"
      },
      {
        "id": "B",
        "text": "L’Hydrogène"
      },
      {
        "id": "C",
        "text": "L’Hélium"
      },
      {
        "id": "D",
        "text": "Le Fer"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’hydrogène constitue approximativement 75% de la masse de toute la matière baryonique de l’Univers."
  },
  {
    "id": "sci-10",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quelle est la fonction principale des globules rouges (hématies) dans le sang ?",
    "options": [
      {
        "id": "A",
        "text": "Combattre les infections bactériennes."
      },
      {
        "id": "B",
        "text": "Transporter l’oxygène grâce à l’hémoglobine."
      },
      {
        "id": "C",
        "text": "Assurer la coagulation."
      },
      {
        "id": "D",
        "text": "Filtrer l’urée."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Les érythrocytes transportent le dioxygène depuis les alvéoles pulmonaires jusqu’aux tissus de l’organisme."
  },
  {
    "id": "sci-11",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quelle particule subatomique porte une charge électrique négative ?",
    "options": [
      {
        "id": "A",
        "text": "Le proton"
      },
      {
        "id": "B",
        "text": "L’électron"
      },
      {
        "id": "C",
        "text": "Le neutron"
      },
      {
        "id": "D",
        "text": "Le positron"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’électron possède une charge électrique élémentaire négative (-1e) et gravite autour du noyau atomique."
  },
  {
    "id": "sci-12",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quelle est la valeur du pH d’une solution parfaitement neutre à 25 °C ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "À 25 °C, une solution aqueuse neutre présente une concentration en ions H+ égale à celle des ions OH-, d’où un pH de 7."
  },
  {
    "id": "sci-13",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quelle organite cellulaire est souvent qualifiée de \"centrale énergétique\" de la cellule ?",
    "options": [
      {
        "id": "A",
        "text": "L’appareil de Golgi"
      },
      {
        "id": "B",
        "text": "La mitochondrie"
      },
      {
        "id": "C",
        "text": "Le réticulum endoplasmique"
      },
      {
        "id": "D",
        "text": "Le lysosome"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Les mitochondries produisent la majorité de l’ATP cellulaire par la respiration cellulaire aérobie."
  },
  {
    "id": "sci-14",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quelle force fondamentale retient les planètes en orbite autour du Soleil ?",
    "options": [
      {
        "id": "A",
        "text": "La force électromagnétique"
      },
      {
        "id": "B",
        "text": "La gravitation"
      },
      {
        "id": "C",
        "text": "L’interaction forte"
      },
      {
        "id": "D",
        "text": "L’interaction faible"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La force gravitationnelle, proportionnelle aux masses et inversement proportionnelle au carré de la distance, gouverne le mouvement orbital."
  },
  {
    "id": "sci-15",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Qui a découvert la pénicilline en 1928, inaugurant l’ère des antibiotiques ?",
    "options": [
      {
        "id": "A",
        "text": "Louis Pasteur"
      },
      {
        "id": "B",
        "text": "Alexander Fleming"
      },
      {
        "id": "C",
        "text": "Robert Koch"
      },
      {
        "id": "D",
        "text": "Edward Jenner"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sir Alexander Fleming a observé qu’une moisissure, Penicillium notatum, détruisait des colonies de staphylocoques."
  },
  {
    "id": "sci-16",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Comment nomme-t-on le passage direct de l’état solide à l’état gazeux sans passer par l’état liquide ?",
    "options": [
      {
        "id": "A",
        "text": "La condensation"
      },
      {
        "id": "B",
        "text": "La sublimation"
      },
      {
        "id": "C",
        "text": "L’évaporation"
      },
      {
        "id": "D",
        "text": "La fusion"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La sublimation est la transition de phase directe de l’état solide à l’état gazeux (ex: neige carbonique / CO2 solide)."
  },
  {
    "id": "sci-17",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quelle est la frontière d’un trou noir d’où même la lumière ne peut s’échapper ?",
    "options": [
      {
        "id": "A",
        "text": "La magnétopause"
      },
      {
        "id": "B",
        "text": "L’horizon des événements"
      },
      {
        "id": "C",
        "text": "La sphère de photon"
      },
      {
        "id": "D",
        "text": "L’ergosphère"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’horizon des événements marque la surface théorique où la vitesse de libération égale la vitesse de la lumière."
  },
  {
    "id": "sci-18",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quelle équation fondamentale d’Albert Einstein exprime l’équivalence masse-énergie ?",
    "options": [
      {
        "id": "A",
        "text": "F = m * a"
      },
      {
        "id": "B",
        "text": "E = m * c²"
      },
      {
        "id": "C",
        "text": "PV = nRT"
      },
      {
        "id": "D",
        "text": "v = d / t"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Publiée en 1905 dans le cadre de la relativité restreinte, E = mc² prouve que la matière peut être convertie en énergie."
  },
  {
    "id": "sci-19",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quel principe de mécanique quantique stipule qu’on ne peut connaître simultanément avec une précision infinie la position et la vitesse d’une particule ?",
    "options": [
      {
        "id": "A",
        "text": "Le principe d’exclusion de Pauli"
      },
      {
        "id": "B",
        "text": "Le principe d’incertitude de Heisenberg"
      },
      {
        "id": "C",
        "text": "La dualité onde-corpuscule de De Broglie"
      },
      {
        "id": "D",
        "text": "Le théorème de Noether"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Énoncé par Werner Heisenberg en 1927, ce principe impose une limite fondamentale : Δx * Δp >= h / (4π)."
  },
  {
    "id": "sci-20",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quel boson, prédit dans les années 1960 et découvert au CERN en 2012, confère leur masse aux particules élémentaires ?",
    "options": [
      {
        "id": "A",
        "text": "Le boson W"
      },
      {
        "id": "B",
        "text": "Le boson de Higgs"
      },
      {
        "id": "C",
        "text": "Le gluon"
      },
      {
        "id": "D",
        "text": "Le graviton"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le boson de Higgs est le quantum du champ scalaire de Higgs qui donne une masse aux bosons faibles et aux fermions."
  },
  {
    "id": "sci-21",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Combien de paires de chromosomes compte une cellule somatique humaine normale ?",
    "options": [
      {
        "id": "A",
        "text": "21 paires"
      },
      {
        "id": "B",
        "text": "23 paires"
      },
      {
        "id": "C",
        "text": "24 paires"
      },
      {
        "id": "D",
        "text": "46 paires"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le caryotype humain normal comporte 23 paires de chromosomes homologues, soit un total de 46 chromosomes (2n = 46)."
  },
  {
    "id": "sci-22",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quel type de rayonnement électromagnétique possède la plus haute énergie et la plus courte longueur d’onde ?",
    "options": [
      {
        "id": "A",
        "text": "Les ondes radio"
      },
      {
        "id": "B",
        "text": "Les rayons Gamma"
      },
      {
        "id": "C",
        "text": "Les rayons X"
      },
      {
        "id": "D",
        "text": "Les ultraviolets"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Les rayons gamma (émis lors des désintégrations nucléaires) ont les fréquences les plus élevées (> 10^19 Hz) du spectre."
  },
  {
    "id": "sci-23",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quelle est la deuxième loi de la thermodynamique ?",
    "options": [
      {
        "id": "A",
        "text": "L’énergie se conserve."
      },
      {
        "id": "B",
        "text": "L’entropie d’un système isolé ne peut que croître ou rester constante lors de transformations réversibles."
      },
      {
        "id": "C",
        "text": "Le zéro absolu peut être atteint."
      },
      {
        "id": "D",
        "text": "La pression est constante."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le second principe affirme que tout processus spontané augmente l’entropie globale (le désordre) de l’Univers."
  },
  {
    "id": "sci-24",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quel télescope spatial infrarouge d’avant-garde a été lancé en décembre 2021 pour succéder à Hubble ?",
    "options": [
      {
        "id": "A",
        "text": "Spitzer"
      },
      {
        "id": "B",
        "text": "James Webb (JWST)"
      },
      {
        "id": "C",
        "text": "Chandra"
      },
      {
        "id": "D",
        "text": "Kepler"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le JWST, doté d’un miroir primaire de 6,5 m de diamètre, observe l’Univers profond depuis le point de Lagrange L2."
  },
  {
    "id": "sci-25",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quelle molécule d’acide nucléique forme la célèbre structure en double hélice découverte par Watson et Crick ?",
    "options": [
      {
        "id": "A",
        "text": "L’ARN messager"
      },
      {
        "id": "B",
        "text": "L’ADN (Acide Désoxyribonucléique)"
      },
      {
        "id": "C",
        "text": "L’ATP"
      },
      {
        "id": "D",
        "text": "Le ribosome"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’ADN stocke l’information génétique sous forme de deux brins antiparallèles hélicoïdaux reliés par des paires de bases azotées."
  },
  {
    "id": "hist-1",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "Qui est considéré comme le tout premier empereur romain ?",
    "options": [
      {
        "id": "A",
        "text": "Jules César"
      },
      {
        "id": "B",
        "text": "Auguste (Octave)"
      },
      {
        "id": "C",
        "text": "Néron"
      },
      {
        "id": "D",
        "text": "Trajan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Octave fonde le principat sous le titre d’Auguste en 27 av. J.-C. Jules César n’a été que dictateur à vie."
  },
  {
    "id": "hist-2",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "En quelle année Christophe Colomb a-t-il atteint le continent américain ?",
    "options": [
      {
        "id": "A",
        "text": "1453"
      },
      {
        "id": "B",
        "text": "1492"
      },
      {
        "id": "C",
        "text": "1515"
      },
      {
        "id": "D",
        "text": "1588"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le 12 octobre 1492, l’expédition financée par les rois catholiques espagnols débarque sur l’île de Guanahani."
  },
  {
    "id": "hist-3",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "Quel roi de France était surnommé le \"Roi-Soleil\" et a fait ériger le château de Versailles ?",
    "options": [
      {
        "id": "A",
        "text": "Henri IV"
      },
      {
        "id": "B",
        "text": "Louis XIV"
      },
      {
        "id": "C",
        "text": "François Ier"
      },
      {
        "id": "D",
        "text": "Louis XVI"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Louis XIV a régné pendant 72 ans (1643-1715), incarnant l’apogée de la monarchie absolue en France."
  },
  {
    "id": "hist-4",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "En quelle année a pris fin la Seconde Guerre mondiale ?",
    "options": [
      {
        "id": "A",
        "text": "1940"
      },
      {
        "id": "B",
        "text": "1945"
      },
      {
        "id": "C",
        "text": "1950"
      },
      {
        "id": "D",
        "text": "1918"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le conflit s’est achevé en mai 1945 en Europe et en septembre 1945 en Asie après la capitulation du Japon."
  },
  {
    "id": "hist-5",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "Quelle civilisation antique vénérait les pharaons et bâtissait des pyramides le long du Nil ?",
    "options": [
      {
        "id": "A",
        "text": "Les Mayas"
      },
      {
        "id": "B",
        "text": "Les Égyptiens"
      },
      {
        "id": "C",
        "text": "Les Perses"
      },
      {
        "id": "D",
        "text": "Les Mésopotamiens"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’Égypte antique a prospéré pendant plus de trois millénaires grâce aux crues nourricières du Nil."
  },
  {
    "id": "hist-6",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "Quel empereur français a été couronné à Notre-Dame de Paris en 1804 ?",
    "options": [
      {
        "id": "A",
        "text": "Napoléon Ier (Bonaparte)"
      },
      {
        "id": "B",
        "text": "Napoléon III"
      },
      {
        "id": "C",
        "text": "Charlemagne"
      },
      {
        "id": "D",
        "text": "Clovis"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Le 2 décembre 1804, Napoléon Bonaparte est sacré empereur des Français par le pape Pie VII."
  },
  {
    "id": "hist-7",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "En quelle année a eu lieu la chute du mur de Berlin ?",
    "options": [
      {
        "id": "A",
        "text": "1975"
      },
      {
        "id": "B",
        "text": "1989"
      },
      {
        "id": "C",
        "text": "1991"
      },
      {
        "id": "D",
        "text": "1995"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Dans la nuit du 9 novembre 1989, les Berlinois franchissent les postes-frontières, annonçant la fin du rideau de fer."
  },
  {
    "id": "hist-8",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "Qui était le dirigeant de l’Inde qui a prôné la non-violence (Ahimsa) pour obtenir l’indépendance ?",
    "options": [
      {
        "id": "A",
        "text": "Jawaharlal Nehru"
      },
      {
        "id": "B",
        "text": "Mahatma Gandhi"
      },
      {
        "id": "C",
        "text": "Indira Gandhi"
      },
      {
        "id": "D",
        "text": "Subhas Chandra Bose"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le Mahatma Gandhi a conduit des millions d’Indiens à l’indépendance en 1947 par la désobéissance civile pacifique."
  },
  {
    "id": "hist-9",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "En quelle année s’est déroulée la bataille de Hastings, consacrant Guillaume le Conquérant ?",
    "options": [
      {
        "id": "A",
        "text": "1066"
      },
      {
        "id": "B",
        "text": "1215"
      },
      {
        "id": "C",
        "text": "1337"
      },
      {
        "id": "D",
        "text": "1415"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Le 14 octobre 1066, la victoire normande à Hastings transforme l’Angleterre et unit les destins anglo-normands."
  },
  {
    "id": "hist-10",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quel roi franc a été couronné empereur d’Occident par le pape à Rome à Noël 800 ?",
    "options": [
      {
        "id": "A",
        "text": "Clovis"
      },
      {
        "id": "B",
        "text": "Charlemagne"
      },
      {
        "id": "C",
        "text": "Charles Martel"
      },
      {
        "id": "D",
        "text": "Pépin le Bref"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Charlemagne restaure l’Empire romain d’Occident par son couronnement impérial dans la basilique Saint-Pierre."
  },
  {
    "id": "hist-11",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "La Magna Carta, socle de limitation du pouvoir royal en Angleterre, a été signée en :",
    "options": [
      {
        "id": "A",
        "text": "1066"
      },
      {
        "id": "B",
        "text": "1215"
      },
      {
        "id": "C",
        "text": "1348"
      },
      {
        "id": "D",
        "text": "1492"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Imposée au roi Jean sans Terre en 1215, la Grande Charte garantit les libertés des barons contre l’arbitraire royal."
  },
  {
    "id": "hist-12",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quel traité signé en 1919 dans la galerie des Glaces a mis fin à la Première Guerre mondiale ?",
    "options": [
      {
        "id": "A",
        "text": "Le Traité de Rome"
      },
      {
        "id": "B",
        "text": "Le Traité de Versailles"
      },
      {
        "id": "C",
        "text": "Le Traité d’Utrecht"
      },
      {
        "id": "D",
        "text": "Le Traité de Westphalie"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le traité de Versailles (28 juin 1919) impose des conditions strictes et la création de la Société des Nations."
  },
  {
    "id": "hist-13",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quel Premier ministre britannique a mené son pays lors des heures sombres de la Seconde Guerre mondiale ?",
    "options": [
      {
        "id": "A",
        "text": "Neville Chamberlain"
      },
      {
        "id": "B",
        "text": "Winston Churchill"
      },
      {
        "id": "C",
        "text": "Clement Attlee"
      },
      {
        "id": "D",
        "text": "Anthony Eden"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Winston Churchill a galvanisé le peuple britannique par sa détermination inébranlable et ses discours historiques."
  },
  {
    "id": "hist-14",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "En quelle année a été promulguée la Déclaration universelle des droits de l’homme par l’ONU ?",
    "options": [
      {
        "id": "A",
        "text": "1945"
      },
      {
        "id": "B",
        "text": "1948"
      },
      {
        "id": "C",
        "text": "1952"
      },
      {
        "id": "D",
        "text": "1960"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Adoptée le 10 décembre 1948 à Paris au palais de Chaillot, elle consacre les droits fondamentaux inaliénables."
  },
  {
    "id": "hist-15",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quelle crise diplomatique de 1962 a frôlé le déclenchement d’une guerre nucléaire entre les USA et l’URSS ?",
    "options": [
      {
        "id": "A",
        "text": "La guerre de Corée"
      },
      {
        "id": "B",
        "text": "La crise des missiles de Cuba"
      },
      {
        "id": "C",
        "text": "Le blocus de Berlin"
      },
      {
        "id": "D",
        "text": "La crise du canal de Suez"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La découverte de bases de missiles nucléaires soviétiques à Cuba a entraîné 13 jours d’extrême tension entre Kennedy et Khrouchtchev."
  },
  {
    "id": "hist-16",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quelle héroïne française a mené les armées royales à Orléans durant la guerre de Cent Ans ?",
    "options": [
      {
        "id": "A",
        "text": "Aliénor d’Aquitaine"
      },
      {
        "id": "B",
        "text": "Jeanne d’Arc"
      },
      {
        "id": "C",
        "text": "Catherine de Médicis"
      },
      {
        "id": "D",
        "text": "Marie-Antoinette"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Jeanne d’Arc a délivré Orléans assiégée en 1429 et fait couronner Charles VII à Reims avant son martyre à Rouen."
  },
  {
    "id": "hist-17",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "En quelle année la ville de Constantinople est-elle tombée aux mains des Ottomans, mettant fin à l’Empire byzantin ?",
    "options": [
      {
        "id": "A",
        "text": "1453"
      },
      {
        "id": "B",
        "text": "1492"
      },
      {
        "id": "C",
        "text": "1520"
      },
      {
        "id": "D",
        "text": "1571"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Le 29 mai 1453, les troupes du sultan Mehmed II s’emparent de Constantinople, événement majeur clôturant le Moyen Âge."
  },
  {
    "id": "hist-18",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel traité européen de 1648 a instauré le principe de souveraineté des États et mis fin à la guerre de Trente Ans ?",
    "options": [
      {
        "id": "A",
        "text": "Les traités de Westphalie"
      },
      {
        "id": "B",
        "text": "Le traité des Pyrénées"
      },
      {
        "id": "C",
        "text": "Le traité d’Utrecht"
      },
      {
        "id": "D",
        "text": "La paix d’Augsbourg"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Les traités de Westphalie (Munster et Osnabrück) fondent le système westphalien d’équilibre des puissances souveraines."
  },
  {
    "id": "hist-19",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel pharaon de la XVIIIe dynastie a tenté d’imposer le culte monothéiste exclusif du disque solaire Aton ?",
    "options": [
      {
        "id": "A",
        "text": "Ramsès II"
      },
      {
        "id": "B",
        "text": "Akhénaton (Aménophis IV)"
      },
      {
        "id": "C",
        "text": "Toutânkhamon"
      },
      {
        "id": "D",
        "text": "Thoutmôsis III"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Akhénaton a banni le clergé d’Amon, fondé la cité d’Amarna et instauré le culte solaire avec son épouse Néfertiti."
  },
  {
    "id": "hist-20",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "En quelle année l’URSS a-t-elle été officiellement dissoute, marquant la fin de la guerre froide ?",
    "options": [
      {
        "id": "A",
        "text": "1989"
      },
      {
        "id": "B",
        "text": "1991"
      },
      {
        "id": "C",
        "text": "1993"
      },
      {
        "id": "D",
        "text": "1985"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le 26 décembre 1991, après la démission de Mikhaïl Gorbatchev, le drapeau soviétique est descendu du Kremlin."
  },
  {
    "id": "hist-21",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quelle bataille navale de 1805 a consacré la suprématie maritime britannique de l’amiral Nelson sur la flotte franco-espagnole ?",
    "options": [
      {
        "id": "A",
        "text": "La bataille d’Aboukir"
      },
      {
        "id": "B",
        "text": "La bataille de Trafalgar"
      },
      {
        "id": "C",
        "text": "La bataille de Lépante"
      },
      {
        "id": "D",
        "text": "La bataille de Waterloo"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le 21 octobre 1805 au large de l’Espagne, la Royal Navy anéantit les ambitions d’invasion britannique de Napoléon."
  },
  {
    "id": "hist-22",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel réformateur allemand a affiché ses 95 thèses à Wittenberg en 1517, initiant la Réforme protestante ?",
    "options": [
      {
        "id": "A",
        "text": "Jean Calvin"
      },
      {
        "id": "B",
        "text": "Martin Luther"
      },
      {
        "id": "C",
        "text": "Ulrich Zwingli"
      },
      {
        "id": "D",
        "text": "Érasme"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En critiquant le commerce des indulgences, Luther a déclenché une scission religieuse et politique majeure en Europe."
  },
  {
    "id": "hist-23",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel général carthaginois a traversé les Alpes avec des éléphants de guerre durant la deuxième guerre punique ?",
    "options": [
      {
        "id": "A",
        "text": "Hamilcar Barca"
      },
      {
        "id": "B",
        "text": "Hannibal Barca"
      },
      {
        "id": "C",
        "text": "Hasdrubal"
      },
      {
        "id": "D",
        "text": "Scipion l’Africain"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En 218 av. J.-C., Hannibal franchit les Alpes et inflige d’éclatantes défaites à Rome (Trébie, Trasimène, Cannes)."
  },
  {
    "id": "hist-24",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel chancelier prussien a orchestré l’unification allemande au XIXe siècle (\"par le fer et par le sang\") ?",
    "options": [
      {
        "id": "A",
        "text": "Otto von Bismarck"
      },
      {
        "id": "B",
        "text": "Guillaume II"
      },
      {
        "id": "C",
        "text": "Metternich"
      },
      {
        "id": "D",
        "text": "Hindenburg"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Bismarck mène trois guerres victorieuses (Danemark, Autriche, France) pour proclamer l’Empire allemand à Versailles en 1871."
  },
  {
    "id": "hist-25",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel traité signé en 1957 est l’acte fondateur de la Communauté économique européenne (CEE) ?",
    "options": [
      {
        "id": "A",
        "text": "Le Traité de Maastricht"
      },
      {
        "id": "B",
        "text": "Le Traité de Rome"
      },
      {
        "id": "C",
        "text": "Le Traité de Paris"
      },
      {
        "id": "D",
        "text": "Le Traité de Lisbonne"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Les traités de Rome instituent la CEE et Euratom entre six pays fondateurs (France, RFA, Italie, Belgique, Pays-Bas, Luxembourg)."
  },
  {
    "id": "math-1",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Combien vaut 15% de 240 ?",
    "options": [
      {
        "id": "A",
        "text": "32"
      },
      {
        "id": "B",
        "text": "36"
      },
      {
        "id": "C",
        "text": "38"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    "correctAnswer": "B",
    "explanation": "10% de 240 = 24. 5% de 240 = 12. Donc 15% = 24 + 12 = 36."
  },
  {
    "id": "math-2",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Quelle est la valeur suivante dans la suite arithmétique : 3, 7, 11, 15, ... ?",
    "options": [
      {
        "id": "A",
        "text": "17"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "19"
      },
      {
        "id": "D",
        "text": "21"
      }
    ],
    "correctAnswer": "C",
    "explanation": "La raison de la suite est +4 à chaque étape : 15 + 4 = 19."
  },
  {
    "id": "math-3",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Quel est le résultat du calcul : 8 + 2 * 5 ?",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "26"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Selon les priorités opératoires, la multiplication prime : 2 * 5 = 10, puis 8 + 10 = 18."
  },
  {
    "id": "math-4",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Combien de côtés possède un hexagone régulier ?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Un hexagone est par définition un polygone à 6 côtés et 6 sommets."
  },
  {
    "id": "math-5",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Quel est le seul nombre premier qui est pair ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "Il n’en existe aucun"
      }
    ],
    "correctAnswer": "B",
    "explanation": "2 n’a que deux diviseurs (1 et lui-même). Tous les autres nombres pairs sont divisibles par 2."
  },
  {
    "id": "math-6",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Quelle est la racine carrée de 144 ?",
    "options": [
      {
        "id": "A",
        "text": "11"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "13"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "B",
    "explanation": "12 * 12 = 144, donc √144 = 12."
  },
  {
    "id": "math-7",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Si 3 stylos coûtent 4,50 €, combien coûtent 5 stylos au même tarif unitaire ?",
    "options": [
      {
        "id": "A",
        "text": "6,50 €"
      },
      {
        "id": "B",
        "text": "7,50 €"
      },
      {
        "id": "C",
        "text": "8,00 €"
      },
      {
        "id": "D",
        "text": "9,00 €"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Un stylo coûte 4,50 / 3 = 1,50 €. Donc 5 stylos coûtent 5 * 1,50 = 7,50 €."
  },
  {
    "id": "math-8",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Quel est le périmètre d’un carré dont chaque côté mesure 7 cm ?",
    "options": [
      {
        "id": "A",
        "text": "14 cm"
      },
      {
        "id": "B",
        "text": "21 cm"
      },
      {
        "id": "C",
        "text": "28 cm"
      },
      {
        "id": "D",
        "text": "49 cm"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Le périmètre d’un carré vaut 4 * côté = 4 * 7 = 28 cm (49 cm² étant son aire)."
  },
  {
    "id": "math-9",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Dans un triangle rectangle, les côtés de l’angle droit mesurent 6 cm et 8 cm. Que mesure l’hypoténuse ?",
    "options": [
      {
        "id": "A",
        "text": "9 cm"
      },
      {
        "id": "B",
        "text": "10 cm"
      },
      {
        "id": "C",
        "text": "12 cm"
      },
      {
        "id": "D",
        "text": "14 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "D’après Pythagore : c² = 6² + 8² = 36 + 64 = 100, donc l’hypoténuse mesure √100 = 10 cm."
  },
  {
    "id": "math-10",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Quelle est la solution de l’équation 4x - 9 = 23 ?",
    "options": [
      {
        "id": "A",
        "text": "x = 6"
      },
      {
        "id": "B",
        "text": "x = 7"
      },
      {
        "id": "C",
        "text": "x = 8"
      },
      {
        "id": "D",
        "text": "x = 9"
      }
    ],
    "correctAnswer": "C",
    "explanation": "4x = 23 + 9 = 32, d’où x = 32 / 4 = 8."
  },
  {
    "id": "math-11",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Quelle est la formule de calcul de l’aire d’un disque de rayon r ?",
    "options": [
      {
        "id": "A",
        "text": "2 * π * r"
      },
      {
        "id": "B",
        "text": "π * r²"
      },
      {
        "id": "C",
        "text": "4/3 * π * r³"
      },
      {
        "id": "D",
        "text": "π * d"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’aire d’un disque est donnée par π * r², le périmètre étant 2 * π * r."
  },
  {
    "id": "math-12",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Quelle est la dérivée de la fonction polynomiale f(x) = 5x³ - 4x² + 7 ?",
    "options": [
      {
        "id": "A",
        "text": "f’(x) = 15x² - 8x"
      },
      {
        "id": "B",
        "text": "f’(x) = 15x² - 8x + 7"
      },
      {
        "id": "C",
        "text": "f’(x) = 10x² - 4x"
      },
      {
        "id": "D",
        "text": "f’(x) = 5x² - 4"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La dérivée de 5x³ est 15x², celle de -4x² est -8x et la constante 7 s’annule."
  },
  {
    "id": "math-13",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Quelle est la somme des angles intérieurs de n’importe quel triangle dans le plan euclidien ?",
    "options": [
      {
        "id": "A",
        "text": "90°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "270°"
      },
      {
        "id": "D",
        "text": "360°"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Dans l’espace euclidien, la somme des trois angles d’un triangle égale invariablement 180° (ou π radians)."
  },
  {
    "id": "math-14",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Quelle est la probabilité d’obtenir un total de 7 en lançant deux dés équilibrés à 6 faces ?",
    "options": [
      {
        "id": "A",
        "text": "1/6"
      },
      {
        "id": "B",
        "text": "1/12"
      },
      {
        "id": "C",
        "text": "7/36"
      },
      {
        "id": "D",
        "text": "5/36"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Il y a 6 combinaisons totalisant 7 ((1,6), (2,5), (3,4), (4,3), (5,2), (6,1)) sur 36 résultats possibles : 6/36 = 1/6."
  },
  {
    "id": "math-15",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Si un produit coûte 100 € et subit une hausse de 20%, puis une baisse de 20%, quel est son prix final ?",
    "options": [
      {
        "id": "A",
        "text": "100 €"
      },
      {
        "id": "B",
        "text": "96 €"
      },
      {
        "id": "C",
        "text": "98 €"
      },
      {
        "id": "D",
        "text": "104 €"
      }
    ],
    "correctAnswer": "B",
    "explanation": "100 € + 20% = 120 €. Puis 120 € - 20% (soit 24 €) = 96 €."
  },
  {
    "id": "math-16",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Quel est le terme suivant dans la suite : 2, 6, 12, 20, 30, ... ?",
    "options": [
      {
        "id": "A",
        "text": "38"
      },
      {
        "id": "B",
        "text": "40"
      },
      {
        "id": "C",
        "text": "42"
      },
      {
        "id": "D",
        "text": "44"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Les incréments successifs augmentent de 2 (+4, +6, +8, +10, +12) : 30 + 12 = 42 (ou n*(n+1))."
  },
  {
    "id": "math-17",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Quelle est la valeur exacte du logarithme népérien du nombre d’Euler : ln(e) ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "e"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le logarithme népérien étant la réciproque de l’exponentielle, ln(e^1) = 1."
  },
  {
    "id": "math-18",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Combien vaut l’intégrale définie de 0 à 1 de la fonction f(x) = 3x² dx ?",
    "options": [
      {
        "id": "A",
        "text": "0.5"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "1.5"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Une primitive de 3x² est x³. Évaluée entre 0 et 1 : 1³ - 0³ = 1."
  },
  {
    "id": "math-19",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Quel est le nombre de façons différentes de choisir 3 personnes parmi un groupe de 5 (combinaison C(5, 3)) ?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "60"
      }
    ],
    "correctAnswer": "A",
    "explanation": "C(5, 3) = 5! / (3! * 2!) = (5 * 4) / 2 = 10."
  },
  {
    "id": "math-20",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Quelle est la relation remarquable d’Euler reliant cinq constantes fondamentales des mathématiques ?",
    "options": [
      {
        "id": "A",
        "text": "e^(i * π) + 1 = 0"
      },
      {
        "id": "B",
        "text": "e^π + i = 1"
      },
      {
        "id": "C",
        "text": "π * e = i"
      },
      {
        "id": "D",
        "text": "ln(π) + e = 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "L’identité d’Euler e^(iπ) + 1 = 0 unifie 0, 1, e, i et π en une équation unanimement considérée comme la plus belle des mathématiques."
  },
  {
    "id": "math-21",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Quelle est la limite de (sin(x) / x) quand x tend vers 0 ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Indéterminée (l’infini)"
      },
      {
        "id": "D",
        "text": "π"
      }
    ],
    "correctAnswer": "B",
    "explanation": "C’est une limite trigonométrique remarquable fondamentale, également dérivable de la règle de L’Hôpital."
  },
  {
    "id": "math-22",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Si deux vecteurs u et v sont orthogonaux dans un repère orthonormé, que vaut leur produit scalaire u · v ?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "||u|| * ||v||"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le produit scalaire est proportionnel au cosinus de l’angle. Pour 90° (π/2 rad), cos(90°) = 0, donc u · v = 0."
  },
  {
    "id": "math-23",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Dans un espace vectoriel, que signifie que des vecteurs sont \"linéairement indépendants\" ?",
    "options": [
      {
        "id": "A",
        "text": "Leur somme est nulle."
      },
      {
        "id": "B",
        "text": "La seule combinaison linéaire qui donne le vecteur nul est celle où tous les coefficients sont nuls."
      },
      {
        "id": "C",
        "text": "Ils ont tous la même norme."
      },
      {
        "id": "D",
        "text": "Ils sont tous colinéaires."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Si Σ (λi * vi) = 0 implique nécessairement que chaque scalaire λi = 0, la famille de vecteurs est libre."
  },
  {
    "id": "math-24",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Quel mathématicien français a formulé le \"Dernier Théorème\" résolu par Andrew Wiles plus de 350 ans plus tard ?",
    "options": [
      {
        "id": "A",
        "text": "René Descartes"
      },
      {
        "id": "B",
        "text": "Pierre de Fermat"
      },
      {
        "id": "C",
        "text": "Blaise Pascal"
      },
      {
        "id": "D",
        "text": "Henri Poincaré"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pierre de Fermat affirmait en 1637 qu’il n’existe aucun entier non nul pour x^n + y^n = z^n dès que n > 2."
  },
  {
    "id": "math-25",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Combien d’arêtes possède un icosaèdre régulier (polyèdre régulier à 20 faces triangulaires) ?",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "30"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’icosaèdre régulier compte 20 faces, 12 sommets et 30 arêtes, vérifiant la formule d’Euler S - A + F = 12 - 30 + 20 = 2."
  },
  {
    "id": "geo-1",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quelle est la capitale politique de l’Australie ?",
    "options": [
      {
        "id": "A",
        "text": "Sydney"
      },
      {
        "id": "B",
        "text": "Melbourne"
      },
      {
        "id": "C",
        "text": "Canberra"
      },
      {
        "id": "D",
        "text": "Brisbane"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Canberra a été fondée en 1908 comme capitale fédérale de compromis entre Sydney et Melbourne."
  },
  {
    "id": "geo-2",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quelle est la capitale officielle du Canada ?",
    "options": [
      {
        "id": "A",
        "text": "Toronto"
      },
      {
        "id": "B",
        "text": "Montréal"
      },
      {
        "id": "C",
        "text": "Ottawa"
      },
      {
        "id": "D",
        "text": "Vancouver"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ottawa, située en Ontario au bord de la frontière québécoise, a été choisie par la reine Victoria en 1857."
  },
  {
    "id": "geo-3",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quelle est la capitale du Brésil ?",
    "options": [
      {
        "id": "A",
        "text": "Rio de Janeiro"
      },
      {
        "id": "B",
        "text": "São Paulo"
      },
      {
        "id": "C",
        "text": "Brasília"
      },
      {
        "id": "D",
        "text": "Salvador"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Inaugurée en 1960 pour déplacer la capitale vers l’intérieur des terres, Brasília a été conçue par Oscar Niemeyer."
  },
  {
    "id": "geo-4",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Sur quel continent se trouve le mont Kilimandjaro ?",
    "options": [
      {
        "id": "A",
        "text": "L’Asie"
      },
      {
        "id": "B",
        "text": "L’Afrique"
      },
      {
        "id": "C",
        "text": "L’Amérique du Sud"
      },
      {
        "id": "D",
        "text": "L’Océanie"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le Kilimandjaro culmine à 5 895 mètres en Tanzanie, constituant le point culminant du continent africain."
  },
  {
    "id": "geo-5",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quel océan est le plus étendu de la planète ?",
    "options": [
      {
        "id": "A",
        "text": "L’océan Atlantique"
      },
      {
        "id": "B",
        "text": "L’océan Pacifique"
      },
      {
        "id": "C",
        "text": "L’océan Indien"
      },
      {
        "id": "D",
        "text": "L’océan Arctique"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’océan Pacifique couvre plus de 165 millions de km², soit un tiers de la surface de la Terre."
  },
  {
    "id": "geo-6",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quel fleuve traverse la ville de Paris ?",
    "options": [
      {
        "id": "A",
        "text": "La Loire"
      },
      {
        "id": "B",
        "text": "La Seine"
      },
      {
        "id": "C",
        "text": "Le Rhône"
      },
      {
        "id": "D",
        "text": "La Garonne"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Seine serpente sur 777 km du plateau de Langres jusqu’à la Manche en traversant le cœur de Paris."
  },
  {
    "id": "geo-7",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quel est le pays le plus vaste du monde en superficie terrestre ?",
    "options": [
      {
        "id": "A",
        "text": "Le Canada"
      },
      {
        "id": "B",
        "text": "La Russie"
      },
      {
        "id": "C",
        "text": "La Chine"
      },
      {
        "id": "D",
        "text": "Les États-Unis"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Russie s’étend sur plus de 17 millions de km², à cheval sur l’Europe de l’Est et l’Asie du Nord."
  },
  {
    "id": "geo-8",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quelle est la capitale du Japon ?",
    "options": [
      {
        "id": "A",
        "text": "Kyoto"
      },
      {
        "id": "B",
        "text": "Osaka"
      },
      {
        "id": "C",
        "text": "Tokyo"
      },
      {
        "id": "D",
        "text": "Nagoya"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Tokyo (anciennement Edo) est la capitale de l’archipel nippon et abrite la résidence impériale."
  },
  {
    "id": "geo-9",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quel est le plus haut sommet du monde au-dessus du niveau de la mer ?",
    "options": [
      {
        "id": "A",
        "text": "Le K2"
      },
      {
        "id": "B",
        "text": "L’Everest"
      },
      {
        "id": "C",
        "text": "Le Kangchenjunga"
      },
      {
        "id": "D",
        "text": "Le Makalu"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’Everest culmine à 8 848,86 mètres dans l’Himalaya, à la frontière entre le Népal et le Tibet."
  },
  {
    "id": "geo-10",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quel est le fleuve le plus puissant du monde en débit volumique ?",
    "options": [
      {
        "id": "A",
        "text": "Le Nil"
      },
      {
        "id": "B",
        "text": "L’Amazone"
      },
      {
        "id": "C",
        "text": "Le Yangzi Jiang"
      },
      {
        "id": "D",
        "text": "Le Mississippi"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’Amazone déverse en moyenne 209 000 m³/s dans l’océan Atlantique, un volume supérieur aux 7 fleuves suivants réunis."
  },
  {
    "id": "geo-11",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quel est le plus grand désert chaud de notre planète ?",
    "options": [
      {
        "id": "A",
        "text": "Le désert de Gobi"
      },
      {
        "id": "B",
        "text": "Le Sahara"
      },
      {
        "id": "C",
        "text": "Le désert du Kalahari"
      },
      {
        "id": "D",
        "text": "Le désert d’Atacama"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le Sahara s’étend sur plus de 9 millions de km² à travers l’Afrique du Nord."
  },
  {
    "id": "geo-12",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quel détroit sépare l’Espagne (Europe) du Maroc (Afrique) ?",
    "options": [
      {
        "id": "A",
        "text": "Le détroit du Bosphore"
      },
      {
        "id": "B",
        "text": "Le détroit de Gibraltar"
      },
      {
        "id": "C",
        "text": "Le détroit d’Ormuz"
      },
      {
        "id": "D",
        "text": "Le détroit des Dardanelles"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le détroit de Gibraltar relie la mer Méditerranée à l’océan Atlantique avec seulement 14 km de largeur minimale."
  },
  {
    "id": "geo-13",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quel lac d’eau douce de Sibérie est le plus profond et le plus ancien du monde ?",
    "options": [
      {
        "id": "A",
        "text": "Le lac Supérieur"
      },
      {
        "id": "B",
        "text": "Le lac Baïkal"
      },
      {
        "id": "C",
        "text": "Le lac Victoria"
      },
      {
        "id": "D",
        "text": "Le lac Ladoga"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le lac Baïkal atteint 1 642 mètres de profondeur et renferme un cinquième des réserves mondiales d’eau douce non gelée."
  },
  {
    "id": "geo-14",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quelle est la capitale administrative de l’Afrique du Sud ?",
    "options": [
      {
        "id": "A",
        "text": "Johannesburg"
      },
      {
        "id": "B",
        "text": "Pretoria"
      },
      {
        "id": "C",
        "text": "Le Cap"
      },
      {
        "id": "D",
        "text": "Durban"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’Afrique du Sud a trois capitales : Pretoria (siège administratif), Le Cap (législatif) et Bloemfontein (judiciaire)."
  },
  {
    "id": "geo-15",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quel canal maritime artificiel inauguré en 1869 relie la mer Méditerranée à la mer Rouge ?",
    "options": [
      {
        "id": "A",
        "text": "Le canal de Panama"
      },
      {
        "id": "B",
        "text": "Le canal de Suez"
      },
      {
        "id": "C",
        "text": "Le canal de Corinthe"
      },
      {
        "id": "D",
        "text": "Le canal de Kiel"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Percé en Égypte sous la direction de Ferdinand de Lesseps, le canal de Suez évite de contourner l’Afrique."
  },
  {
    "id": "geo-16",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quelle chaîne de montagnes sépare traditionnellement la Russie européenne de la Russie asiatique ?",
    "options": [
      {
        "id": "A",
        "text": "Le Caucase"
      },
      {
        "id": "B",
        "text": "L’Oural"
      },
      {
        "id": "C",
        "text": "L’Altaï"
      },
      {
        "id": "D",
        "text": "Les Carpates"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Les monts Oural s’étendent du nord au sud sur 2 500 km et matérialisent la frontière géographique entre Europe et Asie."
  },
  {
    "id": "geo-17",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quel pays d’Amérique du Sud possède la plus longue côte sur l’océan Pacifique avec un territoire très étroit ?",
    "options": [
      {
        "id": "A",
        "text": "Le Pérou"
      },
      {
        "id": "B",
        "text": "Le Chili"
      },
      {
        "id": "C",
        "text": "L’Argentine"
      },
      {
        "id": "D",
        "text": "L’Équateur"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le Chili s’étire sur plus de 4 300 km du nord au sud entre la cordillère des Andes et l’océan Pacifique."
  },
  {
    "id": "geo-18",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quelle est la capitale politique de la Nouvelle-Zélande ?",
    "options": [
      {
        "id": "A",
        "text": "Auckland"
      },
      {
        "id": "B",
        "text": "Wellington"
      },
      {
        "id": "C",
        "text": "Christchurch"
      },
      {
        "id": "D",
        "text": "Dunedin"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Bien qu’Auckland soit la ville la plus peuplée, Wellington (à la pointe sud de l’île du Nord) est la capitale depuis 1865."
  },
  {
    "id": "geo-19",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quelle est la capitale de la Mongolie ?",
    "options": [
      {
        "id": "A",
        "text": "Astana"
      },
      {
        "id": "B",
        "text": "Oulan-Bator"
      },
      {
        "id": "C",
        "text": "Tachkent"
      },
      {
        "id": "D",
        "text": "Bichkek"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Oulan-Bator abrite près de la moitié de la population mongole et est réputée comme la capitale la plus froide du monde."
  },
  {
    "id": "geo-20",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quel détroit maritime stratégique sépare l’Iran et Oman, reliant le golfe Persique au golfe d’Oman ?",
    "options": [
      {
        "id": "A",
        "text": "Le détroit de Malacca"
      },
      {
        "id": "B",
        "text": "Le détroit d’Ormuz"
      },
      {
        "id": "C",
        "text": "Le détroit de Bab-el-Mandeb"
      },
      {
        "id": "D",
        "text": "Le détroit de Béring"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le détroit d’Ormuz est le point de passage maritime pétrolier le plus stratégique au monde."
  },
  {
    "id": "geo-21",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quel État enclavé d’Afrique australe est entièrement entouré par le territoire de l’Afrique du Sud ?",
    "options": [
      {
        "id": "A",
        "text": "L’Eswatini (Swaziland)"
      },
      {
        "id": "B",
        "text": "Le Lesotho"
      },
      {
        "id": "C",
        "text": "Le Botswana"
      },
      {
        "id": "D",
        "text": "La Namibie"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le royaume du Lesotho est un État souverain montagnard intégralement enclavé au sein de l’Afrique du Sud."
  },
  {
    "id": "geo-22",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quelle est la capitale de l’Islande ?",
    "options": [
      {
        "id": "A",
        "text": "Oslo"
      },
      {
        "id": "B",
        "text": "Reykjavik"
      },
      {
        "id": "C",
        "text": "Helsinki"
      },
      {
        "id": "D",
        "text": "Tórshavn"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Reykjavik est la capitale nationale située le plus au nord de la planète (environ 64° de latitude nord)."
  },
  {
    "id": "geo-23",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quel désert côtier d’Amérique du Sud est considéré comme l’un des endroits les plus arides de la planète ?",
    "options": [
      {
        "id": "A",
        "text": "Le désert du Kalahari"
      },
      {
        "id": "B",
        "text": "Le désert d’Atacama"
      },
      {
        "id": "C",
        "text": "Le désert de Sonora"
      },
      {
        "id": "D",
        "text": "Le désert des Mojaves"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Situé au nord du Chili, le désert d’Atacama connaît des stations météo où aucune goutte de pluie n’a été enregistrée depuis des décennies."
  },
  {
    "id": "geo-24",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quelle étendue d’eau salée fermée, située entre la Jordanie et Israël, possède la plus basse altitude émergée du globe (-430 m) ?",
    "options": [
      {
        "id": "A",
        "text": "La mer Caspienne"
      },
      {
        "id": "B",
        "text": "La mer Morte"
      },
      {
        "id": "C",
        "text": "Le lac d’Aral"
      },
      {
        "id": "D",
        "text": "La mer Noire"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La mer Morte a une salinité extrême (~34%) empêchant tout poisson d’y vivre, d’où son nom."
  },
  {
    "id": "geo-25",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quel détroit maritime sépare la péninsule malaise de l’île indonésienne de Sumatra ?",
    "options": [
      {
        "id": "A",
        "text": "Le détroit de la Sonde"
      },
      {
        "id": "B",
        "text": "Le détroit de Malacca"
      },
      {
        "id": "C",
        "text": "Le détroit de Torrès"
      },
      {
        "id": "D",
        "text": "Le détroit de Magellan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le détroit de Malacca est l’une des voies maritimes commerciales les plus fréquentées de la planète entre l’océan Indien et le Pacifique."
  },
  {
    "id": "info-26",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Que signifie l’acronyme CSS en développement web ?",
    "options": [
      {
        "id": "A",
        "text": "Cascading Style Sheets"
      },
      {
        "id": "B",
        "text": "Creative Styling Syntax"
      },
      {
        "id": "C",
        "text": "Computer Screen Styles"
      },
      {
        "id": "D",
        "text": "Color and Style Software"
      }
    ],
    "correctAnswer": "A",
    "explanation": "CSS (Cascading Style Sheets ou Feuilles de style en cascade) permet de mettre en forme et d’agencer les pages web écrites en HTML."
  },
  {
    "id": "info-27",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Quel est le rôle principal d’un navigateur web (Chrome, Firefox, Safari) ?",
    "options": [
      {
        "id": "A",
        "text": "Compiler du code machine binaire"
      },
      {
        "id": "B",
        "text": "Interpréter et restituer visuellement les fichiers HTML, CSS et JavaScript"
      },
      {
        "id": "C",
        "text": "Gérer les tables d’une base de données SQL"
      },
      {
        "id": "D",
        "text": "Allouer la mémoire vive du microprocesseur"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le navigateur télécharge les ressources web et utilise son moteur de rendu pour afficher graphiquement la page et exécuter son JavaScript."
  },
  {
    "id": "info-28",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Pourquoi le protocole HTTPS est-il privilégié par rapport à HTTP ?",
    "options": [
      {
        "id": "A",
        "text": "Il augmente la vitesse du processeur"
      },
      {
        "id": "B",
        "text": "Il chiffre les communications via TLS pour garantir la confidentialité et l’intégrité"
      },
      {
        "id": "C",
        "text": "Il supprime le besoin de serveurs web distants"
      },
      {
        "id": "D",
        "text": "Il désactive automatiquement les fenêtres surgissantes"
      }
    ],
    "correctAnswer": "B",
    "explanation": "HTTPS chiffre l’ensemble des échanges entre le client et le serveur grâce au protocole TLS, protégeant ainsi les mots de passe et données personnelles."
  },
  {
    "id": "info-29",
    "categoryId": "informatique",
    "difficulty": "facile",
    "question": "Quel symbole représente l’identifiant unique (ID) d’un élément dans un sélecteur CSS ?",
    "options": [
      {
        "id": "A",
        "text": "Le point (.)"
      },
      {
        "id": "B",
        "text": "Le croisillon / dièse (#)"
      },
      {
        "id": "C",
        "text": "L’arobase (@)"
      },
      {
        "id": "D",
        "text": "Le point d’exclamation (!)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En CSS, le dièse (#monId) cible un identifiant unique, tandis que le point (.maClasse) cible une classe réutilisable."
  },
  {
    "id": "info-30",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Qu’est-ce que le Virtual DOM utilisé par des bibliothèques comme React ?",
    "options": [
      {
        "id": "A",
        "text": "Un écran virtuel pour tester les applications mobiles"
      },
      {
        "id": "B",
        "text": "Une représentation légère en mémoire du DOM réel permettant de calculer les modifications minimales"
      },
      {
        "id": "C",
        "text": "Une extension de fichier binaire propriétaire de Meta"
      },
      {
        "id": "D",
        "text": "Un serveur virtuel hébergeant une base de données"
      }
    ],
    "correctAnswer": "B",
    "explanation": "React compare l’ancien et le nouveau Virtual DOM (diffing algorithm) pour ne mettre à jour dans le DOM réel que les nœuds modifiés, optimisant les performances."
  },
  {
    "id": "info-31",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Que retourne l’expression JavaScript typeof [] ?",
    "options": [
      {
        "id": "A",
        "text": "\"array\""
      },
      {
        "id": "B",
        "text": "\"object\""
      },
      {
        "id": "C",
        "text": "\"list\""
      },
      {
        "id": "D",
        "text": "\"undefined\""
      }
    ],
    "correctAnswer": "B",
    "explanation": "En JavaScript, les tableaux sont des objets particuliers. typeof [] renvoie donc \"object\". Pour vérifier s’il s’agit d’un tableau, on utilise Array.isArray()."
  },
  {
    "id": "info-32",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Quel Hook React natif permet d’exécuter des effets de bord (appels API, timers, abonnements) ?",
    "options": [
      {
        "id": "A",
        "text": "useState"
      },
      {
        "id": "B",
        "text": "useContext"
      },
      {
        "id": "C",
        "text": "useEffect"
      },
      {
        "id": "D",
        "text": "useMemo"
      }
    ],
    "correctAnswer": "C",
    "explanation": "useEffect s’exécute après le rendu du composant et permet d’effectuer des tâches asynchrones, des souscriptions ou des modifications manuelles du DOM."
  },
  {
    "id": "info-33",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Quel code de statut HTTP indique que la ressource demandée est introuvable sur le serveur ?",
    "options": [
      {
        "id": "A",
        "text": "200 OK"
      },
      {
        "id": "B",
        "text": "301 Moved Permanently"
      },
      {
        "id": "C",
        "text": "404 Not Found"
      },
      {
        "id": "D",
        "text": "500 Internal Server Error"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Le code 404 est le statut standard d’erreur client indiquant que le serveur ne trouve pas la ressource demandée à l’URL spécifiée."
  },
  {
    "id": "info-34",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "Quelle est la différence fondamentale entre les opérateurs == et === en JavaScript ?",
    "options": [
      {
        "id": "A",
        "text": "=== effectue une conversion automatique de type"
      },
      {
        "id": "B",
        "text": "== effectue une conversion implicite de type, alors que === compare sans conversion la valeur et le type"
      },
      {
        "id": "C",
        "text": "=== ne fonctionne que sur les nombres et les chaînes"
      },
      {
        "id": "D",
        "text": "Il n’y a aucune différence de comportement"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’opérateur == convertit les opérandes avant comparaison (coercion), alors que === exige que la valeur et le type soient strictement identiques."
  },
  {
    "id": "info-35",
    "categoryId": "informatique",
    "difficulty": "moyen",
    "question": "En CSS, à quoi sert principalement le module Flexbox (display: flex;) ?",
    "options": [
      {
        "id": "A",
        "text": "À créer des textures tridimensionnelles"
      },
      {
        "id": "B",
        "text": "À distribuer et aligner facilement des éléments enfants selon un axe principal et un axe secondaire"
      },
      {
        "id": "C",
        "text": "À masquer des éléments aux moteurs de recherche"
      },
      {
        "id": "D",
        "text": "À convertir automatiquement des images PNG en WebP"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Flexbox permet d’agencer des interfaces unidimensionnelles souples avec un contrôle précis de l’alignement, de l’espacement et de l’ordre des éléments."
  },
  {
    "id": "info-36",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Qu’appelle-t-on le \"Hoisting\" en JavaScript ?",
    "options": [
      {
        "id": "A",
        "text": "L’optimisation du bytecode par le compilateur JIT"
      },
      {
        "id": "B",
        "text": "Le mécanisme par lequel les déclarations de variables et fonctions sont hissées en mémoire au début de leur portée avant exécution"
      },
      {
        "id": "C",
        "text": "Le ramasse-miettes (Garbage Collector) qui libère la mémoire"
      },
      {
        "id": "D",
        "text": "Le transfert des paquets réseaux au format JSON"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le moteur JS enregistre les déclarations de fonctions et variables (var) en mémoire pendant la phase de compilation avant d’exécuter le code."
  },
  {
    "id": "info-37",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quelle structure de données linéaire fonctionne selon le principe LIFO (Last In, First Out) ?",
    "options": [
      {
        "id": "A",
        "text": "La file d’attente (Queue)"
      },
      {
        "id": "B",
        "text": "La pile (Stack)"
      },
      {
        "id": "C",
        "text": "L’arbre binaire de recherche"
      },
      {
        "id": "D",
        "text": "Le graphe orienté cyclique"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Dans une pile (Stack), le dernier élément empilé (push) est le premier à être dépilé (pop), à l’instar d’une pile de livres."
  },
  {
    "id": "info-38",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quelle est la complexité temporelle moyenne d’une recherche d’élément dans une table de hachage correctement dimensionnée ?",
    "options": [
      {
        "id": "A",
        "text": "O(n)"
      },
      {
        "id": "B",
        "text": "O(log n)"
      },
      {
        "id": "C",
        "text": "O(1)"
      },
      {
        "id": "D",
        "text": "O(n²)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Grâce à la fonction de hachage qui calcule directement l’indice dans le tableau interne, la recherche s’effectue en temps constant O(1) en moyenne."
  },
  {
    "id": "info-39",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quelle vulnérabilité web consiste à injecter un script malveillant qui s’exécute dans le navigateur d’autres utilisateurs ?",
    "options": [
      {
        "id": "A",
        "text": "Injection SQL (SQLi)"
      },
      {
        "id": "B",
        "text": "Cross-Site Scripting (XSS)"
      },
      {
        "id": "C",
        "text": "Attaque par déni de service (DDoS)"
      },
      {
        "id": "D",
        "text": "Usurpation d’adresse IP (IP Spoofing)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Une faille XSS permet à un attaquant d’injecter des scripts côté client (souvent en JavaScript) pour voler des cookies de session ou manipuler la page."
  },
  {
    "id": "info-40",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quel algorithme de tri garantit une complexité temporelle de O(n log n) même dans le pire des cas ?",
    "options": [
      {
        "id": "A",
        "text": "Le tri à bulles (Bubble Sort)"
      },
      {
        "id": "B",
        "text": "Le tri rapide standard (Quick Sort)"
      },
      {
        "id": "C",
        "text": "Le tri fusion (Merge Sort)"
      },
      {
        "id": "D",
        "text": "Le tri par sélection"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Le tri fusion divise systématiquement la liste en deux sous-listes et garantit O(n log n) aussi bien dans le meilleur, moyen que pire des cas."
  },
  {
    "id": "info-41",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Dans le modèle d’interconnexion des réseaux OSI, à quelle couche appartient le protocole TCP ?",
    "options": [
      {
        "id": "A",
        "text": "Couche 2 (Liaison de données)"
      },
      {
        "id": "B",
        "text": "Couche 3 (Réseau)"
      },
      {
        "id": "C",
        "text": "Couche 4 (Transport)"
      },
      {
        "id": "D",
        "text": "Couche 7 (Application)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "TCP (Transmission Control Protocol) réside dans la couche 4 (Transport), gérant le contrôle de flux, le réordonnancement des segments et la fiabilité."
  },
  {
    "id": "info-42",
    "categoryId": "informatique",
    "difficulty": "difficile",
    "question": "Quelle complexité temporelle peut atteindre le tri rapide dans son pire cas ?",
    "options": [
      {
        "id": "A",
        "text": "O(n log n)"
      },
      {
        "id": "B",
        "text": "O(n²)"
      },
      {
        "id": "C",
        "text": "O(log n)"
      },
      {
        "id": "D",
        "text": "O(1)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Lorsque les partitions sont très déséquilibrées, le tri rapide peut effectuer un nombre quadratique d’opérations."
  },
  {
    "id": "culture-26",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Quel artiste italien de la Renaissance est l’auteur de la fresque de La Cène et de La Joconde ?",
    "options": [
      {
        "id": "A",
        "text": "Michel-Ange"
      },
      {
        "id": "B",
        "text": "Léonard de Vinci"
      },
      {
        "id": "C",
        "text": "Raphaël"
      },
      {
        "id": "D",
        "text": "Botticelli"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Léonard de Vinci (1452-1519) est un génie universel de la Renaissance italienne, peintre de La Joconde et de La Cène."
  },
  {
    "id": "culture-27",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Dans quelle capitale européenne peut-on visiter le célèbre amphithéâtre du Colisée ?",
    "options": [
      {
        "id": "A",
        "text": "Athènes"
      },
      {
        "id": "B",
        "text": "Rome"
      },
      {
        "id": "C",
        "text": "Madrid"
      },
      {
        "id": "D",
        "text": "Lisbonne"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le Colisée, inauguré en 80 après J.-C. sous l’empereur Titus, est situé au cœur de Rome, en Italie."
  },
  {
    "id": "culture-28",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Quel instrument de musique classique à cordes frappées comporte 88 touches blanches et noires ?",
    "options": [
      {
        "id": "A",
        "text": "Le violon"
      },
      {
        "id": "B",
        "text": "La harpe"
      },
      {
        "id": "C",
        "text": "Le piano"
      },
      {
        "id": "D",
        "text": "Le clavecin"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Le piano moderne standard possède 88 touches (52 touches blanches pour les notes diatoniques et 36 touches noires pour les altérations)."
  },
  {
    "id": "culture-29",
    "categoryId": "culture-generale",
    "difficulty": "facile",
    "question": "Quel dramaturge anglais a écrit les pièces emblématiques \"Roméo et Juliette\", \"Hamlet\" et \"Macbeth\" ?",
    "options": [
      {
        "id": "A",
        "text": "Charles Dickens"
      },
      {
        "id": "B",
        "text": "William Shakespeare"
      },
      {
        "id": "C",
        "text": "Oscar Wilde"
      },
      {
        "id": "D",
        "text": "Arthur Conan Doyle"
      }
    ],
    "correctAnswer": "B",
    "explanation": "William Shakespeare (1564-1616) est considéré comme l’un des plus grands dramaturges et poètes de la littérature mondiale."
  },
  {
    "id": "culture-30",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel peintre surréaliste espagnol est célèbre pour ses montres molles dans le tableau \"La Persistance de la mémoire\" ?",
    "options": [
      {
        "id": "A",
        "text": "Pablo Picasso"
      },
      {
        "id": "B",
        "text": "Salvador Dalí"
      },
      {
        "id": "C",
        "text": "Joan Miró"
      },
      {
        "id": "D",
        "text": "Francisco de Goya"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Salvador Dalí a peint \"La Persistance de la mémoire\" en 1931, œuvre phare du surréalisme mettant en scène des montres fondant dans un paysage désertique."
  },
  {
    "id": "culture-31",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "En quelle année a eu lieu la chute historique du mur de Berlin ?",
    "options": [
      {
        "id": "A",
        "text": "1985"
      },
      {
        "id": "B",
        "text": "1989"
      },
      {
        "id": "C",
        "text": "1991"
      },
      {
        "id": "D",
        "text": "1995"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le mur de Berlin est tombé dans la nuit du 9 novembre 1989, événement majeur marquant la fin de la Guerre froide et la réunification allemande."
  },
  {
    "id": "culture-32",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel philosophe de la Grèce antique a écrit \"La République\" et fondé l’Académie d’Athènes ?",
    "options": [
      {
        "id": "A",
        "text": "Socrate"
      },
      {
        "id": "B",
        "text": "Platon"
      },
      {
        "id": "C",
        "text": "Aristote"
      },
      {
        "id": "D",
        "text": "Épicure"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Platon (disciple de Socrate et maître d’Aristote) a développé la théorie des Idées et a exposé sa vision de la justice dans La République."
  },
  {
    "id": "culture-33",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel compositeur baroque italien a écrit le célèbre recueil de concertos pour violon \"Les Quatre Saisons\" ?",
    "options": [
      {
        "id": "A",
        "text": "Giuseppe Verdi"
      },
      {
        "id": "B",
        "text": "Antonio Vivaldi"
      },
      {
        "id": "C",
        "text": "Giacomo Puccini"
      },
      {
        "id": "D",
        "text": "Gioachino Rossini"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Antonio Vivaldi a composé \"Les Quatre Saisons\" en 1723, une suite de quatre concertos pour violon décrivant musicalement chaque saison."
  },
  {
    "id": "culture-34",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Dans la mythologie nordique, quel dieu est le maître du tonnerre et manie le marteau magique Mjöllnir ?",
    "options": [
      {
        "id": "A",
        "text": "Odin"
      },
      {
        "id": "B",
        "text": "Thor"
      },
      {
        "id": "C",
        "text": "Loki"
      },
      {
        "id": "D",
        "text": "Baldr"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Thor est le dieu du tonnerre, de la force et des tempêtes dans la mythologie scandinave et germanique."
  },
  {
    "id": "culture-35",
    "categoryId": "culture-generale",
    "difficulty": "moyen",
    "question": "Quel écrivain français a rédigé le roman monumental \"À la recherche du temps perdu\" ?",
    "options": [
      {
        "id": "A",
        "text": "Émile Zola"
      },
      {
        "id": "B",
        "text": "Gustave Flaubert"
      },
      {
        "id": "C",
        "text": "Marcel Proust"
      },
      {
        "id": "D",
        "text": "Honoré de Balzac"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Marcel Proust a publié les sept tomes d’\"À la recherche du temps perdu\" entre 1913 et 1927, chef-d’œuvre d’analyse psychologique et de mémoire involontaire."
  },
  {
    "id": "culture-36",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel mouvement littéraire français du XIXe siècle prônait la doctrine de \"l’Art pour l’Art\", en réaction au romantisme ?",
    "options": [
      {
        "id": "A",
        "text": "Le Surréalisme"
      },
      {
        "id": "B",
        "text": "Le Parnasse"
      },
      {
        "id": "C",
        "text": "Le Naturalisme"
      },
      {
        "id": "D",
        "text": "L’Humanisme"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le Parnasse (Théophile Gautier, Leconte de Lisle, José-Maria de Heredia) valorisait la perfection formelle et le culte de la beauté pure désintéressée."
  },
  {
    "id": "culture-37",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Qui est l’auteur du célèbre tableau \"Guernica\" dénonçant le bombardement de la ville basque en 1937 ?",
    "options": [
      {
        "id": "A",
        "text": "Joan Miró"
      },
      {
        "id": "B",
        "text": "Salvador Dalí"
      },
      {
        "id": "C",
        "text": "Pablo Picasso"
      },
      {
        "id": "D",
        "text": "Diego Rivera"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pablo Picasso a peint \"Guernica\" en 1937, une œuvre cubiste monumentale en noir et blanc devenue un symbole universel anti-guerre."
  },
  {
    "id": "culture-38",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel sculpteur français est l’auteur des chefs-d’œuvre \"Le Penseur\", \"Le Baiser\" et \"La Porte de l’Enfer\" ?",
    "options": [
      {
        "id": "A",
        "text": "Camille Claudel"
      },
      {
        "id": "B",
        "text": "Auguste Rodin"
      },
      {
        "id": "C",
        "text": "Jean-Baptiste Carpeaux"
      },
      {
        "id": "D",
        "text": "Antoine Bourdelle"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Auguste Rodin (1840-1917) est l’un des pères de la sculpture moderne, célèbre pour sa puissance expressive et le travail du bronze et du marbre."
  },
  {
    "id": "culture-39",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quelle symphonie de Ludwig van Beethoven intègre dans son mouvement final \"L’Hymne à la joie\" sur un poème de Schiller ?",
    "options": [
      {
        "id": "A",
        "text": "La 3e Symphonie (Héroïque)"
      },
      {
        "id": "B",
        "text": "La 5e Symphonie (du Destin)"
      },
      {
        "id": "C",
        "text": "La 9e Symphonie"
      },
      {
        "id": "D",
        "text": "La 6e Symphonie (Pastorale)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "La 9e Symphonie en ré mineur (op. 125), créée en 1824, introduit pour la première fois un chœur et des solistes vocaux dans une symphonie."
  },
  {
    "id": "culture-40",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel écrivain et philosophe français d’Algérie a théorisé la notion de l’Absurde dans \"Le Mythe de Sisyphe\" et \"L’Étranger\" ?",
    "options": [
      {
        "id": "A",
        "text": "Jean-Paul Sartre"
      },
      {
        "id": "B",
        "text": "Albert Camus"
      },
      {
        "id": "C",
        "text": "Simone de Beauvoir"
      },
      {
        "id": "D",
        "text": "Michel Foucault"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Albert Camus (Prix Nobel de littérature 1957) a développé la philosophie de l’absurde et de la révolte dans ses essais et romans."
  },
  {
    "id": "culture-41",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel célèbre traité antique de stratégie et de pensée militaire chinoise est traditionnellement attribué à Sun Tzu ?",
    "options": [
      {
        "id": "A",
        "text": "Le Livre de la Voie et de la Vertu"
      },
      {
        "id": "B",
        "text": "Les Entretiens de Confucius"
      },
      {
        "id": "C",
        "text": "L’Art de la guerre"
      },
      {
        "id": "D",
        "text": "Le Classique des vers"
      }
    ],
    "correctAnswer": "C",
    "explanation": "L’Art de la guerre (Ve siècle av. J.-C.) expose les principes fondamentaux de la tactique, de l’espionnage et de la résolution sans combat destructeur."
  },
  {
    "id": "culture-42",
    "categoryId": "culture-generale",
    "difficulty": "difficile",
    "question": "Quel opéra de Wolfgang Amadeus Mozart met en scène le châtiment du séducteur Don Juan précipité aux enfers ?",
    "options": [
      {
        "id": "A",
        "text": "La Flûte enchantée"
      },
      {
        "id": "B",
        "text": "Les Noces de Figaro"
      },
      {
        "id": "C",
        "text": "Don Giovanni"
      },
      {
        "id": "D",
        "text": "Così fan tutte"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Don Giovanni (1787), sur un livret de Lorenzo Da Ponte, est considéré comme l’un des plus grands chefs-d’œuvre de l’art lyrique."
  },
  {
    "id": "sci-26",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quelle est la formule chimique de l’eau pure ?",
    "options": [
      {
        "id": "A",
        "text": "CO2"
      },
      {
        "id": "B",
        "text": "H2O"
      },
      {
        "id": "C",
        "text": "NaCl"
      },
      {
        "id": "D",
        "text": "O2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Une molécule d’eau est constituée de deux atomes d’hydrogène liés à un atome d’oxygène (H2O)."
  },
  {
    "id": "sci-27",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quelle planète est la plus proche du Soleil dans notre système solaire ?",
    "options": [
      {
        "id": "A",
        "text": "Vénus"
      },
      {
        "id": "B",
        "text": "Mercure"
      },
      {
        "id": "C",
        "text": "Mars"
      },
      {
        "id": "D",
        "text": "Terre"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mercure est la planète la plus proche du Soleil (à environ 58 millions de kilomètres) et la plus petite du système solaire."
  },
  {
    "id": "sci-28",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Quel gaz essentiel les plantes absorbent-elles de l’atmosphère lors de la photosynthèse ?",
    "options": [
      {
        "id": "A",
        "text": "Le dioxygène"
      },
      {
        "id": "B",
        "text": "Le dioxyde de carbone (CO2)"
      },
      {
        "id": "C",
        "text": "Le méthane"
      },
      {
        "id": "D",
        "text": "L’hélium"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Grâce à la chlorophylle et à la lumière solaire, les plantes captent le CO2 pour synthétiser du glucose et rejettent du dioxygène (O2)."
  },
  {
    "id": "sci-29",
    "categoryId": "sciences",
    "difficulty": "facile",
    "question": "Combien de paires de chromosomes comporte le caryotype d’une cellule humaine normale ?",
    "options": [
      {
        "id": "A",
        "text": "20 paires"
      },
      {
        "id": "B",
        "text": "23 paires"
      },
      {
        "id": "C",
        "text": "46 paires"
      },
      {
        "id": "D",
        "text": "12 paires"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Les cellules humaines contiennent 23 paires de chromosomes (soit 46 chromosomes au total), dont 22 paires d’autosomes et 1 paire de chromosomes sexuels."
  },
  {
    "id": "sci-30",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quel organite cellulaire est couramment désigné comme la \"centrale énergétique\" de la cellule eucaryote ?",
    "options": [
      {
        "id": "A",
        "text": "L’appareil de Golgi"
      },
      {
        "id": "B",
        "text": "Le ribosome"
      },
      {
        "id": "C",
        "text": "La mitochondrie"
      },
      {
        "id": "D",
        "text": "Le réticulum endoplasmique"
      }
    ],
    "correctAnswer": "C",
    "explanation": "La mitochondrie produit l’ATP (adénosine triphosphate), monnaie énergétique indispensable aux réactions cellulaires, via la respiration cellulaire."
  },
  {
    "id": "sci-31",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quelle est la formule chimique de l’ozone ?",
    "options": [
      {
        "id": "A",
        "text": "N₂O"
      },
      {
        "id": "B",
        "text": "O₂"
      },
      {
        "id": "C",
        "text": "O₃"
      },
      {
        "id": "D",
        "text": "CO₂"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Une molécule d’ozone est formée de trois atomes d’oxygène, d’où sa formule O₃."
  },
  {
    "id": "sci-32",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quel élément chimique a pour symbole atomique \"Au\" dans le tableau périodique ?",
    "options": [
      {
        "id": "A",
        "text": "L’argent"
      },
      {
        "id": "B",
        "text": "L’aluminium"
      },
      {
        "id": "C",
        "text": "L’or"
      },
      {
        "id": "D",
        "text": "L’argon"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Le symbole Au vient du latin \"Aurum\", signifiant or (numéro atomique 79)."
  },
  {
    "id": "sci-33",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quelle loi de la dynamique de Newton énonce que \"toute action engendre une réaction égale et de sens opposé\" ?",
    "options": [
      {
        "id": "A",
        "text": "La première loi (principe d’inertie)"
      },
      {
        "id": "B",
        "text": "La deuxième loi (principe fondamental de la dynamique F=ma)"
      },
      {
        "id": "C",
        "text": "La troisième loi (principe des actions réciproques)"
      },
      {
        "id": "D",
        "text": "La loi de gravitation universelle"
      }
    ],
    "correctAnswer": "C",
    "explanation": "La 3e loi de Newton stipule que les forces exercées mutuellement par deux corps l’un sur l’autre sont toujours égales en intensité et opposées en direction."
  },
  {
    "id": "sci-34",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quelle particule élémentaire composant l’atome possède une charge électrique négative ?",
    "options": [
      {
        "id": "A",
        "text": "Le proton"
      },
      {
        "id": "B",
        "text": "Le neutron"
      },
      {
        "id": "C",
        "text": "L’électron"
      },
      {
        "id": "D",
        "text": "Le photon"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Les électrons gravitent autour du noyau atomique et portent une charge élémentaire négative (-e)."
  },
  {
    "id": "sci-35",
    "categoryId": "sciences",
    "difficulty": "moyen",
    "question": "Quel gaz représente environ 78 % du volume de l’atmosphère terrestre sèche ?",
    "options": [
      {
        "id": "A",
        "text": "Le dioxygène (O2)"
      },
      {
        "id": "B",
        "text": "Le diazote (N2)"
      },
      {
        "id": "C",
        "text": "L’argon (Ar)"
      },
      {
        "id": "D",
        "text": "Le dioxyde de carbone (CO2)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’air sec est composé d’environ 78 % de diazote (N2), 21 % de dioxygène (O2), 0,93 % d’argon et de traces d’autres gaz dont le CO2."
  },
  {
    "id": "sci-36",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quel physicien allemand a énoncé en 1927 le principe d’indétermination (ou d’incertitude) en physique quantique ?",
    "options": [
      {
        "id": "A",
        "text": "Max Planck"
      },
      {
        "id": "B",
        "text": "Albert Einstein"
      },
      {
        "id": "C",
        "text": "Werner Heisenberg"
      },
      {
        "id": "D",
        "text": "Niels Bohr"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Werner Heisenberg a démontré qu’on ne peut pas mesurer simultanément avec une précision infinie la position et la quantité de mouvement d’une particule."
  },
  {
    "id": "sci-37",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Comment appelle-t-on l’explosion cataclysmique marquant la mort d’une étoile massive en fin de vie ?",
    "options": [
      {
        "id": "A",
        "text": "Une nébuleuse planétaire"
      },
      {
        "id": "B",
        "text": "Une supernova"
      },
      {
        "id": "C",
        "text": "Une aurore boréale"
      },
      {
        "id": "D",
        "text": "Une naine blanche"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Une supernova libère une énergie gigantesque et enrichit le milieu interstellaire en éléments chimiques lourds essentiels à la formation des planètes."
  },
  {
    "id": "sci-38",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quel acide nucléique transporte l’information génétique du noyau cellulaire jusqu’aux ribosomes pour la synthèse des protéines ?",
    "options": [
      {
        "id": "A",
        "text": "L’ADN polymérase"
      },
      {
        "id": "B",
        "text": "L’ARN messager (ARNm)"
      },
      {
        "id": "C",
        "text": "L’ARN de transfert (ARNt)"
      },
      {
        "id": "D",
        "text": "L’ATP"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’ARNm est une copie simple brin d’un fragment d’ADN servant de matrice pour la traduction des acides aminés lors de la synthèse protéique."
  },
  {
    "id": "sci-39",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quel météorologue et géophysicien allemand a présenté en 1912 la théorie de la dérive des continents ?",
    "options": [
      {
        "id": "A",
        "text": "Charles Lyell"
      },
      {
        "id": "B",
        "text": "Alfred Wegener"
      },
      {
        "id": "C",
        "text": "James Hutton"
      },
      {
        "id": "D",
        "text": "Alexander von Humboldt"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Alfred Wegener a émis l’hypothèse qu’au cours des ères géologiques, les continents actuels étaient réunis en un supercontinent unique nommé la Pangée."
  },
  {
    "id": "sci-40",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quelle force fondamentale de l’univers assure la cohésion des protons et neutrons au sein du noyau atomique ?",
    "options": [
      {
        "id": "A",
        "text": "La force électromagnétique"
      },
      {
        "id": "B",
        "text": "La force de gravitation"
      },
      {
        "id": "C",
        "text": "L’interaction nucléaire forte"
      },
      {
        "id": "D",
        "text": "L’interaction nucléaire faible"
      }
    ],
    "correctAnswer": "C",
    "explanation": "L’interaction forte est la plus puissante des quatre forces fondamentales, surpassant la répulsion électrostatique entre protons dans le noyau atomique."
  },
  {
    "id": "sci-41",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quelle est la valeur exacte du zéro absolu (0 Kelvin) sur l’échelle de température Celsius ?",
    "options": [
      {
        "id": "A",
        "text": "-100 °C"
      },
      {
        "id": "B",
        "text": "-273,15 °C"
      },
      {
        "id": "C",
        "text": "-459,67 °C"
      },
      {
        "id": "D",
        "text": "0 °C"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le zéro absolu correspond à la température théorique la plus basse possible où l’agitation thermique des atomes est minimale (-273,15 °C)."
  },
  {
    "id": "sci-42",
    "categoryId": "sciences",
    "difficulty": "difficile",
    "question": "Quel phénomène d’optique ondulatoire se produit lorsque la lumière contourne un obstacle de taille comparable à sa longueur d’onde ?",
    "options": [
      {
        "id": "A",
        "text": "La réfraction"
      },
      {
        "id": "B",
        "text": "La diffraction"
      },
      {
        "id": "C",
        "text": "La polarisation"
      },
      {
        "id": "D",
        "text": "L’effet Doppler"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La diffraction est le comportement caractéristique des ondes qui se propagent au-delà d’un obstacle ou à travers une fente étroite."
  },
  {
    "id": "hist-26",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "En quelle année a débuté la Première Guerre mondiale suite à l’attentat de Sarajevo ?",
    "options": [
      {
        "id": "A",
        "text": "1912"
      },
      {
        "id": "B",
        "text": "1914"
      },
      {
        "id": "C",
        "text": "1918"
      },
      {
        "id": "D",
        "text": "1939"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Première Guerre mondiale a éclaté à l’été 1914 suite à l’assassinat de l’archiduc François-Ferdinand le 28 juin 1914 à Sarajevo."
  },
  {
    "id": "hist-27",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "Quel général devenu dirigeant politique a été sacré empereur des Français en 1804 à Notre-Dame de Paris ?",
    "options": [
      {
        "id": "A",
        "text": "Louis XIV"
      },
      {
        "id": "B",
        "text": "Napoléon Ier (Napoléon Bonaparte)"
      },
      {
        "id": "C",
        "text": "Charles de Gaulle"
      },
      {
        "id": "D",
        "text": "Henri IV"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Napoléon Bonaparte a été couronné empereur sous le nom de Napoléon Ier le 2 décembre 1804 par le pape Pie VII à Paris."
  },
  {
    "id": "hist-28",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "Quel événement marquant du 14 juillet 1789 est devenu le symbole du début de la Révolution française ?",
    "options": [
      {
        "id": "A",
        "text": "La prise de la Bastille"
      },
      {
        "id": "B",
        "text": "La fuite à Varennes"
      },
      {
        "id": "C",
        "text": "La nuit du 4 août"
      },
      {
        "id": "D",
        "text": "Le serment du Jeu de paume"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La prise de la forteresse royale de la Bastille par le peuple parisien le 14 juillet 1789 est commémorée chaque année lors de la fête nationale française."
  },
  {
    "id": "hist-29",
    "categoryId": "histoire",
    "difficulty": "facile",
    "question": "Quelle civilisation antique a érigé les grandes pyramides du plateau de Gizeh au IIIe millénaire avant J.-C. ?",
    "options": [
      {
        "id": "A",
        "text": "La civilisation mésopotamienne"
      },
      {
        "id": "B",
        "text": "La civilisation égyptienne"
      },
      {
        "id": "C",
        "text": "La civilisation phénicienne"
      },
      {
        "id": "D",
        "text": "La civilisation perse"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Les pharaons de l’Ancien Empire égyptien (Khéops, Khéphren et Mykérinos) ont fait bâtir ces pyramides monumentales comme sépultures royales."
  },
  {
    "id": "hist-30",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quel traité de paix international a officiellement conclu la Première Guerre mondiale le 28 juin 1919 ?",
    "options": [
      {
        "id": "A",
        "text": "Le traité de Vienne"
      },
      {
        "id": "B",
        "text": "Le traité de Versailles"
      },
      {
        "id": "C",
        "text": "Le traité de Rome"
      },
      {
        "id": "D",
        "text": "Le traité d’Utrecht"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Signé dans la Galerie des Glaces du château de Versailles, ce traité a redessiné la carte de l’Europe et imposé de lourdes réparations à l’Allemagne."
  },
  {
    "id": "hist-31",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quel dirigeant britannique a incarné la résistance du Royaume-Uni face au nazisme durant la Seconde Guerre mondiale ?",
    "options": [
      {
        "id": "A",
        "text": "Neville Chamberlain"
      },
      {
        "id": "B",
        "text": "Winston Churchill"
      },
      {
        "id": "C",
        "text": "Clement Attlee"
      },
      {
        "id": "D",
        "text": "Anthony Eden"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Winston Churchill est devenu Premier ministre en mai 1940, mobilisant la nation britannique avec ses célèbres discours de défi."
  },
  {
    "id": "hist-32",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quel explorateur génois a accosté aux Bahamas en 1492, pensant avoir atteint les Indes par l’ouest ?",
    "options": [
      {
        "id": "A",
        "text": "Vasco de Gama"
      },
      {
        "id": "B",
        "text": "Christophe Colomb"
      },
      {
        "id": "C",
        "text": "Fernand de Magellan"
      },
      {
        "id": "D",
        "text": "Amerigo Vespucci"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Financé par les Rois catholiques d’Espagne, Christophe Colomb a débarqué sur l’île de Guanahani le 12 octobre 1492."
  },
  {
    "id": "hist-33",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quelle cité-État de la Grèce antique a inventé le concept d’isonomie et de démocratie directe au Ve siècle av. J.-C. ?",
    "options": [
      {
        "id": "A",
        "text": "Sparte"
      },
      {
        "id": "B",
        "text": "Athènes"
      },
      {
        "id": "C",
        "text": "Thèbes"
      },
      {
        "id": "D",
        "text": "Corinthe"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sous l’impulsion de Clisthène puis de Périclès, Athènes a développé un régime démocratique où les citoyens votaient directement à l’Ecclésia."
  },
  {
    "id": "hist-34",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "En quelle année l’opération Overlord a-t-elle permis le débarquement allié sur les plages de Normandie ?",
    "options": [
      {
        "id": "A",
        "text": "1942"
      },
      {
        "id": "B",
        "text": "1943"
      },
      {
        "id": "C",
        "text": "1944"
      },
      {
        "id": "D",
        "text": "1945"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Le \"Jour J\" (D-Day) s’est déroulé le 6 juin 1944, marquant l’ouverture du front de l’Ouest décisif pour la libération de l’Europe."
  },
  {
    "id": "hist-35",
    "categoryId": "histoire",
    "difficulty": "moyen",
    "question": "Quel roi de France a fait construire le château de Versailles pour y installer la Cour et le pouvoir royal ?",
    "options": [
      {
        "id": "A",
        "text": "François Ier"
      },
      {
        "id": "B",
        "text": "Louis XIII"
      },
      {
        "id": "C",
        "text": "Louis XIV (le Roi-Soleil)"
      },
      {
        "id": "D",
        "text": "Louis XVI"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Louis XIV a transformé le pavillon de chasse de son père en un somptueux palais baroque, symbole du rayonnement de la monarchie absolue."
  },
  {
    "id": "hist-36",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel édit royal promulgué en 1598 par le roi Henri IV a accordé la liberté de conscience et de culte aux protestants en France ?",
    "options": [
      {
        "id": "A",
        "text": "L’édit de Fontainebleau"
      },
      {
        "id": "B",
        "text": "L’édit de Nantes"
      },
      {
        "id": "C",
        "text": "L’édit de Villers-Cotterêts"
      },
      {
        "id": "D",
        "text": "La paix d’Alès"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’édit de Nantes a mis un terme aux guerres de religion en France en concédant aux protestants des droits civils et des places de sûreté."
  },
  {
    "id": "hist-37",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quelle dynastie impériale a régné sur la Russie pendant plus de trois siècles, de 1613 jusqu’à la Révolution de 1917 ?",
    "options": [
      {
        "id": "A",
        "text": "Les Rurikides"
      },
      {
        "id": "B",
        "text": "Les Romanov"
      },
      {
        "id": "C",
        "text": "Les Habsbourg"
      },
      {
        "id": "D",
        "text": "Les Hohenzollern"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La dynastie des Romanov, fondée par Michel Ier en 1613, s’est éteinte avec l’abdication du tsar Nicolas II en mars 1917."
  },
  {
    "id": "hist-38",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quelle bataille navale d’octobre 1805 a scellé la suprématie maritime britannique face à la flotte franco-espagnole ?",
    "options": [
      {
        "id": "A",
        "text": "La bataille d’Austerlitz"
      },
      {
        "id": "B",
        "text": "La bataille de Trafalgar"
      },
      {
        "id": "C",
        "text": "La bataille d’Aboukir"
      },
      {
        "id": "D",
        "text": "La bataille de Waterloo"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Au large du cap Trafalgar, l’amiral Horatio Nelson a anéanti la flotte de Villeneuve, au prix de sa propre vie pendant le combat."
  },
  {
    "id": "hist-39",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel traité européen ratifié en 1992 a officiellement fondé l’Union européenne et instauré la citoyenneté européenne ?",
    "options": [
      {
        "id": "A",
        "text": "Le traité de Rome"
      },
      {
        "id": "B",
        "text": "Le traité de Maastricht"
      },
      {
        "id": "C",
        "text": "Le traité de Lisbonne"
      },
      {
        "id": "D",
        "text": "Le traité d’Amsterdam"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le traité de Maastricht (sur l’Union européenne) a créé la structure en trois piliers et posé les jalons de la monnaie unique (l’euro)."
  },
  {
    "id": "hist-40",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel conflit féodal et territorial a opposé les maisons régnantes d’Angleterre et de France entre 1337 et 1453 ?",
    "options": [
      {
        "id": "A",
        "text": "La guerre des Deux-Roses"
      },
      {
        "id": "B",
        "text": "La guerre de Trente Ans"
      },
      {
        "id": "C",
        "text": "La guerre de Cent Ans"
      },
      {
        "id": "D",
        "text": "La guerre de Sept Ans"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cette succession de conflits dura en réalité 116 ans, marquée par les figures de Crécy, Azincourt, Jeanne d’Arc et la bataille finale de Castillon."
  },
  {
    "id": "hist-41",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quel général et stratège carthaginois a franchi les Alpes avec ses éléphants de guerre pour affronter Rome en 218 av. J.-C. ?",
    "options": [
      {
        "id": "A",
        "text": "Hamilcar Barca"
      },
      {
        "id": "B",
        "text": "Hannibal Barca"
      },
      {
        "id": "C",
        "text": "Scipion l’Africain"
      },
      {
        "id": "D",
        "text": "Hasdrubal"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Lors de la deuxième guerre punique, Hannibal a écrasé les légions romaines à Cannes avant d’être finalement vaincu à Zama par Scipion."
  },
  {
    "id": "hist-42",
    "categoryId": "histoire",
    "difficulty": "difficile",
    "question": "Quelle conférence diplomatique de 1814-1815 a réorganisé l’équilibre des puissances en Europe après la défaite de Napoléon ?",
    "options": [
      {
        "id": "A",
        "text": "Le congrès de Berlin"
      },
      {
        "id": "B",
        "text": "Le congrès de Vienne"
      },
      {
        "id": "C",
        "text": "La conférence de Yalta"
      },
      {
        "id": "D",
        "text": "Le congrès de La Haye"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Présidé par Metternich et réunissant les puissances victorieuses (Autriche, Russie, Prusse, Royaume-Uni), il a restauré les dynasties traditionnelles."
  },
  {
    "id": "math-26",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Quel est le résultat de la multiplication 7 x 8 ?",
    "options": [
      {
        "id": "A",
        "text": "54"
      },
      {
        "id": "B",
        "text": "56"
      },
      {
        "id": "C",
        "text": "58"
      },
      {
        "id": "D",
        "text": "64"
      }
    ],
    "correctAnswer": "B",
    "explanation": "7 x 8 = 56."
  },
  {
    "id": "math-27",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Quelle est la racine carrée exacte du nombre entier 144 ?",
    "options": [
      {
        "id": "A",
        "text": "11"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Puisque 12 x 12 = 144, la racine carrée de 144 est 12."
  },
  {
    "id": "math-28",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Combien de degrés vaut systématiquement la somme des trois angles intérieurs d’un triangle euclidien ?",
    "options": [
      {
        "id": "A",
        "text": "90°"
      },
      {
        "id": "B",
        "text": "180°"
      },
      {
        "id": "C",
        "text": "270°"
      },
      {
        "id": "D",
        "text": "360°"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Dans le plan euclidien usuel, la somme des angles d’un triangle est toujours égale à un angle plat, soit 180°."
  },
  {
    "id": "math-29",
    "categoryId": "mathematiques",
    "difficulty": "facile",
    "question": "Quel est le seul nombre entier qui soit à la fois premier et pair ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "C",
    "explanation": "2 n’admet que deux diviseurs distincts (1 et 2). Tout autre nombre pair supérieur est divisible par 2 et n’est donc pas premier."
  },
  {
    "id": "math-30",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Si un article valant 80 € bénéficie d’une remise commerciale de 25 %, quel est son nouveau prix ?",
    "options": [
      {
        "id": "A",
        "text": "55 €"
      },
      {
        "id": "B",
        "text": "60 €"
      },
      {
        "id": "C",
        "text": "65 €"
      },
      {
        "id": "D",
        "text": "70 €"
      }
    ],
    "correctAnswer": "B",
    "explanation": "25 % de 80 € correspond à un quart de 80, soit 20 €. Le prix remisé est donc de 80 - 20 = 60 €."
  },
  {
    "id": "math-31",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Dans un triangle rectangle, comment appelle-t-on le côté situé à l’opposé de l’angle droit ?",
    "options": [
      {
        "id": "A",
        "text": "L’apothème"
      },
      {
        "id": "B",
        "text": "L’hypoténuse"
      },
      {
        "id": "C",
        "text": "La médiane"
      },
      {
        "id": "D",
        "text": "La sécante"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’hypoténuse est le côté opposé à l’angle droit et correspond également au côté le plus long d’un triangle rectangle."
  },
  {
    "id": "math-32",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Quelle est la dérivée de la fonction polynomiale f(x) = x² par rapport à la variable x ?",
    "options": [
      {
        "id": "A",
        "text": "f’(x) = x"
      },
      {
        "id": "B",
        "text": "f’(x) = 2x"
      },
      {
        "id": "C",
        "text": "f’(x) = 2"
      },
      {
        "id": "D",
        "text": "f’(x) = x³ / 3"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Selon la formule générale de dérivation d’une puissance (x^n)’ = n*x^(n-1), la dérivée de x² est 2x."
  },
  {
    "id": "math-33",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Combien d’arêtes possède un cube régulier à six faces ?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Un cube possède 6 faces carrées, 8 sommets et 12 arêtes égales."
  },
  {
    "id": "math-34",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Quel est le résultat du calcul arithmétique 2³ x 3 ?",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "32"
      },
      {
        "id": "D",
        "text": "36"
      }
    ],
    "correctAnswer": "B",
    "explanation": "2³ = 2 x 2 x 2 = 8. Puis 8 x 3 = 24."
  },
  {
    "id": "math-35",
    "categoryId": "mathematiques",
    "difficulty": "moyen",
    "question": "Quel terme désigne une droite qui coupe un cercle en exactement deux points distincts ?",
    "options": [
      {
        "id": "A",
        "text": "Une tangente"
      },
      {
        "id": "B",
        "text": "Une sécante"
      },
      {
        "id": "C",
        "text": "Un rayon"
      },
      {
        "id": "D",
        "text": "Une asymptote"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Une sécante intersecte le cercle en deux points (formant une corde), alors qu’une tangente ne le touche qu’en un point unique."
  },
  {
    "id": "math-36",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Que vaut la factorielle du nombre 5, notée 5! ?",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "100"
      },
      {
        "id": "C",
        "text": "120"
      },
      {
        "id": "D",
        "text": "720"
      }
    ],
    "correctAnswer": "C",
    "explanation": "5! = 5 x 4 x 3 x 2 x 1 = 120."
  },
  {
    "id": "math-37",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Quelle est la probabilité d’obtenir un double 6 lors du lancer simultané de deux dés cubiques équilibrés à 6 faces ?",
    "options": [
      {
        "id": "A",
        "text": "1/6"
      },
      {
        "id": "B",
        "text": "1/12"
      },
      {
        "id": "C",
        "text": "1/36"
      },
      {
        "id": "D",
        "text": "1/64"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Les deux lancers sont indépendants. Chaque dé a 1 chance sur 6 de faire 6. La probabilité conjointe est 1/6 x 1/6 = 1/36."
  },
  {
    "id": "math-38",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Quelle est la dérivée de la fonction exponentielle f(x) = e^x par rapport à x ?",
    "options": [
      {
        "id": "A",
        "text": "f’(x) = x * e^(x-1)"
      },
      {
        "id": "B",
        "text": "f’(x) = e^x"
      },
      {
        "id": "C",
        "text": "f’(x) = 1 / x"
      },
      {
        "id": "D",
        "text": "f’(x) = ln(x)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La fonction exponentielle de base e est la seule fonction (à constante multiplicative près) égale à sa propre dérivée : (e^x)’ = e^x."
  },
  {
    "id": "math-39",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Comment nomme-t-on une matrice carrée dont tous les coefficients situés en dehors de la diagonale principale sont nuls ?",
    "options": [
      {
        "id": "A",
        "text": "Une matrice triangulaire"
      },
      {
        "id": "B",
        "text": "Une matrice diagonale"
      },
      {
        "id": "C",
        "text": "Une matrice nulle"
      },
      {
        "id": "D",
        "text": "Une matrice orthogonale"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Une matrice diagonale vérifie a_ij = 0 pour tout i ≠ j. Si tous les termes diagonaux valent 1, il s’agit de la matrice identité."
  },
  {
    "id": "math-40",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Si log10(x) = 3 en base 10, quelle est la valeur exacte du nombre x ?",
    "options": [
      {
        "id": "A",
        "text": "30"
      },
      {
        "id": "B",
        "text": "100"
      },
      {
        "id": "C",
        "text": "1 000"
      },
      {
        "id": "D",
        "text": "10 000"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Par définition du logarithme décimal, log10(x) = 3 équivaut à x = 10³ = 1 000."
  },
  {
    "id": "math-41",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Quel grand mathématicien suisse du XVIIIe siècle a introduit les notations fondamentales e, i (pour l’unité imaginaire) et f(x) ?",
    "options": [
      {
        "id": "A",
        "text": "Carl Friedrich Gauss"
      },
      {
        "id": "B",
        "text": "Leonhard Euler"
      },
      {
        "id": "C",
        "text": "René Descartes"
      },
      {
        "id": "D",
        "text": "Pierre-Simon de Laplace"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Leonhard Euler (1707-1783) a standardisé une grande partie des notations modernes et découvert la célèbre identité d’Euler e^(i*pi) + 1 = 0."
  },
  {
    "id": "math-42",
    "categoryId": "mathematiques",
    "difficulty": "difficile",
    "question": "Dans un espace vectoriel euclidien, que vaut le produit scalaire de deux vecteurs non nuls et orthogonaux ?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "Infini"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Le produit scalaire de deux vecteurs u et v vaut ||u||*||v||*cos(theta). Lorsque theta = 90°, cos(90°) = 0, le produit scalaire est donc nul."
  },
  {
    "id": "geo-26",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quelle est la capitale officielle de l’Australie ?",
    "options": [
      {
        "id": "A",
        "text": "Sydney"
      },
      {
        "id": "B",
        "text": "Melbourne"
      },
      {
        "id": "C",
        "text": "Canberra"
      },
      {
        "id": "D",
        "text": "Brisbane"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Canberra a été choisie en 1908 comme compromis fédéral entre les deux plus grandes métropoles rivales, Sydney et Melbourne."
  },
  {
    "id": "geo-27",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quel est le plus vaste océan de la Terre, couvrant plus d’un tiers de la surface planétaire ?",
    "options": [
      {
        "id": "A",
        "text": "L’océan Atlantique"
      },
      {
        "id": "B",
        "text": "L’océan Indien"
      },
      {
        "id": "C",
        "text": "L’océan Pacifique"
      },
      {
        "id": "D",
        "text": "L’océan Arctique"
      }
    ],
    "correctAnswer": "C",
    "explanation": "L’océan Pacifique s’étend sur environ 165 millions de kilomètres carrés, soit une superficie supérieure à l’ensemble des terres émergées réunies."
  },
  {
    "id": "geo-28",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Sur quel continent se trouve le désert chaud du Sahara ?",
    "options": [
      {
        "id": "A",
        "text": "L’Asie"
      },
      {
        "id": "B",
        "text": "L’Afrique"
      },
      {
        "id": "C",
        "text": "L’Amérique du Sud"
      },
      {
        "id": "D",
        "text": "L’Océanie"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le Sahara couvre la majeure partie de l’Afrique du Nord, s’étendant sur plus de 9 millions de kilomètres carrés à travers dix pays."
  },
  {
    "id": "geo-29",
    "categoryId": "geographie",
    "difficulty": "facile",
    "question": "Quelle est la capitale et plus grande agglomération du Japon ?",
    "options": [
      {
        "id": "A",
        "text": "Kyoto"
      },
      {
        "id": "B",
        "text": "Osaka"
      },
      {
        "id": "C",
        "text": "Tokyo"
      },
      {
        "id": "D",
        "text": "Hiroshima"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Tokyo (anciennement Edo) est la capitale du Japon depuis 1868 et forme la métropole la plus peuplée du monde avec plus de 37 millions d’habitants."
  },
  {
    "id": "geo-30",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quel est le plus grand pays du monde par sa superficie terrestre ?",
    "options": [
      {
        "id": "A",
        "text": "Le Canada"
      },
      {
        "id": "B",
        "text": "La Chine"
      },
      {
        "id": "C",
        "text": "La Russie"
      },
      {
        "id": "D",
        "text": "Les États-Unis"
      }
    ],
    "correctAnswer": "C",
    "explanation": "La Fédération de Russie s’étend sur plus de 17 millions de kilomètres carrés à cheval sur l’Europe de l’Est et l’Asie du Nord (11 fuseaux horaires)."
  },
  {
    "id": "geo-31",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Dans quelle haute chaîne de montagnes d’Asie se dresse le mont Everest (8 848 mètres) ?",
    "options": [
      {
        "id": "A",
        "text": "Les Andes"
      },
      {
        "id": "B",
        "text": "L’Himalaya"
      },
      {
        "id": "C",
        "text": "Le Caucase"
      },
      {
        "id": "D",
        "text": "Les Rocheuses"
      }
    ],
    "correctAnswer": "B",
    "explanation": "L’Everest culmine à la frontière entre le Népal et la région autonome du Tibet au cœur de la chaîne himalayenne."
  },
  {
    "id": "geo-32",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quelle est la capitale fédérale du Canada ?",
    "options": [
      {
        "id": "A",
        "text": "Toronto"
      },
      {
        "id": "B",
        "text": "Montréal"
      },
      {
        "id": "C",
        "text": "Ottawa"
      },
      {
        "id": "D",
        "text": "Vancouver"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ottawa, située dans la province de l’Ontario près de la frontière avec le Québec, a été choisie comme capitale par la reine Victoria en 1857."
  },
  {
    "id": "geo-33",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quel détroit maritime sépare l’Espagne du Maroc et relie l’océan Atlantique à la mer Méditerranée ?",
    "options": [
      {
        "id": "A",
        "text": "Le détroit du Bosphore"
      },
      {
        "id": "B",
        "text": "Le détroit de Gibraltar"
      },
      {
        "id": "C",
        "text": "Le détroit d’Ormuz"
      },
      {
        "id": "D",
        "text": "Le détroit de Malacca"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Le détroit de Gibraltar fait seulement 14 kilomètres de largeur à son point le plus resserré entre l’Europe et l’Afrique."
  },
  {
    "id": "geo-34",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Sur quel fleuve sud-américain se concentre le plus grand bassin hydrographique et la plus vaste forêt tropicale du globe ?",
    "options": [
      {
        "id": "A",
        "text": "Le fleuve Amazone"
      },
      {
        "id": "B",
        "text": "Le fleuve Paraná"
      },
      {
        "id": "C",
        "text": "Le fleuve Orénoque"
      },
      {
        "id": "D",
        "text": "Le fleuve São Francisco"
      }
    ],
    "correctAnswer": "A",
    "explanation": "L’Amazone possède le débit le plus élevé de tous les fleuves terrestres (environ 209 000 m³/s à son embouchure dans l’Atlantique)."
  },
  {
    "id": "geo-35",
    "categoryId": "geographie",
    "difficulty": "moyen",
    "question": "Quelle est la capitale de l’Égypte, traversée par le fleuve Nil ?",
    "options": [
      {
        "id": "A",
        "text": "Alexandrie"
      },
      {
        "id": "B",
        "text": "Louxor"
      },
      {
        "id": "C",
        "text": "Le Caire"
      },
      {
        "id": "D",
        "text": "Assouan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Le Caire est la capitale égyptienne et la plus grande agglomération du monde arabe et d’Afrique du Nord."
  },
  {
    "id": "geo-36",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quel pays du monde compte le plus grand nombre d’îles recensées sur son territoire (plus de 260 000) ?",
    "options": [
      {
        "id": "A",
        "text": "L’Indonésie"
      },
      {
        "id": "B",
        "text": "La Suède"
      },
      {
        "id": "C",
        "text": "La Grèce"
      },
      {
        "id": "D",
        "text": "Les Philippines"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Suède possède environ 267 570 îles répertoriées (dont moins de 1 000 sont habitées), devançant la Finlande et la Norvège."
  },
  {
    "id": "geo-37",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quelle étendue d’eau endoréique fermée est considérée comme le plus grand lac de la planète par sa superficie ?",
    "options": [
      {
        "id": "A",
        "text": "Le lac Supérieur"
      },
      {
        "id": "B",
        "text": "La mer Caspienne"
      },
      {
        "id": "C",
        "text": "Le lac Victoria"
      },
      {
        "id": "D",
        "text": "Le lac Baïkal"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Bien qu’appelée mer en raison de sa taille (371 000 km²) et de son eau saumâtre, la mer Caspienne est un bassin fermé entouré de terres."
  },
  {
    "id": "geo-38",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quelle est la capitale officielle de la Nouvelle-Zélande ?",
    "options": [
      {
        "id": "A",
        "text": "Auckland"
      },
      {
        "id": "B",
        "text": "Christchurch"
      },
      {
        "id": "C",
        "text": "Wellington"
      },
      {
        "id": "D",
        "text": "Queenstown"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Wellington, située à l’extrémité sud de l’île du Nord, est la capitale nationale de la Nouvelle-Zélande et la capitale la plus australe du monde."
  },
  {
    "id": "geo-39",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quel point géographique constitue la terre émergée la plus basse de la planète (environ -430 mètres sous le niveau de la mer) ?",
    "options": [
      {
        "id": "A",
        "text": "La vallée de la Mort (États-Unis)"
      },
      {
        "id": "B",
        "text": "Les rives de la mer Morte"
      },
      {
        "id": "C",
        "text": "La dépression de Danakil (Éthiopie)"
      },
      {
        "id": "D",
        "text": "Le lac Assal (Djibouti)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Les rives de la mer Morte, à la frontière entre Israël, la Jordanie et la Cisjordanie, constituent le point continental le plus bas de la surface terrestre."
  },
  {
    "id": "geo-40",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quel canal artificiel inaugurated en 1869 relie la mer Méditerranée et la mer Rouge, évitant le contournement de l’Afrique ?",
    "options": [
      {
        "id": "A",
        "text": "Le canal de Panama"
      },
      {
        "id": "B",
        "text": "Le canal de Corinthe"
      },
      {
        "id": "C",
        "text": "Le canal de Suez"
      },
      {
        "id": "D",
        "text": "Le canal de Kiel"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Conçu par Ferdinand de Lesseps et inauguré en 1869, le canal de Suez en Égypte est un axe névralgique du commerce maritime mondial."
  },
  {
    "id": "geo-41",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quel pays d’Amérique du Sud est totalement enclavé sans aucun accès à l’océan, aux côtés du Paraguay ?",
    "options": [
      {
        "id": "A",
        "text": "L’Équateur"
      },
      {
        "id": "B",
        "text": "L’Uruguay"
      },
      {
        "id": "C",
        "text": "La Bolivie"
      },
      {
        "id": "D",
        "text": "Le Guyana"
      }
    ],
    "correctAnswer": "C",
    "explanation": "La Bolivie et le Paraguay sont les deux seuls États d’Amérique du Sud dépourvus d’accès direct à la mer (la Bolivie a perdu sa côte lors de la guerre du Pacifique)."
  },
  {
    "id": "geo-42",
    "categoryId": "geographie",
    "difficulty": "difficile",
    "question": "Quelle est la capitale de l’Islande, située juste en dessous du cercle polaire arctique ?",
    "options": [
      {
        "id": "A",
        "text": "Oslo"
      },
      {
        "id": "B",
        "text": "Reykjavik"
      },
      {
        "id": "C",
        "text": "Helsinki"
      },
      {
        "id": "D",
        "text": "Nuuk"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Reykjavik est la capitale souveraine la plus septentrionale de la Terre, abritant plus de 60 % de la population islandaise dans son agglomération."
  }
];

export const QUESTIONS = [...BASE_QUESTIONS, ...ADDITIONAL_QUESTIONS];

export const getQuestionsByCategory = (categoryId) => QUESTIONS.filter(q => q.categoryId === categoryId);
export const getQuestionsByQuizId = (quizId) => QUESTIONS.filter(q => q.quizId === quizId || q.categoryId === quizId);
export const getQuestionById = (id) => QUESTIONS.find(q => q.id === id);
