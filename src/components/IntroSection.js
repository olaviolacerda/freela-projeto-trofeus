import React, { Component } from 'react';
import image6 from '../images/image_6.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.jpg';
import image8 from '../images/image_8.jpg';


const backgrounds = {
    bg1: {
        backgroundImage: `url(${image6})`,
    },
    bg2: {
        backgroundImage: `url(${image2})`,
    },
    bg3: {
        backgroundImage: `url(${image3})`,
    }, 
    bg4: {
        backgroundImage: `url(${image8})`,
    }
};


export default class IntroSection extends Component {     

    render() {
        return (
            <React.Fragment>
            <div id="fh5co-intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2>Aqui vai alguma frase simples explicando o que é/faz</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fh5co-featured-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <a  className="featured-grid " style={backgrounds.bg1} >
                                <div className="desc">
                                    <h3>Work with love</h3>
                                    <span>Web Design</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a  className="featured-grid featured-grid-2" style={backgrounds.bg2} >
                                <div className="desc">
                                    <h3>Music Lover</h3>
                                    <span>Application</span>
                                </div>
                            </a>
                            <div className="row">
                                <div className="col-md-6">
                                    <a  className="featured-grid featured-grid-2" style={backgrounds.bg3}>
                                        <div className="desc">
                                            <h3>Travel</h3>
                                            <span>Illustration</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a  className="featured-grid featured-grid-2" style={backgrounds.bg4}>
                                        <div className="desc">
                                            <h3>Captured</h3>
                                            <span>Photo</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}