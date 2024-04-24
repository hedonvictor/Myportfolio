import React from "react";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MyHeader(props) {
    return (
        <header>
            <Navbar expand="lg" style={{fontSize: "22px"}}>
                <Container className="mt-3">
                    <Container>
                    <Navbar.Brand >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            className="bi bi-file-code mt-1" viewBox="0 0 16 16">
                            <path
                                d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                            <path
                                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                        </svg>
                    </Navbar.Brand>
                    </Container>
                    <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="me-3">{props.navElement[0]}</Nav.Link>
                            <Nav.Link className="me-3">{props.navElement[1]}</Nav.Link>
                            <Nav.Link className="me-3">{props.navElement[2]}</Nav.Link>
                            <Nav.Link>{props.navElement[3]}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Container>
            </Navbar>
            <hr/>
        </header>
    )
}