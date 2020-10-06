import React, { Component, useState } from 'react';
import { Navbar, NavDropdown, Nav, Button, Carousel, CardDeck, Card, Image, Form } from 'react-bootstrap';

const NavbarOST = () => {
    return (
        <React.Fragment>
            <section style={{ background: '#252440' }}>
            <Navbar className="text-white" bg="dark" variant="dark" expand="xl" fixed="top" style={{ fontWeight: 'bold' }}>
                <Navbar.Brand href={'Home'} style={{ fontSize: 46, color: 'grey' }}>OST Ingeniería</Navbar.Brand>
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