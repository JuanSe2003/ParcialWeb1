import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Detail({ datosBuscar, editable }) {
    
    if (!datosBuscar) return <div>No existe este libro</div>;
    
  
    const inputFields = Object.entries(datosBuscar).map(([key, value]) => (
      <div key={key}>
        <label>{key}: </label>
        <input type="text" name={key} value={value} />
      </div>
    ));
  
    return (
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{datosBuscar.title}</h5>
            {editable ? (
              <form>
                {inputFields}
              </form>
            ) : (
              <div>
                
                <p className="card-text"><strong>Car Maker: </strong>{datosBuscar.username}</p>
                <p className="card-text"><strong>Car Model: </strong>{datosBuscar.descripción}</p>
                <p className="card-text"><strong>Car Year: </strong>{datosBuscar.cantidad_seg}</p>
                <p className="card-text"><strong>Available: </strong>{String(datosBuscar.cantidad_cuentas)}</p>
                <p className="card-text"><strong>Price: </strong>{datosBuscar.url}</p>
              </div>
            )}
          </div>
        </div>
      );
  }