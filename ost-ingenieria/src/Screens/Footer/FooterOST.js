import React, { Component, useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const FooterOST = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <nav className="row">
                    <a href={'Home'} className="col-md-3 text-reset text-uppercase d-flex align-items-center">
                        <img src="https://static.wixstatic.com/media/a0de8a_57fc56362d5d419d9606cf1eb88d061e~mv2.png/v1/fill/w_308,h_150,al_c,q_85,usm_0.66_1.00_0.01/Elegido.webp" alt="Logo OST Ingenieria" className="img-logo" style={{ width: '70%', height: '70%' }} />
                    </a>
                    <ul className="col-md-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">Resource</li>
                        <li><a href="#" className="text-reset">Link 1</a></li>
                        <li><a href="#" className="text-reset">Link 2</a></li>
                        <li><a href="#" className="text-reset">Link 3</a></li>
                        <li><a href="#" className="text-reset">Link 4</a></li>
                        <li><a href="#" className="text-reset">Link 5</a></li>
                    </ul>

                    <ul className="col-md-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">Quick links</li>
                        <li><a href="#" className="text-reset">Link 1</a></li>
                        <li><a href="#" className="text-reset">Link 2</a></li>
                        <li><a href="#" className="text-reset">Link 3</a></li>
                        <li><a href="#" className="text-reset">Link 4</a></li>
                        <li><a href="#" className="text-reset">Link 5</a></li>
                    </ul>

                    <ul className="col-md-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">Redes Sociales</li>
                        <li className="d-flex justify-content-between mt-2">
                            <a href="#" className="text-reset"><SocialIcon url="https://www.facebook.com/AndresGc1997/" style={{ size: 20 }} /></a>
                            <a href="#" className="text-reset"><SocialIcon url="https://www.instagram.com/andresgc07/" /></a>
                            <a href="#" className="text-reset"><SocialIcon url="https://twitter.com/jaketrent" /></a>
                        </li>
                    </ul>

                    <div className="footer-bottom mt-5">
                        <p className="text-xs-center mr-2">&copy;{new Date().getFullYear()} GateOpenTechNology - All Rights Reserved</p>
                    </div>
                </nav>
            </div>
        </footer>
    );
}

export default FooterOST;