import cover1 from '../assets/ProDataCover/Kasa.cover/KHp1.avif';
import preview1 from '../assets/ProDataCover/Kasa.cover/KHp1.avif';
import preview2 from '../assets/ProDataCover/Kasa.cover/KHp2.avif';
import preview3 from '../assets/ProDataCover/Kasa.cover/KAp1.avif';
import preview4 from '../assets/ProDataCover/Kasa.cover/KEp1.avif';
import preview5 from '../assets/ProDataCover/Kasa.cover/KFLp1.avif';
import techlist1 from '../assets/ProDataCover/Kasa.cover/Ktechlist.avif';

import reactLogo from '../assets/Logo.svg.Co/react.svg';
import scssLogo from '../assets/Logo.svg.Co/sass.svg';
import javascriptLogo from '../assets/Logo.svg.Co/javascript.svg';

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
];

export default projectsData;
