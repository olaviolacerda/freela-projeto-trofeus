import React, { Component } from 'react';
import IntroSection from '../components/IntroSection';
import ServiceSection from '../components/ServiceSection';
import GallerySection from '../components/GallerySection';
import '../css/Home.scss';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <IntroSection />
                <ServiceSection />
                <GallerySection />
            </React.Fragment>
        );
    }
}
