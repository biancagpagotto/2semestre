-- DML (Data Manipulation Language)
-- CRUD (Criar, Ler, Atualizar e Deletar)
-- DML CRUD (Insert, Select, Uptade, Delete)
USE pedidos;
-- Inserir dados na tabela de produtos
INSERT INTO produtos (nome, descricao, volume, valor) VALUE
('Abajur', 'Abajur Grande', 10, 15.00);
-- Ver os dados para conferência
SELECT * FROM produtos;
-- Excluir o produto inserido
DELETE FROM produtos WHERE id = 1;
-- Ver os dados para conferência
SELECT * FROM produtos;
-- Inserindo varios dados na tabela de produtos
INSERT INTO produtos (nome, descricao, volume, valor) VALUES
('Abajur', 'Abajur Grande', 10, 15.00),
('Abajur', 'Abajur Médio', 7, 10.00),
('Abajur', 'Abajur Paqueno', 5, 8.00),
('Porta jóias', 'Porta jóias Grande', 10, 12.00),
('Porta jóias', 'Porta jóias Médio', 7, 7.00),
('Porta jóias', 'Porta jóias Paqueno', 5, 5.00),
('Mini escada', 'Decoração para festas', 2, 17.00),
('Mini carruagem', 'Decoração para festas', 2, 18.00),
('Mini Kombi', 'Decoração para festas', 2, 25.00),
('Mini Fusca', 'Decoração para festas', 2, 25.00),
('Porta livros', 'Utilidade doméstica', 10, 20.00),
('Porta facas', 'Utilidade doméstica', 7, 15.00),
('Mini estante', 'Utilidade doméstica', 15, 15.00);