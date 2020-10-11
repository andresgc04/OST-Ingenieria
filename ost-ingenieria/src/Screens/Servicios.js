import React from 'react';
import { Image } from 'react-bootstrap';
import NavbarOSTOficial from './Navbar/NavbarOSTOficial';
import FooterOST from './Footer/FooterOST';
import Pulse from 'react-reveal/Pulse';

const Servicios = () => {
    return (
        <React.Fragment>
            <div>
                <NavbarOSTOficial/>
            </div>

            <FooterOST />
        </React.Fragment>
    );
}

export default Servicios;