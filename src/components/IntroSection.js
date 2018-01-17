import React, { Component } from 'react';

export default class IntroSection extends Component {

    render() {
        return (
            <React.Fragment>
            <div id="fh5co-intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2>Lesser is a creative agency that love to create functional website</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fh5co-featured-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <a  className="featured-grid" >
                                <div className="desc">
                                    <h3>Work with love</h3>
                                    <span>Web Design</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a  className="featured-grid featured-grid-2" >
                                <div className="desc">
                                    <h3>Music Lover</h3>
                                    <span>Application</span>
                                </div>
                            </a>
                            <div className="row">
                                <div className="col-md-6">
                                    <a  className="featured-grid featured-grid-2" >
                                        <div className="desc">
                                            <h3>Travel</h3>
                                            <span>Illustration</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a  className="featured-grid featured-grid-2" >
                                        <div className="desc">
                                            <h3>Captured</h3>
                                            <span>Photo</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}