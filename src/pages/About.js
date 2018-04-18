import React, { Component } from 'react';
import image from '../images/image_7.jpg';
import Section from '../components/Section';
// import AsideList from '../components/AsideList';


export default class About extends Component {

    render() {
        return (
            <Section
                classTitle={'about'}
                title={'Um pouco sobre nós'}
                subtitle={''}
                children={
                    <React.Fragment>
                        <div className="">
                            <div className="row">
                                <div className="">
                                    <div className="">
                                        <img className="" src={image} alt="About" />
                                        <p>A Pablo Gravações trabalha há mais de 20 anos no mercado de gravação em metal, produzindo placas, bottons e troféus de alta qualidade para os mais diversos fins que vão desde a identificação de consultórios e funcionários até as mais belas homenagens e personalização de objetos em metal.</p>
                                        <blockquote>
                                            <p></p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <AsideList /> */}
                    </React.Fragment>
                } />
        );
    }
}
