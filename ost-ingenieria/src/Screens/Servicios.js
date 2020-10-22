import React from 'react';
import { Image } from 'react-bootstrap';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import Pulse from 'react-reveal/Pulse';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

const TITLE = 'Servicios | OST Ingeniería'

const Servicios = () => {
    return (
        <React.Fragment>

            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <section>
                <NavbarOSTOficial />
            </section>

            <section>
                <div className="container mt-5 mb-5">
                    <div className="d-flex justify-content-center">
                        <h1 className="display-4" style={{ fontSize: 40 }}>Servicios que ofrecemos</h1>
                    </div>

                    <div className="row mt-4">

                        <div className="col-md-4">
                            <div className="text-center">
                                <a href={'InstalacionesElectromecanicas'} className="text-reset"><h1 className="display-4 mb-4 " style={{ fontSize: 24, color: 'red' }}>Instalaciones Electromecánicas</h1></a>
                                <a href={'InstalacionesElectricasServices'} className="text-reset"><p className="display-4" style={{ fontSize: 18 }}>Instalaciones Eléctricas</p></a>
                                <a href={'InstalacionesMecanicas'} className="text-reset"><p className="display-4" style={{ fontSize: 18 }}>Instalaciones Mecánicas</p></a>
                                <a href={'SistemasDeDeteccionDeIncendios'} className="text-reset"><p className="display-4" style={{ fontSize: 18 }}>Sistemas de detección de incendios</p></a>
                            </div>
                        </div>

                        <div className="col-md-6 ml-4">
                            <div className="text-center">
                                <a href={'Topografia'} className="text-reset"><h1 className="display-4 mb-4" style={{ fontSize: 24, color: 'red' }}>Topografía</h1></a>
                                <a href={'Geolocalizacion'} className="text-reset"><p className="display-4" style={{ fontSize: 18 }}>Geolocalización</p></a>
                            </div>
                        </div>



                    </div>

                </div>
            </section>

            <section className="py-5" style={{ background: '#3D3F47' }}>
                <div className="container">
                    <Pulse>
                        <h1 className="text-white display-4 text-center" style={{ fontSize: 40 }}>
                            ¿Qué nos hace diferentes?
                            <br />
                            y ¿Por qué elegirnos?
                         </h1>
                    </Pulse>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div>

                        <Fade left>
                            <div>
                                <div className="d-flex justify-content-center">
                                    <h1 className="display-4 text-center my-auto">1</h1>
                                    <p className="my-auto ml-3" style={{ textAlign: 'justify' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                </div>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="mt-4">
                                <div className="d-flex justify-content-center">
                                    <h1 className="display-4 text-center my-auto">2</h1>
                                    <p className="my-auto ml-3" style={{ textAlign: 'justify' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                </div>
                            </div>
                        </Fade>

                        <Fade left>
                            <div className="mt-4">
                                <div className="d-flex justify-content-center">
                                    <h1 className="display-4 text-center my-auto">3</h1>
                                    <p className="my-auto ml-3" style={{ textAlign: 'justify' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                </div>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="mt-4">
                                <div className="d-flex justify-content-center">
                                    <h1 className="display-4 text-center my-auto">4</h1>
                                    <p className="my-auto ml-3" style={{ textAlign: 'justify' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                </div>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>

            <FooterOST />
        </React.Fragment>
    );
}

export default Servicios;