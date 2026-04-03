import html from '../../assets/Logo.svg.Co/html5.svg';
import css from '../../assets/Logo.svg.Co/css.svg';
import js from '../../assets/Logo.svg.Co/javascript.svg';
import sass from '../../assets/Logo.svg.Co/sass.svg';
import react from '../../assets/Logo.svg.Co/react.svg';
import node from '../../assets/Logo.svg.Co/nodejs.svg';
import mongo from '../../assets/Logo.svg.Co/mongodb.svg';
import createreactapp from '../../assets/Logo.svg.Co/create-react-app.svg';
import github from '../../assets/Logo.svg.Co/github.svg';
import git from '../../assets/Logo.svg.Co/git.svg';
import figma from '../../assets/Logo.svg.Co/figma.svg';
import vite from '../../assets/Logo.svg.Co/vite.svg';

const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'JavaScript', icon: js },
  { name: 'Sass', icon: sass },
  { name: 'React', icon: react },
  { name: 'Vite', icon: vite },
  { name: 'Node.js', icon: node },
  { name: 'MongoDB', icon: mongo },
  { name: 'Create React App', icon: createreactapp },
  { name: 'GitHub', icon: github },
  { name: 'Git', icon: git },
  { name: 'Figma', icon: figma },
];

const duplicated = [...skills, ...skills];

export default function SkillsSlider() {
  return (
    <div className="skills__slider">
      <div className="skills__track">
        {duplicated.map((skill, index) => (
          <div className="skills__item" key={index}>
            <img src={skill.icon} alt="" />
            <span className="skills__label">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
