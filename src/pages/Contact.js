import React, { Component } from 'react';

export default class Contact extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="fh5co-contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                                <h2>Contact</h2>
                                <p><span>Created with <i className="sl-icon-heart"></i> by the fine folks at <a href="http://freehtml5.co">FreeHTML5.co</a></span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h3>Contact Info.</h3>
                                <ul className="contact-info">
                                    <li><i className="sl-icon-map"></i>198 West 21th Street, Suite 721 New York NY 10016</li>
                                    <li><i className="sl-icon-phone"></i>+ 1235 2355 98</li>
                                    <li><i className="sl-icon-envelope-open"></i><a >info@yoursite.com</a></li>
                                    <li><i className="sl-icon-globe-alt"></i><a >www.yoursite.com</a></li>
                                </ul>
                            </div>
                            <div className="col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Name" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Email" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="" className="form-control" id="" cols="30" rows="7" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input value="Send Message" className="btn btn-primary" type="submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map" data-animate-effect="fadeIn"></div>
            </React.Fragment>
        );
    }
}