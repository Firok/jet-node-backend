-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 10, 2018 at 08:48 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `itemdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `brand`) VALUES
('124', 'S8', '450000.0', 'Samsung'),
('125', 'iPhone 7', '29999.0', 'Apple'),
('127', 'iPhone 10', '59999.0', 'Apple'),
('128', 'LG 7', '59999.0', 'LG'),
('129', 'Nokia 650', '69999.0', 'Nokia'),
('130', 'Motorola 7', '69999.0', 'Motorola'),
('131', 'Galaxy S7', '69999.0', 'Galaxy'),
('132', 'Galaxy S6', '69999.0', 'Galaxy'),
('134', 'Galaxy S3', '19999.0', 'Galaxy'),
('135', 'Galaxy S4', '29999.0', 'Galaxy'),
('136', 'Samsung J5', '29999.0', 'Samsung'),
('137', 'Samsung J7', '29999.0', 'Samsung');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
