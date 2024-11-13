import React from "react";
import { Container, Navbar  } from "react-bootstrap";

import { SocialIcons } from "../../shared/SocialIcons";
 
export default function MyHeader() {
    return (
        <header >
            <Navbar expand="lg" className="text-center" >
                <Container className="mt-2 mb-2">
                    <Container>
                        <Navbar.Brand >
                                <SocialIcons/>
                        </Navbar.Brand>
                    </Container>
                </Container>
            </Navbar>
        </header>
    )
}