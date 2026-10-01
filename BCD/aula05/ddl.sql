DROP DATABASE IF EXISTS pedidos;

CREATE DATABASE pedidos;

USE pedidos;

CREATE TABLE produtos (
    id int primary key not null auto_increment,
    nome varchar(40) not null,
    descricao varchar(200) not null,
    volume decimal(10,2) not null,
    valor decimal(10,2) not null
);

CREATE TABLE pedidos (
    id int primary key not null auto_increment,
    cliente varchar(40) not null,
    cep varchar(10) not null,
    numero varchar(10),
    complemento varchar(20),
    data DATE not null default(CURDATE())
);

CREATE TABLE itens (
    id int primary key not null auto_increment,
    id_pedido int not null,
    id_produto int not null,
    preco decimal(10,2) not null,
    quantidade int not null
);

alter table itens add constraint eh
foreign key (id_produto) references produtos(id);

alter table itens add constraint possui
foreign key (id_pedido) references pedidos(id);

describe produtos;
describe pedidos;
describe itens;
show tables;