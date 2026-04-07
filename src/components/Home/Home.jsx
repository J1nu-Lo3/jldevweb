import './home.scss';
import SliderHome from '../SliderHome/SliderHome';
import AnimatedLLine from '../AnimatedLLine/AnimatedLLine';

export default function Home() {
  return (
    <section id="home" className="home">
      <SliderHome />

      <div className="home-text">
        <p>Bonjour, je suis</p>
        <h1>John-Louis Cezar</h1>
        <h2>Développeur Web</h2>
        <p>
          Mon rôle est de transforme des idées et besoins en solutions concrètes
          et fonctionnelles. J’accorde une attention particulière aux détails et
          à la qualité du code pour créer des interfaces simples et efficaces.
        </p>
      </div>

      <div className="home-buttons">
        <a href="#projects" className="btn primary">
          <i className="fa-solid fa-file-lines"></i>Voir mes projets
        </a>

        <a href="#contact" className="btn outline">
          <i className="fa-solid fa-envelope"></i>Me contacter
        </a>

        <a href="#" className="btn secondary">
          <i className="fa-solid fa-download"></i>Télécharger mon CV
        </a>
      </div>

      <AnimatedLLine />
    </section>
  );
}
