import { useEffect, useState } from 'react';

import htmlLight from '../../assets/Logo.svg.Co/html5.svg';
import htmlDark from '../../assets/Logo.svg.Unco/html5.svg';

import cssLight from '../../assets/Logo.svg.Co/css.svg';
import cssDark from '../../assets/Logo.svg.Unco/css.svg';

import jsLight from '../../assets/Logo.svg.Co/javascript.svg';
import jsDark from '../../assets/Logo.svg.Unco/javascript.svg';

import sassLight from '../../assets/Logo.svg.Co/sass.svg';
import sassDark from '../../assets/Logo.svg.Unco/sass.svg';

import reactLight from '../../assets/Logo.svg.Co/react.svg';
import reactDark from '../../assets/Logo.svg.Unco/react.svg';

import nodeLight from '../../assets/Logo.svg.Co/nodejs.svg';
import nodeDark from '../../assets/Logo.svg.Unco/nodejs.svg';

import mongoLight from '../../assets/Logo.svg.Co/mongodb.svg';
import mongoDark from '../../assets/Logo.svg.Unco/mongodb.svg';

import createreactappLight from '../../assets/Logo.svg.Co/create-react-app.svg';
import createreactappDark from '../../assets/Logo.svg.Unco/create-react-app.svg';

import githubLight from '../../assets/Logo.svg.Co/github.svg';
import githubDark from '../../assets/Logo.svg.Unco/github.svg';

import gitLight from '../../assets/Logo.svg.Co/git.svg';
import gitDark from '../../assets/Logo.svg.Unco/git.svg';

import figmaLight from '../../assets/Logo.svg.Co/figma.svg';
import figmaDark from '../../assets/Logo.svg.Unco/figma.svg';

import viteLight from '../../assets/Logo.svg.Co/vite.svg';
import viteDark from '../../assets/Logo.svg.Unco/vite.svg';

const skills = [
  { name: 'HTML', iconLight: htmlLight, iconDark: htmlDark },
  { name: 'CSS', iconLight: cssLight, iconDark: cssDark },
  { name: 'JavaScript', iconLight: jsLight, iconDark: jsDark },
  { name: 'Sass', iconLight: sassLight, iconDark: sassDark },
  { name: 'React', iconLight: reactLight, iconDark: reactDark },
  { name: 'Vite', iconLight: viteLight, iconDark: viteDark },
  { name: 'Node.js', iconLight: nodeLight, iconDark: nodeDark },
  { name: 'MongoDB', iconLight: mongoLight, iconDark: mongoDark },
  {
    name: 'Create React App',
    iconLight: createreactappLight,
    iconDark: createreactappDark,
  },
  { name: 'GitHub', iconLight: githubLight, iconDark: githubDark },
  { name: 'Git', iconLight: gitLight, iconDark: gitDark },
  { name: 'Figma', iconLight: figmaLight, iconDark: figmaDark },
];

export default function SkillsSlider() {
  const duplicated = [...skills, ...skills];
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute('data-theme') || 'light';

    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      const newTheme =
        document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills__slider">
      <div className="skills__track">
        {duplicated.map((skill, index) => (
          <div className="skills__item" key={index}>
            <img
              src={theme === 'dark' ? skill.iconDark : skill.iconLight}
              alt={`${skill.name} logo`}
            />
            <span className="skills__label">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
