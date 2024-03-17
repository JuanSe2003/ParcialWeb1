import './App.css';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Perfil from './components/components/Perfil';
import Header from './components/components/Header';
import Home from './components/components/Home';
  
  // Importa el componente Header

function App() {
  const [userData, setUserData] = useState(null); // Mueve el estado userData al componente principal
  const [datos, setDatos] = useState([]);
  const [editable, setEdit] = useState(Math.random() < 0.5); // Probabilidad del 50% de ser true
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/JuanSe2003/DatosParcial/main/Untitled-1.json')
    .then(response => response.json())
    .then(data => setDatos(data));

    // También puedes cargar los datos del usuario aquí
    fetch('https://raw.githubusercontent.com/JuanSe2003/rrrrrrrrrrrrr/main/DatosUsuario.json')
        .then(response => response.json())
        .then(data => {
            // Actualizar el estado con los datos del usuario
            setUserData(data[0]);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Pasa userData y editable como props a Perfil */}
          <Route path="/user" element={<Perfil userData={userData} editable={editable} />} />
          <Route path="/Home" element={<Home datosunicos={datos} editable={editable} />} />
          <Route path="/" element={<Home datosunicos={datos} editable={editable} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;