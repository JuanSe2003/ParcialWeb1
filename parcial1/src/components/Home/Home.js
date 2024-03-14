import Card from './Card';
import React, { useState, useEffect } from 'react';
import Detail from './Detail';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 


export default function Home(props) {
    const { id } = useParams();
  const [idBuscar, setidbuscar] = useState(id || "");
  useEffect(() => {
    setidbuscar(id);
  }, [id]);
  const handleCardClick = (id) => {
    setidbuscar(id);
  }

  
  
  function renderItems() {
    return props.datosunicos.map((datounico, index) => (
      <Col key={index} md={4} className="mb-4"> {/* Cambiado md={3} a md={4} */}
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
        <h1>Title</h1>
      </div>
      <h2>
        Editable Title: {props.editable ? <p>true</p> : <p>false</p>}
      </h2>
    

      <div className="galerie_detail">
      <Container>
      <Row className="justify-content-center"> 
        {renderItems()}
      </Row>
    </Container>
    <p1>Detalle de la card seleccionada</p1>
    <br/>
        {idBuscar !== "" && (
          <div className="detail" style={{ display: 'flex', justifyContent: 'center'}}>
            <Detail datosBuscar={props.datosunicos[idBuscar]} editable={props.editable} />
          </div>
        )}
      </div>
    </section>
  );
        }
