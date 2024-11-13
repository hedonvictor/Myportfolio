

import { Col, Row } from "react-bootstrap";

import { SocialIcons } from "../../shared/SocialIcons";

export const MyFooter = () => {
    return (
        <footer className="mt-5 text-center">
            <Row>
                <Col md={4} className="mt-4 textFooter order-2 order-md-1" style={{ color: "grey" }}>
                    <span>
                        Todos os direitos reservados.
                    </span>
                </Col>
                <Col md={4} className="order-1 order-md-2">
                    <SocialIcons />
                </Col>
                <Col md={4} className="mt-4 textFooter order-3 order-md-3" style={{ color: "grey" }}>
                    <span>
                        Desenvoldido por - <a href="https://www.instagram.com/hedonvictor.dev/" target="_blank" className="soccialIconsColor">Hédon Victor</a>
                    </span>
                </Col>
            </Row>
        </footer>
    )
}