USE provisionamento_acessos;

INSERT INTO usuario (nome, email, cargo, departamento, status) VALUES
('Isabela Marchiori', 'isabela.marchiori@empresa.com', 'Gerente', 'Administrativo', 'Ativo'),
('Marina Moretti', 'marina.moretti@empresa.com', 'Analista de Sistemas', 'Tecnologia', 'Ativo'),
('Sofia Faria', 'sofia.faria@empresa.com', 'Desenvolvedora', 'Tecnologia', 'Ativo');

INSERT INTO servidor (nome, hostname, ip, sistema_operacional, ambiente) VALUES
('Servidor Web', 'SRV-WEB-01', '192.168.1.10', 'Ubuntu Server 24.04', 'Produção'),
('Servidor Banco', 'SRV-DB-01', '192.168.1.20', 'Ubuntu Server 24.04', 'Produção'),
('Servidor Testes', 'SRV-TEST-01', '192.168.1.30', 'Windows Server 2022', 'Testes');

INSERT INTO conta_acesso (id_usuario, id_servidor, login, status, data_criacao, data_expiracao) VALUES
(1, 1, 'isabela.marchiori', 'Ativa', '2026-09-14', NULL),
(2, 2, 'marina.moretti', 'Ativa', '2026-09-22', NULL),
(3, 3, 'sofia.faria', 'Ativa', '2026-09-06', '2026-10-10');

INSERT INTO perfil_permissao (nome, descricao, nivel_acesso) VALUES
('Leitura', 'Permite consultar informações sem alterar dados.', 'Baixo'),
('Desenvolvedor', 'Permite executar atividades de desenvolvimento no servidor.', 'Médio'),
('Administrador', 'Permite administrar recursos e configurações do servidor.', 'Alto');

INSERT INTO acesso (id_conta, id_perfil, data_inicio, data_fim, status) VALUES
(1, 2, '2026-09-14', NULL, 'Ativo'),
(2, 3, '2026-09-22', NULL, 'Ativo'),
(3, 1, '2026-09-06', '2026-10-10', 'Ativo');