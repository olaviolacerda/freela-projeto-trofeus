import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/Header.scss';
export default class Header extends Component {

    defineClass = (path, linkPath) => {
        return path === linkPath ? 'active' : '';
    }

    render() {
        let path = this.context.router.history.location.pathname;
        return (
            <header id="header" role="banner">
                <div className="col-12 header">
                    <div className="static-width">
                        <div className="row">
                            <div className="col-3">
                                <h1><i ></i><Link to="/" className="title">Pablo Gravações</Link></h1>
                            </div>
                            <div className="col-7 col-2-offset">
                                <nav >
                                    <ul>
                                        <li className={this.defineClass(path, '/')}><Link to="/" >Home</Link></li>
                                        <li className={this.defineClass(path, '/about')}><Link to="/about"  >Sobre</Link></li>
                                        <li className={this.defineClass(path, '/gallery')}><Link to="/gallery" >Galeria</Link></li>
                                        <li className={this.defineClass(path, '/services')}><Link to="/services" >Serviços</Link></li>
                                        <li className={this.defineClass(path, '/contact')}><Link to="/contact" >Contato</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Header.contextTypes = {
    router: PropTypes.object.isRequired,
};