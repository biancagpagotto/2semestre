CREATE DATABASE gestao_pedidos;

USE gestao_pedidos;

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cep VARCHAR(11) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100)
);

CREATE TABLE telefone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    numero VARCHAR(15) NOT NULL,
    tipo VARCHAR(20) NOT NULL,

    FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    valor_unitario DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (id_cliente) REFERENCES cliente(id),
    FOREIGN KEY (id_produto) REFERENCES produto(id)
);