import { useState } from "react";
import React from "react";

import JsLogo from "../../assets/carouseltecs/logo-js.png"
import HtmlLogo from "../../assets/carouseltecs/logo-html.png"
import CssLogo from "../../assets/carouseltecs/logo-css.png"
import BootsLogo from "../../assets/carouseltecs/logo-bootstrap.png"

import { Carousel } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


export default function AboutMe() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const handleNext = () => {
        if (index === 4) { // Se chegou ao último item (índice 4)
          setIndex(0); // Reinicia para o primeiro item (índice 0)
        } else {
          setIndex(index + 1);
        }
      };
    
      const handlePrev = () => {
        if (index === 0) { // Se está no primeiro item
          setIndex(4); // Vai para o último item (índice 2)
        } else {
          setIndex(index - 1);
        }
      };

    return (
        <section className="container d-flex justify-content-center align-items-center flex-column">
            <div class="text-center pt-3">
                <h1>
                    Hédon Victor, 21y, Eng. de Software 5/8 🎓
                </h1>
                <div className="pt-2 fs-5 fst-italic">
                    <p>
                        Ando praticando minhas habilidades majoritariamente em projetos pessoais. Tenho utilizado principalmente JavaScript, ReactJs(react-router-dom e suas funcionalidades, hooks, e etc) e NodeJs, além de utilizar Bootstrap para garantir interfaces elegantes e responsivas. 
                    </p>
                    <p>
                        Um projeto recente é um aplicativo de corrida. Consumindo APIs geolocalização ele registra a distância, local percorrido e demonstra a velocidade durante o trajeto, fazendo também o armazenamento destes dados para visualização do usuário.
                        Outro em desenvolvimento, um sistema financeiro de consolidação de carteira e investimentos. Permitindo que usuários cadastrem seus investimentos, gerenciem gastos e recebimentos, e tenham uma visão clara de sua saúde financeira.
                    </p>


                </div>
            </div>
            <Carousel
                slide={false}
                id="tecsCarousel"
                className="mt-5"
                activeIndex={index} onSelect={handleSelect} wrap>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselLogo p-5"
                        src={BootsLogo}
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselLogo"
                        src={JsLogo}
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselLogo"
                        src={HtmlLogo}
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselLogo"
                        src={CssLogo}
                        alt=""
                    />
                </Carousel.Item>
                <button onClick={handlePrev} className="carousel-control-prev" data-bs-target="#tecsCarousel" data-bs-slide="prev">
                    <BsChevronLeft className="chevron-icon" />
                </button>
                <button onClick={handleNext} className="carousel-control-next" data-bs-target="#tecsCarousel" data-bs-slide="next">
                    <BsChevronRight className="chevron-icon" />
                </button>
            </Carousel>
        </section>
    )
}