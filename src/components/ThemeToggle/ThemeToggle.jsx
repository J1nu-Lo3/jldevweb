import { useEffect, useRef, useState } from 'react';
import './themeToggle.scss';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const iconRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (window.FontAwesome && iconRef.current) {
      iconRef.current.innerHTML = '';
      const iconName = theme === 'light' ? 'moon' : 'sun';

      const icon = window.FontAwesome.icon({
        prefix: 'fas',
        iconName: iconName,
      });

      if (icon) {
        iconRef.current.appendChild(icon.node[0]);
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
      aria-label="Changement de mode"
    >
      <span ref={iconRef}></span>
    </button>
  );
}
