import { useEffect, useRef, useState } from 'react';
import aboutData from '../../data/aboutData';
import './about.scss';

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.3) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: [0, 0.3] },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section id="about" className="about" ref={sectionRef}>
      <h2>À propos</h2>
      <p className="about__subtitle">Qui suis-je et qu'est-ce qui me motive</p>

      <div className="about__cards">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className={`about__card ${visible ? 'about__card--visible' : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="about__card-header">
              <i
                className={`fa-solid ${item.icon}`}
                style={{ color: item.color }}
              ></i>
              <h3>{item.title}</h3>
            </div>
            <p className="about__card-text">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
