import React, { Component } from 'react';
import image from '../images/image_about.jpg';
import Section from '../components/Section';
import AsideList from '../components/AsideList';


export default class About extends Component {

    render() {
        return (
            <Section
                classTitle={'about'}
                title={'Um pouco sobre nós'}
                subtitle={'aqui vai a descrição'}
                children={
                    <React.Fragment>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="about-inner">
                                        <img className="img-responsive" src={image} alt="About" />
                                        <h3>History</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        <blockquote>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </blockquote>
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
