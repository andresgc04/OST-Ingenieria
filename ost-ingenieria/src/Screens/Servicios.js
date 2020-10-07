import React from 'react';
import { Image } from 'react-bootstrap';
import FooterOST from './Footer/FooterOST';
import NavbarOST from './Navbar/NavbarOST';
import Pulse from 'react-reveal/Pulse';

const Servicios = () => {
    return (
        <React.Fragment>
            <div>
                <NavbarOST />
            </div>
            <section>
                <div>
                    <Pulse>
                        <Image src="https://images.unsplash.com/photo-1560264418-c4445382edbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '100%', height: '500px', scrollMargin: 10 }} fluid />
                    </Pulse>
                </div>
            </section>

            <FooterOST />
        </React.Fragment>
    );
}

export default Servicios;