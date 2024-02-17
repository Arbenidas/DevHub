import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Login/Signup.jsx";
import {CursoDefault} from "./Components/Cursos/CursoJava.jsx";
import {Cursos} from "./Components/Cursos/Cursos.jsx";
import Conocenos from "./Components/Conocenos/Conocenos.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<LandingPage/>}/>
  <Route path="/signin" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/Conocenos" element={<Conocenos/>}/>
  <Route path="/VistaCurso" element={<CursoDefault id='1' />}/>
  <Route path="/Cursos" element={<Cursos/>}/>
  
  </Routes>
  </BrowserRouter>
  


    
    
  </> 
)
