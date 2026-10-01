# API Inventário

Projeto da Aula 05 de Programação Back-End utilizando Node.js, Express e um arquivo JSON para armazenar os dados do inventário.

## Tecnologias
- VS Code
- Node.js
- JavaScript
- Express
- JSON
- Thunder Client

## Como executar 
1. Clone o repositório.
2. Abra a pasta no VS Code.
3. No terminal execute:
```bash
npm install
npm run dev
```
4. Teste as rotas utilizando o Thunder Client.

---
## Rotas

```
POST    http://localhost:3000/inventario
GET     http://localhost:3000/inventario
GET     http://localhost:3000/inventario/:id
PUT     http://localhost:3000/inventario/:id
DELETE  http://localhost:3000/inventario/:id
```

---
## Exemplos de requisições

### POST
```json
{
    "item": "Impressora",
    "local": "Secretaria",
    "dataRegistro": "2026-09-10",
    "valor": 650,
    "patrimonio": "203"
}
```

### PUT
```json
{
    "item": "Ventilador Grande",
    "local": "Sala C",
    "dataRegistro": "2026-09-12",
    "valor": 220,
    "patrimonio": "201"
}
```

---
## Testes com Thunder Client

### Tela 01 - GET
<img src="tela01_get.jpeg">

### Tela 02 - POST
<img src="tela02_post.jpeg">

### Tela 03 - PUT
<img src="tela03_put.jpeg">

### Tela 04 - Resultado do POST e PUT
<img src="tela04_get.jpeg">

### Tela 05 - DELETE
<img src="tela05_delete.jpeg">

### Tela 06 - Resultado do DELETE
<img src="tela06_get.jpeg">

### Tela 07 - GET por ID
<img src="tela07_getid.jpeg">

### Tela 08 - Exemplo errado de GET por ID
<img src="tela08_getid.jpeg">

---

## Autor
**Bianca Giovedy Pagotto**