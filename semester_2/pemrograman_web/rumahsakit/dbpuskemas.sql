-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2024 at 01:00 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbpuskemas`
--

-- --------------------------------------------------------

--
-- Table structure for table `kelurahan`
--

CREATE TABLE `kelurahan` (
  `id` int(11) NOT NULL,
  `nama` varchar(45) DEFAULT NULL,
  `kec_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kelurahan`
--

INSERT INTO `kelurahan` (`id`, `nama`, `kec_id`) VALUES
(1, 'Limo', 1),
(2, 'Cipanas', 2),
(3, 'Pondok Labu', 3),
(4, 'Sawangan', 4),
(5, 'Beji', 5);

-- --------------------------------------------------------

--
-- Table structure for table `paramedik`
--

CREATE TABLE `paramedik` (
  `id` int(11) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `gender` char(1) NOT NULL,
  `tmp_lahir` varchar(30) NOT NULL,
  `tgl_lahir` date NOT NULL,
  `kategori` enum('Perawat','Bidan','Apoteker','Lainnya') DEFAULT NULL,
  `telpon` varchar(20) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `unit_kerja_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `paramedik`
--

INSERT INTO `paramedik` (`id`, `nama`, `gender`, `tmp_lahir`, `tgl_lahir`, `kategori`, `telpon`, `alamat`, `unit_kerja_id`) VALUES
(1, 'Dr. Syahrul', 'L', 'Bekasi', '2005-05-09', 'Apoteker', '085711019996', 'Telaga Murni', 1),
(2, 'Dr. Dwiki', 'L', 'Jakarta', '2015-12-05', 'Apoteker', '089978938295', 'Jl.Gandul', 2),
(3, 'Najwa', 'P', 'Bogor', '1999-08-25', 'Perawat', '08138294293232', 'Jl.Tanjungpura', 3),
(4, 'Bidan Kurnia', 'P', 'Sawangan', '1978-01-30', 'Bidan', '08982923829183', 'Jl.Ahmad', 4),
(5, 'Syahrul Mubaroq', 'L', 'depok', '2222-02-22', 'Apoteker', '0823891839', 'manggis2', 1),
(9, 'najwa', 'L', 'depok', '2000-02-01', 'Bidan', '0823891839', 'bekasi', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pasien`
--

CREATE TABLE `pasien` (
  `id` int(11) NOT NULL,
  `kode` varchar(10) DEFAULT NULL,
  `nama` varchar(45) DEFAULT NULL,
  `tmp_lahir` varchar(30) DEFAULT NULL,
  `tgl_lahir` date DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `alamat` varchar(100) DEFAULT NULL,
  `kelurahan_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasien`
--

INSERT INTO `pasien` (`id`, `kode`, `nama`, `tmp_lahir`, `tgl_lahir`, `gender`, `email`, `alamat`, `kelurahan_id`) VALUES
(2, '002', 'Hanna', 'Jakarta', '2003-10-06', 'P', 'hanna@example.com', 'Jl. Sakura 6', 3),
(3, '003', 'Siska', 'Semarang', '1995-03-22', 'P', 'siska@example.com', 'Jl. Layang 22', 5),
(4, '004', 'Aldrian', 'Solo', '1998-10-21', 'L', 'aldrian@example.com', 'Jl. Toxic 21', 3),
(5, '005', 'Naufal', 'Bogor', '2002-05-15', 'L', 'naufal@example.com', 'Jl. Halu 15', 2),
(15, '001', 'Syahrul Mubaroq', 'depok', '2222-02-22', 'L', 'zaenalarifin11122@gmail.com', 'bekasi', 1),
(16, '001', 'miko', 'depok', '2222-02-22', 'L', 'zaenalarifin11122@gmail.com', 'bekasi', 1),
(21, '008', 'ocil', 'depok', '3222-02-22', 'L', 'warlod717@gmail.com', 'bekasi', 4);

-- --------------------------------------------------------

--
-- Table structure for table `periksa`
--

CREATE TABLE `periksa` (
  `id` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `berat` double NOT NULL,
  `tinggi` double NOT NULL,
  `tensi` varchar(20) NOT NULL,
  `keterangan` varchar(100) NOT NULL,
  `pasien_id` int(11) NOT NULL,
  `dokter_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `periksa`
--

INSERT INTO `periksa` (`id`, `tanggal`, `berat`, `tinggi`, `tensi`, `keterangan`, `pasien_id`, `dokter_id`) VALUES
(1, '2024-03-24', 56, 73, '120', 'Sakit flu', 3, 3),
(2, '2024-02-07', 80, 175, '120/80', 'Sakit Batuk Berdahak', 6, 3),
(3, '2024-01-08', 56, 180, '110/80', 'Kekurangan Darah Merah', 4, 1),
(4, '2024-04-02', 75, 165, '120/80', 'Lahiran', 3, 4),
(5, '2000-02-20', 77, 167, '80', 'DBD', 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `unit_kerja`
--

CREATE TABLE `unit_kerja` (
  `id` int(11) NOT NULL,
  `nama` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `unit_kerja`
--

INSERT INTO `unit_kerja` (`id`, `nama`) VALUES
(1, 'Laboratorium'),
(2, 'Poli Umum'),
(3, 'IGD'),
(4, 'UGD');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
(1, 'user@gmail.com', '$2y$10$krKLUsJ5IiTUFj60NaeZce77qLGbfBYYjYIgB4iP6135pPqEshTJe', 'user'),
(2, 'admin@gmail.com', '$2y$10$HLOLH.cK1l7javR11CIaCeACZLRuDXZCXcF./xRnVi8Me16fnGhhS', 'admin'),
(3, 'user3@gmail.com', '$2y$10$5vm96QAO23f5XSd8DkVoAe7Z17T9NJLDSICO/CYT.WJLjPGCFlOzi', 'user'),
(4, 'user2@gmail.com', '$2y$10$L08diWGufozyFa0vPsS8xOiy8tbmDSSDjHCo9Mx0inRE2FO8J7fVW', 'user'),
(5, 'user4@gmail.com', '$2y$10$2EIQ6VYBt2UrA6qgGPqN.eu3157UanYo2P3AHhm9hFFsUVgvwmuzq', 'user'),
(6, 'user5@gmail.com', '$2y$10$OIw3wlBFKYlyHouhdW28vebBjTzYcKa9KSdGWoWyoiY.tPrEJxhTS', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kelurahan`
--
ALTER TABLE `kelurahan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paramedik`
--
ALTER TABLE `paramedik`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pasien`
--
ALTER TABLE `pasien`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kelurahan_id` (`kelurahan_id`);

--
-- Indexes for table `periksa`
--
ALTER TABLE `periksa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kelurahan`
--
ALTER TABLE `kelurahan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `paramedik`
--
ALTER TABLE `paramedik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pasien`
--
ALTER TABLE `pasien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `periksa`
--
ALTER TABLE `periksa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pasien`
--
ALTER TABLE `pasien`
  ADD CONSTRAINT `pasien_ibfk_1` FOREIGN KEY (`kelurahan_id`) REFERENCES `kelurahan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
