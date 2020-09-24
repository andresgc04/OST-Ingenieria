import React, { Component, useState } from 'react';
import { Navbar, NavDropdown, Nav, Button, Carousel, CardDeck, Card, Image, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import SobreNosotros from './SobreNosotros';
import NavbarOST from './Navbar/NavbarOST';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
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
          src="https://bextroconsultora.com/wp-content/uploads/2017/07/Ing.-Civil-06-07-17-formaletas.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{ color: "red", fontSize: 64 }}>OST INGENIERÍA</h1>
          <h2 style={{ color: "red" }}>Oficina de Servicios Técnicos de Ingenieria</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 500 }}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2014/08/05/03/19/bulldozer-410118_960_720.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 500 }}>
        <img
          className="d-block w-100"
          src="https://www.menard.es/wp-content/uploads/2016/12/baitra-3-800x400.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
<<<<<<< HEAD
          <Navbar bg="" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href={'Home'}>OST Ingeniería</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link>Inicio</Nav.Link>
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
=======
          <NavbarOST/>
>>>>>>> vistas
        </div>

        <section className="mt-5">
          <div>
            <ControlledCarousel />
          </div>
        </section>

        <section style={{ background: 'white' }}>
          <div className="container mt-5">
            <div className="row">
              <Fade left>
                <div className="col-md-6 my-auto">
                  <h1 className="display-4">
                    Sobre Nosotros
            </h1>

                  <p className="mt-5 ml-2" style={{ fontSize: 20, textAlign: 'justify' }}>
                    Somos una oficina de servicios técnicos e ingeniería que cuenta con un equipo multidisciplinario de técnicos e ingenieros de excelentes capacitaciones que están siempre dispuestos a ofrecerle las soluciones más factibles para su actividad productiva,
                    con la aplicación de técnicas experimentadas y de buenas práctica que aseguren que cada uno de nuestros servicios aportan al desarrollo sostenible de su empresa o proyectos.
            </p>
                </div>
              </Fade>

              <Fade right>
                <div className="col-md-6">
                  <div className="content-right">
                    <img src="https://static.wixstatic.com/media/a0de8a_57fc56362d5d419d9606cf1eb88d061e~mv2.png/v1/fill/w_308,h_150,al_c,q_85,usm_0.66_1.00_0.01/Elegido.webp" style={{ width: '80%' }} />
                  </div>
                </div>
              </Fade>
            </div>
          </div>


        </section>

        <section style={{ background: '#424242' }}>
          <div className="container p-4">
            <Fade left>
              <div className="d-flex justify-content-center" style={{}}>
                <h1 className="display-4 mt-5" style={{ color: 'white' }}>Nuestros Servicios</h1>
              </div>
            </Fade>
            <Fade right>
              <div className="mt-5">
                <CardDeck style={{ borderColor: '' }}>
                  <Card>
                    <Card.Img variant="top" src="https://i0.wp.com/www.bits.com.mx/wp-content/uploads/2016/10/Sistemas_Administrativos.jpg?fit=750%2C469&ssl=1" />
                    <Card.Body>
                      <Card.Title>Gestion de Proyectos</Card.Title>
<<<<<<< HEAD
                      <Card.Text>
                      Nuestra propuesta de gestión de proyectos se fundamenta en poner a disposición de nuestros clientes personal y herramienta que manejan los alineamientos del PMI. Este servicio incluye calculo de cantidades de obras, análisis de riesgos, preparación de licitaciones y/o pliego de condiciones, servicios de oficina técnica, entre otros. Contamos con asesores certificados PMP.
=======
                      <Card.Text style={{ textAlign: 'left' }}>
                        Nuestra propuesta de gestión de proyectos se fundamenta en poner a
                        disposición de nuestros clientes personal y herramienta que manejan
                        los alineamientos del PMI.
>>>>>>> vistas
                </Card.Text>
                      <Button variant="primary">Saber más</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="https://2.bp.blogspot.com/-_jyk_a-L8H8/Wc1YV7mGzVI/AAAAAAAAC4w/ZmRwb9_DoTIKcmNhclP2adHylNMi3mrjgCLcBGAs/s750/instalaciones_electricas.jpg" />
                    <Card.Body>
<<<<<<< HEAD
                      <Card.Title>Instalaciones Eléctricas-Instrumentación y Control</Card.Title>
                      <Card.Text>
                      El servicio de instalaciones eléctricas que ofrecemos no solo se limita a las instalaciones industriales de media y baja tensión, en este apartado también incluimos, los diseños de estas, hacemos instalaciones de sistemas de detección de incendios, sistemas CCTV, Data, megafonía, PLC, Centro de control de motores y más.
        content.{' '}
=======
                      <Card.Title style={{fontSize:19}}>Instalaciones Eléctricas</Card.Title>
                      <Card.Text style={{ textAlign: 'left' }}>
                        El servicio de instalaciones eléctricas que ofrecemos no solo se limita a
                        las instalaciones industriales de media y baja tensión,
                        también incluimos, los diseños de estas.
                        {' '}
>>>>>>> vistas
                      </Card.Text>
                      <Button variant="primary">Saber más</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="https://2.bp.blogspot.com/-6_KCeieik6k/Wt_henJOfxI/AAAAAAAAB_Q/9MkZKZ_kDAsKak9EDmOlo1pOw5UjwjEHwCLcBGAs/s750/Mantenimiento_Industrial.jpg" />
                    <Card.Body>
<<<<<<< HEAD
                      <Card.Title>Instalaciones Mecánicas</Card.Title>
                      <Card.Text>
                      Contamos con personal altamente calificado para trabajos de metalmecánica, sistemas de tuberías, instalaciones de ductos, maquinas rotativas y sistemas estáticos como filtros, chimeneas, ciclones, intercambiadores y tanques.
=======
                      <Card.Title style={{fontSize:18}}>Instalaciones Mecánicas</Card.Title>
                      <Card.Text style={{ textAlign: 'left' }}>
                      Contamos con personal altamente calificado para trabajos de metalmecánica, 
                      sistemas de tuberías, instalaciones de ductos, maquinas rotativas y sistemas estáticos.
>>>>>>> vistas
              </Card.Text>
                      <Button variant="primary">Saber más</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
<<<<<<< HEAD
                  
=======
                  <Card>
                    <Card.Img variant="top" src="https://www.usm.cl/assets/img/carreras/fotos/concepcion-tecnico-universitario-en-automatizacion-y-control.w700.jpg" style={{ height: '31%' }} />
                    <Card.Body>
                      <Card.Title style={{fontSize:17.2}}>Instrumentación & Control</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
               </Card.Text>
                      <Button variant="primary">Saber más</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
>>>>>>> vistas
                </CardDeck>
              </div>
            </Fade>

            <Fade left>
              <div className="mt-5 ">
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src="https://www.tecnoseguro.com/media/k2/items/cache/60959e8d8c34f5c00b9627dfd768f462_L.jpg" style={{ height: '32%' }} />
                    <Card.Body>
                      <Card.Title>Sistemas Detección de Incendios</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                </Card.Text>
                      <Button variant="primary">Saber más</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="https://2.bp.blogspot.com/-6_KCeieik6k/Wt_henJOfxI/AAAAAAAAB_Q/9MkZKZ_kDAsKak9EDmOlo1pOw5UjwjEHwCLcBGAs/s750/Mantenimiento_Industrial.jpg" />
                    <Card.Body>
                      <Card.Title>Mantenimiento Industrial & Refrigeración</Card.Title>
                      <Card.Text>
                      Somos un aliado perfecto para su organización haciendo que su personal se concentre únicamente en labores productivas, los trabajos de refrigeración suelen ser frecuentes tanto en la producción como los trabajos de oficina, es por eso que ponemos a su disposición nuestro cuerpo de técnicos que ofrecerán las soluciones técnicas y económicas mas factibles para su empresa o proyecto.
        content.{' '}
                      </Card.Text>
                      <Button variant="primary">Saber más</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="https://www.stanser.com/wp-content/uploads/2018/09/mecanizado-cnc3.jpg" />
                    <Card.Body>
                      <Card.Title>Mecanizado CNC e impresión 3D</Card.Title>
                      <Card.Text>
                      Contamos con talleres especializados en mecanizado con control numérico con modernas maquinas que ofrecen precisión y excelentes tiempos de ejecución de los requerimientos de nuestros clientes. Hacemos trabajos de impresión 3D en toda la gama de materiales posibles, principalmente PLA, Petg, Flex y otros.  
              </Card.Text>
                      <Button variant="primary">Saber más</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="https://perfiltopografia.es/wp-content/uploads/2017/12/geolocalizacion.jpg" />
                    <Card.Body>
                      <Card.Title>Servicios de Topografía y Geolocalización</Card.Title>
                      <Card.Text>
                      Ofrecemos outsourcing para Control de obra y evaluación de impacto, Seguimiento a planificación minera, inventario de materiales de acopio, levantamiento topográfico de minas a cielo abierto, asistencia por Dron y GPS.
               </Card.Text>
                      <Button variant="primary">Saber más</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                </CardDeck>
              </div>
            </Fade>
          </div>
        </section>

        <section style={{ background: 'white' }}>
          <div className="container mt-1 py-5">
            <div className="row">

              <Fade left>
                <div className="col-md-6">
                  <div>
                    <Image src="https://negokai.com/wp-content/uploads/2019/11/herramientas-para-crear-tormenta-ideas.jpg" fluid style={{ height: 400, width: 820, borderRadius: 10 }} />
                  </div>
                </div>
              </Fade>

              <Fade right>
                <div className="col-md-6">
                  <div className="right-content">
                    <h2 className="display-4" style={{ marginRight: 230, fontSize: 28 }}>MEJOR EQUIPO</h2>
                    <h1>
                      "MEJORES SOLUCIONES"
                  </h1>
                    <p style={{ textAlign: 'justify' }}>
                      Contamos con un equipo multidisciplinario de técnicos e ingenieros de excelentes capacitaciones
                      que están siempre dispuestos a ofrecerle las soluciones más factibles para su actividad productiva,
                      con la aplicación de técnicas experimentadas y de buenas práctica que aseguren que cada uno de nuestros servicios aportan al desarrollo sostenible de su empresa o proyectos.
                  </p>

                    <p style={{ textAlign: 'justify' }}>
                      Gracias a alianzas estratégicas contamos con talleres especializados y
                      productores de materiales que están completamente identificado con nuestras políticas de seguridad,
                      calidad y protección al medioambiente.
                  </p>

                    <Button variant="outline-primary" size="lg">Más acerca de nosotros</Button>

                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        <section style={{ background: '#424242' }}>
          <div className="container py-5">

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

        <FooterOST/>
      </React.Fragment >
    );
  }
}

export default Home;