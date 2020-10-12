import React from 'react';
import { Container, Jumbotron, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import '../styles/styles.css';

const Clientes = () => {
    return (
        <React.Fragment>
            <section>
                <NavbarOSTOficial/>
            </section>

            <section className="mt-5">
                <div className="container">
                    <div className="row">

                        <Fade left>
                            <div className="col-md-6 my-auto">
                                <div className="d-flex justify-content-center ml-2 mb-2">
                                    <Image src="/resources/MicrotekMedical.png" alt="MicrotekMedical" />
                                </div>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="col-md-6 my-auto">
                                <p className="" style={{ fontSize: 22, textAlign: 'justify' }}>Empresa multinacional que en República Dominicana cuenta varias fábricas de manufacturas médicas, con más de 400 empleados.</p>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div className="container">
                    <div className="row">

                        <Fade left>
                            <div className="col-md-6 my-auto">
                                <p className="" style={{ fontSize: 22, textAlign: 'justify' }}>
                                    Empresa especialista en la aplicación de tecnología, tanto para la seguridad,
                                    la protección contra incendios, como para el ahorro de energía y el confort de edificios
                                    y residencias amigables con el medio ambiente.
                            </p>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="col-md-6 my-auto">
                                <div className="d-flex justify-content-center ml-2 mb-2">
                                    <Image src="/resources/Inprotect.png" alt="Inprotect" style={{ width: '60%' }} />
                                </div>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div className="container">
                    <div className="row">

                        <Fade left>
                            <div className="col-md-6 my-auto">
                                <div className="d-flex justify-content-center ml-2 mb-2">
                                    <Image src="/resources/SigmaPlast.png" alt="SigmaPlast" />
                                </div>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="col-md-6 my-auto">
                                <p className="" style={{ fontSize: 22, textAlign: 'justify', marginTop: -40 }}>
                                    Sigmaplast es una empresa que desarrollar el empaque ideal para sus productos,
                                    brindamos gran diversidad de empaques enfocados en el shelf life que se tenga proyectado brindar en el mercado
                            </p>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div className="container">
                    <div className="row">

                        <Fade left>
                            <div className="col-md-6 my-auto">
                                <p className="" style={{ fontSize: 22, textAlign: 'justify' }}>
                                    Empresa especialista en la aplicación de tecnología, tanto para la seguridad,
                                    la protección contra incendios, como para el ahorro de energía y el confort de edificios
                                    y residencias amigables con el medio ambiente.
                                </p>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="col-md-6 my-auto">
                                <div className="d-flex justify-content-center ml-2 mb-5">
                                    <Image src="/resources/ParqueIndustrialDuarte.png" alt="ParqueIndustrialDuarte" style={{ width: '60%' }} />
                                </div>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div className="container">
                    <div className="row">

                        <Fade left>
                            <div className="col-md-6 my-auto">
                                <div className="d-flex justify-content-center ml-2">
                                    <Image src="/resources/JCE.png" alt="JCE" />
                                </div>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="col-md-6 my-auto">
                                <p className="" style={{ fontSize: 22, textAlign: 'justify' }}>
                                    La Junta Central Electoral de la República Dominicana es un organismo especial del
                                    gobierno de la República Dominicana encargado de velar por un democrático e imparcial
                                    proceso electoral, además administrar el registro civil, el estado civil de todos
                                    los ciudadanos dominicanos.
                                </p>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        

                        <Fade left>
                            <div className="col-md-6 my-auto">
                                <p className="" style={{ fontSize: 22, textAlign: 'justify' }}>
                                    Empresa de capital nacional dedicada al financiamiento inmobiliario y vehículos de motor.
                            </p>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="col-md-6 my-auto">
                                <div className="d-flex justify-content-center ml-2">
                                <Image src="/resources/AMYC.png" alt="AMYC" />
                                </div>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>

            <section className="mt-5 mb-5">
                <div className="container">
                    <div className="row">

                        <Fade left>
                            <div className="col-md-6 my-auto">
                                <div className="d-flex justify-content-center ml-2">
                                <Image src="/resources/metalmecanica.png" alt="metalmecanica" />
                                </div>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="col-md-6 my-auto">
                                <p className="" style={{ fontSize: 22, textAlign: 'justify' }}>
                                    Taller industrial que cuanta con importantes maquinarias para la confección
                                    y fabricación de ductería, tubería y procesos de soldadura.
                                </p>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>

            <section>
                <FooterOST />
            </section>
        </React.Fragment>
    );
};

export default Clientes;