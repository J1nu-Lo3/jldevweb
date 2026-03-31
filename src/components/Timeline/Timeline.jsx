import { useEffect, useRef, useState } from 'react';
import timelineData from '../../data/timelineData';
import './timeline.scss';

export default function Parcours() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio > 0.3);
      },
      { threshold: [0, 0.3] },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="parcours" ref={sectionRef}>
      <h2>Mon parcours</h2>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
              visible ? 'show' : ''
            }`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="dot"></div>

            <div className="timeline-card open">
              <span className="year">{item.year}</span>

              <h3>{item.title}</h3>

              {item.speciality && (
                <p className="speciality">{item.speciality}</p>
              )}

              <p className="content">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
