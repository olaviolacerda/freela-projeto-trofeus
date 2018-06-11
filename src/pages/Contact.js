import React, { Component } from "react";
import Map from "../components/MapComponent";
import "../css/Contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper row">
        <div className="google-map-wrapper col-10">
          <Map isMarkerShown />
        </div>
        <div className="boxes-wrapper col-2">
            <div className="box tel-box col-12">
              <h2>Fale com a gente</h2>
              <h3>(51) 9 1234-5678</h3>
              <p>email@falso.com</p>
            </div>
            <div className="box address-box col-12">
              <h2>Endereço</h2>
              <p>Rua Dr. Dias da Cruz, 62</p>
              <p>Bairro Medianeira</p>
              <p>Porto Alegre - RS</p>
              <p>90880-380</p>
            </div>
            <div className="box hour-box col-12">
              <h2>Horários</h2>
              <p>Segunda a Sexta</p>
              <p>8:00h - 18:00h</p>
            </div>
        </div>
      </div>
    );
  }
}
