import React, { Component } from 'react';
import image1 from '.././images/image_1.jpg';
import image2 from '.././images/image_2.jpg';
import image3 from '.././images/image_3.jpg';
import image4 from '.././images/image_4.jpg';
import image5 from '.././images/image_5.jpg';
import image6 from '.././images/image_6.jpg';


export default class Gallery extends Component {

    backgrounds = (image) => {
        return {backgroundImage: `url(${image})`};
    }

    render() {
        return (
            <div id="fh5co-work-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <h2>Our Project</h2>
                            <p><span>Created with <i className="sl-icon-heart"></i> by the fine folks at <a href="http://freehtml5.co">FreeHTML5.co</a></span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="work-inner">
                                <a className="work-grid" style={this.backgrounds(image1)}>
                                </a>
                                <div className="desc">
                                    <h3><a >Work with love</a></h3>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="work-inner">
                                <a className="work-grid" style={this.backgrounds(image2)}>
                                </a>
                                <div className="desc">
                                    <h3><a >Work with love</a></h3>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="work-inner">
                                <a className="work-grid" style={this.backgrounds(image3)}>
                                </a>
                                <div className="desc">
                                    <h3><a >Work with love</a></h3>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="work-inner">
                                <a className="work-grid" style={this.backgrounds(image4)}>
                                </a>
                                <div className="desc">
                                    <h3><a >Work with love</a></h3>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="work-inner">
                                <a className="work-grid" style={this.backgrounds(image5)}>
                                </a>
                                <div className="desc">
                                    <h3><a >Work with love</a></h3>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="work-inner">
                                <a className="work-grid" style={this.backgrounds(image6)}>
                                </a>
                                <div className="desc">
                                    <h3><a >Work with love</a></h3>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}