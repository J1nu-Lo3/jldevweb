import { useEffect, useState } from 'react';
import './sliderHome.scss';

import img1 from '../../assets/portrait/IMG2601.avif';
import img2 from '../../assets/portrait/IMG2602.avif';
import img3 from '../../assets/portrait/IMG2604.avif';
import img4 from '../../assets/portrait/IMG2603.avif';

export default function SliderHome() {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-slider">
      <img
        src={images[currentIndex]}
        alt="slider"
        className="home-slider__img"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
