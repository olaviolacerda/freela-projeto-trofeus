import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/MobileHeader.scss';

export default class MobileHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav: 'hide',
            opened: false

        }
    }


    renderNav = () => {
        let opened = false;
        let navBar = 'hide';
        document.querySelector('body').style.overflow = "";

        if (this.state.opened === false) {
            navBar = '';
            opened = true;
            document.querySelector('body').style.overflow = "hidden";
        }
        this.setState({ nav: navBar, opened })
    }

    onClick = (e) => {
        e.preventDefault();
        window.location.pathname = e.target.pathname;
    }

    render() {
        let btnOpenAppear = this.state.opened ? 'hide' : '';
        let btnCloseAppear = this.state.opened ? '' : 'hide';
        return (
            <header id="mobile-header" role="banner" >
                <div className={`header-wrapper col-12 mobile-header show-menu`} >
                    <div className="static-width">
                        <div className="row">
                            <div className="col-8">
                                <h1><i ></i><Link to="/" className="title">Pablo Gravações</Link></h1>
                            </div>
                            <div className={`nav-side col-12 ${this.state.nav}`}>
                                <div className={`side-menu-btn ${btnCloseAppear}`}>
                                    <button className="btn-close" onClick={this.renderNav}></button>
                                </div>

                                <nav >

                                    <ul>
                                        <li className="active"><Link className="col-8 col-4-fill" to="/" onClick={this.onClick}>Início</Link></li>
                                        <li className="active"><Link className="col-8 col-4-fill" to="/services" onClick={this.onClick} >Galeria</Link></li>
                                        <li className="active"><Link className="col-8 col-4-fill" to="/contact" onClick={this.onClick}>Contato</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-4 side-menu-btn-wrapper">
                                <div className={`side-menu-btn ${btnOpenAppear}`}>
                                    <button className="btn-open" onClick={this.renderNav}>MENU</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header >
        );
    }
}

MobileHeader.contextTypes = {
    router: PropTypes.object.isRequired,
};