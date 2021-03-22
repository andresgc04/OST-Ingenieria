import React from 'react';
import { Image, ListGroup, Tab, Row, Col, Container } from 'react-bootstrap';
//import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import { Helmet } from 'react-helmet';

const TITLE = 'Geolocalización | OST Ingeniería'

const Geolocalizacion = () => {
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
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey={'Geolocalizacion'}>
                        <Row>
                            <Col sm={4}>
                                <ListGroup>
                                    <ListGroup.Item action href={'Topografia'}>
                                        Topografía
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={'Geolocalizacion'} >
                                        Geolocalización
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey={'Geolocalizacion'}>
                                        <h1 className="display-4 text-center mt-5" style={{ fontSize: 40 }}>Geolocalización</h1>
                                        <p className="mt-4" style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                            Brindamos una solución de la tecnología de la información que determina la ubicación de un objeto en un entorno físico (geoespacial) o virtual (Internet).
                                            Es una de las manifestaciones más populares del desarrollo actual de tecnologías de la información y recientemente está experimentando un aumento significativo de popularidad.
                                        </p>

                                        <Container className="mt-3">
                                            <Row>
                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL+"/resources/Geolocalizacion.jpg"} rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL+"/resources/Geolocalizacion2.jpg"} rounded />
                                                </Col>

                                                <Col xs={5} md={4}>
                                                    <Image style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL+"/resources/Geolocalizacion4.jpg"} rounded />
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

export default Geolocalizacion;