DROP DATABASE IF EXISTS clinica;
CREATE DATABASE clinica;
USE clinica;

CREATE TABLE pacientes (
    id int primary key not null auto_increment,
    nome varchar(50) not null,
    data_nascimento date not null,
    sexo varchar(10) not null,
    telefone varchar(15),
    email varchar(100),
    endereco varchar(200)
);

CREATE TABLE medicos (
    id int primary key not null auto_increment,
    nome varchar(50) not null,
    especialidade varchar(50) not null,
    crm varchar(20) not null,
    telefone varchar(15),
    email varchar(100)
);

CREATE TABLE consultas (
    id int primary key not null auto_increment,
    data_hora datetime not null,
    motivo varchar(200) not null,
    observacoes varchar(500),
    status varchar(20) not null,
    id_paciente int not null,
    id_medico int not null
);

alter table consultas add constraint pertence foreign key (id_paciente) references pacientes(id);
alter table consultas add constraint realiza foreign key (id_medico) references medicos(id);

describe pacientes;
describe medicos;
describe consultas;

show tables;