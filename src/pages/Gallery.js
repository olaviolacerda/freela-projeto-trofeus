import React, { Component } from 'react';
import Section from '../components/Section';
import GridGallery from 'react-grid-gallery';
import '../css/Gallery.scss';
import image0 from '../images/image_0.jpg';
import image1 from '../images/image_1.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.jpg';
import image4 from '../images/image_4.jpg';
import image5 from '../images/image_5.jpg';
import image6 from '../images/image_6.jpg';
import image7 from '../images/image_7.jpg';
import image8 from '../images/image_8.jpg';
import image9 from '../images/image_9.jpg';
import image10 from '../images/image_10.jpg';
import image11 from '../images/image_11.jpg';
import image12 from '../images/image_12.jpg';
import image13 from '../images/image_13.jpg';
import image14 from '../images/image_14.jpg';
import image15 from '../images/image_15.jpg';
import image16 from '../images/image_16.jpg';
import image17 from '../images/image_17.jpg';
import image18 from '../images/image_18.jpg';
import image19 from '../images/image_19.jpg';


export default class Gallery extends Component {

    constructor() {
        super();
        this.state = {
            images: [image0, image1, image2, image19, image3, image4, image5, image12, image6, image14, image7, image8, image9, image10, image11, image13, image15, image16, image17, image18]
        }
    }
    componentWillMount() {
        const images = this.state.images.map(image => {
            return {
                src: image,
                thumbnail: image,
                thumbnailWidth: 278,

            }
        })

        this.setState({ images })
    }

    render() {
        return (
            <Section
                classTitle={'gallery'}
                title={''}
                subtitle={
                    'Confira alguns de nossos serviços realizados'
                }
                children={

                    <div className="gallery-content">
                        <GridGallery images={this.state.images}
                            enableImageSelection={false}
                            imageCountSeparator={' de '}
                            backdropClosesModal={true}
                            showLightboxThumbnails={true} />
                    </div>
                } />
        );
    }
}