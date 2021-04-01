import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Carousel, Image } from 'react-bootstrap';
import '../Navbar/NavbarOSTOficial.css';
import Bounce from 'react-reveal/Bounce';
import { Link } from "react-router-dom";


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

            <Navbar fixed="top" expand="lg" bg={navBackground ? 'dark' : 'transparent'} style={{ transition: '1s ease', }}>
                <div className="container">
                    <Navbar.Brand href={'Home'}><Link to="/"><Image src={process.env.PUBLIC_URL+"/resources/Logo-OST-PNG.png"} style={{ width: '10%' }} /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link><Link style={{color:"white", textDecoration:"none"}} to="/">Inicio</Link></Nav.Link>
                            <NavDropdown title="Acerca de" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link style={{color:"black", textDecoration:"none"}} to="/SobreNosotros">Nosotros</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link style={{color:"black", textDecoration:"none"}} to="/Clientes">Clientes</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><Link style={{color:"white", textDecoration:"none"}} to="/Servicios">Servicios</Link></Nav.Link>
                            <Nav.Link><Link style={{color:"white", textDecoration:"none"}} to="/Contactos">Contactos</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL+"/resources/instalaciones.jpg"}
                        alt="rascacielos"
                    />
                    <Carousel.Caption>
                        <Bounce left><h3 style={{ color: '' }} className="animated bounceInLeft">Instalaciones Electromecánica</h3></Bounce>

                        <Bounce rigth><p><Link style={{textTransform:"uppercase",backgroundColor:"#262626",padding:10,display:"inline-block",color:"#fff",marginTop:15,textDecoration:"none"}} to="/Contactos">Contacto</Link></p></Bounce>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL+"/resources/paneles_II.jpg"}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL+"/resources/Topografia1.jpg"}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: 'black' }} > Servicios Topográficos y Geolocalización</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </React.Fragment>
    );
};

export default NavbarOSTOficial;