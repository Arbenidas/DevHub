import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ComponenteCompuesto from "./Components/Navbar/visualizador/ComponenteCompuesto.jsx";
import NavbarCV from "./Components/Navbar/visualizador/Navbar.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <NavbarCV />
    <ComponenteCompuesto />
  </>
);
