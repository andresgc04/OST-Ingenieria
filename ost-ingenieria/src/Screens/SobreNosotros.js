import React from 'react';
import { Image } from 'react-bootstrap';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

const TITLE = 'Nosotros | OST Ingeniería'

const SobreNosotros = () => {
    return (
        <React.Fragment>

            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div>
                <NavbarOSTOficial />
            </div>

            <section className="mt-5">

                <div className="container mt-5">

                    <div style={{ marginBottom: 50, marginLeft: 40 }} className="text-center">
                        <h1 className="display-4 text-center" style={{ fontSize: 50 }}>Nuestro Equipo</h1>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="ml-5 row justify-content-center h-100 col-sm-8 align-self-center text-center col-lg-6">
                            <div>
                                <Image style={{ marginRight: 20 }} src="https://static.wixstatic.com/media/a0de8a_482b6a7fcc2645e5a5b9f10a3ef9a71a~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/20191125_144748.webp" roundedCircle />
                            </div>
                            <div>
                                <h3 style={{ marginTop: 10 }}>Melvin Montero,CEO</h3>
                                <p style={{ textAlign: 'justify', fontSize: 14 }}>
                                    Ing. Electromecánico por la Universidad Central del Este, con un Master en <br />
                            Generación de Energía Eléctrica por la Universidad Politécnica de Madrid.
                                <br />
                                    Cuenta con más de 10 años de experiencia en la ejecución de proyectos <br />
                                    industriales en centro américa  y el caribe, en los sectores de minería, <br />
                                    cemento y energía.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }}>(809) 975-8958</p>
                                    </div>
                                    <div className="d-flex justify-content ml-3">
                                        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }} > ostingenieria@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row  mt-5">

                        <div className="col-md-6 mr-4 justify-content-between h-100 col-sm-8 align-self-center text-center col-lg-5">
                            <div>
                                <Image src="https://static.wixstatic.com/media/a0de8a_0c7b36b29ffc4ac88221086f14119a40~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/20200704_091734.webp" roundedCircle />
                            </div>

                            <div >
                                <h3>Angela Cepeda, CFO</h3>
                                <p style={{ textAlign: 'justify', fontSize: 14 }}>Lic. Contabilidad por la Universidad Tecnologica UTESA. 
                                Experta en asuntos financieros, presupuestos y asesora tributaria. Fundadora de AM&C Soluciones, empresa dedicada al financiamiento de automóviles e inmuebles.
                                    </p>

                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }}>(829) 566-4182</p>
                                    </div>
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: 10, color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }} > grissel21@hotmail.com </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 ml-5 justify-content-between h-100 col-sm-8 align-self-center text-center col-lg-6">
                            <div>
                                <Image style={{ height: 118, width: 119 }} src="https://static.wixstatic.com/media/a0de8a_e00777af00e943aeaea03b12c60fb5b2~mv2.jpg/v1/fill/w_95,h_94,al_c,q_80,usm_0.66_1.00_0.01/FB_IMG_1593869572553.webp" roundedCircle />
                            </div>

                            <div >
                                <h3>Greisys A. De Los Santos, HR</h3>
                                <p style={{ textAlign: 'center', fontSize: 14 }}>Ing. Industrial por la Universidad Central del Este.
                                <br />
                                Experta en reclutamiento y manejo de personal.
                                </p>

                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }}>(809) 702-6429</p>
                                    </div>
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: 10, color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }} > ostingenieria@gmail.com </p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="row mt-5">

                        <div className="col-md-6 mr-4 justify-content-between h-100 col-sm-8 align-self-center text-center col-lg-5">
                            <div>
                                <Image style={{ height: 118, width: 119 }} src={process.env.PUBLIC_URL+"/resources/Henderson1.jpg"} roundedCircle />
                            </div>

                            <div>
                                <h3>Henderson Montero</h3>
                                <p style={{ textAlign: 'justify', fontSize: 14 }}>
                                    Agrimensor por la Universidad Autónoma de Santo Domingo, topógrafo con más de 4 años de experiencia en el desarrollo de levantamientos topográficos,
                                    así como replanteo, alineamientos y preparación de expedientes técnicos para mensura y procesamiento de datos topográficos, cálculo de volúmenes y
                                    diseño de planos topográficos.
                                </p>

                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }}>(829) 447-1824</p>
                                    </div>
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: 10, color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }} > hendersonmontero@gmail.com </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 ml-5 justify-content-between h-100 col-sm-8 align-self-center text-center col-lg-6">
                            <div>
                                <Image style={{ height: 118, width: 119 }} src={process.env.PUBLIC_URL+"/resources/yancarlitos.JPG"} roundedCircle />
                            </div>

                            <div>
                                <h3>Yancarlos Morales</h3>
                                <p style={{ textAlign: 'justify', fontSize: 14 }}>
                                    Ingeniero de Software por la Universidad Central del Este, contando con amplios conocimientos teóricos y prácticos, a su vez años de experiencia en la gestión
                                    y manejo de CCTV a grandes escalas, controles de accesos y sistemas de alarmas.
                               </p>

                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }}>(829) 730-1225</p>
                                    </div>
                                    <div className="d-flex justify-content">
                                        <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: 5, color: '#f57c00', fontSize: 35 }} />
                                        <p style={{ marginLeft: 5, marginTop: 5, fontSize: 14 }} > yancarlosmorales@hotmail.com </p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-4">

            </section>


            <FooterOST />
        </React.Fragment>
    );
}
export default SobreNosotros;