import React, { Component, useState } from 'react';
import { Navbar, NavDropdown, Nav, Button, Carousel, CardDeck, Card, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class SobreNosotros extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                        <Navbar.Brand href="#home">OST Ingeniería</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href={'Home'} >Inicio</Nav.Link>
                                <Nav.Link href={'SobreNosotros'}>Sobre Nosotros</Nav.Link>
                                <Nav.Link href="#link">Trayectoria</Nav.Link>
                                <NavDropdown className="y-4" title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <section>
                    <div className="container mt-5 py-4">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://static.wixstatic.com/media/a0de8a_482b6a7fcc2645e5a5b9f10a3ef9a71a~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/20191125_144748.webp" />
                            <Card.Body>
                                <Card.Title>Melvin Montero, CEO </Card.Title>
                                <Card.Text>
                                <p style={{ textAlign: 'justify' }}>
                                Ing. Electromecánico por la Universidad Central del Este, con un Master en Generación de Energía Eléctrica por la Universidad Politécnica de Madrid.

                                Cuenta con más de 10 años de experiencia en la ejecución de proyectos industriales en centro américa  y el caribe, en los sectores de minería, cemento y energía.
                                 </p>  
      </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Mail: ostingenieria@gmail.com | Móvil: 809-975-8958</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://static.wixstatic.com/media/a0de8a_0c7b36b29ffc4ac88221086f14119a40~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/20200704_091734.webp" />
                            <Card.Body>
                                <Card.Title>Angela Cepeda, CFO</Card.Title>
                                <Card.Text>
                                <p style={{ textAlign: 'justify' }}>
                                Lic. Contabilidad por la Universidad Tecnologica UTESA.

                                Experta en asuntos financieros, presupuestos y asesora tributaria. Fundadora de AM&C Soluciones, empresa dedicada al financiamiento de automóviles e inmuebles.
                                </p>
                                
        content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Mail: grissel21@hotmail.com | Móvil: 829-566-4182</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://static.wixstatic.com/media/a0de8a_e0b9fa37986247e6a792c901f9b81c9e~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/FB_IMG_1593948589059.webp" />
                            <Card.Body>
                                <Card.Title>Walter Anton, Asesor Técnico</Card.Title>
                                <Card.Text>
                                <p style={{ textAlign: 'justify' }}>
                                Ing. Mecánico por la Universidad de la Libertad, Perú. Profesional con más de 20 años de experiencia en el sector industrial y la implementación de proyectos como muelles, hidroeléctricas, centrales térmicas y minería.
                                </p>   
                                    
      </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Mail: walter_ap@homail.com | Móvil: 829-290-3386</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://static.wixstatic.com/media/a0de8a_e00777af00e943aeaea03b12c60fb5b2~mv2.jpg/v1/fill/w_119,h_118,al_c,q_80,usm_0.66_1.00_0.01/FB_IMG_1593869572553.webp" />
                            <Card.Body>
                                <Card.Title>Greisy A. De los Santo, RRHH</Card.Title>

                                <Card.Text>
                                <p style={{ textAlign: 'justify' }}>
                                Ing. Industrial por la Universidad Central del Este.

                                ​

                                Experta en reclutamiento y manejo de personal.
                                </p>

                                    
                              </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Mail: ostingenieria@gmail.com | Móvil: 809-702-6429</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}
export default SobreNosotros;