import React, { Component } from 'react';
import { background } from '../helpers/Helper';

export default class GalleryCard extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
        this.cardStyle = {
            backgroundImage: background(this.props.image)
        }
    }

    render() {
        return (
            <div className="">
                <div className="">
                    <a href="/" className="" style={this.cardStyle}> </a>
                    <div className="">
                        <h3><a href="/">{this.state.title}</a></h3>
                        <span>{this.state.subtitle}</span>
                    </div>
                </div>
            </div>
        );
    }
}