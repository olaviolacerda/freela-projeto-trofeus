import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { clearFields } from '../helpers/Helper';
import axios from 'axios';
export default class EmailCard extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            warningMessage: '',
        }
    }

    openModal = (warningMessage) => {
        this.setState({
            warningMessage,
            showModal: true
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }


    sendEmail = (event) => {
        event.preventDefault();
        let self = this;
        let body = {
            sender: this.name.value,
            email: this.email.value,
            body: this.message.value,
        };
        axios.post('https://obscure-retreat-21408.herokuapp.com/api/v1/emails', body)
            .then((res) => {
                if (res.status === 200) {
                    clearFields(document.querySelectorAll(".form-control"));
                    self.openModal('Email enviado com sucesso')
                } else {
                    self.openModal('Não foi possível enviar')
                }
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                    <div className="row">
                        <form data-toggle="validator" onSubmit={this.sendEmail}>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" placeholder="Nome" required type="text" ref={(input) => this.name = input} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input id="inputEmail" className="form-control" placeholder="Email" type="email" data-error="Bruh, that email address is invalid" required ref={(input) => this.email = input} />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea className="form-control" id="" cols="30" rows="7" required placeholder="Mensagem" ref={(input) => this.message = input}></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <button value="Enviar" className="btn btn-primary" type="submit" >Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="map" data-animate-effect="fadeIn"></div>
                <Modal visible={this.state.showModal} width="400" effect="fadeInDown" onClickAway={this.closeModal}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center modal-style">
                            <p>{this.state.warningMessage}</p>
                            <button className="btn btn-primary" onClick={this.closeModal}>Ok</button>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}