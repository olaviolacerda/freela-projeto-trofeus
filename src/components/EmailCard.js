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
        axios.post('https://obscure-retreat-21408.herokuapp.com/api/v1/send/email', body)
            .then((res) => {
                clearFields(document.querySelectorAll(".form-control"));
                self.openModal('Email enviado com sucesso')
            }, (err) => {
                console.log(err.message);
                self.openModal('Não foi possível enviar')
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="">
                    <div className="row">
                        <form data-toggle="validator" onSubmit={this.sendEmail}>
                            <div className="">
                                <div className="">
                                    <input className="" placeholder="Nome" required type="text" ref={(input) => this.name = input} />
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <input id="inputEmail" className="" placeholder="Email" type="email" data-error="Bruh, that email address is invalid" required ref={(input) => this.email = input} />
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <textarea className="" id="" cols="30" rows="7" required placeholder="Mensagem" ref={(input) => this.message = input}></textarea>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <button value="Enviar" className="" type="submit" >Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="map" data-animate-effect="fadeIn"></div>
                <Modal visible={this.state.showModal} width="400" effect="fadeInDown" onClickAway={this.closeModal}>
                    <div className="row">
                        <div className="">
                            <p>{this.state.warningMessage}</p>
                            <button className="" onClick={this.closeModal}>Ok</button>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}