import React, { Component, useState } from 'react';
import { Navbar, NavDropdown, Nav, Button, Carousel, CardDeck, Card, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import NavbarOST from './Navbar/NavbarOST';
import FooterOST from './Footer/FooterOST';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
class SobreNosotros extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <NavbarOST />
                </div>

                <section>
                    <div className="container mt-5 py-4">
                        <div className="row">
                            <div className="col-md-6 mt-5">
                                <div className="d-flex justify-content">
                                    <Image style={{ marginLeft: -100 }} src="https://static.wixstatic.com/media/a0de8a_482b6a7fcc2645e5a5b9f10a3ef9a71a~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/20191125_144748.webp" roundedCircle />
                                    <div><h3 className="ml-4">Melvin Montero,CEO</h3></div>
                                </div>
                                <div style={{ marginTop: -60 }} className="ml-5">
                                    <p> Ing. Electromecánico por la Universidad Central del Este, con un Master en Generación de Energía Eléctrica por la Universidad Politécnica de Madrid. <br />

                                            Cuenta con más de 10 años de experiencia en la ejecución de proyectos industriales en centro américa  y el caribe, en los sectores de minería, cemento y energía.</p>
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 40 }} />
                                        <p style={{ marginTop: 5, marginLeft: 10 }}>(809) 975-8958</p>
                                        <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: 20, color: '#f57c00', fontSize: 40 }} />
                                        <p style={{ marginTop: 5, marginLeft: 10 }} > ostingenieria@gmail.com</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 mt-4 ">
                                <div className="d-flex justify-content">
                                    <Image style={{ marginLeft: -100 }} src="https://static.wixstatic.com/media/a0de8a_0c7b36b29ffc4ac88221086f14119a40~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/20200704_091734.webp" roundedCircle />
                                    <div><h3 className="ml-4">Angela Cepeda, CFO</h3></div>
                                </div>
                                <div style={{ marginTop: -60 }} className="ml-5">
                                    <p>Lic. Contabilidad por la Universidad Tecnologica UTESA.
                                        Experta en asuntos financieros, presupuestos y asesora tributaria. Fundadora de AM&C Soluciones, empresa dedicada al financiamiento de automóviles e inmuebles.</p>
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 40 }} />
                                        <p style={{ marginTop: 5, marginLeft: 10 }}>(829) 566-4182</p>
                                        <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: 20, color: '#f57c00', fontSize: 40 }} />
                                        <p style={{ marginTop: 5, marginLeft: 10 }} > grissel21@hotmail.com </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 mt-5 ml-2">
                                <div className="d-flex justify-content">
                                    <Image style={{ marginLeft: -100 }} src="https://static.wixstatic.com/media/a0de8a_e00777af00e943aeaea03b12c60fb5b2~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/FB_IMG_1593869572553.webp" roundedCircle />
                                    <div><h3 className="ml-4">Greysis A. De los Santos, RRHH</h3></div>
                                </div>
                                <div style={{ marginTop: -60 }} className="ml-5">
                                    <p> Ing. Industrial por la Universidad Central del Este.
                                
                                    Experta en reclutamiento y manejo de personal.
                                    </p>
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 40 }} />
                                        <p style={{ marginTop: 5, marginLeft: 10 }}>(809) 702-6429</p>
                                        <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: 20, color: '#f57c00', fontSize: 40 }} />
                                        <p style={{ marginTop: 5, marginLeft: 10 }} > ostingenieria@gmail.com </p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 mt-4  ">
                                <div className="d-flex justify-content">
                                    <Image style={{ marginLeft: -100 }} src="https://static.wixstatic.com/media/a0de8a_0c7b36b29ffc4ac88221086f14119a40~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/20200704_091734.webp" roundedCircle />
                                    <div><h3 className="ml-4">Angela Cepeda, CFO</h3></div>
                                </div>
                                <div style={{ marginTop: -60 }} className="ml-4">
                                    <p>Lic. Contabilidad por la Universidad Tecnologica UTESA.
                                        Experta en asuntos financieros, presupuestos y asesora tributaria. Fundadora de AM&C Soluciones, empresa dedicada al financiamiento de automóviles e inmuebles.</p>
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 40 }} />
                                        <p style={{ marginTop: 5, marginLeft: 10 }}>(829) 566-4182</p>
                                        <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: 20, color: '#f57c00', fontSize: 40 }} />
                                        <p style={{ marginTop: 5, marginLeft: 10 }} > grissel21@hotmail.com </p>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </section>


            </React.Fragment>
        )
    }

}
export default SobreNosotros;