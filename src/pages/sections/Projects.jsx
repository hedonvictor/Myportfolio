import React from "react";

import Container from 'react-bootstrap/Container';
import { Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';


import YFimg from "../../assets/ProjectsImg/YF.jpg"
import JWTimg from "../../assets/ProjectsImg/JWT.jpg"
import Rideimg from "../../assets/ProjectsImg/Ride.webp"

export default function Projects() {
    return (
        <section className="sectionProject">
            <Container fluid="md ">
                <Col className="mt-4 ">
                    <Row className="align-items-center mb-5">
                        <img className="cardProjects" alt="img" src={JWTimg} />
                        <Col className="ms-3 border-0">
                            <h3>
                                API Login com JWT
                            </h3>
                            <p>
                                API de login feita em NodeJs (express.js), utilizando JWT para autenticação do usuário, bicrypt para criptografia de senhas, e entre outras.
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="d-flex flex-row align-items-center mb-5">
                        <Col className="me-3">
                            <h3>
                                Aplicação de Gestão financeira
                            </h3>
                            <p className="ms-2" >
                                Programa de gestão financeira e controle de investimentos, com visualização destes dados por meio de graficos, utilizando JavaScript, ReactJs(React-bootstrap, React Router, entre outros).
                            </p>
                        </Col>
                        <Col>
                            <a href="https://github.com/hedonvictor/GestaoFinanceira" target="_blank">
                                <img className="cardProjects" alt="img" src={YFimg} />
                            </a>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="align-items-center mb-5">
                        <Col>
                            <a href="https://github.com/hedonvictor/AppRide" target="_blank">
                                <img className="cardProjects" alt="img" src={Rideimg} />
                            </a>
                        </Col>
                        <Col className="ms-3">
                            <h3>
                                Aplicação de caminhada
                            </h3>
                            <p>
                                Aplicação web de caminhada/corrida feita em HTML,CSS e JS, que registra e salva o trajeto do usuário, por meio de API de geolocalização informa tambem a velocidade na qual ele esta indo, em KM/h.
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="d-flex flex-row align-items-center mb-5">
                        <Col className="me-3">
                            <h3>
                                Gestão financeira
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate in animi, esse eos quo quaerat. In enim perspiciatis f
                            </p>
                        </Col>
                        <img className="cardProjects" alt="img" src={YFimg} />
                    </Row>
                </Col>
            </Container>
        </section>
    )
}