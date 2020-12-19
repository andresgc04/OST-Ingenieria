import React, { useState } from "react";
import { Image, ListGroup, Tab, Row, Col, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import NavbarOSTOficial from "./Navbar/NavbarOSTOficial";
import FooterOST from "./Footer/FooterOST";
import { Helmet } from "react-helmet";

const TITLE = "Topografía | OST Ingeniería";

const Topografia = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <section>
        <NavbarOSTOficial />
      </section>

      <section className="py-5">
        <div className="container">
          <Tab.Container
            id="list-group-tabs-example"
            defaultActiveKey={"Topografia"}
          >
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item
                    action
                    active
                    onClick={() => props.history.push("/Topografia")}
                  >
                    Topografía
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => props.history.push("/Geolocalizacion")}
                  >
                    Geolocalización
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey={"Topografia"}>
                    <h1
                      className="display-4 text-center mt-5"
                      style={{ fontSize: 40 }}
                    >
                      Topografía
                    </h1>
                    <p
                      className="mt-4"
                      style={{ textAlign: "justify", fontFamily: "sans-serif" }}
                    >
                      Ofrecemos outsourcing para control de obra y evaluación de
                      impacto, Seguimiento a planificación minera, inventario de
                      materiales de acopio, levantamiento topográfico de minas a
                      cielo abierto, asistencia por Dron y GPS.
                    </p>

                    <Container className="mt-3">
                      <Row>
                        <Col xs={5} md={4}>
                          <Image
                            style={{ width: "100%", height: "100%" }}
                            src="/resources/topografia5.jpg"
                            rounded
                          />
                        </Col>

                        <Col xs={5} md={4}>
                          <Image
                            style={{ width: "100%", height: "100%" }}
                            src="/resources/topografia1.png"
                            rounded
                          />
                        </Col>

                        <Col xs={5} md={4}>
                          <Image
                            style={{ width: "100%", height: "100%" }}
                            src="/resources/topografia4.jpg"
                            rounded
                          />
                        </Col>
                      </Row>
                    </Container>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>

      <section>
        <FooterOST />
      </section>
    </React.Fragment>
  );
};

export default Topografia;
