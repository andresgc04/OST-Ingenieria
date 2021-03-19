import React from 'react';
import { Image, ListGroup, Tab, Row, Col, Container } from 'react-bootstrap';
//import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import { Helmet } from 'react-helmet';

const TITLE = 'Mecanizado CNC | OST Ingeniería'

const MecanizadoCNC = () => {
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
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey={'MecanizadoCNC'}>
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
                                    <Tab.Pane eventKey={'MecanizadoCNC'}>
                                        <h1 className="display-4 text-center mt-5" style={{ fontSize: 40 }}>Mecanizado CNC</h1>
                                        <p className="mt-4" style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                            Contamos con talleres especializados en mecanizado con control numérico con modernas máquinas que ofrecen precisión y
                                            excelentes tiempos de ejecución de los requerimientos de nuestros clientes.
                                        </p>

                                        <Container className="mt-3">
                                            <Row>
                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/Mecanizado1.jpg" rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/Mecanizado2.jpg" rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src="/resources/Mecanizado3.jpg" rounded />
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

export default MecanizadoCNC;