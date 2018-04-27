import React, { Component } from 'react';
import Section from '../components/Section';
import {default as Map} from '../components/MapComponent';
import '../css/Contact.scss';



export default class Contact extends Component {
    render() {
       
              
        return (
            <div className="col-12">
            <ul className="listinha">
                <li className="col-6">1</li>
                <li className="col-6">2</li>
                <li className="col-6">2</li>
                <li className="col-3">3</li>
                <li className="col-3">4</li>
            </ul>
            </div>
        );
    }
}