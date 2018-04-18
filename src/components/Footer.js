import React, { Component } from 'react';
import MapComponent from '../components/MapComponent';

import '../css/Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer">

                <div className="row">
                    <div className="col-6 left">
                        <p >A Pablo Gravações trabalha há mais de 20 anos no mercado de gravação em metal, produzindo placas, bottons e troféus de alta qualidade.</p>
                    </div>
                    <div className="col-6 right">
                        <MapComponent />
                    </div>
                    <div className="row">
                        <p className=" signature"> Desenvolvido por <a href="https://github.com/olaviolacerda" rel="noopener noreferrer" target="_blank">Olavio Lacerda</a><span className="copy">&copy;</span></p>
                    </div>
                </div>

            </footer>
        );
    }
}