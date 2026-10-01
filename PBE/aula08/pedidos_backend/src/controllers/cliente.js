const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const novo = {
        id: clientes.length + 1,
        cpf: req.body.cpf,
        nome: req.body.nome
    }

    clientes.push(novo)

    res.json(novo)
}

const listar = (req, res) => {
    res.json(clientes)
}

const alterar = (req, res) => {
    const cliente = clientes.find(c => c.id == req.params.id)

    if (cliente) {
        cliente.cpf = req.body.cpf
        cliente.nome = req.body.nome

        res.json(cliente)
    }
    else {
        res.status(404).json("Id não encontrado")
    }
}

const excluir = (req, res) => {
    const indice = clientes.findIndex(c => c.id == req.params.id)

    if (indice != -1) {
        clientes.splice(indice, 1)

        res.json("Cliente excluído")
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