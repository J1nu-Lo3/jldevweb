import './contact.scss';

import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Me Contacter</h2>
      <p className="contact-subtitle">
        N'hésitez pas à me contacter pour discuter d'un projet ou d'une
        opportunité.
      </p>

      <div className="contact-container">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}
