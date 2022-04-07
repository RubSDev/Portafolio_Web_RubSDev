import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { RiCss3Fill } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiGit } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { FaSass } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";
import { BsCloud } from "react-icons/bs";
import { FaAws } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>💪 Hard Skills </h5>
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <div className="expenrience__frontend">
          <h3>Frontend Develooment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git & Github</h4>
                <SiGit className="icon__esxperience" />
                <ImGithub className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <FaHtml5 className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <RiCss3Fill className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Sass</h4>
                <FaSass className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <BsFillBootstrapFill className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <SiJavascript className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <FaReact className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS / npm</h4>
                <SiNodedotjs className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>UX / UI</h4>
              </div>
            </article>
          </div>
        </div>
        {/*   END OF FRONTEND*/}
        <div className="expenrience__backend">
          <h3>Backend Develooment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS / npm</h4>
                <SiNodedotjs className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <SiMongodb className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ExpressJS</h4>
                <SiExpress className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>REST:API</h4>
                <FaDatabase className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JWT</h4>
                <SiJsonwebtokens className="icon__esxperience" />
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Cloud <br /> (IBM & AWS)
                </h4>
                <BsCloud className="icon__esxperience" />
                <FaAws className="icon__esxperience" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
