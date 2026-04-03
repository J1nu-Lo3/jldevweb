import './contactform.scss';
import { useForm, ValidationError } from '@formspree/react';
import { useRef, useState, useEffect } from 'react';

export default function ContactForm() {
  const [state, handleSubmit, reset] = useForm('xqegyazz');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    if (state.succeeded) {
      setIsSuccessModalOpen(true);

      formRef.current.reset();

      const timer = setTimeout(() => {
        setIsSuccessModalOpen(false);
        reset();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  return (
    <>
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" name="name" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          className="contact-form__btn"
          disabled={state.submitting}
        >
          <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
          {state.submitting ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>

      {isSuccessModalOpen && (
        <div
          className="contact-success-modal"
          onClick={() => {
            setIsSuccessModalOpen(false);
            reset();
          }}
        >
          <div
            className="contact-success-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="contact-success-modal__close"
              onClick={() => {
                setIsSuccessModalOpen(false);
                reset();
              }}
            >
              ✕
            </button>

            <p>Message envoyé avec succès !</p>
          </div>
        </div>
      )}
    </>
  );
}
