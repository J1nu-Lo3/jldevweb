import './contact.scss';

import mailIcon from '../../assets/Footer.logo/mail.png';
import githubIcon from '../../assets/Footer.logo/github.png';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Me Contacter</h2>
      <p className="contact-subtitle">
        N'hésitez pas à me contacter pour discuter d'un projet ou d'une
        opportunité.
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <label>Nom</label>
          <input type="text" placeholder="" />

          <label>Email</label>
          <input type="email" placeholder="" />

          <label>Message</label>
          <textarea rows="6"></textarea>

          <button className="contact-btn">
            <i className="fa-solid fa-paper-plane"></i>
            Envoyer
          </button>
        </form>

        <div className="contact-info">
          <h3>Retrouvez-moi</h3>

          <div className="contact-item">
            <img src={mailIcon} alt="mail" />
            <span>cezarjohnlouis@gmail.com</span>
          </div>

          <div className="contact-item">
            <img src={githubIcon} alt="github" />
            <span>J1nu-Lo3</span>
          </div>
        </div>
      </div>
    </section>
  );
}
