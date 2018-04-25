import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Section extends Component {

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        return (
            <div id={`${this.state.classTitle}`}>
                <div className="row">
                    <div className="">
                        <h2>{this.state.title}</h2>
                        <p>{this.state.subtitle}</p>
                    </div>
                </div>
                <div className="row">
                    {this.state.children}
                </div>
            </div>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired
}