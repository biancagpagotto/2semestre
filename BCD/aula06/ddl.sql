DROP DATABASE IF EXISTS amparo_taxi;
CREATE DATABASE amparo_taxi;
USE amparo_taxi;

CREATE TABLE motorista(
    id int not null primary key auto_increment,
    nome varchar(100) not null,
    cpf varchar(15) not null unique,
    cnh varchar(20) not null unique,
    celular varchar(15) not null unique,
    email varchar(100) not null unique,
    obs text,
    status enum('ATIVO', 'INATIVO') default('ATIVO')
);

CREATE TABLE veiculo(
    placa varchar(10) not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    cor varchar(20) not null,
    ano int not null,
    motorista_id int not null
);

CREATE TABLE passageiro(
    id int not null primary key auto_increment,
    nome varchar(100) not null,
    cpf varchar(15) not null unique,
    cnh varchar(20) not null unique,
    celular varchar(15) not null unique,
    email varchar(100) not null unique,
    obs text,
    status enum('ATIVO', 'BANIDO') default('ATIVO')
);