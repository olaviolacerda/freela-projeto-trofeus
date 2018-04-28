import React, { Component } from 'react';
import { default as Map } from '../components/MapComponent';
import '../css/Contact.scss';



export default class Contact extends Component {
    render() {


        return (
            <div className="contact-wrapper">
                <div className="col-10 google-map-wrapper color-grey">
                    <Map defaultCenter={{ lat: -30.0660133, lng: -51.2066951 }}
                        defaultZoom={15} />
                </div>
                <div className="col-2  boxes-wrapper">
                    <div className="row">
                        <div className="col-12 tel-box">
                            <h2>Fale com a gente</h2>
                            <h3>(51) 9 1234-5678</h3>
                            <p>email@falso.com</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12  address-box">
                            <h2>Endereço</h2>
                            <p>Rua Dr. Dias da Cruz, 62</p>
                            <p>Bairro Medianeira</p>
                            <p>Porto Alegre - RS</p>
                            <p>90880-380</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12  hour-box">
                            <h2>Horários</h2>
                            <p>Segunda a Sexta</p>
                            <p>8:00h - 18:00h</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}