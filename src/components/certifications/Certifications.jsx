import React from "react";
import "./certifications.css";

const Certifications = () => {
  return (
    <section id="certifications">
      <h5>🎯 Mis</h5>
      <h2>Certificaciones</h2>
      <div className="container certifications__container">
        <div className="card__container">
          <div className="container__infoCard">
            <div className="cont__title">
              <h3>
                Bootcamp Desarrollo Web Full-Stack Developer Jr.
                &#40;Update&#41;
              </h3>
            </div>
            <h4 className="text__data">
              Kodemia e IBM Koder bootcamp cloud native development
            </h4>
            <p className="text__dataP">Expedición: Mayo 2022</p>
            <div className="container__btnC">
              <a
                href="https://primerbrs.s3.amazonaws.com/Certificado_Rube%CC%81n+Somuano.pdf"
                target="_blanck"
              >
                Mostrar certificado
              </a>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="container__infoCard">
            <div className="cont__title">
              <h3>Scrum Fundamentals Certified &#40;Update&#41;</h3>
            </div>
            <h4 className="text__data">
              SCRUMstudy - Accreditation Body for Scrum and Agile
            </h4>
            <p className="text__dataP">Expedición: Marzo 2022 · ID 905254</p>
            <div className="container__btnC">
              <a
                href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-RubenSomuano-905254.pdf"
                target="_blanck"
              >
                Mostrar certificado
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container certifications__container">
        <div className="card__container">
          <div className="container__infoCard">
            <div className="cont__title">
              <h3>Bootcamp Desarrollo Web Full-Stack Developer Jr.</h3>
            </div>
            <h4 className="text__data">
              Kodemia e IBM Koder bootcamp cloud native development
            </h4>
            <p className="text__dataP">Expedición: Septiembre 2020</p>
            <div className="container__btnC">
              <a
                href="https://primerbrs.s3.amazonaws.com/ck__RubenSpdf.pdf"
                target="_blanck"
              >
                Mostrar certificado
              </a>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="container__infoCard">
            <div className="cont__title">
              <h3>Scrum Fundamentals Certified</h3>
            </div>
            <h4 className="text__data">
              SCRUMstudy - Accreditation Body for Scrum and Agile
            </h4>
            <p className="text__dataP">Expedición: Julio 2020 · ID 794754</p>
            <div className="container__btnC">
              <a
                href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-RubenArturoSomuanoGarcia-794753.pdf"
                target="_blanck"
              >
                Mostrar certificado
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
