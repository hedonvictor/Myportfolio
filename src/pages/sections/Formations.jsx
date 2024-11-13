import React from "react";
import { Card, Container, Row } from "react-bootstrap";

import Col from 'react-bootstrap/Col';
import { FormationCard } from '../components/Cards'

export default function Formation() {
    return (
        <section className="text-center">
            <span className="doto fs-1">
                Formação e Cursos
            </span>
            <Container fluid="md mt-5">
                <Row className="mt-4 justify-content-around">
                    <Col xs={12} md={3} lg={6} className=" d-flex justify-content-center">
                        <FormationCard
                            text={{ title: "Bacharelado", desc: "Engenharia de software", local: "• Centro Universitário das Faculdades Integradas de Ourinhos – Unifio", data: "• 2022 - 2025" }}
                        />
                    </Col>
                    <Col xs={12} md={3} lg={6} className=" d-flex justify-content-center">
                        <FormationCard
                            text={{ title: "Desenvolvimento web - FULL STACK", desc: "HTML, CSS e JavaScript", local: "• Curso online programador BR", data: "• 26Hrs" }}
                        />
                    </Col>
                    <Col xs={12} md={3} lg={6} className=" d-flex justify-content-center">
                        <FormationCard
                            text={{ title: "Desenvolvimento web - FULL STACK", desc: "ReactJS", local: "• Curso online programador BR", data: "• 10Hrs" }}
                        />
                    </Col>
                </Row>
                <Row className="mt-4 justify-content-around">
                    <Col xs={12} md={5} lg={6} className=" d-flex justify-content-center">
                        <FormationCard
                            text={{ title: "Desenvolvimento web - FULL STACK", desc: "Firebase, Bootstrap e JQuery", local: "• Curso online programador BR", data: "• 9hrs" }}
                        />
                    </Col>
                    <Col xs={12} md={5} lg={6} className=" d-flex justify-content-center">
                        <FormationCard
                            text={{ title: "Desenvolvimento web - FULL STACK", desc: "NodeJs e MongoDB", local: "• Curso online programador BR", data: "• 13hrs" }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
