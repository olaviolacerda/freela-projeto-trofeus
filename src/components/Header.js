import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <header id="fh5co-header" role="banner">
                <div className="container">
                    <div className="header-inner">
                        <h1><i className="sl-icon-energy"></i><a href="/">Nome</a></h1>
                        <nav >
                            <ul>
                                <li><a className="active"href="/">Home</a></li>
                                <li><a href="/about">Sobre</a></li>
                                <li><a href="/gallery">Galeria</a></li>
                                <li><a href="/services">Serviços</a></li>
                                <li><a href="/contact">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}