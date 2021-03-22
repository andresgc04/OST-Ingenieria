import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {Link} from 'react-router-dom';


const FooterOST = () => {
    return (

        <footer className="bg-dark text-white py-1">
            <section>
                <div className="container mt-5">

                    <nav className="row">
                        <Link className="col-md-3 text-reset text-uppercase d-flex align-items-center" to="/">
                            <img src={process.env.PUBLIC_URL+'/resources/Logo-OST-PNG.png'} alt="Logo OST Ingenieria" className="img-logo" style={{ width: '60%' }} />
                        </Link>
                        <ul className="col-md-3 list-unstyled">
                            <li className="font-weight-bold text-uppercase">Menú</li>
                            <li><Link className="text-reset" style={{color:"white",textDecoration:"none"}} to="/">Inicio</Link></li>
                            <li><Link className="text-reset" style={{color:"white",textDecoration:"none"}} to="/SobreNosotros">Equipo</Link></li>
                            <li><Link className="text-reset" style={{color:"white",textDecoration:"none"}} to="/Clientes">Clientes</Link></li>
                            <li><Link className="text-reset" style={{color:"white",textDecoration:"none"}} to="/Servicios">Servicios</Link></li>
                            <li><Link className="text-reset" style={{color:"white",textDecoration:"none"}} to="/Contactos">Contactos</Link></li>

                        </ul>

                        <ul className="col-md-3 list-unstyled">
                            <li className="font-weight-bold text-uppercase">Localización</li>
                            <li>
                                <p>Av. Pdte. Vásquez 17,<br />
                                   Esq. Juan Isidro Jiménez, <br />
                                   Alma Rosa, Santo Domingo Este.
                                </p>
                            </li>
                        </ul>

                        <ul className="col-md-3 list-unstyled">
                            <li className="font-weight-bold text-uppercase">Redes Sociales</li>
                            <li className="d-flex justify-content mt-2">
                                <a  className="text-reset"><SocialIcon url="https://www.facebook.com/OST-Ingenieria-970096546484811" style={{ size: 20 }} /></a>
                                <a style={{ marginLeft: 25 }} className="text-reset"><SocialIcon url="https://www.instagram.com/ostingenieria/" /></a>
                            </li>
                        </ul>

                        <div className="footer-bottom mt-1">
                            <p className="text-xs-center mr-2">&copy;{new Date().getFullYear()} Copyright | OST Ingeniería SRL.
                        </p>
                        </div>
                    </nav>
                </div>
            </section>
        </footer>

    );
}

export default FooterOST;