import React from 'react';
import { FormattedMessage } from 'react-intl'; // Importa FormattedMessage
import './Perfil.css'; // Importa el archivo CSS para los estilos del perfil

function Perfil({ userData, editable }) {
    if (!userData) {
        return null; // Si no hay datos del usuario, no se renderiza nada
    }

    if (!editable) {
        return (
            <div className="perfil-container">
                <h2><FormattedMessage id="titulo" /></h2> {/* Utiliza internacionalización para el título */}
                <br />
                <div className="perfil-info">
                    <img
                        className="profile-image"
                        src={userData.image}
                        alt={`${userData.first_name} ${userData.last_name}`}
                    />
                    <div className="user-details">
                        <p><FormattedMessage id="nombre" />: {userData.first_name}</p> {/* Utiliza internacionalización para el nombre */}
                        <p><FormattedMessage id="apellido" />: {userData.last_name}</p> {/* Utiliza internacionalización para el apellido */}
                        <p><FormattedMessage id="cantidad_seguidores" />: {userData.cantidad_seg}</p> {/* Utiliza internacionalización para la cantidad de seguidores */}
                        <p><FormattedMessage id="cantidad_post" />: {userData.cantidad_post}</p> {/* Utiliza internacionalización para la cantidad de posts */}
                        <p><FormattedMessage id="descripcion" />: {userData.descripción}</p> {/* Utiliza internacionalización para la descripción */}
                    </div>
                </div>
            </div>
        );
    }

    const inputFields = Object.entries(userData).map(([key, value]) => (
        <div key={key}>
            <label><FormattedMessage id={key} />: </label> {/* Utiliza internacionalización para las etiquetas */}
            <input type="text" name={key} value={value} />
        </div>
    ));

    return (
        <div className="perfil-container">
            <h2><FormattedMessage id="titulo" /></h2> {/* Utiliza internacionalización para el título */}
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
