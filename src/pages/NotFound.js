import React, {Component} from 'react';
import merchant from '../images/not-found.png';

export default class NotFound extends Component {
    render(){
        return (
            <img className="not-found" src={merchant} alt="404-image" />
        );
    }
}