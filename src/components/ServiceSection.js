import React, { Component } from 'react';

export default class ServiceSection extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="fh5co-services-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                                <h2>Our Awesome Services</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 services-inner text-center">
                                <span><i className="sl-icon-graph"></i></span>
                                <h3>Finance Dashboard</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                            <div className="col-md-4 services-inner text-center">
                                <span><i className="sl-icon-heart"></i></span>
                                <h3>Made with Love</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                            <div className="col-md-4 services-inner text-center">
                                <span><i className="sl-icon-key"></i></span>
                                <h3>Help &amp; Support</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}