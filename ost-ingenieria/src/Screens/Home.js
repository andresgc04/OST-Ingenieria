import React, { useState } from 'react';
import { Button, Image, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import FooterOST from './Footer/FooterOST';
import '../styles/styles.css';
import '../styles/card-style.css';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

const TITLE = 'Inicio | OST Ingeniería'

const Home = (props) => {

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
            <div className="d-flex justify-content-center" style={{ marginBottom: -40 }}>
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
                      <a href={'InstalacionesElectromecanicas'} className="btn btn-outline-success">Saber más</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
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
                      <a href={'Topografia'} className="btn btn-outline-success">Saber más</a>
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
                  <a href={'SobreNosotros'} className="btn btn-outline-success">Más sobre nosotros</a>

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
              <img src="/resources/MicrotekMedical.png" alt="MicrotekMedical" />
              <img src="/resources/ParqueIndustrialDuarte.png" alt="ParqueIndustrialDuarte" />
              <img src="/resources/SigmaPlast.png" alt="SigmaPlast" />
              <img src="/resources/Inprotect.png" alt="Inprotect" />
              <img src="/resources/AMYC.png" alt="AMYC" />
              <img src="/resources/Metalmecanica.png" alt="Metalmecanica" />
              <img src="/resources/MicrotekMedical.png" alt="MicrotekMedical" />
              <img src="/resources/ParqueIndustrialDuarte.png" alt="ParqueIndustrialDuarte" />
              <img src="/resources/SigmaPlast.png" alt="SigmaPlast" />
              <img src="/resources/Inprotect.png" alt="Inprotect" />
              <img src="/resources/AMYC.png" alt="AMYC" />
              <img src="/resources/Metalmecanica.png" alt="Metalmecanica" />
              <img src="/resources/MicrotekMedical.png" alt="MicrotekMedical" />
              <img src="/resources/ParqueIndustrialDuarte.png" alt="ParqueIndustrialDuarte" />
              <img src="/resources/SigmaPlast.png" alt="SigmaPlast" />
              <img src="/resources/Inprotect.png" alt="Inprotect" />
              <img src="/resources/AMYC.png" alt="AMYC" />
              <img src="/resources/Metalmecanica.png" alt="Metalmecanica" />
              <img src="/resources/MicrotekMedical.png" alt="MicrotekMedical" />
              <img src="/resources/Metalmecanica.png" alt="Metalmecanica" />
              <img src="/resources/ParqueIndustrialDuarte.png" alt="ParqueIndustrialDuarte" />
              <img src="/resources/SigmaPlast.png" alt="SigmaPlast" />
              <img src="/resources/Inprotect.png" alt="Inprotect" />
              <img src="/resources/AMYC.png" alt="AMYC" />
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

                    <Button variant="outline-success" type="submit" value="Send Message">
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d530.3348873463234!2d-69.86292387965976!3d18.488222196376707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89291a515111%3A0x18c16aba38a7a1c4!2sOST%20Ingenieria!5e0!3m2!1ses-419!2sdo!4v1603240635592!5m2!1ses-419!2sdo" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </section>
      <FooterOST />
    </React.Fragment >
  );
}


export default Home;