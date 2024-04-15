import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
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
            <h5>rarturosomuanog@gmail.com</h5>
            <a href="mailto:rarturosomuanog@gmail.com" target="_blank">
              Envía un mensaje
            </a>
          </article>
          <article className="contact__option">
            <div className="header_socials_Contact">
              <a
                className="icon_socials_Contact"
                href="https://www.linkedin.com/in/ruben-arturo-somuano-garc%C3%ADa-a43a03198/"
                target="_blanck"
              >
                <BsLinkedin className="icon_socials_Contact" />
              </a>
              <a
                className="icon_socials_Contact"
                href="https://github.com/RubSDev"
                target="_blanck"
              >
                <ImGithub className="icon_socials_Contact" />
              </a>
            </div>
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
