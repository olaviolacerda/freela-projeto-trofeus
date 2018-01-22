import React, { Component } from 'react';
import Section from '../components/Section';
import AsideList from '../components/AsideList';

export default class Sevices extends Component {

    render() {
        return (
            <Section
                classTitle={'main-services'}
                title={'Nossos serviços'}
                subtitle={'aqui vai uma descrição'}
                children={
                    <React.Fragment>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12 services-inner">
                                    <span><i className="sl-icon-graph"></i></span>
                                    <div className="desc">
                                        <h3>Finance Dashboard</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                                <div className="col-md-12 services-inner">
                                    <span><i className="sl-icon-heart"></i></span>
                                    <div className="desc">
                                        <h3>Made with Love</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                                <div className="col-md-12 services-inner">
                                    <span><i className="sl-icon-key"></i></span>
                                    <div className="desc">
                                        <h3>Help &amp; Support</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AsideList />
                    </React.Fragment>
                } />

        );
    }
}

