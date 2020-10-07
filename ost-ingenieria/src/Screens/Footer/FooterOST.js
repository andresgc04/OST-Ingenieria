import React from 'react';
import { SocialIcon } from 'react-social-icons';

const FooterOST = () => {
    return (
        
        <footer className="bg-dark text-white py-5">
            <section>
            <div className="container">
                
                <nav className="row">
                    <a href={'Home'} className="col-md-3 text-reset text-uppercase d-flex align-items-center">
                        <img src="/resources/Logo-OST-PNG.png" alt="Logo OST Ingenieria" className="img-logo" style={{ height:150,width:150}} />
                    </a>
                    <ul className="col-md-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">Menú</li>
                        <li><a href="#" className="text-reset">Link 1</a></li>

                    </ul>

                    <ul className="col-md-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">Quick links</li>
                        <li><a href="#" className="text-reset">Link 1</a></li>
                    </ul>

                    <ul className="col-md-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">Redes Sociales</li>
                        <li className="d-flex justify-content mt-2">
                            <a href="#" className="text-reset"><SocialIcon url="https://www.facebook.com/OST-Ingenieria-970096546484811" style={{ size: 20 }} /></a>
                            <a style={{marginLeft:30}} href="#" className="text-reset"><SocialIcon url="https://www.instagram.com/andresgc07/" /></a>
                        </li>
                    </ul>

                    <div className="footer-bottom mt-1">
                        <p className="text-xs-center mr-2">&copy;{new Date().getFullYear()} Copyright | OST Ingeniería S.A.
                        </p>
                    </div>
                </nav>
            </div>
            </section>
        </footer>
        
    );
}

export default FooterOST;