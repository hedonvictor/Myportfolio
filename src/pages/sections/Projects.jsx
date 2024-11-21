
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

import VipImg from '../../assets/ProjectsImg/feitoAmao.jpg'
import DimobiliImg from '../../assets/ProjectsImg/DimobiliMoveis.png'
import DotNetProjectImg from '../../assets/ProjectsImg/AspNetProject.png'
import BarberTimeImg from '../../assets/ProjectsImg/TelasBarberTime.png'

import { ProjectCard } from "../components/Cards";

export default function Projects() {
    return (
        <section className="text-center projectsSection">
            <span className="doto fs-1">
                Conheça alguns de meus trabalhos e projetos
            </span>
            <Container fluid="md">
                <Row className="mt-5 justify-content-around">
                    <Col xs={8} md={5}
                        className="mb zigzag-left"
                    >
                        <div data-aos="fade-right">
                            <ProjectCard
                                src={DimobiliImg}
                                alt="Project 1"
                                text={{ title: "Dimobili Móveis", text: "Site Da Empresa, onde atuei no desenvoldimento, e manutenções do protótipo ao deploy" }}
                                link="https://dimobilimoveis.com.br"
                            />
                            <ProjectCard
                                src={VipImg}
                                alt="Project 1"
                                text={{ title: "Vip Móveis", text: "Desenvolvi a landing page da empresa VIP móveis com foco em exposição da marca e aumento de vendas" }}
                                link="https://vipmoveisplanejados.com.br"
                            />
                        </div>
                    </Col>
                    <Col xs={8} md={5}
                        className="mb-4 zigzag-right"
                    >
                        <div data-aos="fade-left">
                            <ProjectCard
                                src={BarberTimeImg}
                                alt="Project 2"
                                text={{ title: "Barber Time", text: "aplicativo mobile para barbearias feito em react native, com foco em facilitar agendamentos de serviços e pagamentos para clientes e barbeiros." }}
                                link="https://github.com/hedonvictor/BarberTime"
                            />
                            <ProjectCard
                                src={DotNetProjectImg}
                                alt="Project 2"
                                text={{ title: "Sales Web ", text: "Sistema Web feito em ASP.NET Core, MVC e Entity Framework, com foco no gerenciamento e controle de departamentos de lojas" }}
                                link="https://github.com/hedonvictor/SalesWebMvc"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
