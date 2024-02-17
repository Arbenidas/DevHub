import React, { useState, useEffect } from 'react';
import ComponenteCompuesto from '../visualizador/ComponenteCompuesto';
import NavbarCV from '../visualizador/Navbar';
import axios from 'axios';

export function Cursos() {
  // Estado para almacenar los datos del curso
  const [cursos, setCursos] = useState(null);

  useEffect(() => {
    const url = 'http://localhost/DevHub/PortadaWeb/listaCursos.php';

    axios.get(url)
      .then(response => {
        // Manejar la respuesta de la API
        console.log('Respuesta del servidor:', response.data);
        if (response.data.success) {
          console.log('Detalles del cursos:', response.data.cursos);
          // Guardar los datos del curso en el estado
          setCurso(response.data.cursos);
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
      {/* {cursos && <ComponenteCompuesto cursos={cursos} />} */}
    </>
  );
}
