import React, { Component } from 'react';
import image1 from '../images/image_1.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.jpg';
import image4 from '../images/image_4.jpg';
import image5 from '../images/image_5.jpg';
import image6 from '../images/image_6.jpg';
import Section from '../components/Section';
import GalleryCard from '../components/GalleryCard'

export default class Gallery extends Component {

    render() {
        return (
            <Section
                classTitle={'work'}
                title={'Galeria'}
                subtitle={
                    ''
                }
                children={
                    <React.Fragment>
                        <GalleryCard
                            title={'Qualquer coisa'}
                            subtitle={'Outra coisa'}
                            image={image1} />
                        <GalleryCard
                            title={'Qualquer coisa'}
                            subtitle={'Outra coisa'}
                            image={image2} />
                        <GalleryCard
                            title={'Qualquer coisa'}
                            subtitle={'Outra coisa'}
                            image={image3} />
                        <GalleryCard
                            title={'Qualquer coisa'}
                            subtitle={'Outra coisa'}
                            image={image4} />
                        <GalleryCard
                            title={'Qualquer coisa'}
                            subtitle={'Outra coisa'}
                            image={image5} />
                        <GalleryCard
                            title={'Qualquer coisa'}
                            subtitle={'Outra coisa'}
                            image={image6} />
                    </ React.Fragment>
                } />
        );
    }
}