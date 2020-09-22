import React, { Component, useState } from 'react';
import { Navbar, NavDropdown, Nav, Button, Carousel, CardDeck, Card, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import SobreNosotros from './SobreNosotros';
import { SocialIcon } from 'react-social-icons';





function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{height:500}}>
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
      <Carousel.Item style={{height:500}}>
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
      <Carousel.Item style={{height:500}}>
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
          <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href={'Home'}>OST Ingenieria</Navbar.Brand>
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
        </div>

        <section>
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
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="https://2.bp.blogspot.com/-_jyk_a-L8H8/Wc1YV7mGzVI/AAAAAAAAC4w/ZmRwb9_DoTIKcmNhclP2adHylNMi3mrjgCLcBGAs/s750/instalaciones_electricas.jpg" />
                    <Card.Body>
                      <Card.Title>Instalaciones Eléctricas</Card.Title>
                      <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="https://2.bp.blogspot.com/-6_KCeieik6k/Wt_henJOfxI/AAAAAAAAB_Q/9MkZKZ_kDAsKak9EDmOlo1pOw5UjwjEHwCLcBGAs/s750/Mantenimiento_Industrial.jpg" />
                    <Card.Body>
                      <Card.Title>Instalaciones Mecánicas</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
              </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="https://www.usm.cl/assets/img/carreras/fotos/concepcion-tecnico-universitario-en-automatizacion-y-control.w700.jpg" style={{ height: '29.5%' }} />
                    <Card.Body>
                      <Card.Title>Instrumentación & Control</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
               </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
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
                      <Button variant="primary">Go somewhere</Button>
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
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
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
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
              </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
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
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
               </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
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
                    <Image src="https://negokai.com/wp-content/uploads/2019/11/herramientas-para-crear-tormenta-ideas.jpg" fluid style={{ height: '50%' }} />
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
                    <p style={{ textAlign: 'left' }}>
                      Contamos con un equipo multidisciplinario de técnicos e ingenieros de excelentes capacitaciones
                      que están siempre dispuestos a ofrecerle las soluciones más factibles para su actividad productiva,
                      con la aplicación de técnicas experimentadas y de buenas práctica que aseguren que cada uno de nuestros servicios aportan al desarrollo sostenible de su empresa o proyectos.
                  </p>

                    <p style={{ textAlign: 'left' }}>
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
          <div className="container py-4">
            <div className="row">

              <div className="col-md-6">
                <div>
                  <h1 className="display-4" style={{ color: 'Black' }}>Contátecnos</h1>
                </div>
              </div>

              <div className="col-md-6 my-auto">
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.6423345873604!2d-69.8793753680496!3d18.489061135748706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf886f2b9eee59%3A0x415ada375da3302b!2sAv.%20Pdte.%20V%C3%A1squez%2017%2C%20Santo%20Domingo%20Este%2011502!5e1!3m2!1ses-419!2sdo!4v1600737177351!5m2!1ses-419!2sdo" width="600" height="450" frameborder="0" style={{ border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <footer className="bg-dark text-white py-5">
          <div className="container">
            <nav className="row">
              <a href={'Home'} className="col-md-3 text-reset text-uppercase d-flex align-items-center">
                <img src="https://static.wixstatic.com/media/a0de8a_57fc56362d5d419d9606cf1eb88d061e~mv2.png/v1/fill/w_308,h_150,al_c,q_85,usm_0.66_1.00_0.01/Elegido.webp" alt="Logo OST Ingenieria" className="img-logo" style={{ width: '70%', height: '70%' }} />
              </a>
              <ul className="col-md-3 list-unstyled">
                <li className="font-weight-bold text-uppercase">Resource</li>
                <li><a href="#" className="text-reset">Link 1</a></li>
                <li><a href="#" className="text-reset">Link 2</a></li>
                <li><a href="#" className="text-reset">Link 3</a></li>
                <li><a href="#" className="text-reset">Link 4</a></li>
                <li><a href="#" className="text-reset">Link 5</a></li>
              </ul>

              <ul className="col-md-3 list-unstyled">
                <li className="font-weight-bold text-uppercase">Quick links</li>
                <li><a href="#" className="text-reset">Link 1</a></li>
                <li><a href="#" className="text-reset">Link 2</a></li>
                <li><a href="#" className="text-reset">Link 3</a></li>
                <li><a href="#" className="text-reset">Link 4</a></li>
                <li><a href="#" className="text-reset">Link 5</a></li>
              </ul>

              <ul className="col-md-3 list-unstyled">
                <li className="font-weight-bold text-uppercase">Redes Sociales</li>
                <li className="d-flex justify-content-between mt-2">
                  <a href="#" className="text-reset"><SocialIcon url="https://www.facebook.com/AndresGc1997/" style={{ size: 20 }} /></a>
                  <a href="#" className="text-reset"><SocialIcon url="https://www.instagram.com/andresgc07/" /></a>
                  <a href="#" className="text-reset"><SocialIcon url="https://twitter.com/jaketrent" /></a>
                </li>
              </ul>

              <div className="footer-bottom mt-5">
                <p className="text-xs-center mr-2">&copy;{new Date().getFullYear()} GateOpenTechNology - All Rights Reserved</p>
              </div>
            </nav>
          </div>
        </footer>
      </React.Fragment >
    );
  }
}

export default Home;