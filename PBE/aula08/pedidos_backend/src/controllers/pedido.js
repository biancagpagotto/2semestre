const pedidos = require("../../dados/pedidos.json")
const clientes = require("../../dados/clientes.json")
const itens = require("../../dados/itens.json")

const comporCliente = () => {
    pedidos.forEach(p => {
        p.cliente = clientes.find(c => c.id == p.cliente_id)
    })
}

const agregarItens = () => {
    pedidos.forEach(p => {
        p.itens = itens.filter(item => item.pedido_id == p.id)
    })
}

const calcTotais = () => {
    pedidos.forEach(p => {
        p.total = 0

        p.itens.forEach(item => {
            p.total += item.subtotal
        })
    })
}

const criar = (req, res) => {
    const novo = {
        id: pedidos.length + 1,
        cliente_id: req.body.cliente_id,
        data: req.body.data
    }

    pedidos.push(novo)

    res.json(novo)
}

const listar = (req, res) => {
    comporCliente()
    agregarItens()
    calcTotais()

    res.json(pedidos)
}

const alterar = (req, res) => {
    const pedido = pedidos.find(p => p.id == req.params.id)

    if (pedido) {
        pedido.cliente_id = req.body.cliente_id
        pedido.data = req.body.data

        res.json(pedido)
    }
    else {
        res.status(404).json("Id não encontrado")
    }
}

const excluir = (req, res) => {
    const indice = pedidos.findIndex(p => p.id == req.params.id)

    if (indice != -1) {
        pedidos.splice(indice, 1)

        res.json("Pedido excluído")
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