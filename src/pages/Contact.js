import React, { Component } from 'react';

export default class Contact extends Component {


    clearFields = () => {
        let matches = document.querySelectorAll(".form-control");
        matches.forEach(match => {
            match.value = '';
        });
    }

    sendEmail = (event) => {
        event.preventDefault();
        let body = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value,
        };

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };
        console.log(body);
        this.clearFields();
    }


    render() {
        return (
            <React.Fragment>
                <div id="fh5co-contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                                <h2>Contato</h2>
                                <p><span>Escreva suas dúvidas ou solicite seu orçamento</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h3>Contate-nos</h3>
                                <ul className="contact-info">
                                    <li><i className="sl-icon-map"></i>Rua Doutor Dias da Cruz, Nº 62</li>
                                    <li><i className="sl-icon-phone"></i>+ 1235 2355 98</li>
                                    <li><i className="sl-icon-envelope-open"></i><a >info@email.com</a></li>
                                </ul>
                            </div>
                            <div className="col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                                <div className="row">
                                    <form data-toggle="validator" role="form" onSubmit={this.sendEmail}>
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
                        </div>
                    </div>
                </div>
                <div id="map" data-animate-effect="fadeIn"></div>
            </React.Fragment>
        );
    }
}