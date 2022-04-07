import React from "react";
import "./portafolio.css";
import IMG1 from "../../Assets/portfolio1.jpg";
import IMG2 from "../../Assets/portfolio2.jpg";
import IMG3 from "../../Assets/portfolio3.jpg";
import IMG4 from "../../Assets/portfolio4.jpg";
import IMG5 from "../../Assets/portfolio5.png";
import IMG6 from "../../Assets/portfolio6.jpg";

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>👨‍💻 Mi trabajo</h5>
      <h2>Portafolio</h2>
      <div className="container portafolio__container">
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>En desarrollo</h3>
          <div className="portafolio__item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>En desarrollo</h3>
          <div className="portafolio__item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>En desarrollo</h3>
          <div className="portafolio__item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>En desarrollo</h3>
          <div className="portafolio__item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>En desarrollo</h3>
          <div className="portafolio__item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>En desarrollo</h3>
          <div className="portafolio__item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portafolio;
