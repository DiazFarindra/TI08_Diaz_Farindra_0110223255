-- Active: 1711213473822@@127.0.0.1@3307@dbkuliah

CREATE DATABASE dbkuliah;

CREATE TABLE jurusan (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nama VARCHAR(255) NOT NULL
);

CREATE TABLE mahasiswa (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nim INT NOT NULL,
    nama VARCHAR(255) NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    idjurusan INT NOT NULL,
    foto VARCHAR(255) NOT NULL,
    FOREIGN KEY (idjurusan) REFERENCES jurusan(id)
);


INSERT INTO
    jurusan (nama)
VALUES
    ('informatika'),
    ('sistem informasi'),
    ('bisnis digital'),
    ('akutansi'),
    ('hukum')

INSERT INTO
    mahasiswa (nim, nama, alamat, idjurusan, foto)
VALUES
    (0110223255, 'Diaz Farindra', 'depok', 1, 'foto-01.jpg'),
    (0110123456, 'Dzaka Dhiya', 'depok', 2, 'foto-02.jpg'),
    (0110123457, 'Aqsa Yudha', 'bogor', 3, 'foto-03.jpg'),
    (0110123458, 'John Doe', 'Jakarta Selatan', 4, 'foto-04.jpg'),
    (0110123459, 'Lorem Ipsum', 'Tangerang', 5, 'foto-05.jpg')
