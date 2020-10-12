import React, { useState } from 'react';
import { Button, Carousel, Image, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import FooterOST from './Footer/FooterOST';
import '../styles/styles.css';
import '../styles/card-style.css';


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
          src="/resources/instalaciones.jpg"
          alt=""
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
          alt=""
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
          alt=""
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
          src="/resources/instalaciones.jpg"
          alt=""
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


const Home = (props) => {

  return (
    <React.Fragment>

      <div>
        <NavbarOSTOficial />
      </div>


{/*       <section>
        <div>
          <ControlledCarousel />
        </div>
      </section> */}

      <section id="sobreNosotros" style={{ background: 'white' }}>
        <div className="container mt-5">
          <div className="row">
            <Fade left>
              <div className="col-md-6 my-auto">
                <h1 className="display-4">
                  Sobre Nosotros
            </h1>

                <p className="mt-5 ml-1" style={{ fontSize: 22, textAlign: 'justify' }}>
                  Somos una oficina de servicios técnicos e ingeniería que cuenta con un equipo multidisciplinario de técnicos e ingenieros de excelentes capacitaciones que están siempre dispuestos a ofrecerle las soluciones más factibles para su actividad productiva,
                  con la aplicación de técnicas experimentadas y de buenas práctica que aseguren que cada uno de nuestros servicios aportan al desarrollo sostenible de su empresa o proyectos.
            </p>
              </div>
            </Fade>

            <Fade right>
              <div className="col-md-6">
                <div className="d-flex justify-content-center ml-5 mb-5">
                  <Image src="/resources/ostnegro.png" style={{ width: '80%' }} />
                </div>
              </div>
            </Fade>
          </div>
        </div>


      </section>

      <section style={{ background: '#3D3F47' }}>
        <div className="container p-5">
          <Fade left>
            <div className="d-flex justify-content-center" style={{marginBottom:-40}}>
              <h1 className="display-4 mt-3" style={{ color: 'white' }}>Nuestros Servicios</h1>
            </div>
          </Fade>
          <Fade right>
            <div className="container-fluid d-flex justify-content-center">
              <div className="row">

                <div className="col-md-4">
                  <div className="card text-center shadow">
                    <div className="overflow">
                      <img style={{ blockSize: 220 }} src="/resources/bombas1.jpg" alt="InstalacionesElectromecanicas" className="card-img-top" />
                    </div>
                    <div className="card-body text-dark">
                      <h4 className="card-title">Instalaciones Electromecánicas</h4>
                      <p className="card-text text-secondary">
                        El servicio de instalaciones electromecánicas que ofrecemos no solo se limita
                        a las instalaciones industriales de media y baja tensión, 
                        también incorporamos los diseños correspondientes a este apartado.
                      </p>
                      <a href="#" className="btn btn-outline-primary">Saber más</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card text-center shadow">
                    <div className="overflow">
                      <img style={{ blockSize: 220 }} src="/resources/Topografia1.jpg" alt="Topografia" className="card-img-top" />
                    </div>
                    <div className="card-body text-dark">
                      <h4 className="card-title">Topografía</h4>
                      <p className="card-text text-secondary">
                        Ofrecemos outsourcing para Control de obra y evaluación de impacto,
                        Seguimiento a planificación minera, inventario de materiales de acopio,
                        levantamiento topográfico de minas a cielo abierto y asistencia por Dron y GPS.
                      </p>
                      <a href="#" className="btn btn-outline-primary">Saber más</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card text-center shadow">
                    <div className="overflow">
                      <img style={{ blockSize: 220 }} src="/resources/CNC.jpg" alt="MecanizadoCNC" className="card-img-top" />
                    </div>
                    <div className="card-body text-dark">
                      <h4 className="card-title">Mecanizado CNC</h4>
                      <p className="card-text text-secondary">
                        Contamos con talleres especializados en mecanizado con control 
                        numérico con modernas maquinas que ofrecen precisión y excelentes 
                        tiempos de ejecución de los requerimientos de nuestros clientes. 
                        Hacemos trabajos de impresión 3D.
                      </p>
                      <a href="#" className="btn btn-outline-primary">Saber más</a>
                    </div>
                  </div>
                </div>

              </div>
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
                  <a href={'SobreNosotros'} className="btn btn-outline-primary">Más sobre nosotros</a>

                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section style={{ background: '#3D3F47' }} className="mt-5">

        <div className="container p-5">
          <h1 style={{ marginBottom: -60 }} className="text-white d-flex justify-content-center display-4 ">Nuestros Clientes</h1>
        </div>

        <div className="wrapper">
          <div className="sliderClient">
            <div className="slideClient">
              <img src="/resources/MicrotekMedical.png" alt="" />
              <img src="/resources/ParqueIndustrialDuarte.png" alt="" />
              <img src="/resources/JCE.png" alt="" />
              <img src="/resources/SigmaPlast.png" alt="" />
              <img src="/resources/Inprotect.png" alt="" />
              <img src="/resources/AMYC.png" alt="" />
              <img src="/resources/Metalmecanica.png" alt="" />
              <img src="/resources/MicrotekMedical.png" alt="" />
              <img src="/resources/ParqueIndustrial.png" alt="" />
              <img src="/resources/JCE.png" alt="" />
              <img src="/resources/SigmaPlast.png" alt="" />
              <img src="/resources/Inprotect.png" alt="" />
              <img src="/resources/AMYC.png" alt="" />
              <img src="/resources/Metalmecanica.png" alt="" />
              <img src="/resources/MicrotekMedical.png" alt="" />
              <img src="/resources/ParqueIndustrial.png" alt="" />
              <img src="/resources/JCE.png" alt="" />
              <img src="/resources/SigmaPlast.png" alt="" />
              <img src="/resources/Inprotect.png" alt="" />
              <img src="/resources/AMYC.png" alt="" />
              <img src="/resources/Metalmecanica.png" alt="" />
              <img src="/resources/MicrotekMedical.png" alt="" />
              <img src="/resources/Metalmecanica.png" alt="" />
              <img src="/resources/ParqueIndustrial.png" alt="" />
              <img src="/resources/JCE.png" alt="" />
              <img src="/resources/SigmaPlast.png" alt="" />
              <img src="/resources/Inprotect.png" alt="" />
              <img src="/resources/AMYC.png" alt="" />
              <img src="/resources/Metalmecanica.png" alt="" />
            </div>
          </div>
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
                      <Form.Label>Correo electrónico:</Form.Label>
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

                    <Button variant="outline-primary" type="submit">
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
                  <p>Estamos ubicados en Av. Pdte. Vásquez 17, <br />
                  Esq. Juan Isidro Jiménez, Alma Rosa, <br />
                  Santo Domingo Este, Rep. Dom.</p>
                </div>

                <div className="d-flex justify-content mt-5">
                  <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: '#f57c00', fontSize: 40 }} />
                  <h1 className="display-4 ml-3" style={{ fontSize: 28 }}>Danos una llamada</h1>
                </div>
                <div className="ml-5">
                  <p>Oficina: (809) 595-9401. <br />
                    Móvil:      (809) 975-8958.<br />
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


export default Home;