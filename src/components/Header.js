import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import PropTypes from 'prop-types';

export default class Header extends Component {

    defineClass = (path, linkPath) => {
        return path === linkPath ? 'active' : '';
    }
   
    render() {
       let path = this.context.router.getCurrentLocation().pathname;
        return (
            <header id="fh5co-header" role="banner">
                <div className="container">
                    <div className="header-inner">
                        <h1><i className="sl-icon-energy"></i><Link to="/">Nome</Link></h1>
                        <nav >
                            <ul>
                                <li><IndexLink to="/" className={this.defineClass(path, '/')}>Home</IndexLink></li>
                                <li><Link to="/about" className={this.defineClass(path,'/about')} >Sobre</Link></li>
                                <li><Link to="/gallery" className={this.defineClass(path, '/gallery')}>Galeria</Link></li>
                                <li><Link to="/services" className={this.defineClass(path, '/services')}>Serviços</Link></li>
                                <li><Link to="/contact" className={this.defineClass(path, '/contact')}>Contato</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

Header.contextTypes = {
    router: PropTypes.object.isRequired,
};