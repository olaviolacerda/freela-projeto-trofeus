import React, { Component } from 'react';
import image12 from '../images/image_12.jpg';
import image14 from '../images/image_14.jpg';
import image18 from '../images/image_18.jpg';
export default class GallerySection extends Component {
    render() {
        return (
            <div id="" className="gallery-wrapper">
                <div className="row">
                    <div className="gallery-title col-5 col-7-fill">
                        <h2>Trabalhamos com carinho e dedicação</h2>
                        <p>Produzimos placas, bottons e troféus de alta qualidade para os mais diversos fins que vão desde a identificação de consultórios e funcionários até as mais belas homenagens e personalização de objetos em metal.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 col-3-fill gallery-cards-wrapper">
                        <div className="col-4">
                            <div className="gallery-card">
                                <a className="img-card"><img className="gallery-card-image" src={image18} alt="Blog" /></a>
                                <div className="gallery-card-text">
                                    <p>Materiais de altíssima qualidade</p>
                                    <p><a className="link-gallery" href="/services">Confira aqui nossos trabalhos</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="gallery-card">
                                <a className="img-card"><img className="gallery-card-image" src={image14} alt="Blog" /></a>
                                <div className="gallery-card-text">
                                    <p>Acabamento impecável</p>
                                    <p><a className="link-gallery" href="/services">Confira aqui nossos trabalhos</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="gallery-card">
                                <a className="img-card"><img className="gallery-card-image" src={image12} alt="Blog" /></a>
                                <div className="gallery-card-text">
                                    <p>Quantidade incrível de detalhes</p>
                                    <p><a className="link-gallery" href="/services">Confira aqui nossos trabalhos</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}