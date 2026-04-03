import './contactinfo.scss';

import mailIcon from '../../assets/Footer.logo/mail.png';
import githubIcon from '../../assets/Footer.logo/github.png';

export default function ContactInfo() {
  return (
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
  );
}
