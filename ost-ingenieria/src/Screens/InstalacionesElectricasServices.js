import React, { useState } from 'react';
import { Button, Carousel, Image, Form, ListGroup, Tab, Row, Col, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import { Helmet } from 'react-helmet';

const TITLE = 'Instalaciones Electricas | OST Ingeniería'

const InstalacionesElectricasServices = () => {
    return (
        <React.Fragment>

            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <section>
                <NavbarOSTOficial />
            </section>

            <section className="py-5">
                <div className="container">
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey={'InstalacionesElectricasServices'}>
                        <Row>
                            <Col sm={4}>
                                <ListGroup>
                                    <ListGroup.Item action href={'InstalacionesElectromecanicas'}>
                                        Instalaciones Electromecanicas
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={'InstalacionesElectricasServices'}>
                                        Instalaciones Electricas
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={'InstalacionesMecanicas'} >
                                        Instalaciones Mecanicas
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={'SistemasDeDeteccionDeIncendios'}>
                                        Sistemas de Detección de Incendios
                                     </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey={'InstalacionesElectricasServices'}>
                                        <h1 className="display-4 text-center" style={{ fontSize: 40 }}>Instalaciones Electricas</h1>
                                        <p className="mt-4" style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                            El servicio de instalaciones eléctricas que ofrecemos no solo se limita a las instalaciones industriales de media y baja tensión,
                                            en este apartado también incluimos, los diseños de estas, hacemos instalaciones de sistemas de detección de incendios, sistemas CCTV,
                                            Data, megafonía, PLC, Centro de control de motores y más.
                                        </p>

                                        <Container className="mt-3">
                                            <Row>
                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/InstalacionesElectricas2.jpg" rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/InstalacionesElectricas.jpg" rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/InstalacionesElectricas3.jpg" rounded />
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

export default InstalacionesElectricasServices;