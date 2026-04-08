import { useEffect, useState } from 'react';
import './sliderHome.scss';

import img1 from '../../assets/portrait/IMG_4509.jpg';
import img2 from '../../assets/portrait/IMG_3917 copie.jpg';
import img3 from '../../assets/portrait/IMG_4194.jpg';
import img4 from '../../assets/portrait/IMG_4605 copie.jpg';

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
