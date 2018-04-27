import React, { Component } from 'react';
import Section from '../components/Section';
import Gallery from './Gallery';
import '../css/Services.scss';
export default class Services extends Component {

    render() {
        return (
            <Section
                classTitle={'services'}
                title={'Serviços'}
                subtitle={'Confira alguns de nossos serviços realizados'}
                children={
                    <div className="services-content">
                        <Gallery />
                    </div>}
            />
        );
    }
}