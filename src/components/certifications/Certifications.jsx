import React from "react";
import "./certifications.css";
import CKRS from "../../Assets/ck__RubenS.pdf";

const Certifications = () => {
  return (
    <section id="certifications">
      <h5>🎯 Mis</h5>
      <h2>Certificaciones</h2>
      <div className="container certifications__container">
        <div className="card__container">
          <div className="container__infoCard">
            <div className="cont__title">
              <h3>Scrum Fundamentals Certified (Update)</h3>
            </div>
            <h4 className="text__data">
              SCRUMstudy - Accreditation Body for Scrum and Agile
            </h4>
            <p className="text__dataP">
              Expedición: Marzo 2022 · ID de la credencial 905254
            </p>
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
              <a href={CKRS} download className="btn">
                Descargar certificado
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
            <p className="text__dataP">
              Expedición: Julio 2020 · ID de la credencial 794754
            </p>
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
