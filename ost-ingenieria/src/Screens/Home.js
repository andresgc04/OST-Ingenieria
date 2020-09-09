import React, { Component, useState } from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Carousel, CardDeck, Card } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classes from '@material-ui/icons/Class'
import { red } from '@material-ui/core/colors';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
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
      <Carousel.Item>
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
      <Carousel.Item>
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
            <Navbar.Brand href="#home">OST Ingenieria</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Trayectoria</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div>
          <ControlledCarousel />
        </div>

        <section style={{ background: "white", border: 100 }}>
          <div style={{ marginRight: '20px' }}>
            <h1 style={{ marginRight: 20 }}>Servicios</h1>
          </div>


          <CardDeck style={{ padding: 50 }}>
            <Card>
              <Card.Img variant="top" src="https://i0.wp.com/www.bits.com.mx/wp-content/uploads/2016/10/Sistemas_Administrativos.jpg?fit=750%2C469&ssl=1" />
              <Card.Body>
                <Card.Title>Gestion de Proyectos</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://2.bp.blogspot.com/-6_KCeieik6k/Wt_henJOfxI/AAAAAAAAB_Q/9MkZKZ_kDAsKak9EDmOlo1pOw5UjwjEHwCLcBGAs/s750/Mantenimiento_Industrial.jpg" />
              <Card.Body>
                <Card.Title>Mantenimiento Industrial</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
        content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Mantenimiento Industrial</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
              </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://i0.wp.com/www.bits.com.mx/wp-content/uploads/2016/10/Sistemas_Administrativos.jpg?fit=750%2C469&ssl=1" />
              <Card.Body>
                <Card.Title>Gestion de Proyectos</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
               </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://i0.wp.com/www.bits.com.mx/wp-content/uploads/2016/10/Sistemas_Administrativos.jpg?fit=750%2C469&ssl=1" />
              <Card.Body>
                <Card.Title>Gestion de Proyectos</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
      </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://i0.wp.com/www.bits.com.mx/wp-content/uploads/2016/10/Sistemas_Administrativos.jpg?fit=750%2C469&ssl=1" />
              <Card.Body>
                <Card.Title>Gestion de Proyectos</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
      </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </section>
      </React.Fragment >
    );
  }
}

export default Home;