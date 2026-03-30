import { useEffect, useState } from 'react';
import './header.scss';

export default function Header() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo" />
      </div>

      <div className="header-center">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#home" className={active === 'home' ? 'active' : ''}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className={active === 'about' ? 'active' : ''}>
                À propos
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className={active === 'timeline' ? 'active' : ''}
              >
                Parcours
              </a>
            </li>
            <li>
              <a href="#skills" className={active === 'skills' ? 'active' : ''}>
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={active === 'projects' ? 'active' : ''}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={active === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <button className="theme-btn">
          <i className="fa-solid fa-moon"></i>
        </button>
      </div>
    </header>
  );
}
