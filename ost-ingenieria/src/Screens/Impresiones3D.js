import React from 'react';
import { Image, ListGroup, Tab, Row, Col, Container } from 'react-bootstrap';
//import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import { Helmet } from 'react-helmet';

const TITLE = 'Impresiones 3D | OST Ingeniería'

const Impresiones3D = () => {
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
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey={'Impresiones3D'}>
                        <Row>
                            <Col sm={4}>
                                <ListGroup>
                                    <ListGroup.Item action href={'MecanizadoCNC'}>
                                        Mecanizado CNC
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={'Impresiones3D'} >
                                        Impresiones 3D
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey={'Impresiones3D'}>
                                        <h1 className="display-4 text-center mt-5" style={{ fontSize: 40 }}>Impresiones 3D</h1>
                                        <p className="mt-4" style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                            Hacemos trabajos de impresión 3D en toda la gama de materiales aptos, principalmente PLA, PETG, FLEX, UTP y
                                            demás materiales solicitados. Hemos introducido esta tecnología de impresión a nuestra lista de servicios para
                                            así brindar la mayor calidad en cada uno de los filamentos requeridos por nuestros clientes.
                                        </p>

                                        <Container className="mt-3">
                                            <Row>
                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/Impresiones3D.png" rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/Impresiones3D2.jpg" rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/Impresiones3D3.jpg" rounded />
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

export default Impresiones3D;