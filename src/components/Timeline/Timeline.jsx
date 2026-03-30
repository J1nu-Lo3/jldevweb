import { useEffect, useRef, useState } from 'react';
import timelineData from '../../data/timelineData';
import './timeline.scss';

export default function Parcours() {
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
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

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

            <div
              className={`timeline-card ${openIndex === index ? 'open' : ''}`}
            >
              <span className="year">{item.year}</span>

              <h3>{item.title}</h3>

              {item.speciality && (
                <p className="speciality">{item.speciality}</p>
              )}

              {openIndex !== index && (
                <div className="dots" onClick={() => toggle(index)}>
                  ● ● ●
                </div>
              )}

              {openIndex === index && (
                <p className="content" onClick={() => toggle(index)}>
                  {item.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
