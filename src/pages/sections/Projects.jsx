import React from "react";

import myImg from "../../assets/img-index.png"

import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';


export default function Projects() {
    return (
        <section>
            <Container fluid="md">
                <Row className="mt-4 ">
                <Col className="me-5">
                        <div className="d-flex flex-row align-items-center">
                            <img className="card border-0 shadow-lg cardProjects" alt="img" src={myImg} />
                            <div className="ms-3 cardText card border-0">
                                <p className="ms-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate in animi, esse eos quo quaerat. In enim perspiciatis f
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="me-5">
                        <div className="d-flex flex-row align-items-center">
                            <img className="card border-0 shadow-lg cardProjects" alt="img" src={myImg} />
                            <div className="ms-3 cardText card border-0">
                                <p className="ms-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate in animi, esse eos quo quaerat. In enim perspiciatis f
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="me-5">
                        <div className="d-flex flex-row align-items-center">
                            <img className="card border-0 shadow-lg cardProjects" alt="img" src={myImg} />
                            <div className="ms-3 cardText card border-0">
                                <p className="ms-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate in animi, esse eos quo quaerat. In enim perspiciatis f
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="me-5">
                        <div className="d-flex flex-row align-items-center">
                            <img className="card border-0 shadow-lg cardProjects" alt="img" src={myImg} />
                            <div className="ms-3 cardText card border-0">
                                <p className="ms-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate in animi, esse eos quo quaerat. In enim perspiciatis f
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}