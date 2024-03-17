import Card from './Card';
import React, { useState, useEffect } from 'react';
import Detail from './Detail';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function Home(props) {
  const { id } = useParams();
  const [idBuscar, setidbuscar] = useState(id || "");

  useEffect(() => {
    setidbuscar(id);
  }, [id]);

  const handleCardClick = (id) => {
    setidbuscar(id);
  }

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/JuanSe2003/rrrrrrrrrrrrr/main/DatosUsuario.json')
        .then(response => response.json())
        .then(data => {
            setUserData(data[0]);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
  }, []);

  function renderItems() {
    return props.datosunicos.map((datounico, index) => (
      <Col key={index} md={4} className="mb-4">
        <Card
          username={datounico.username}
          nombre={datounico.nombre}
          descripción={datounico.descripción}
          image={datounico.image}
          id_loc={index}
          cantidad_seg={datounico.cantidad_seg}
          cantidad_cuentas={datounico.cantidad_cuentas}
          url={datounico.url}
          onClick={handleCardClick}
        />
      </Col>
    ));
  }

  return (
    <section className="vh-100">
      <div className="title">
        <h1>Instagram Parcial 1</h1>
        <p>Editable: <span>{props.editable ? 'true' : 'false'}</span></p>
      </div>
      <div className="profile">
        <Header userData={userData}/>
      </div>
      <br/>
      <div className="galerie_detail">
        <Container>
          <Row className="justify-content-center">
            {renderItems()}
          </Row>
        </Container>
        <div className="detail">
          <br/>
          <p>Detalle de la card seleccionada</p>
          {idBuscar !== "" && (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <Detail datosBuscar={props.datosunicos[idBuscar]} editable={props.editable} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


 