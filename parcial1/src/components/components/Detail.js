import { Modal, Button } from "react-bootstrap";
import React from "react";
import { FormattedMessage } from 'react-intl';
import { useNavigate } from "react-router-dom";

export default function Detail({ datosBuscar, editable }) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = React.useState(true);

    const handleClose = () => {
        setShowModal(false);
        navigate("/home");
    };

    if (!datosBuscar) return <div>No existe este libro</div>;

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><FormattedMessage id="titulo" /></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={datosBuscar.image} alt="Imagen de la publicacion" style={{ width: '100%' }} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    <FormattedMessage id="cerrar" />
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
