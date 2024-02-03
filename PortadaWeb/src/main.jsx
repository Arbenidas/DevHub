import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ComponenteCompuesto from "./Components/Navbar/visualizador/ComponenteCompuesto.jsx";
import NavbarCV from "./Components/Navbar/visualizador/Navbar.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Login/Signup.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<LandingPage/>}/>
  <Route path="/signin" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  
  </Routes>
  </BrowserRouter>
  

    
    {/*<NavbarCV />
    <ComponenteCompuesto />*/}
  </>
)
