CREATE DATABASE IF NOT EXISTS provisionamento_acessos;
USE provisionamento_acessos;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    cargo VARCHAR(100),
    departamento VARCHAR(100),
    status VARCHAR(20) NOT NULL
);

CREATE TABLE servidor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    hostname VARCHAR(100) NOT NULL,
    ip VARCHAR(45) NOT NULL,
    sistema_operacional VARCHAR(100),
    ambiente VARCHAR(20) NOT NULL
);

CREATE TABLE conta_acesso (
    id_conta INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_servidor INT NOT NULL,
    login VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL,
    data_criacao DATE NOT NULL,
    data_expiracao DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_servidor) REFERENCES servidor(id)
);

CREATE TABLE perfil_permissao (
    id_perfil INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    nivel_acesso VARCHAR(50) NOT NULL
);

CREATE TABLE acesso (
    id_acesso INT PRIMARY KEY AUTO_INCREMENT,
    id_conta INT NOT NULL,
    id_perfil INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_conta) REFERENCES conta_acesso(id_conta),
    FOREIGN KEY (id_perfil) REFERENCES perfil_permissao(id_perfil)
);