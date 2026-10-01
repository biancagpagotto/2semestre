const itens = require("../../dados/itens.json")
const produtos = require("../../dados/produtos.json")
const comporProduto = () => {
    itens.forEach(item => {
        item.produto = produtos.find(p => p.id == item.produto_id)
    })
}

const criar = (req, res) => {
    const novo = {
        id: itens.length + 1,
        pedido_id: req.body.pedido_id,
        produto_id: req.body.produto_id,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    }

    novo.subtotal = novo.preco * novo.quantidade

    itens.push(novo)

    res.json(novo)
}

const listar = (req, res) => {
    itens.forEach(item => {
        item.subtotal = item.preco * item.quantidade
    })
    comporProduto()

    res.json(itens)
}

const alterar = (req, res) => {
    const item = itens.find(i => i.id == req.params.id)

    if (item) {
        item.pedido_id = req.body.pedido_id
        item.produto_id = req.body.produto_id
        item.preco = req.body.preco
        item.quantidade = req.body.quantidade

        item.subtotal = item.preco * item.quantidade

        res.json(item)
    }
    else {
        res.status(404).json("Id não encontrado")
    }
}

const excluir = (req, res) => {
    const indice = itens.findIndex(i => i.id == req.params.id)

    if (indice != -1) {
        itens.splice(indice, 1)

        res.json("Item excluído")
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