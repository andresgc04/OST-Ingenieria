import React, { Component, useState } from 'react';
import { Button, Carousel, CardDeck, Card, Image, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import NavbarOST from './Navbar/NavbarOST';
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
          src="https://centrocomercialvirtual.net/wp-content/uploads/2020/04/wire-1098059_1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "white", fontSize: 36 }}>OST INGENIERÍA </h3>
          <p> Oficina de Servicios Técnicos de Ingeniería </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 500 }}>
        <img
          className="d-block w-100"
          src="/resources/paneles.jpg"
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
          src="/resources/topografo.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 500 }}>
        <img
          className="d-block w-100"
          src="/resources/panel-electrico.jpg"
          alt="fourth slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <NavbarOST />
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
                  <div className="d-flex justify-content-center ml-5 mt-6" >
                    <Image src="/resources/ostnegro.png" style={{width: '80%' }} />
                  </div>
                </div>
              </Fade>
            </div>
          </div>


        </section>

        <section style={{ background: '#3D3F47' }}>
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
                    <Card.Img variant="top" src="https://2.bp.blogspot.com/-6_KCeieik6k/Wt_henJOfxI/AAAAAAAAB_Q/9MkZKZ_kDAsKak9EDmOlo1pOw5UjwjEHwCLcBGAs/s750/Mantenimiento_Industrial.jpg" />
                    <Card.Body>
                      <Card.Title>Instalaciones Electromecánicas</Card.Title>
                      <Card.Text>
                      El servicio de instalaciones eléctricas que ofrecemos no solo se limita a las instalaciones industriales de media y baja tensión, en este apartado también incluimos los diseños de estas,hacemos instalaciones de sistemas de detección de incendios, sistemas CCTV, Data, megafonía, PLC, Centro de control de motores y más. <br/>
                      Contamos con personal altamente calificado para trabajos de metalmecánica, sistemas de tuberías, instalaciones de ductos, maquinas rotativas y sistemas estáticos como filtros, chimeneas, ciclones, intercambiadores y tanques.
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
                      <Card.Title>Mecanizado CNC e Impresiones 3D</Card.Title>
                      <Card.Text>
                      Contamos con talleres especializados en mecanizado con control numérico con modernas maquinas que ofrecen precisión y excelentes tiempos de ejecución de los requerimientos de nuestros clientes. Hacemos trabajos de impresión 3D en toda la gama de materiales posibles, principalmente PLA, Petg, Flex y otros.
        content.{' '}
                      </Card.Text>
                      <Button variant="primary">Saber más</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="https://4.bp.blogspot.com/-VVU3DZlgYxs/Wl9IUXHv8LI/AAAAAAAABbg/ivJpnfflbIEV05Echj2_frADJRwTXngDACLcBGAs/s750/Topografia.jpg" />
                    <Card.Body>
                      <Card.Title>Topografía y Geolocalización</Card.Title>
                      <Card.Text>
                      Ofrecemos outsourcing para control de obra y evaluación de impacto, seguimiento a planificación minera, inventario de materiales de acopio, levantamiento topográfico de minas a cielo abierto, asistencia por Dron y GPS.
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
                    <Image src="/resources/mejores_soluciones.jpg" fluid style={{ height: 400, width: 820, borderRadius: 10 }} />
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

        <section style={{ background: '#3D3F47' }}>
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
                  Esq. Juan Isidro Jiménez, Alma Rosa, <br />
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

        <FooterOST />
      </React.Fragment >
    );
  }
}

export default Home;