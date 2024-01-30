import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ComponenteCompuesto from "./Components/Navbar/visualizador/ComponenteCompuesto.jsx";
import Navbar from "./Components/Navbar/visualizador/navbar.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar/>
    <ComponenteCompuesto/>
  </React.StrictMode>
);
