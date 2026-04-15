import htmlLogo from '../assets/Logo.svg.Co/html5.svg';
import cssLogo from '../assets/Logo.svg.Co/css.svg';
import reactLogo from '../assets/Logo.svg.Co/react.svg';
import scssLogo from '../assets/Logo.svg.Co/sass.svg';
import javascriptLogo from '../assets/Logo.svg.Co/javascript.svg';
import nodeLogo from '../assets/Logo.svg.Co/nodejs.svg';
import mongoLogo from '../assets/Logo.svg.Co/mongodb.svg';

import cover1 from '../assets/ProDataCover/Kasa.cover/KHp1.avif';
import preview1 from '../assets/ProDataCover/Kasa.cover/KHp1.avif';
import preview2 from '../assets/ProDataCover/Kasa.cover/KHp2.avif';
import preview3 from '../assets/ProDataCover/Kasa.cover/KAp1.avif';
import preview4 from '../assets/ProDataCover/Kasa.cover/KEp1.avif';
import preview5 from '../assets/ProDataCover/Kasa.cover/KFLp1.avif';
import techlist1 from '../assets/ProDataCover/Kasa.cover/Ktechlist.avif';

import cover2 from '../assets/ProDataCover/SophieBuel.cover/SBHp1.avif';
import preview10 from '../assets/ProDataCover/SophieBuel.cover/SBHp1.avif';
import preview11 from '../assets/ProDataCover/SophieBuel.cover/SBHp2.avif';
import preview12 from '../assets/ProDataCover/SophieBuel.cover/SBHp3.avif';
import preview13 from '../assets/ProDataCover/SophieBuel.cover/SBLp1.avif';
import preview14 from '../assets/ProDataCover/SophieBuel.cover/SBEp1.avif';
import preview15 from '../assets/ProDataCover/SophieBuel.cover/SBEp2.avif';
import preview16 from '../assets/ProDataCover/SophieBuel.cover/SBEp3.avif';
import techlist2 from '../assets/ProDataCover/SophieBuel.cover/SBtechlist.avif';

import cover3 from '../assets/ProDataCover/MonVieuxGrimoire.cover/MVGHp1.avif';
import preview20 from '../assets/ProDataCover/MonVieuxGrimoire.cover/MVGHp1.avif';
import preview21 from '../assets/ProDataCover/MonVieuxGrimoire.cover/MVGHp2.avif';
import preview22 from '../assets/ProDataCover/MonVieuxGrimoire.cover/MVGLp1.avif';
import preview23 from '../assets/ProDataCover/MonVieuxGrimoire.cover/MVGCp1.avif';
import preview24 from '../assets/ProDataCover/MonVieuxGrimoire.cover/MVGCp2.avif';
import preview25 from '../assets/ProDataCover/MonVieuxGrimoire.cover/MVGCp3.avif';
import preview26 from '../assets/ProDataCover/MonVieuxGrimoire.cover/MVGCp4.avif';
import techlist3 from '../assets/ProDataCover/MonVieuxGrimoire.cover/MVGtechlist.avif';

import cover4 from '../assets/ProDataCover/Booki.cover/BHp1.avif';
import preview30 from '../assets/ProDataCover/Booki.cover/BHp1.avif';
import preview32 from '../assets/ProDataCover/Booki.cover/BHp2.avif';
import techlist4 from '../assets/ProDataCover/Booki.cover/Btechlist.avif';

import cover5 from '../assets/ProDataCover/TokyoVlog.cover/TVHp1.avif';
import preview40 from '../assets/ProDataCover/TokyoVlog.cover/TVHp1.avif';
import preview41 from '../assets/ProDataCover/TokyoVlog.cover/TVHp2.avif';
import preview42 from '../assets/ProDataCover/TokyoVlog.cover/TVGp1.avif';
import preview43 from '../assets/ProDataCover/TokyoVlog.cover/TVGp2.avif';
import preview44 from '../assets/ProDataCover/TokyoVlog.cover/TVAp1.avif';
import techlist5 from '../assets/ProDataCover/TokyoVlog.cover/TVtechlist.avif';

import cover6 from '../assets/ProDataCover/Benkyo.cover/BHp1.avif';
import preview34 from '../assets/ProDataCover/Benkyo.cover/BHp1.avif';
import preview35 from '../assets/ProDataCover/Benkyo.cover/BHp2.avif';
import preview36 from '../assets/ProDataCover/Benkyo.cover/BHp3.avif';
import preview37 from '../assets/ProDataCover/Benkyo.cover/BHp4.avif';
import techlist6 from '../assets/ProDataCover/Benkyo.cover/Btechlist.avif';

import cover7 from '../assets/ProDataCover/JinuWorkshop.cover/JWHp1.avif';
import preview50 from '../assets/ProDataCover/JinuWorkshop.cover/JWHp1.avif';
import preview51 from '../assets/ProDataCover/JinuWorkshop.cover/JWHp2.avif';
import preview52 from '../assets/ProDataCover/JinuWorkshop.cover/JWHp3.avif';
import preview53 from '../assets/ProDataCover/JinuWorkshop.cover/JWHp4.avif';
import preview54 from '../assets/ProDataCover/JinuWorkshop.cover/JWSp1.avif';
import preview55 from '../assets/ProDataCover/JinuWorkshop.cover/JWSp2.avif';
import preview56 from '../assets/ProDataCover/JinuWorkshop.cover/JWAp1.avif';
import preview57 from '../assets/ProDataCover/JinuWorkshop.cover/JWAp2.avif';
import techlist7 from '../assets/ProDataCover/JinuWorkshop.cover/JWtechlist.avif';

const projectsData = [
  {
    id: 1,
    title: 'Kasa - Location d’appartements',

    images: {
      cover: { src: cover1, alt: "Page d'accueil du site Kasa" },
      previews: [
        {
          src: preview1,
          alt: "Page d'accueil du site Kasa avec header et début galerie",
        },
        {
          src: preview2,
          alt: "Page d'accueil du site Kasa avec fin galerie et footer",
        },
        { src: preview3, alt: 'Page À propos du site Kasa' },
        { src: preview4, alt: 'Page Erreur 404 du site Kasa' },
        { src: preview5, alt: 'Fiche de logement du site Kasa' },
      ],
    },

    description: {
      short:
        'Application d’une plateforme de location avec React et React Router.',
      full: 'Dans le cadre d’une refonte complète du site de location immobilière existant, l’objectif était de moderniser l’application en développant un front-end entièrement en React. J’ai développé des composants réutilisables, mis en place la gestion des routes avec React Router et intégré fidèlement les maquettes Figma. J’ai également mis en place des fonctionnalités interactives (galerie, collapse) et exploité des données JSON en l’absence de back-end. Le résultat est une application front-end complète, responsive et fidèle aux maquettes, avec une navigation fluide entre les différentes pages. Parmi les pistes d’amélioration possibles figurent l’ajout d’un back-end réel via API, l’optimisation des performances ainsi que le renforcement de l’accessibilité.',
    },

    technologiesList: techlist1,

    technologies: [
      { name: 'React', icon: reactLogo },
      { name: 'Scss', icon: scssLogo },
      { name: 'Javascript', icon: javascriptLogo },
    ],

    links: {
      github: 'https://github.com/J1nu-Lo3/Kasa-Project',
    },
  },
  {
    id: 2,
    title: "Portfolio d’architecte d'intérieur - Application web dynamique",

    images: {
      cover: { src: cover2, alt: "Page d'accueil du site Sophie Buel" },
      previews: [
        {
          src: preview10,
          alt: "Page d'accueil du site Sophie Buel avec header, partie à propos",
        },
        {
          src: preview11,
          alt: "Page d'accueil du site Sophie Buel avec galerie et filtre",
        },
        {
          src: preview12,
          alt: "Page d'accueil du site Sophie Buel avec partie contact",
        },
        { src: preview13, alt: 'Page de connexion du site Sophie Buel' },
        {
          src: preview14,
          alt: "Page d'accueil version editor du site Sophie Buel",
        },
        {
          src: preview15,
          alt: "Page d'accueil version editor, vue sur modale supprimer du site Sophie Buel",
        },
        {
          src: preview16,
          alt: "Page d'accueil version editor, vue sur modale ajouter du site Sophie Buel",
        },
      ],
    },

    description: {
      short:
        'Développement d’un site portfolio dynamique avec JavaScript, incluant gestion d’API, authentification et modale d’upload.',
      full: "Dans le cadre d’une mission pour l’agence ArchiWebos, développement d'un site portfolio dynamique d’une architecte d’intérieur. À partir d’une base HTML statique et des maquettes Figma, l’objectif était d’intégrer les interactions en JavaScript et de connecter l’application à une API back-end fournie. J’ai mis en place un système d’authentification administrateur, gestion dynamique des travaux (affichage, filtrage et suppression) ainsi qu’une modale d’upload permettant l’ajout de nouveaux médias. Ce projet m’a permis de renforcer mes compétences en manipulation d’API. Le résultat est une application web dynamique avec une interface intuitive côté utilisateur et une expérience administrateur complète pour gérer les images. Parmi les pistes d’amélioration, on peut envisager l’ajout d’indicateurs de chargement et l’optimisation de l’expérience utilisateur sur les interactions avec la galerie d'images.",
    },

    technologiesList: techlist2,

    technologies: [
      { name: 'Html', icon: htmlLogo },
      { name: 'Css', icon: cssLogo },
      { name: 'Javascript', icon: javascriptLogo },
    ],

    links: {
      github: 'https://github.com/J1nu-Lo3/ArchiWebos-projet',
    },
  },
  {
    id: 3,
    title: 'Mon Vieux Grimoire - API de notation de livres',

    images: {
      cover: { src: cover3, alt: "Page d'accueil du site Mon Vieux Grimoire" },
      previews: [
        {
          src: preview20,
          alt: "Page d'accueil du site Mon Vieux Grimoire avec header, btn ajouter livre et liste de livre",
        },
        {
          src: preview21,
          alt: "Page d'accueil du site Mon Vieux Grimoire avec footer et fin de liste de livre",
        },
        { src: preview22, alt: 'Page de connexion du site Mon Vieux Grimoire' },
        {
          src: preview23,
          alt: 'Formulaire d’ajout de livre avec ajout Titre du livre et auteur.',
        },
        {
          src: preview24,
          alt: 'Formulaire d’ajout de livre avec upload d’image',
        },
        {
          src: preview25,
          alt: "Page de notation d'un livre avec btn modifier et supprimer",
        },
        {
          src: preview26,
          alt: "Page de notation d'un livre avec note du livre et les meilleurs livres notés",
        },
      ],
    },

    description: {
      short:
        'Développement d’une API sécurisée pour un site de notation de livres avec gestion des utilisateurs et des images. ',
      full: 'Développement du back-end d’une application de notation de livres pour une chaîne de librairies. L’objectif était de concevoir une API REST complète permettant de gérer les utilisateurs, les livres et les notations. J’ai mis en place un système d’authentification sécurisé avec gestion des routes protégées, ainsi que le traitement des requêtes HTTP côté serveur. Le résultat est une API REST complète, sécurisée et performante, permettant une gestion fiable des utilisateurs, des livres et des notations. Ce projet m’a permis de renforcer mes compétences en conception d’API, sécurisation des échanges et manipulation de bases de données. Parmi les pistes d’amélioration, on peut envisager l’ajout de limite de notation, une meilleure gestion des erreurs côté API et l’ajout de nouvelles sections de recommandation, comme des livres du même auteur ou du même genre.',
    },

    technologiesList: techlist3,

    technologies: [
      { name: 'Javascript', icon: javascriptLogo },
      { name: 'MongoDB', icon: mongoLogo },
      { name: 'Node.js', icon: nodeLogo },
    ],

    links: {
      github: 'https://github.com/J1nu-Lo3/Projet-Mon-Vieux-Grimoire',
    },
  },
  {
    id: 4,
    title: 'Booki - Site de réservation de voyages',

    images: {
      cover: { src: cover4, alt: "Page d'accueil du site Booki" },
      previews: [
        { src: preview30, alt: "Page d'accueil du site Booki part.1" },
        { src: preview32, alt: "Page d'accueil du site Booki part.2" },
      ],
    },

    description: {
      short:
        'Intégration responsive d’une interface de réservation de logements et d’activités en HTML et CSS. ',
      full: 'Dans le cadre de mon intégration en tant que développeur web chez la start-up Booki, j’ai été chargé d’intégrer la page d’accueil d’un site de réservation de voyages. À partir de maquettes Figma fournies pour desktop, tablette et mobile, l’objectif était de produire une interface fidèle et entièrement responsive en HTML et CSS. J’ai développé les différents composants de l’interface (cartes, filtres, sections d’hébergements et d’activités). Ce projet m’a permis de consolider mes bases en intégration web, en responsive design et en structuration du code. Le résultat est une interface fidèle aux maquettes, entièrement responsive sur tous les types d’appareils. Parmi les pistes d’amélioration, on peut envisager l’ajout d’interactions dynamiques en JavaScript, l’amélioration de l’accessibilité et l’optimisation des performances.',
    },

    technologiesList: techlist4,

    technologies: [
      { name: 'Html', icon: htmlLogo },
      { name: 'Css', icon: cssLogo },
    ],

    links: {
      github: 'https://github.com/J1nu-Lo3/Booki-project',
    },
  },
  {
    id: 5,
    title: 'Tokyo Vlog - Galerie immersive',

    images: {
      cover: { src: cover5, alt: "Page d'accueil du site Tokyo Vlog" },
      previews: [
        {
          src: preview40,
          alt: "Page d'accueil du site Tokyo Vlog avec slider",
        },
        {
          src: preview41,
          alt: "Page d'accueil du site Tokyo Vlog avec texte et footer",
        },
        {
          src: preview42,
          alt: 'Galerie photo immersive avec affichage en grille',
        },
        { src: preview43, alt: 'Affichage de la catégorie sélectionnée' },
        { src: preview44, alt: 'Page à propos du site Tokyo Vlog' },
      ],
    },

    description: {
      short:
        'Création d’un site vitrine autour d’un voyage à Tokyo avec galerie photo interactive.',
      full: 'Tokyo Vlog est un projet personnel visant à retranscrire l’expérience d’un voyage à Tokyo à travers une galerie photo immersive. L’objectif était de mettre en valeur des instants capturés sur le vif. Développé en HTML, CSS et JavaScript, le site propose une navigation fluide et des interactions dynamiques, incluant un slider en page d’accueil, une galerie filtrable par quartiers et une modale immersive permettant de parcourir les images. Ce projet m’a permis de travailler à la fois sur l’intégration front-end et sur le design visuel. Parmi les pistes d’amélioration, on peut envisager l’optimisation des performances via le lazy loading et la compression des images, ainsi que l’ajout d’animations et de contenus éditoriaux comme un journal de voyage.',
    },

    technologiesList: techlist5,

    technologies: [
      { name: 'Html', icon: htmlLogo },
      { name: 'Css', icon: cssLogo },
      { name: 'Javascript', icon: javascriptLogo },
    ],

    links: {
      github: 'https://github.com/J1nu-Lo3/Tokyo-Vlog-Project',
    },
  },
  {
    id: 6,
    title: 'Application d’apprentissage des kanjis (N5)',

    images: {
      cover: { src: cover6, alt: "Page d'accueil du site Benkyo" },
      previews: [
        { src: preview34, alt: "Page d'accueil du site Benkyo" },
        { src: preview35, alt: 'Affichage réponse correcte du site Benkyo' },
        { src: preview36, alt: 'Affichage réponse fausse du site Benkyo' },
        { src: preview37, alt: 'Modale de partage score du site Benkyo' },
      ],
    },

    description: {
      short:
        'Application interactive pour apprendre les kanjis avec système de score et partage des résultats.',
      full: 'Benkyo est une application web interactive permettant d’apprendre les kanjis de niveau N5. Inspiré par mon intérêt pour la langue japonaise, ce projet avait pour objectif de proposer une expérience d’apprentissage simple et ludique. L’application repose sur un système de quiz dynamique où l’utilisateur doit retrouver la lecture ou la traduction des kanjis, avec un suivi du score en temps réel. J’ai implémenté différentes fonctionnalités telles que le mélange aléatoire des questions, la gestion des réponses avec feedback visuel, ainsi qu’une modale permettant de partager les résultats. Ce projet m’a permis de renforcer mes compétences en logique JavaScript. Parmi les pistes d’amélioration, on peut envisager l’ajout de niveaux supplémentaires (N4, N3), un système de révision des erreurs, des statistiques détaillées ainsi que l’intégration d’un mode audio.',
    },

    technologiesList: techlist6,

    technologies: [
      { name: 'Html', icon: htmlLogo },
      { name: 'Css', icon: cssLogo },
      { name: 'Javascript', icon: javascriptLogo },
    ],

    links: {
      github: 'https://github.com/J1nu-Lo3/Benkyo-project',
    },
  },
  {
    id: 7,
    title: 'Jinu Workshop - Site hobby personnel ',

    images: {
      cover: { src: cover7, alt: "Page d'accueil du site Jinu Workshop" },
      previews: [
        {
          src: preview50,
          alt: "Page d'accueil du site Jinu Workshop avec slider",
        },
        {
          src: preview51,
          alt: "Page d'accueil du site Jinu Workshop avec texte explicatif",
        },
        {
          src: preview52,
          alt: "Page d'accueil du site Jinu Workshop avec galerie d'images",
        },
        {
          src: preview53,
          alt: "Page d'accueil du site Jinu Workshop avec footer",
        },
        {
          src: preview54,
          alt: 'Page Story du site expliquant la raison de la création du site',
        },
        {
          src: preview55,
          alt: "Page Story du site expliquant l'entrée dans le hobby",
        },
        {
          src: preview56,
          alt: 'Page Contact du site Jinu Workshop avec bannière',
        },
        {
          src: preview57,
          alt: 'Page Contact du site Jinu Workshop avec mail et qrcode instagram',
        },
      ],
    },

    description: {
      short:
        'Création d’un site vitrine avec galerie, storytelling et contact pour présenter une passion personnelle.',
      full: 'Jinu Workshop est un projet personnel développé en React visant à présenter ma passion pour les Gunpla. L’objectif était de concevoir une plateforme combinant galerie visuelle, storytelling et prise de contact. J’ai développé une architecture basée sur des composants réutilisables avec React et React Router pour gérer la navigation entre les différentes pages (accueil, story, contact). Le site met en avant mes créations et photographies via un slider et une galerie, tout en intégrant une dimension narrative pour retracer mon parcours dans ce hobby. Ce projet m’a permis de renforcer mes compétences en développement React. Parmi les pistes d’amélioration, on peut envisager l’ajout d’animations plus avancées, l’optimisation des performances ainsi que l’ajout de nouvelles sections comme un vlog ou un journal de création',
    },

    technologiesList: techlist7,

    technologies: [
      { name: 'React', icon: reactLogo },
      { name: 'Css', icon: cssLogo },
      { name: 'Javascript', icon: javascriptLogo },
    ],

    links: {
      github: 'https://github.com/J1nu-Lo3/Jinu-Workshop',
    },
  },
];

export default projectsData;
