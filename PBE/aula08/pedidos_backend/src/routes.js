const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

router.get('/',rotaInicial)

router.post('/clientes',Cliente.criar)
router.get('/clientes',Cliente.listar)
router.put('/clientes',Cliente.alterar)
router.delete('/clientes',Cliente.excluir)

router.post('/pedidos',Pedido.criar)
router.get('/pedidos',Pedido.listar)
router.put('/pedidos',Pedido.alterar)
router.delete('/pedidos',Pedido.excluir)

module.exports = router