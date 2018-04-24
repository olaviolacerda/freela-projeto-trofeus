import React, { Component } from 'react';
import '../css/Home.scss'

export default class IntroSection extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="row intro-wrapper">
                    <div className="intro-title col-12">
                        <h1>Pablo Gravações</h1>
                        <h2>Trabalhando há mais de 20 anos no mercado de gravação em metal, produzindo placas, bottons e troféus de alta qualidade.</h2>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}