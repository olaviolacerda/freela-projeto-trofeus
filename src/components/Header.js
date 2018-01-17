import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <header id="fh5co-header" role="banner">
                <div className="container">
                    <div className="header-inner">
                        <h1><i className="sl-icon-energy"></i><a href="index.html">Nome</a></h1>
                        <nav>
                            <ul>
                                <li><a className="active" href="index.html">Home</a></li>
                                <li><a href="portfolio.html">Galeria</a></li>
                                <li><a href="services.html">Serviços</a></li>
                                <li><a href="about.html">Sobre</a></li>
                                <li><a href="contact.html">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}