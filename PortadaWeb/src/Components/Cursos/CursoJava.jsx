import React, { useState, useEffect } from 'react';
import ComponenteCompuesto from '../visualizador/ComponenteCompuesto';
import NavbarCV from '../visualizador/Navbar';
import axios from 'axios';

export function CursoDefault(props) {
  // Estado para almacenar los datos del curso
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    
    const url = 'http://localhost/DevHub/PortadaWeb/ccCursos.php?idcurso='+props.id;

    axios.get(url)
      .then(response => {
        // Manejar la respuesta de la API
        console.log('Respuesta del servidor:', response.data);
        if (response.data.success) {
          console.log('Detalles del curso:', response.data.curso);
          // Guardar los datos del curso en el estado
          setCurso(response.data.curso);
        } else {
          console.error('Error:', response.data.message);
        }
      })
      .catch(error => {
        // Manejar errores
        console.error('Error al hacer la solicitud:', error);
      });
  }, []); // El array vacío [] hace que este efecto se ejecute solo una vez, al montar el componente

  return (
    <>
      <NavbarCV />
      {/* Renderizar el componente compuesto y pasar el objeto del curso como propiedad */}
      {curso && <ComponenteCompuesto curso={curso} />}
    </>
  );
}
