CREATE DATABASE pedidos;
USE pedidos;
CREATE TABLE produtos (
    id int primary key auto_increment,
    nome varchar(40) not null,
    descricao varchar (200) not null,
    volume decimal(10,2) not null,
    valor decimal(10,2) not null
)
CREATE TABLE pedidos (
    id int primary key not null auto_increment,
    cliente varchar(40) not null,
    cep varchar(10) not null,
    numero varchar(10),
    complemento varchar (20),
    data DATE not null default(CURDATE())
)