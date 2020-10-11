import React , {useState, useRef, useEffect} from 'react';
import { Navbar, Nav, NavDropdown, Carousel, Image } from 'react-bootstrap';
import '../Navbar/NavbarOSTOficial.css';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';


const NavbarOSTOficial = () => {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <React.Fragment>

            <Navbar fixed="top" expand="lg" bg={navBackground ? 'dark' : 'transparent'} style={{ transition: '1s ease',  }}>
                <div className="container">
                    <Navbar.Brand href="#home"><Image src="/resources/Logo-OST-PNG.png" style={{ height:100, width:100}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href={'Home'}>Inicio</Nav.Link>
                            <NavDropdown title="Acerca de" id="basic-nav-dropdown">
                                <NavDropdown.Item href={'SobreNosotros'}>Nosotros</NavDropdown.Item>
                                <NavDropdown.Item href={'Clientes'}>Clientes</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href={'Servicios'}>Servicios</Nav.Link>
                            <Nav.Link href={'Contactos'}>Contactos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/resources/rascacielos.jpg"
                        alt="rascacielos"
                    />
                    <Carousel.Caption>
                        <Bounce left><h3 className="animated bounceInLeft">First slide label</h3></Bounce>
                        
                        <Bounce rigth><p><a href="#">Contacto</a></p></Bounce>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/resources/trabajo.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/resources/Desing.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </React.Fragment>
    );
};

export default NavbarOSTOficial;