import React, { Component } from 'react';
import Section from '../components/Section';
import Gallery from './Gallery';
export default class Services extends Component {

    render() {
        return (
            <Section
                classTitle={'services'}
                title={'Nossos Serviços'}
                subtitle={'Serviços prestados'}
                children={
                    <React.Fragment>
                        <Gallery />
                    </React.Fragment>}
            />
        );
    }
}