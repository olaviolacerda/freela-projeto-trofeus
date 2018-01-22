import React, { Component } from 'react';

export default class AsideList extends Component {

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        return (
            <div className="col-md-4">
                <aside className="sidebar">
                    <div className="row">
                        <div className="col-md-12 side">
                            <h3>Categories</h3>
                            <ul>
                                <li><i className="fa fa-check"></i><a >Web Design</a></li>
                                <li><i className="fa fa-check"></i><a >Branding &amp; Identity</a></li>
                                <li><i className="fa fa-check"></i><a >Free HTML5</a></li>
                                <li><i className="fa fa-check"></i><a >HandCrafted Templates</a></li>
                                <li><i className="fa fa-check"></i><a >Free Bootstrap Template</a></li>
                                <li><i className="fa fa-check"></i><a >Free HTML5 Template</a></li>
                                <li><i className="fa fa-check"></i><a >Free HTML5 &amp; CSS3 Template</a></li>
                                <li><i className="fa fa-check"></i><a >HandCrafted Templates</a></li>
                            </ul>
                        </div>
                        <div className="col-md-12 side">
                            <h3>Paragraph</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}