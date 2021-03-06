import React from 'react';
import { Image, ListGroup, Tab, Row, Col, Container } from 'react-bootstrap';
//import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import { Helmet } from 'react-helmet';

const TITLE = 'Sistemas de Detección de Incendios | OST Ingeniería'

const SistemasDeDeteccionDeIncendios = (props) => {
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
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey={'SistemasDeDeteccionDeIncendios'}>
                        <Row>
                            <Col sm={4}>
                                <ListGroup>
                                    <ListGroup.Item action onClick={()=>props.history.push("/InstalacionesElectromecanicas")}>
                                        Instalaciones Electromecánicas
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=>props.history.push("/InstalacionesElectricasServices")}>
                                        Instalaciones Eléctricas
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=>props.history.push("/InstalacionesMecanicas")}>
                                        Instalaciones Mecánicas
                                    </ListGroup.Item>
                                    <ListGroup.Item active action onClick={()=>props.history.push("/SistemasDeDeteccionDeIncendios")}>
                                        Sistemas de Detección de Incendios
                                     </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey={'SistemasDeDeteccionDeIncendios'}>
                                        <h1 className="display-4 text-center" style={{ fontSize: 40 }}>Sistemas de Detección de Incendios</h1>
                                        <p className="mt-4" style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                            Contamos con un personal altamente calificado y con los estudios requeridos para las instalaciones
                                            y mantenimientos de estos equipos, así poder proteger a las personas, instalaciones, equipos, bienes
                                            y materiales de un entorno de los peligros derivados de un incendio.
                                        </p>

                                        <Container className="mt-3">
                                            <Row>
                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '60%' }} src={process.env.PUBLIC_URL+"/resources/alarma-incendios.jpg"} rounded />
                                                </Col>
                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '60%' }} src={process.env.PUBLIC_URL+"/resources/alarma.jpg"} rounded />
                                                </Col>
                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '60%' }} src={process.env.PUBLIC_URL+"/resources/manilla-alarma.jpg"} rounded />
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

export default SistemasDeDeteccionDeIncendios;