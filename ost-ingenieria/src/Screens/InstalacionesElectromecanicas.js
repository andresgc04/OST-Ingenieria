import React from 'react';
import { Image, ListGroup, Tab, Row, Col, Container } from 'react-bootstrap';
//import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import { Helmet } from 'react-helmet';

const TITLE = 'Instalaciones Electromecanicas | OST Ingeniería'

const InstalacionesElectromecanicas = () => {
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
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey={'InstalacionesElectromecanicas'}>
                        <Row>
                            <Col sm={4}>
                                <ListGroup>
                                    <ListGroup.Item action href={'InstalacionesElectromecanicas'}>
                                        Instalaciones Electromecánicas
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={'InstalacionesElectricasServices'}>
                                        Instalaciones Eléctricas
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={'InstalacionesMecanicas'}>
                                        Instalaciones Mecánicas
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={'SistemasDeDeteccionDeIncendios'}>
                                        Sistemas de Detección de Incendios
                                     </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey={'InstalacionesElectromecanicas'}>
                                        <h1 className="display-4 text-center" style={{ fontSize: 40 }}>Instalaciones Electromecánicas</h1>
                                        <p className="mt-4" style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                            La Ingeniería electromecánica es la aplicación híbrida que surge de la combinación sinérgica de distintas áreas del conocimiento,
                                            como el electromagnetismo, la electrónica, la electricidad y la mecánica. Se aplica principalmente en mecanismos eléctricos,
                                            máquinas industriales, generación y transformación de energía, que brindamos en nuestro catálogo de servicios.
                                        </p>

                                        <Container className="mt-3">
                                            <Row>
                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/InstalacionesElectromecanicas.jpg" rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/Instalaciones.jpg" rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/InstalacionesElectromecanicas2.jpg" rounded />
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
    );
};

export default InstalacionesElectromecanicas;