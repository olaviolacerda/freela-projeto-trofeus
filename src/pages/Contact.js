import React, { Component } from 'react';
import Section from '../components/Section';

export default class Contact extends Component {

    render() {
        return (
            <Section
                classTitle={'contact'}
                title={'Contate-nos'}
                subtitle={'Escreva suas dúvidas ou solicite seu orçamento'}
                children={
                    <React.Fragment>
                        <div className="">
                            <h3>Informações</h3>
                            <ul className="">
                                <li><i className=""></i>Nome da Rua, Número</li>
                                <li><i className=""></i>+ 1235 2355 98</li>
                                <li><i className=""></i><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@email.com&tf=1">info@email.com</a></li>
                            </ul>
                        </div>
                    </React.Fragment>}
            />
        );
    }
}