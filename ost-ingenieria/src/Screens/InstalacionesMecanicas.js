import React from 'react';
import { Image, ListGroup, Tab, Row, Col, Container } from 'react-bootstrap';
//import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import { Helmet } from 'react-helmet';

const TITLE = 'Instalaciones Mecanicas | OST Ingeniería'

const InstalacionesMecanicas = (props) => {
    return (
        <React.Fragment>

            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <section>
                <NavbarOSTOficial />
            </section>

            <section className="py-4">
                <div className="container">
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey={'InstalacionesMecanicas'}>
                        <Row>
                            <Col sm={4}>
                                <ListGroup>
                                    <ListGroup.Item action onClick={()=>props.history.push("/InstalacionesElectromecanicas")}>
                                        Instalaciones Electromecánicas
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=>props.history.push("/InstalacionesElectricasServices")}>
                                        Instalaciones Eléctricas
                                    </ListGroup.Item>
                                    <ListGroup.Item active action onClick={()=>props.history.push("/InstalacionesMecanicas")}>
                                        Instalaciones Mecánicas
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=>props.history.push("/SistemasDeDeteccionDeIncendios")}>
                                        Sistemas de Detección de Incendios
                                     </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey={'InstalacionesMecanicas'}>
                                        <h1 className="display-4 text-center mt-5" style={{ fontSize: 40 }}>Instalaciones Mecánicas</h1>
                                        <p className="mt-4" style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                            Contamos con personal altamente calificado para trabajos de metalmecánica, sistemas de tuberías,
                                            instalaciones de ductos, maquinas rotativas y sistemas estáticos como filtros, chimeneas, ciclones,
                                            intercambiadores y tanques.
                                        </p>

                                        <Container className="mt-3">
                                            <Row>
                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL+"/resources/InstalacionesMecanicas.jpg"} rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL+"/resources/InstalacionesMecanicas2.jpg"} rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL+"/resources/mecanica.jpg"} rounded />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>

            <section>
                <FooterOST />
            </section>
        </React.Fragment>
    )
}

export default InstalacionesMecanicas;