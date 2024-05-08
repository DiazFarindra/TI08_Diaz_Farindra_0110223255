-- Active: 1711213473822@@127.0.0.1@3307@puskesmas

CREATE DATABASE IF NOT EXISTS puskesmas;

CREATE TABLE kecamatan (
    id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (`name`)
)

INSERT INTO kecamatan (`name`)
    VALUES
        ('cilodong')

CREATE TABLE kelurahan (
    id INT NOT NULL AUTO_INCREMENT,
    kecamatan_id INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (kecamatan_id) REFERENCES kecamatan(id),
    UNIQUE (`name`)
)

INSERT INTO kelurahan (kecamatan_id ,`name`)
    VALUES
        (1, 'sukamaju')

CREATE TABLE work_units (
    id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE patients (
    id INT NOT NULL AUTO_INCREMENT,
    kelurahan_id INT NOT NULL,
    code VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    birth_place VARCHAR(255) NOT NULL,
    birth_date VARCHAR(255) NOT NULL,
    gender CHAR(1),
    PRIMARY KEY (id),
    FOREIGN KEY (kelurahan_id) REFERENCES kelurahan(id),
    UNIQUE (email)
)

CREATE TABLE paramedics (
    id INT NOT NULL AUTO_INCREMENT,
    kelurahan_id INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    gender CHAR(1),
    birth_place VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    category ENUM('doctor', 'nurse') NOT NULL,
    phone VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (kelurahan_id) REFERENCES kelurahan(id),
    UNIQUE (phone)
)

CREATE TABLE checkups (
    id INT NOT NULL AUTO_INCREMENT,
    patient_id INT NOT NULL,
    paramedic_id INT NOT NULL,
    `date` DATE NOT NULL,
    `weight` INT NOT NULL,
    height INT NOT NULL,
    tension VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (paramedic_id) REFERENCES paramedics(id)
)

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (email)
)
