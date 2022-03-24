import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Destinos from "./views/Destinos/Destinos";
import Promocoes from "./views/Promocoes";
import Contato from "./views/Contato";
import PacotesCreate from "./views/Destinos/Create"

import Menu from "./components/Menu";
import Footer from "./components/Footer";



import "./assets/css/site.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Promocoes" element={<Promocoes/>} />
        
        <Route path="/Destinos-Create" element={<PacotesCreate />} />
        <Route path="/Destinos-Update/:id" element={<PacotesCreate />} />
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;