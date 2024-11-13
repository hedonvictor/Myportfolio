import { Card, CardText, CardTitle, Col } from "react-bootstrap"


export const PresentationCard = ({ children }) => {
    return (
        <Card className="border-0 presentationCard ">
            <Card.Body className="d-flex justify-content-center align-items-center">
                {children}
            </Card.Body>
        </Card>
    )
}

export const ProjectCard = ({ src, alt, text, link }) => {
    return (
        <Card className="cardProject mb-5 shadowForCards bebas-neue-regular fs-5">
            <a href={link} target="_blank" rel="noopener noreferrer">
            <img className="imgProject" src={src} alt={alt}  />
            <CardTitle className="fs-4">
                {text.title}
            </CardTitle>
            <CardText>
                {text.text}
            </CardText>
            </a>
        </Card>
    )
}

export const FormationCard = ({ text }) => {
    return (
        <div data-aos="fade-up">
            <Card className="card-formacao border-0 shadowForCards mb-2">
                <span class="fs-3 fw-normal">
                    {text.title}
                </span>
                <span class="fs-4 fw-normal">
                    {text.desc}
                </span>
                <small>
                    {text.local}
                    <br />
                    {text.data}
                </small>
            </Card>
        </div>
    )
}