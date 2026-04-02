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
      cover: cover1,
      previews: [preview1, preview2, preview3, preview4, preview5],
    },

    description: {
      short:
        'Application d’une plateforme de location avec React et React Router.',
      full: 'Création du front-end d’une plateforme de location immobilière en React. Développement de composants réutilisables, gestion des routes avec React Router et intégration fidèle des maquettes Figma. Mise en place de fonctionnalités interactives (galerie, collapses) et exploitation de données JSON en l’absence de back-end.',
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
      cover: cover2,
      previews: [
        preview10,
        preview11,
        preview12,
        preview13,
        preview14,
        preview15,
        preview16,
      ],
    },

    description: {
      short:
        'Développement d’un site portfolio dynamique avec JavaScript, incluant gestion d’API, authentification et modale d’upload.',
      full: 'Développement des fonctionnalités dynamiques du site portfolio d’une architecte d’intérieur. À partir d’une base HTML statique et d’un design Figma, intégration en JavaScript des interactions avec une API back-end fournie. Mise en place d’un système d’authentification administrateur, gestion dynamique des projets (affichage, filtrage, suppression) et création d’une modale permettant l’ajout de nouveaux médias.',
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
    title: 'API de notation de livres - Mon Vieux Grimoire',

    images: {
      cover: cover3,
      previews: [
        preview20,
        preview21,
        preview22,
        preview23,
        preview24,
        preview25,
        preview26,
      ],
    },

    description: {
      short:
        'Développement d’une API sécurisée pour un site de notation de livres avec gestion des utilisateurs et des images. ',
      full: 'Développement du back-end d’une application web de notation de livres en collaboration avec un développeur front-end. Conception et mise en place d’une API REST permettant la gestion des utilisateurs, des livres et des notations. Implémentation d’un système d’authentification sécurisé, gestion des routes protégées et traitement des requêtes HTTP. Intégration de l’upload et de l’optimisation des images côté serveur et respect des spécifications techniques fournies.',
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
      cover: cover4,
      previews: [preview30, preview32],
    },

    description: {
      short:
        'Intégration responsive d’une interface de réservation de logements et d’activités en HTML et CSS. ',
      full: 'Intégration complète de la page d’accueil d’un site de réservation de voyages pour la start-up Booki. Développement en HTML et CSS à partir de maquettes Figma fournies pour desktop, tablette et mobile. Respect des contraintes techniques et de la structure existante, mise en place d’un design responsive et intégration fidèle des composants UI (cartes, filtres, sections d’hébergements et d’activités). Travail en collaboration avec une CTO et un UI designer, avec versioning du projet via GitHub.',
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
      cover: cover5,
      previews: [preview40, preview41, preview42, preview43, preview44],
    },

    description: {
      short:
        'Création d’un site vitrine autour d’un voyage à Tokyo avec galerie photo interactive.',
      full: 'Développement d’un site vitrine personnel autour d’un voyage à Tokyo, mettant en avant une galerie de photos immersive. Intégration en HTML, CSS et JavaScript avec mise en place d’une navigation fluide et d’interactions légères pour améliorer l’expérience utilisateur. Travail sur le design visuel et la mise en valeur du contenu afin de créer une expérience engageante.',
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
      cover: cover6,
      previews: [preview34, preview35, preview36, preview37],
    },

    description: {
      short:
        'Application interactive pour apprendre les kanjis avec système de score et partage des résultats.',
      full: 'Développement d’une application web interactive permettant d’apprendre les kanjis de niveau N5. Implémentation d’un système de quiz demandant la lecture ou la traduction des caractères, avec gestion du score en temps réel. Ajout d’une fonctionnalité de partage des résultats et mise en place d’une logique dynamique en JavaScript pour gérer les réponses utilisateur et le suivi de progression.',
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
    title: 'Gunpla Showcase - Site vitrine personnel ',

    images: {
      cover: cover7,
      previews: [
        preview50,
        preview51,
        preview52,
        preview53,
        preview54,
        preview55,
        preview56,
        preview57,
      ],
    },

    description: {
      short:
        'Création d’un site vitrine avec galerie, storytelling et contact pour présenter une passion personnelle.',
      full: 'Développement d’un site vitrine dédié à la présentation d’une passion pour les Gunpla en React. Conception d’une page d’accueil avec slider et galerie pour mettre en avant les créations, d’une page storytelling retraçant l’origine de cet intérêt, et d’une page de contact permettant d’échanger ou de rediriger vers les réseaux sociaux. Travail sur le système react, react router, la structuration du contenu et la mise en valeur visuelle.',
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
