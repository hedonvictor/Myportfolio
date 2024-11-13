
import { Card, Container, Col, Row } from 'react-bootstrap';
import { CarouselComp } from "../components/CarouselComp";


export default function AboutMe() {
    return (
        <section>
            <div class="text-center p-3">
                <span className="doto fs-1">
                    Hédon Victor, 21y, Eng. de Software 6/8 🎓
                </span>
            </div>
            <Container>
                <Row className="justify-content-between align-items-center m-5">
                    <Col xs={12} md={6} lg={5} className="text-center">
                        <span className="fs-3 bebas-neue-regular">
                            Sobre
                        </span>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Card className="cardAbout shadowForCards">
                                <Card.Body>
                                    <span className="bebas-neue-regular fs-5">
                                        Desenvolvedor e graduando no curso de Engenharia de Software.<br />
                                        Atualmente presto serviços para empresas na área de desenvolvimento principalmente utilizando Js e React, também estagio na área em uma empresa de transportes, prezando sempre pelos princípios de metodologias ágeis. Busco construir uma carreira solida como desenvolvedor, procurando sempre me desafiar, para através disto evoluir como pessoa e profissional.<br />
                                        Experiências também no desenvolvimento de aplicações mobile com React Native. Projetos back end com NodeJs e c# .net .<br />
                                        Inglês para conversação e leitura.
                                    </span>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={5} className="text-center">
                        <span className="fs-3 bebas-neue-regular">
                            Hard Skills
                        </span>
                        <div className="d-flex justify-content-center" 
                            data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <CarouselComp />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
