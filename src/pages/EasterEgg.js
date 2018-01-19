import React, { Component } from 'react';
import faith from '../images/faith-symbol.svg';

export default class EasterEgg extends Component {

    render() {
        return (
            <img className="easter-egg" src={faith} alt="faith-symbol" />
        );
    }
}


