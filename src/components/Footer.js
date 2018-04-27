import React, { Component } from 'react';

import '../css/Footer.scss';

export default class Footer extends Component {

    render() {
        return (
            <footer id="footer" className="footer">
                <div className="row">

                    <p >A <b>Pablo Gravações</b> trabalha há mais de 20 anos no mercado de gravação em metal, produzindo placas, bottons e troféus de alta qualidade.</p>


                    <div className="row">
                        <p className=" signature"> Desenvolvido por <a href="https://github.com/olaviolacerda" rel="noopener noreferrer" target="_blank">Olavio Lacerda</a><span className="copy">&copy;</span></p>
                    </div>
                </div>

            </footer>
        );
    }
}