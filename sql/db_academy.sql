-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 21-11-2025 a las 22:50:46
-- Versión del servidor: 8.0.43
-- Versión de PHP: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_academy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `access`
--

CREATE TABLE `access` (
  `id_access` int NOT NULL,
  `name` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `access`
--

INSERT INTO `access` (`id_access`, `name`) VALUES
(1, 'Basico'),
(2, 'Extranjero'),
(3, 'ESO'),
(4, 'Bachillerato'),
(5, 'FP'),
(6, 'Universidad'),
(7, 'Autodidacta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enrollment`
--

CREATE TABLE `enrollment` (
  `id_enroll` int NOT NULL,
  `id_student` int NOT NULL,
  `id_teacher` int NOT NULL,
  `id_language` int NOT NULL,
  `id_level` int NOT NULL,
  `init_date` date NOT NULL,
  `hours` int NOT NULL,
  `payment` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `enrollment`
--

INSERT INTO `enrollment` (`id_enroll`, `id_student`, `id_teacher`, `id_language`, `id_level`, `init_date`, `hours`, `payment`) VALUES
(2, 5, 1, 1, 5, '2025-11-15', 80, 1),
(3, 2, 3, 1, 1, '2025-11-14', 30, 1),
(4, 4, 6, 2, 2, '2025-11-14', 300, 0),
(5, 5, 5, 2, 4, '2025-11-14', 100, 1),
(6, 2, 2, 1, 1, '2025-11-04', 150, 1),
(7, 2, 1, 1, 5, '2025-11-17', 200, 1),
(8, 2, 2, 1, 2, '2025-11-08', 222, 0),
(9, 3, 4, 2, 3, '2025-11-08', 300, 1),
(10, 5, 5, 2, 4, '2025-11-03', 200, 1),
(11, 4, 5, 2, 2, '2025-11-10', 50, 1),
(12, 7, 4, 2, 1, '2025-11-24', 15, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `language`
--

CREATE TABLE `language` (
  `id_language` int NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='languages available';

--
-- Volcado de datos para la tabla `language`
--

INSERT INTO `language` (`id_language`, `name`) VALUES
(1, 'Inglés'),
(2, 'Francés');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `level`
--

CREATE TABLE `level` (
  `id_level` int NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `level`
--

INSERT INTO `level` (`id_level`, `name`) VALUES
(1, 'A2'),
(2, 'B1'),
(3, 'B2'),
(4, 'C1'),
(5, 'C2 Pro'),
(6, 'Adulto+'),
(7, 'Business');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `student`
--

CREATE TABLE `student` (
  `id_student` int NOT NULL,
  `dni` varchar(9) NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `tel` varchar(9) NOT NULL,
  `email` varchar(30) NOT NULL,
  `bdate` date NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `id_access` int NOT NULL,
  `credit` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `student`
--

INSERT INTO `student` (`id_student`, `dni`, `name`, `surname`, `tel`, `email`, `bdate`, `is_active`, `id_access`, `credit`) VALUES
(2, 'Y9977888X', 'Gabriela Maria', 'Celano', '666777888', 'xgceldia796@ieshnosmachado.org', '1984-04-13', 1, 6, 300),
(3, 'Z5566999Y', 'Andrea', 'Pelucci', '666777999', 'italiano@gmail.com', '1989-04-12', 0, 2, 500),
(4, '10200900A', 'Alaia', 'Solis', '666777666', 'alaia.zep.solis@gmail.com', '2000-08-11', 1, 3, 400),
(5, '10200900B', 'Remy', 'Fernandez', '666777555', 'ratatouille@gmail.com', '2015-07-10', 1, 3, 100),
(6, '10200301A', 'Benito', 'Perez', '123456789', 'esteban@correo.es', '2010-06-17', 1, 4, 0),
(7, '25800123L', 'Prueba', 'Tonton', '147852369', 'alan@brito.es', '2015-07-08', 1, 2, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teacher`
--

CREATE TABLE `teacher` (
  `id_teacher` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tel` varchar(9) NOT NULL,
  `salary` float NOT NULL,
  `registered_date` date NOT NULL,
  `native` tinyint(1) NOT NULL,
  `id_language` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='datos profesores y si estan disponibles ';

--
-- Volcado de datos para la tabla `teacher`
--

INSERT INTO `teacher` (`id_teacher`, `name`, `surname`, `email`, `tel`, `salary`, `registered_date`, `native`, `id_language`) VALUES
(1, 'Katie', 'Perry', 'champions@gjaacademy.com', '999888777', 2500, '2025-01-01', 1, 1),
(2, 'Giles', 'Knight', 'knight@gjaacademy.com', '999888666', 2250, '2023-09-15', 1, 1),
(3, 'Ana Maria', 'Lopez', 'ana.lopez@gjaacademy.com', '999888555', 1800, '2025-01-01', 0, 1),
(4, 'Anne Marie', 'Cardin', 'anne.cardin@gjaacademy.com', '999888444', 2500, '2025-01-01', 1, 2),
(5, 'François', 'Pierrefou', 'fran.pierrefou@gjaacademy.com', '999888333', 2250, '2023-09-15', 1, 2),
(6, 'Ana', 'De Armas', 'ana.dearmas@gjaacademy.com', '999888222', 1800, '2025-01-01', 0, 2),
(9, 'Angel ', 'Jiménez', 'email@email.com', '622147258', 2500, '2025-11-01', 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id_access`);

--
-- Indices de la tabla `enrollment`
--
ALTER TABLE `enrollment`
  ADD PRIMARY KEY (`id_enroll`),
  ADD KEY `fk_id_student` (`id_student`),
  ADD KEY `fk_id_teacher` (`id_teacher`),
  ADD KEY `fk_id_language` (`id_language`),
  ADD KEY `fk_id_level` (`id_level`);

--
-- Indices de la tabla `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`id_language`);

--
-- Indices de la tabla `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id_level`);

--
-- Indices de la tabla `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id_student`),
  ADD KEY `fk_id_access_student` (`id_access`);

--
-- Indices de la tabla `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id_teacher`),
  ADD KEY `fk_id_language2` (`id_language`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `access`
--
ALTER TABLE `access`
  MODIFY `id_access` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `enrollment`
--
ALTER TABLE `enrollment`
  MODIFY `id_enroll` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `language`
--
ALTER TABLE `language`
  MODIFY `id_language` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `level`
--
ALTER TABLE `level`
  MODIFY `id_level` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `student`
--
ALTER TABLE `student`
  MODIFY `id_student` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id_teacher` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `enrollment`
--
ALTER TABLE `enrollment`
  ADD CONSTRAINT `fk_id_language` FOREIGN KEY (`id_language`) REFERENCES `language` (`id_language`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_id_level` FOREIGN KEY (`id_level`) REFERENCES `level` (`id_level`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_id_student` FOREIGN KEY (`id_student`) REFERENCES `student` (`id_student`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_id_teacher` FOREIGN KEY (`id_teacher`) REFERENCES `teacher` (`id_teacher`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `fk_id_access_student` FOREIGN KEY (`id_access`) REFERENCES `access` (`id_access`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `fk_id_language2` FOREIGN KEY (`id_language`) REFERENCES `language` (`id_language`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
