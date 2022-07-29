import React from "react";
import "./testimonials.css";
import AVTR1 from "../../Assets/avatar1.jpeg";
import AVTR2 from "../../Assets/avatar2.jpeg";
import AVTR3 from "../../Assets/avatar3.jpeg";
import AVTR4 from "../../Assets/avatar4.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>💁‍♂️ Experiencias y</h5>
      <h2>Recomendaciónes</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="testimonial__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="testimonial__name">Omar Ariza</h5>
          <small className="testimonial__review">
            "Rubén es un desarrollador muy proactivo que busca mejorar
            constantemente. Tiene una gran capacidad de autoaprendizaje y es un
            elemento muy valioso dentro de un equipo de trabajo. Disfruté mucho
            trabajar él." <br />
            <b>Front-end Developer at SNGULAR Ciudad de México, México</b>
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="testimonial__avatar">
            <img src={AVTR2} alt="" />
          </div>
          <h5 className="testimonial__name">Mirian García</h5>
          <small className="testimonial__review">
            "De Rubén puedo decir que es una exelente persona y un desarrollador
            apasionado. Lo conozco hace tiempo, y puedo destacar de él que tiene
            una gran actitud, es autodidacta y siempre dispuesto a colaborar con
            su equipo para crecer juntos y lograr los objetivos y alcanzar
            metas. Le recomiendo ampliamente."
            <br />
            <b> Front-end Developer at SNGULAR Ciudad de México, México</b>
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="testimonial__avatar">
            <img src={AVTR3} alt="" />
          </div>
          <h5 className="testimonial__name">Roberto Garza</h5>
          <small className="testimonial__review">
            "Rubs es un excelente programador, he trabajado en varios proyectos
            con él y es excelente para el trabajo en equipo, desarrollar y
            planeación UX/UI. Es una persona muy dedicada y siempre esta pegado
            al proyecto cuando hay trabajo, la persona que sea la afortunada de
            contratarlo habrá tomado una excelente decisión."
            <br />
            <b>
              Full-Stack Developer at Enroute System Monterrey, Nuevo León,
              México
            </b>
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="testimonial__avatar">
            <img src={AVTR4} alt="" />
          </div>
          <h5 className="testimonial__name">Naomi López</h5>
          <small className="testimonial__review">
            <br />
            <b>Front-end Developer at Kodemia Ciudad de México, México</b>
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
