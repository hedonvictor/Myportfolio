import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { PresentationCard } from "../components/Cards";


import myImg from '../../assets/eu.jpg'


export const Presentation = () => {
    return (
        <Container className="presentationContainer p-5 justify-content-center d-flex align-items-center" >
            <Row>
                <Col>
                    <PresentationCard>
                        <div className="d-flex flex-column justify-content-center doto verticalLine">
                            <span className="fs-2">
                                Olá mundo,
                            </span>
                            <span className="fs-1">
                                Me chamo Hédon Victor,<br />
                                e sou um desenvolvedor FullStack
                            </span>
                            <span className="fs-2">
                                Bem-vindo ao site do meu portfólio!
                            </span>
                        </div>
                    </PresentationCard>
                </Col>
                <Col>
                    <PresentationCard>
                        <div data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Image src={myImg} className="imgPresentation shadowForCards" roundedCircle />
                        </div>
                    </PresentationCard>
                </Col>
            </Row>
        </Container>
    )
}