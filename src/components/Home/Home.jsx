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
          Passionné par le développement web, je crée des interfaces modernes et
          intuitives. En constante évolution, je cherche à transformer mes idées
          en expériences numériques mémorables.
        </p>
      </div>

      <div className="home-buttons">
        <a href="#projects" className="btn primary">
          <i className="fa-solid fa-file-lines"></i>Voir mes projets
        </a>

        <a href="#contact" className="btn outline">
          <i className="fa-solid fa-envelope"></i>Me contacter
        </a>
      </div>

      <AnimatedLLine />
    </section>
  );
}
