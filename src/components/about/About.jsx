import React from "react";
import "./about.css";
import ME from "../../Assets/me-about.jpg";
import { AiOutlineLaptop } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>😎 Algo</h5>
      <h2>Sobre mi</h2>
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineLaptop className="about__icon" />
              <h5>Experiencia</h5>
              <small>+ de 1 año</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experiencia</h5>
              <small>+ de 1 año</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experiencia</h5>
              <small>+ de 1 año</small>
            </article>
          </div>

          <p>
            Poner en práctica mis conocimientos así como incrementarlos y
            compartirlos. Poder llegar a hacer una diferencia positiva en el
            mundo, trabajando sobre objetivos en conjunto utilizando la
            tecnología como medio.
          </p>
          <a href="#contact" className="btn btn-primary">
            🗣️ Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
