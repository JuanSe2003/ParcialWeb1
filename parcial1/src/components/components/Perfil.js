import React from 'react';
import { FormattedMessage } from 'react-intl'; 
import './Perfil.css';

function Perfil({ userData, editable }) {
    if (!userData) {
        return null; 
    }

    if (!editable) {
        return (
            <div className="perfil-container">
                <h2><FormattedMessage id="titulo" /></h2> 
                <br />
                <div className="perfil-info">
                    <img
                        className="profile-image"
                        src={userData.image}
                        alt={`${userData.first_name} ${userData.last_name}`}
                    />
                    <div className="user-details">
                        <p><FormattedMessage id="nombre" />: {userData.first_name}</p> 
                        <p><FormattedMessage id="apellido" />: {userData.last_name}</p> 
                        <p><FormattedMessage id="cantidad_seguidores" />: {userData.cantidad_seg}</p> 
                        <p><FormattedMessage id="cantidad_post" />: {userData.cantidad_post}</p> 
                        <p><FormattedMessage id="descripcion" />: {userData.descripción}</p> 
                    </div>
                </div>
            </div>
        );
    }

    const inputFields = Object.entries(userData).map(([key, value]) => (
        <div key={key}>
            <label><FormattedMessage id={key} />: </label> 
            <input type="text" name={key} value={value} />
        </div>
    ));

    return (
        <div className="perfil-container">
            <h2><FormattedMessage id="titulo" /></h2> 
            <br />
            <div className="perfil-info">
                <img
                    className="profile-image"
                    src={userData.image}
                    alt={`${userData.first_name} ${userData.last_name} ${userData.cantidad_seg} ${userData.cantidad_cuentas}`}
                />
                <div className="user-details">
                    {inputFields}
                </div>
            </div>
        </div>
    );
}

export default Perfil;
