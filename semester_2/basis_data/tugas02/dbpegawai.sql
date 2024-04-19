-- Active: 1711213473822@@127.0.0.1@3307@dbpegawai

-- no 1
CREATE DATABASE IF NOT EXISTS dbpegawai;

-- no 2
USE dbpegawai;

-- no 3
CREATE TABLE divisi (
    id INT NOT NULL AUTO_INCREMENT,
    nama varchar(30) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (nama)
);

-- no 4
DESC divisi;

-- no 5
CREATE TABLE jabatan (
    id INT AUTO_INCREMENT NOT NULL,
    nama VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (nama)
);

-- no 6
DESC jabatan;

-- no 7
CREATE TABLE pegawai (
    id INT AUTO_INCREMENT NOT NULL,
    nip CHAR(5) NOT NULL,
    nama VARCHAR(30) NOT NULL,
    gender ENUM('laki-laki', 'perempuan') NOT NULL,
    tmp_lahir VARCHAR(30) NOT NULL,
    tgl_lahir DATE NOT NULL,
    iddivisi INT NOT NULL,
    idjabatan INT NOT NULL,
    alamat TEXT,
    PRIMARY KEY (id),
    UNIQUE (nip),
    FOREIGN KEY (iddivisi) REFERENCES divisi(id),
    FOREIGN KEY (idjabatan) REFERENCES jabatan(id)
);

-- no 8
DESC pegawai;

-- no 9
SHOW TABLES;

-- no 10
INSERT INTO divisi (nama)
    VALUES
        ('SDM'),
        ('Keuangan'),
        ('Marketing'),
        ('IT');

-- no 11
SELECT * FROM divisi;

-- no 12
INSERT INTO jabatan (nama)
    VALUES
        ('Direktur'),
        ('Manajer'),
        ('Asisten Manager'),
        ('Staff');

-- no 13
SELECT * FROM jabatan;

-- no 14
INSERT INTO pegawai (nip, nama, gender, tmp_lahir, tgl_lahir, iddivisi, idjabatan, alamat)
    VALUES
        ('001', 'Budi Santoso', 'laki-laki', 'Bogor', '1985-06-12', 1, 2, 'Jakarta'),
        ('002', 'Siti Rahmawati', 'perempuan', 'Depok', '1990-03-28', 1, 1, 'Jakarta'),
        ('003', 'Joko Wibowo', 'laki-laki', 'Jakarta', '1988-11-05', 1, 3, 'Jakarta'),
        ('004', 'Rina Susanti', 'perempuan', 'Surabaya', '1992-07-17', 1, 4, 'Jakarta'),
        ('005', 'Agus Setiawan', 'laki-laki', 'Bandung', '1987-02-22', 1, 2, 'Jakarta'),
        ('006', 'Indah Permatasari', 'perempuan', 'Bogor', '1995-09-03', 2, 3, 'Jakarta'),
        ('007', 'Andi Wijaya', 'laki-laki', 'Depok', '1983-04-19', 2, 1, 'Jakarta'),
        ('008', 'Dewi Lestari', 'perempuan', 'Jakarta', '1991-12-27', 2, 4, 'Jakarta'),
        ('009', 'Eko Asep Prasetyo', 'laki-laki', 'Surabaya', '1989-08-14', 2, 2, 'Jakarta'),
        ('010', 'Ratna Sari', 'perempuan', 'Bandung', '1994-05-09', 2, 3, 'Jakarta'),
        ('011', 'Hadi Gunawan', 'laki-laki', 'Bogor', '1986-10-31', 3, 4, 'Jakarta'),
        ('012', 'Ayu Lestari', 'perempuan', 'Depok', '1993-01-21', 3, 1, 'Jakarta'),
        ('013', 'Dedi Susanto', 'laki-laki', 'Jakarta', '1982-06-15', 3, 2, 'Jakarta'),
        ('014', 'Rinasari Wati', 'perempuan', 'Surabaya', '1996-03-08', 3, 3, 'Jakarta'),
        ('015', 'Andi Asep Setiawan', 'laki-laki', 'Bandung', '1984-11-25', 3, 4, 'Jakarta'),
        ('016', 'Siti Nurhayati', 'perempuan', 'Bogor', '1998-07-02', 4, 1, 'Jakarta'),
        ('017', 'Muhammad Budi Hartono', 'laki-laki', 'Depok', '1980-09-18', 4, 2, 'Jakarta'),
        ('018', 'Rina Puspita', 'perempuan', 'Jakarta', '1997-02-12', 4, 3, 'Jakarta'),
        ('019', 'Joko Purwanto', 'laki-laki', 'Surabaya', '2001-05-29', 4, 4, 'Jakarta'),
        ('020', 'Siti Aminah', 'perempuan', 'Bandung', '2003-08-16', 4, 1, 'Jakarta');

-- no 15
SELECT * FROM pegawai

-- no 16
UPDATE pegawai
SET nama = 'Andi Kurniawan', gender = 'laki-laki', tmp_lahir = 'Surabaya'
WHERE nip = '005';

UPDATE pegawai
SET nama = 'Ratna Dewi', gender = 'perempuan', tmp_lahir = 'Bandung'
WHERE nip = '010';

UPDATE pegawai
SET nama = 'Muhammad Hendra Wijaya', gender = 'laki-laki', tmp_lahir = 'Bogor'
WHERE nip = '011';

UPDATE pegawai
SET nama = 'Rinasari Lestari', gender = 'perempuan', tmp_lahir = 'Depok'
WHERE nip = '014';

UPDATE pegawai
SET nama = 'Muhammad Rudi Hartono', gender = 'laki-laki', tmp_lahir = 'Jakarta'
WHERE nip = '017';

-- no 17
DELETE FROM pegawai
WHERE nip IN ('019', '020');

-- no 18
ALTER TABLE pegawai ADD COLUMN berat_badan FLOAT NOT NULL;

UPDATE pegawai SET berat_badan = 50.0 + (100.0 - 50.0) * RAND();

-- no 19
ALTER TABLE pegawai ADD COLUMN umur INTEGER NOT NULL;

UPDATE pegawai
SET umur = YEAR(CURDATE()) - YEAR(tgl_lahir) -
          (RIGHT(CONCAT(YEAR(CURDATE()), SUBSTRING(CURDATE(), 6)), 8) <
           RIGHT(CONCAT(YEAR(tgl_lahir), SUBSTRING(tgl_lahir, 6)), 8));

-- no 20
ALTER TABLE pegawai RENAME COLUMN gender TO jenis_kelamin;

-- no 21
SELECT nip, nama, jenis_kelamin, alamat FROM pegawai;

-- no 22
SELECT * FROM pegawai WHERE jenis_kelamin = 'laki-laki';

-- no 23
SELECT * FROM pegawai WHERE iddivisi = 4 AND jenis_kelamin = 'perempuan';

-- no 24
SELECT * FROM pegawai WHERE umur > 30 AND tmp_lahir = 'Jakarta';

-- no 25
SELECT * FROM pegawai WHERE iddivisi = 2 AND umur > 30 AND jenis_kelamin = 'perempuan';

-- no 26
SELECT * FROM pegawai ORDER BY nip;

-- no 27
SELECT * FROM pegawai ORDER BY jenis_kelamin;

-- no 28
SELECT * FROM pegawai WHERE nip IN ('001', '005', '010', '015', '020');

-- no 29
SELECT * FROM pegawai WHERE tmp_lahir NOT IN ('Bogor', 'Depok', 'Jakarta');

-- no 30
SELECT * FROM pegawai ORDER BY nama ASC;

-- no 31
SELECT * FROM pegawai ORDER BY berat_badan DESC;

-- no 32
SELECT * FROM pegawai ORDER BY id ASC LIMIT 5;

-- no 33
SELECT * FROM pegawai ORDER BY id ASC LIMIT 5 OFFSET 13;

-- 34
SELECT COUNT(*) AS jumlah_pegawai FROM pegawai;

-- 35
SELECT nip, nama, umur FROM pegawai WHERE umur = (SELECT MAX(umur) FROM pegawai);

-- no 36
SELECT nip, nama, berat_badan FROM pegawai WHERE berat_badan = (SELECT MIN(berat_badan) FROM pegawai);

-- no 37
SELECT AVG(umur) AS umur_rata_rata FROM pegawai;

-- no 38
SELECT COUNT(*) AS jumlah_pegawai FROM pegawai WHERE jenis_kelamin = 'laki-laki' AND umur > 40 AND idjabatan = 2;

-- no 39
SELECT COUNT(*) AS jumlah_pegawai FROM pegawai WHERE jenis_kelamin = 'P' AND umur < 40 AND idjabatan = 4;

-- no 40
SELECT COUNT(*) AS jumlah_pegawai FROM pegawai WHERE jenis_kelamin = 'perempuan';

-- no 41
SELECT SUM(iddivisi = 1) AS jumlah_pegawai FROM pegawai;

-- no 42
SELECT iddivisi, COUNT(*) AS jumlah_pegawai FROM pegawai GROUP BY iddivisi;

-- no 43
SELECT jenis_kelamin, COUNT(*) AS jumlah_pegawai FROM pegawai GROUP BY jenis_kelamin HAVING COUNT(*) >= 9;

-- no 44
SELECT * FROM pegawai WHERE nama LIKE 'Muhammad%';

-- no 45
SELECT * FROM pegawai WHERE nama LIKE '%Santoso';

-- no 46
SELECT * FROM pegawai WHERE nama LIKE '%Asep%';

-- no 47
SELECT * FROM pegawai WHERE nama LIKE '____s%';
