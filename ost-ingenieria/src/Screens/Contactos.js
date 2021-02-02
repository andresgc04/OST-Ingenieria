import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

const TITLE = 'Contactos | OST Ingeniería'

const Contactos = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_zwncyjk', 'template_vfg56nc', e.target, 'user_6q85fkNk4vz9KFR6KmOuw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <React.Fragment>

            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div>
                <NavbarOSTOficial />
            </div>

            <section style={{ background: 'white' }}>
                <div className="container py-5">
                    <div className="row">

                        <div className="col-md-6">
                            <Fade left>
                                <div>
                                    <h1 className="display-4" style={{ color: 'Black' }}>Contátecnos</h1>
                                </div>
                                <div className="mt-5 mr-5">
                                    <Form onSubmit={sendEmail}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Nombre Completo:</Form.Label>
                                            <Form.Control type="text" placeholder="Nombre Completo" name="name" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Correo electrónico:</Form.Label>
                                            <Form.Control type="email" placeholder="nombre@ejemplo.com" name="email" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Motivo:</Form.Label>
                                            <Form.Control type="text" name="subject" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Mensaje:</Form.Label>
                                            <Form.Control as="textarea" rows="3" name="message" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" value="Send Message">
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
                  Esq. Juan Isidro Jiménez, Alma Rosa, <br />
                  Santo Domingo Este, Rep. Dom.</p>
                                </div>

                                <div className="d-flex justify-content mt-5">
                                    <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 40 }} />
                                    <h1 className="display-4 ml-3" style={{ fontSize: 28 }}>Danos una llamada</h1>
                                </div>
                                <div className="ml-5">
                                    <p>Oficina: (809) 595-9401. <br />
                    Móvil: (809) 975-8958.<br />
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d530.3348873463234!2d-69.86292387965976!3d18.488222196376707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89291a515111%3A0x18c16aba38a7a1c4!2sOST%20Ingenieria!5e0!3m2!1ses-419!2sdo!4v1603240635592!5m2!1ses-419!2sdo" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" title="ubicación" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </section>

            <FooterOST />
        </React.Fragment>
    );
}

export default Contactos;