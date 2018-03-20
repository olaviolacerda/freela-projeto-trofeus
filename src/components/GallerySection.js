import React, { Component } from 'react';
import image4 from '../images/image_4.jpg';
import image5 from '../images/image_5.jpg';
import image6 from '../images/image_6.jpg';

export default class GallerySection extends Component {
    render() {
        return (
            <div id="" className="">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <h2>Aqui vão as fotos dos trabalhos</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            <div className="">
                                <a ><img className="" src={image4} alt="Blog" /></a>
                                <div className="">
                                    <h3><a >New iPhone 6 Released</a></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <p><a className="">Read More<i className="fa fa-arrow-right"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <a ><img className="" src={image5} alt="Blog" /></a>
                                <div className="">
                                    <h3><a >Start your day with a beautiful appearance</a></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <p><a className="">Read More<i className="fa fa-arrow-right"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <a ><img className="" src={image6} alt="Blog" /></a>
                                <div className="">
                                    <h3><a >Bookmarksgrove right</a></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <p><a className="">Read More<i className="fa fa-arrow-right"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}