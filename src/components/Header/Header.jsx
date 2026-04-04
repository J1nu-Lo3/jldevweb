import { useEffect, useState } from 'react';
import './header.scss';
import logoLight from '../../assets/LogoS.avif';
import logoDark from '../../assets/LogoM.avif';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Header() {
  const [active, setActive] = useState('home');
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
        <a href="#home">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="Logo site jldevweb"
            className="logo"
          />
        </a>
      </div>

      <div className="header-center">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#home" className={active === 'home' ? 'active' : ''}>
                <span>Accueil</span>
              </a>
            </li>
            <li>
              <a href="#about" className={active === 'about' ? 'active' : ''}>
                <span>À propos</span>
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className={active === 'timeline' ? 'active' : ''}
              >
                <span>Parcours</span>
              </a>
            </li>
            <li>
              <a href="#skills" className={active === 'skills' ? 'active' : ''}>
                <span>Compétences</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={active === 'projects' ? 'active' : ''}
              >
                <span>Projets</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={active === 'contact' ? 'active' : ''}
              >
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <ThemeToggle />
      </div>
    </header>
  );
}
