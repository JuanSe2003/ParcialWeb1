import './App.css';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Home/Detail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Perfil from './components/Perfil';

function App() {
  const [datos, setDatos] = useState([]);
  const [editable, setEdit] = useState(Math.random() < 0.5); // Probabilidad del 50% de ser true
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/JuanSe2003/DatosParcial/main/Untitled-1.json')
    .then(response => response.json())
    .then(data => setDatos(data));
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Perfil />} />
          <Route path="/Home" element={<Home datosunicos={datos} editable = {editable}/>}/>
          <Route path="/" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;