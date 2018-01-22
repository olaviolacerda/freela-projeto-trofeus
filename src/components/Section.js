import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Section extends Component {

    constructor(props){
        super(props);
        this.state = this.props;
    }
    
    render() {
        return (
        <div id={`fh5co-${this.state.classTitle}-section`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                        <h2>{this.state.title}</h2>
                        <p>{this.state.subtitle}</p>
                    </div>
                </div>
                <div className="row">
                    {this.state.children}
                </div>
            </div>
        </div>
        );
    }
}

Section.propTypes = {
        title: PropTypes.string.isRequired
}