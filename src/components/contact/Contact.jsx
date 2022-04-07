import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wmyzxz3",
      "template_bkancab",
      form.current,
      "ZoS2qnCYXkVynRuSE"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>👫👬👭 Colaboremos Juntos 👫👬👭</h5>
      <h2>Contáctame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rub.somuano.g@gmail.com</h5>
            <a href="mailto:rub.somuano.g@gmail.com" target="_blank">
              Envía un mensaje
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Rubén A Somuano</h5>
            <a href="https://m.me/Rasg83" target="_blank">
              Envía un mensaje
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>55 32273663</h5>
            <a
              href="https://api.whatsapp.com/send?phone+525532273663"
              target="_blank"
            >
              Envía un mensaje
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
          />
          <input type="text" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envíar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
