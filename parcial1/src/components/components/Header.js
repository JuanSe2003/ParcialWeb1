// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'; // Importa FormattedMessage
import './Header.css'; // Importa el archivo CSS para los estilos del header

function Header({ userData }) {
    const navigate = useNavigate();

    // Handle click event
    const handleClick = () => {
        // Redireccionar a la página de perfil
        navigate('/user'); 
    };

    return (
        <div className="header-container">
            {userData && (
                <div className="user-info" onClick={handleClick}>
                    <img
                        className="profile-image"
                        src={userData.image}
                        alt={`${userData.first_name} ${userData.last_name}`}
                    />
                    <div className="user-details">
                        <p className="name"><FormattedMessage id="nombre" /> {userData.first_name}</p>
                        <p className="name"><FormattedMessage id="apellido" /> {userData.last_name}</p>
                        <div className="stats">
                            <p><FormattedMessage id="cantidad_post" /> {userData.cantidad_post}</p>
                            <p><FormattedMessage id="cantidad_seguidores" /> {userData.cantidad_seg}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
