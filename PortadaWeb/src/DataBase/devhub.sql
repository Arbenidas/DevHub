-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-01-2024 a las 20:34:04
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `devhub`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_InsertarComentarioEvaluacion` (IN `p_id_usuario` INT, IN `p_id_leccion` INT, IN `p_comentario` TEXT, IN `p_calificacion` INT)   BEGIN
    INSERT INTO comentarios_evaluaciones (id_usuario, id_leccion, comentario, calificacion)
    VALUES (p_id_usuario, p_id_leccion, p_comentario, p_calificacion);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_InsertarCurso` (IN `p_nombre` VARCHAR(100), IN `p_descripcion` TEXT)   BEGIN
    INSERT INTO cursos (nombre, descripcion)
    VALUES (p_nombre, p_descripcion);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_InsertarLeccion` (IN `p_id_curso` INT, IN `p_titulo` VARCHAR(100), IN `p_contenido` TEXT)   BEGIN
    INSERT INTO lecciones (id_curso, titulo, contenido)
    VALUES (p_id_curso, p_titulo, p_contenido);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_InsertarPreguntaRespuestas` (IN `p_id_leccion` INT, IN `p_pregunta` TEXT, IN `p_respuesta_correcta` TEXT, IN `p_respuesta_incorrecta1` TEXT, IN `p_respuesta_incorrecta2` TEXT, IN `p_respuesta_incorrecta3` TEXT)   BEGIN
    INSERT INTO preguntas_respuestas (id_leccion, pregunta, respuesta_correcta, respuesta_incorrecta1, respuesta_incorrecta2, respuesta_incorrecta3)
    VALUES (p_id_leccion, p_pregunta, p_respuesta_correcta, p_respuesta_incorrecta1, p_respuesta_incorrecta2, p_respuesta_incorrecta3);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_InsertarUsuario` (IN `p_nombre` VARCHAR(50), IN `p_correo_electronico` VARCHAR(50), IN `p_contrasena` VARCHAR(50), IN `p_rol` ENUM('estudiante','profesor','administrador'))   BEGIN
    INSERT INTO usuarios (nombre, correo_electronico, contrasena, rol)
    VALUES (p_nombre, p_correo_electronico, p_contrasena, p_rol);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_RegistrarProgreso` (IN `p_id_usuario` INT, IN `p_id_leccion` INT, IN `p_intentos` INT)   BEGIN
    INSERT INTO progreso (id_usuario, id_leccion, intentos)
    VALUES (p_id_usuario, p_id_leccion, p_intentos);
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `backup_descripciones`
--

CREATE TABLE `backup_descripciones` (
  `id_backup` int(11) NOT NULL,
  `id_leccion` int(11) DEFAULT NULL,
  `antigua_descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `backup_progreso`
--

CREATE TABLE `backup_progreso` (
  `id_backup` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_leccion` int(11) DEFAULT NULL,
  `intentos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios_evaluaciones`
--

CREATE TABLE `comentarios_evaluaciones` (
  `id_comentario` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_leccion` int(11) DEFAULT NULL,
  `comentario` text DEFAULT NULL,
  `calificacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id_curso` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Disparadores `cursos`
--
DELIMITER $$
CREATE TRIGGER `trg_ActualizarDescripcionCurso` AFTER UPDATE ON `cursos` FOR EACH ROW BEGIN
    -- Realizar un respaldo de descripciones antiguas en otra tabla (por ejemplo, backup_descripciones)
    INSERT INTO backup_descripciones (id_leccion, antigua_descripcion)
    SELECT id_leccion, descripcion
    FROM lecciones
    WHERE id_curso = NEW.id_curso;

    -- Actualizar descripciones
    UPDATE lecciones
    SET descripcion = NEW.descripcion
    WHERE id_curso = NEW.id_curso;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lecciones`
--

CREATE TABLE `lecciones` (
  `id_leccion` int(11) NOT NULL,
  `id_curso` int(11) DEFAULT NULL,
  `titulo` varchar(100) NOT NULL,
  `contenido` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_notificaciones`
--

CREATE TABLE `mensajes_notificaciones` (
  `id_mensaje` int(11) NOT NULL,
  `id_emisor` int(11) DEFAULT NULL,
  `id_receptor` int(11) DEFAULT NULL,
  `mensaje` text DEFAULT NULL,
  `fecha_hora` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Disparadores `mensajes_notificaciones`
--
DELIMITER $$
CREATE TRIGGER `trg_RegistrarMensaje` AFTER INSERT ON `mensajes_notificaciones` FOR EACH ROW BEGIN
    INSERT INTO registros_accesos (id_usuario, accion_realizada)
    VALUES (NEW.id_emisor, CONCAT('Envío de mensaje a ', NEW.id_receptor));
    INSERT INTO registros_accesos (id_usuario, accion_realizada)
    VALUES (NEW.id_receptor, CONCAT('Recepción de mensaje de ', NEW.id_emisor));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas_respuestas`
--

CREATE TABLE `preguntas_respuestas` (
  `id_pregunta` int(11) NOT NULL,
  `id_leccion` int(11) DEFAULT NULL,
  `pregunta` text DEFAULT NULL,
  `respuesta_correcta` text DEFAULT NULL,
  `respuesta_incorrecta1` text DEFAULT NULL,
  `respuesta_incorrecta2` text DEFAULT NULL,
  `respuesta_incorrecta3` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `progreso`
--

CREATE TABLE `progreso` (
  `id_progreso` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_leccion` int(11) DEFAULT NULL,
  `intentos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros_accesos`
--

CREATE TABLE `registros_accesos` (
  `id_registro` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `fecha_hora` timestamp NOT NULL DEFAULT current_timestamp(),
  `accion_realizada` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo_electronico` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `rol` enum('estudiante','profesor','administrador') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Disparadores `usuarios`
--
DELIMITER $$
CREATE TRIGGER `trg_EliminarUsuario` AFTER DELETE ON `usuarios` FOR EACH ROW BEGIN
    -- Realizar un respaldo de registros de progreso en otra tabla (por ejemplo, backup_progreso)
    INSERT INTO backup_progreso (id_usuario, id_leccion, intentos)
    SELECT id_usuario, id_leccion, intentos
    FROM progreso
    WHERE id_usuario = OLD.id_usuario;

    -- Eliminar registros de progreso
    DELETE FROM progreso WHERE id_usuario = OLD.id_usuario;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `trg_RegistrarAcceso` AFTER INSERT ON `usuarios` FOR EACH ROW BEGIN
    INSERT INTO registros_accesos (id_usuario, accion_realizada)
    VALUES (NEW.id_usuario, 'Registro de nuevo usuario');
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_estudiantes_cursos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `vista_estudiantes_cursos` (
`nombre_estudiante` varchar(50)
,`nombre_curso` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_lecciones_completadas`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `vista_lecciones_completadas` (
`nombre_estudiante` varchar(50)
,`nombre_curso` varchar(100)
,`titulo_leccion` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_progreso_estudiantes`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `vista_progreso_estudiantes` (
`nombre_estudiante` varchar(50)
,`nombre_curso` varchar(100)
,`titulo_leccion` varchar(100)
,`intentos_restantes` int(11)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_estudiantes_cursos`
--
DROP TABLE IF EXISTS `vista_estudiantes_cursos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_estudiantes_cursos`  AS SELECT `u`.`nombre` AS `nombre_estudiante`, `c`.`nombre` AS `nombre_curso` FROM (((`usuarios` `u` left join `progreso` `p` on(`u`.`id_usuario` = `p`.`id_usuario`)) left join `lecciones` `l` on(`p`.`id_leccion` = `l`.`id_leccion`)) left join `cursos` `c` on(`l`.`id_curso` = `c`.`id_curso`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_lecciones_completadas`
--
DROP TABLE IF EXISTS `vista_lecciones_completadas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_lecciones_completadas`  AS SELECT `u`.`nombre` AS `nombre_estudiante`, `c`.`nombre` AS `nombre_curso`, `l`.`titulo` AS `titulo_leccion` FROM (((`usuarios` `u` join `progreso` `p` on(`u`.`id_usuario` = `p`.`id_usuario`)) join `lecciones` `l` on(`p`.`id_leccion` = `l`.`id_leccion`)) join `cursos` `c` on(`l`.`id_curso` = `c`.`id_curso`)) WHERE `p`.`intentos` = 0 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_progreso_estudiantes`
--
DROP TABLE IF EXISTS `vista_progreso_estudiantes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_progreso_estudiantes`  AS SELECT `u`.`nombre` AS `nombre_estudiante`, `c`.`nombre` AS `nombre_curso`, `l`.`titulo` AS `titulo_leccion`, `p`.`intentos` AS `intentos_restantes` FROM (((`usuarios` `u` join `progreso` `p` on(`u`.`id_usuario` = `p`.`id_usuario`)) join `lecciones` `l` on(`p`.`id_leccion` = `l`.`id_leccion`)) join `cursos` `c` on(`l`.`id_curso` = `c`.`id_curso`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `backup_descripciones`
--
ALTER TABLE `backup_descripciones`
  ADD PRIMARY KEY (`id_backup`);

--
-- Indices de la tabla `backup_progreso`
--
ALTER TABLE `backup_progreso`
  ADD PRIMARY KEY (`id_backup`);

--
-- Indices de la tabla `comentarios_evaluaciones`
--
ALTER TABLE `comentarios_evaluaciones`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_leccion` (`id_leccion`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id_curso`);

--
-- Indices de la tabla `lecciones`
--
ALTER TABLE `lecciones`
  ADD PRIMARY KEY (`id_leccion`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Indices de la tabla `mensajes_notificaciones`
--
ALTER TABLE `mensajes_notificaciones`
  ADD PRIMARY KEY (`id_mensaje`),
  ADD KEY `id_emisor` (`id_emisor`),
  ADD KEY `id_receptor` (`id_receptor`);

--
-- Indices de la tabla `preguntas_respuestas`
--
ALTER TABLE `preguntas_respuestas`
  ADD PRIMARY KEY (`id_pregunta`),
  ADD KEY `id_leccion` (`id_leccion`);

--
-- Indices de la tabla `progreso`
--
ALTER TABLE `progreso`
  ADD PRIMARY KEY (`id_progreso`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_leccion` (`id_leccion`);

--
-- Indices de la tabla `registros_accesos`
--
ALTER TABLE `registros_accesos`
  ADD PRIMARY KEY (`id_registro`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `backup_descripciones`
--
ALTER TABLE `backup_descripciones`
  MODIFY `id_backup` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `backup_progreso`
--
ALTER TABLE `backup_progreso`
  MODIFY `id_backup` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comentarios_evaluaciones`
--
ALTER TABLE `comentarios_evaluaciones`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lecciones`
--
ALTER TABLE `lecciones`
  MODIFY `id_leccion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_notificaciones`
--
ALTER TABLE `mensajes_notificaciones`
  MODIFY `id_mensaje` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `preguntas_respuestas`
--
ALTER TABLE `preguntas_respuestas`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `progreso`
--
ALTER TABLE `progreso`
  MODIFY `id_progreso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registros_accesos`
--
ALTER TABLE `registros_accesos`
  MODIFY `id_registro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios_evaluaciones`
--
ALTER TABLE `comentarios_evaluaciones`
  ADD CONSTRAINT `comentarios_evaluaciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `comentarios_evaluaciones_ibfk_2` FOREIGN KEY (`id_leccion`) REFERENCES `lecciones` (`id_leccion`);

--
-- Filtros para la tabla `lecciones`
--
ALTER TABLE `lecciones`
  ADD CONSTRAINT `lecciones_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`);

--
-- Filtros para la tabla `mensajes_notificaciones`
--
ALTER TABLE `mensajes_notificaciones`
  ADD CONSTRAINT `mensajes_notificaciones_ibfk_1` FOREIGN KEY (`id_emisor`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `mensajes_notificaciones_ibfk_2` FOREIGN KEY (`id_receptor`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `preguntas_respuestas`
--
ALTER TABLE `preguntas_respuestas`
  ADD CONSTRAINT `preguntas_respuestas_ibfk_1` FOREIGN KEY (`id_leccion`) REFERENCES `lecciones` (`id_leccion`);

--
-- Filtros para la tabla `progreso`
--
ALTER TABLE `progreso`
  ADD CONSTRAINT `progreso_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `progreso_ibfk_2` FOREIGN KEY (`id_leccion`) REFERENCES `lecciones` (`id_leccion`);

--
-- Filtros para la tabla `registros_accesos`
--
ALTER TABLE `registros_accesos`
  ADD CONSTRAINT `registros_accesos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
