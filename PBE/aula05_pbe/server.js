const fs = require("fs")

let inventario = JSON.parse(
    fs.readFileSync("./dados/inventario.json")
)

const express = require("express")

const app = express()

app.use(express.json())

const porta = 3000

app.get("/inventario", (req, res) => {
    res.json(inventario)
})

app.post("/inventario", (req, res) => {

    const novo = req.body

    novo.id = inventario.length + 1

    inventario.push(novo)

    fs.writeFileSync(
        "./dados/inventario.json",
        JSON.stringify(inventario, null, 4)
    )

    res.status(201).json(novo)

})

app.get("/inventario/:id", (req, res) => {

    const id = Number(req.params.id)

    const item = inventario.find(i => i.id == id)

    if (item) {
        res.json(item)
    } else {
        res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

})

app.put("/inventario/:id", (req, res) => {

    const id = Number(req.params.id)

    const indice = inventario.findIndex(i => i.id == id)

    if (indice == -1) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    req.body.id = id

    inventario[indice] = req.body

    fs.writeFileSync(
        "./dados/inventario.json",
        JSON.stringify(inventario, null, 4)
    )

    res.json({
        mensagem: "Item atualizado com sucesso",
        item: inventario[indice]
    })

})

app.delete("/inventario/:id", (req, res) => {

    const id = Number(req.params.id)

    const indice = inventario.findIndex(i => i.id == id)

    if (indice == -1) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    inventario.splice(indice, 1)

    fs.writeFileSync(
        "./dados/inventario.json",
        JSON.stringify(inventario, null, 4)
    )

    res.json({
        mensagem: "Item excluído com sucesso"
    })

})
app.get("/inventario/:id", (req, res) => {

    const id = Number(req.params.id)

    const item = inventario.find(i => i.id == id)

    if (item) {
        res.json(item)
    } else {
        res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})