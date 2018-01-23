import React, { Component } from 'react';
import Section from '../components/Section';
import EmailCard from '../components/EmailCard';

export default class Contact extends Component {

    render() {
        return (
            <Section
                classTitle={'contact'}
                title={'Contate-nos'}
                subtitle={'Escreva suas dúvidas ou solicite seu orçamento'}
                children={
                    <React.Fragment>
                        <div className="col-md-3">
                            <h3>Informações</h3>
                            <ul className="contact-info">
                                <li><i className="sl-icon-map"></i>Nome da Rua, Número</li>
                                <li><i className="sl-icon-phone"></i>+ 1235 2355 98</li>
                                <li><i className="sl-icon-envelope-open"></i><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@email.com&tf=1" rel="noopener noreferrer" target="_blank">info@email.com</a></li>
                            </ul>
                        </div>
                        <EmailCard />
                    </React.Fragment>}
            />
        );
    }
}