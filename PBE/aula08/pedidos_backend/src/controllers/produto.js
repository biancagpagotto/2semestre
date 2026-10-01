const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const novo = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
    }

    produtos.push(novo)

    res.json(novo)
}

const listar = (req, res) => {
    res.json(produtos)
}

const alterar = (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id)

    if (produto) {
        produto.nome = req.body.nome
        produto.preco = req.body.preco

        res.json(produto)
    }
    else {
        res.status(404).json("Id não encontrado")
    }
}

const excluir = (req, res) => {
    const indice = produtos.findIndex(p => p.id == req.params.id)

    if (indice != -1) {
        produtos.splice(indice, 1)

        res.json("Produto excluído")
    }
    else {
        res.status(404).json("Id não encontrado")
    }
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}