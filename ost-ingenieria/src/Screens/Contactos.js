import React, { Component, useState } from 'react';
import { Navbar, NavDropdown, Nav, Button, Carousel, CardDeck, Card, Image, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import NavbarOST from './Navbar/NavbarOST';
import FooterOST from './Footer/FooterOST';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item style={{ height: 500 }}>
                <img
                    className="d-block w-100"
                    src="https://concepto.de/wp-content/uploads/2018/04/arquitectura-plano-e1523469843305.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 style={{ color: "red", fontSize: 64 }}>OST INGENIERÍA</h1>
                    <h2 style={{ color: "red" }}>Oficina de Servicios Técnicos de Ingenieria</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

const Contactos = () => {
    return (
        <React.Fragment>
            <div>
                <NavbarOST />
            </div>

            <section className="mt-5">
                <div>
                    <ControlledCarousel />
                </div>
            </section>

            <section style={{ background: 'white' }}>
                <div className="container py-5">
                    <div className="row">

                        <div className="col-md-6">
                            <Fade left>
                                <div>
                                    <h1 className="display-4" style={{ color: 'Black' }}>Contátecnos</h1>
                                </div>
                                <div className="mt-5 mr-5">
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Correo Electrónico:</Form.Label>
                                            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Motivo:</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Mensaje:</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Enviar
                    </Button>
                                    </Form>
                                </div>
                            </Fade>
                        </div>

                        <div className="col-md-6 mt-5">
                            <Fade right>
                                <div className="d-flex justify-content">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#388e3c', fontSize: 40 }} />
                                    <h1 className="display-4 ml-3" style={{ fontSize: 28 }}>Encuéntrenos en la oficina</h1>
                                </div>
                                <div className="ml-5">
                                    <p>Estamos ubicados en Av. Pdte. Vasquez 17, <br />
                  Esq. Juan Isidro Jimenez, Alma Rosa, <br />
                  Santo Domingo Este.</p>
                                </div>

                                <div className="d-flex justify-content mt-5">
                                    <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 40 }} />
                                    <h1 className="display-4 ml-3" style={{ fontSize: 28 }}>Danos una llamada</h1>
                                </div>
                                <div className="ml-5">
                                    <p>Oficina: (809) 595-9401, <br />
                    Celular: (809) 975-8958.<br />
                                    </p>
                                </div>
                            </Fade>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.903078811839!2d-69.86497298510123!3d18.48804887499329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf887709f1ec71%3A0x3479b79fe2758086!2sAv.%20Pdte.%20V%C3%A1squez%20144%2C%20Santo%20Domingo%20Este%2011503!5e0!3m2!1ses-419!2sdo!4v1600837788925!5m2!1ses-419!2sdo" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </section>

            <FooterOST/>
        </React.Fragment>
    );
}

export default Contactos;