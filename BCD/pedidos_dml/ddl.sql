-- CRUD (Criar, Ler, Atualizar e Deletar)
-- DDL (Data Definition Language)
-- CRUD DDL (Create, [Show, Describe], Alter, Drop)

-- Para criar do zero podemos excluir o banco se já existe e criar novamente
DROP DATABASE IF EXISTS pedidos;
-- Criar um banco de dados chamado "pedidos"
CREATE DATABASE pedidos;
-- Selecionar o banco de dados "pedidos" para uso
USE pedidos;
-- Criar a tabela de Produtos
CREATE TABLE produtos (
    id int primary key not null auto_increment,
    nome varchar(40) not null,
    descricao varchar(200) not null,
    volume decimal(10,2) not null,
    valor decimal(10,2) not null
);
-- Criar a tabela de Pedidos
CREATE TABLE pedidos (
    id int primary key not null auto_increment,
    cliente varchar(40) not null,
    cep varchar(10) not null,
    numero varchar(10),
    complemento varchar(20),
    data DATE not null default(CURDATE())
);
-- Criar a tabela de Itens do Pedido
CREATE TABLE itens (
    id int primary key not null auto_increment,
    id_pedido int not null,
    id_produto int not null,
    preco decimal(10,2) not null,
    quantidade int not null
);
-- Criando os relacionamentos, alterando a tabela de itens
alter table itens add constraint eh foreign key (id_produto) references produtos(id);
alter table itens add constraint possui foreign key (id_pedido) references pedidos(id);
-- Exibir os resultados
describe produtos;
describe pedidos;
describe itens;
show tables;