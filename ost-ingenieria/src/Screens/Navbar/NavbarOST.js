import React from 'react';
import { Navbar, Nav,Image } from 'react-bootstrap';

const NavbarOST = () => {
    return (
        <React.Fragment>
            <section style={{ background: '#252440' }}>
            <Navbar className="text-white" bg="dark" variant="dark" expand="xl" style={{ fontWeight: 'bold' }}>
                <Navbar.Brand href={'Home'}><Image src="/resources/Logo-OST-PNG.png" style={{ height:100, width:130}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href={'Home'}>Inicio</Nav.Link>
                        <Nav.Link href={'SobreNosotros'}>Nosotros</Nav.Link>
                        <Nav.Link href={'Clientes'}>Clientes</Nav.Link>
                        <Nav.Link href={'Servicios'}>Servicios</Nav.Link>
                        <Nav.Link href={'Contactos'}>Contactos</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </section>
        </React.Fragment>
    );
}

export default NavbarOST;