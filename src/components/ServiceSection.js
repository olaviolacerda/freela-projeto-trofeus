import React, { Component } from 'react';

export default class ServiceSection extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="service-wrapper">
                    <div className="row">
                        <div className="col-7 col-5-fill card-service-title">
                            <h2>Prezamos por qualidade e sua satisfação</h2>
                            <p>Gravações de alta qualidade e com ótimo acabamento, resistentes à ação do tempo e com alto grau de detalhamento e nitidez. Ideais tanto para homenagens, na forma de trofeus e placas, quanto para dar um acabamento moderno e original para os mais variados objetos em metal. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-4-fill">
                            <div className="col-4 card-service">
                                <span><i className=""></i></span>
                                <h3>Feito com materiais de qualidade</h3>
                                <p>A <b>Pablo Gravações</b> trabalha apenas com materiais de altíssima qualidade, realizando suas gravações em aço inox 304 e latão, ambos metais capazes de resistir à ação do tempo, podendo ficar expostos em ambientes externos. Utilizamos tinta de pintura automotiva para dar cor aos nossos trabalhos, o que garante tons vivos e uma maior
durabilidade da pintura. As peças podem ainda ser finalizadas com uma cobertura de verniz, garantindo maior brilho e proteção.</p>
                            </div>
                            <div className="col-4 card-service">
                                <span><i className=""></i></span>
                                <h3>Produção artesanal</h3>
                                <p>Todos os nossos produtos provém de produção artesanal realizada na sede da empresa em Porto Alegre. Para cada peça dedicamos todo o carinho e profissionalismo que nossos clientes esperam. Dessa forma, garantimos os melhores resultados para que você possa presentear a quem você ama com um produto único e de acabamento impecável.</p>
                            </div>
                            <div className="col-4 card-service">
                                <span><i className=""></i></span>
                                <h3>Produtos diferenciados</h3>
                                <p>O que diferencia a Pablo Gravações dos demais serviços de gravação presentes no mercado? Com certeza a sofisticação da produção de nossas peças. Nossas gravações são realizadas através de um processo de corrosão química do metal, o que garante uma quantidade incrível de detalhes e nitidez mesmo nas peças de menor tamanho. Essa forma de gravação garante a fidelidade ao layout entregue pelo cliente, aceitando diferentes fontes e logotipos para deixar o serviço com a sua cara. O que você vê na tela do seu computador é o que verá no produto final*.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <p className="col-4 col-8-fill text-center">*não produzimos pinturas em degradê no metal.</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}