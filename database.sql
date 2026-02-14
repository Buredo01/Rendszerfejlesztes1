CREATE DATABASE konyvesbolt;
USE konyvesbolt;

CREATE TABLE Pozicio (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     megnevezes varchar(255) UNIQUE NOT NULL
) ENGINE = INNODB;

CREATE TABLE Felhasznalo (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nev varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    jelszo varchar(255) NOT NULL,
    pozicio_id INT NOT NULL DEFAULT 0,
    kivansag_lista TEXT DEFAULT NULL,
    FOREIGN KEY (pozicio_id) REFERENCES Pozicio(id)
) ENGINE = INNODB;

CREATE TABLE Kiado (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     megnevezes varchar(255) NOT NULL
) ENGINE = INNODB;

CREATE TABLE Mufaj (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     megnevezes varchar(255) NOT NULL
) ENGINE = INNODB;

CREATE TABLE Konyv (
    ISBN varchar(255) PRIMARY KEY NOT NULL,
    cim varchar(255) NOT NULL,
    szerzo varchar(255) NOT NULL,
    megjelenes_eve INT NOT NULL DEFAULT 0,
    ar INT NOT NULL DEFAULT 0,
    darab_szam INT NOT NULL DEFAULT 0,
    borito TEXT DEFAULT NULL,
    kiado_id INT NOT NULL DEFAULT 0,
    FOREIGN KEY (kiado_id) REFERENCES Kiado(id)
) ENGINE = INNODB;

CREATE TABLE KonyvMufajKapcsolat(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    konyv_id varchar(255) NOT NULL,
    mufaj_id INT NOT NULL,
    FOREIGN KEY (konyv_id) REFERENCES Konyv(ISBN),
    FOREIGN KEY (mufaj_id) REFERENCES Mufaj(id)
) ENGINE = INNODB;

CREATE TABLE Ertekeles (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    konyv_id varchar(255) NOT NULL,
    felhasznalo_id INT NOT NULL,
    szoveg varchar(255) NOT NULL DEFAULT "",
    csillag INT NOT NULL DEFAULT 0,
    statusz BOOLEAN DEFAULT 0,
    FOREIGN KEY (konyv_id) REFERENCES Konyv(ISBN),
    FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo(id)
) ENGINE = INNODB;

CREATE TABLE Kosar(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    felhasznalo_id INT NOT NULL,
    konyv_id varchar(255) NOT NULL,
    darab INT NOT NULL DEFAULT 1,
    FOREIGN KEY (konyv_id) REFERENCES Konyv(ISBN),
    FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo(id)
) ENGINE = INNODB;

CREATE TABLE Rendeles(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    felhasznalo_id INT NOT NULL,
    rendeles_datuma DATE NOT NULL,
    konyvek TEXT NOT NULL,
    szallitasi_cim TEXT NOT NULL,
    FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo(id),
    FOREIGN KEY (konyv_id) REFERENCES Konyv(ISBN)
) ENGINE = INNODB;