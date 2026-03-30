import './footer.scss';

import mailIcon from '../../assets/Footer.logo/mail.png';
import githubIcon from '../../assets/Footer.logo/github.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="mailto:cezarjohnlouis@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mailIcon} alt="mail" />
        </a>

        <a href="https://github.com/J1nu-Lo3" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="github" />
        </a>
      </div>

      <p>© 2026 John-Louis Cezar. Tous droits réservés.</p>
    </footer>
  );
}
