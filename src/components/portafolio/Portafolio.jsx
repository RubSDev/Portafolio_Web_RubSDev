import React from "react";
import "./portafolio.css";
import IMG1 from "../../Assets/chaanp.png";
import IMG2 from "../../Assets/portfolio2.jpg";
import IMG7 from "../../Assets/ aluxxp5.png";
import IMG3 from "../../Assets/paziolip5.png";
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
          <h3>Cha&#39;an App</h3>
          <div className="portafolio__item-cta">
            <div className="contatainer-btns">
              <a
                href="https://github.com/ChaanApp"
                className="btn btn-portafolio"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://chaanapp.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Alux</h3>
          <div className="portafolio__item-cta">
            <div className="contatainer-btns">
              <a
                href="https://github.com/arianaomi/alux_front_end"
                className="btn btn-portafolio"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://alux-front-end.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Instituto Pazioli</h3>
          <div className="portafolio__item-cta">
            <div className="contatainer-btns">
              <a
                href="https://github.com/RubSDev/-PrimerProyacto_Pazioli/tree/main"
                className="btn btn-portafolio"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://primer-proyacto-pazioli.vercel.app"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>En desarrollo</h3>
          <div className="portafolio__item-cta">
            <div className="contatainer-btns">
              <a href="" className="btn btn-portafolio" target="_blank">
                GitHub
              </a>
              <a href="" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>En desarrollo</h3>
          <div className="portafolio__item-cta">
            <div className="contatainer-btns">
              <a href="" className="btn btn-portafolio" target="_blank">
                GitHub
              </a>
              <a href="" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>En desarrollo</h3>
          <div className="portafolio__item-cta">
            <div className="contatainer-btns">
              <a href="" className="btn btn-portafolio" target="_blank">
                GitHub
              </a>
              <a href="" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portafolio;
