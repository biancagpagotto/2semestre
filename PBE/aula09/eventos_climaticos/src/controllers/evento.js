const con = require('../db')

const cadastrar = (req, res) => {
    const { usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto } = req.body

    try {
        const query = 'INSERT INTO evento (usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto) VALUES (?, ?, ?, ?, ?, ?)'

        con.query(query, [usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto], (err, results) => {
            if (err) {
                console.error(err)
                res.status(500).json({ error: 'Erro ao cadastrar evento' })
            } else {
                res.status(201).json({ message: 'Evento cadastrado com sucesso', results })
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            error: 'Erro ao cadastrar evento',
            details: 'Informe usuarioId, cidade, tipoEvento, temperaturaMaxima, data e nivelImpacto'
        })
    }
}
const listar = (req, res) => {
    const query = 'SELECT * FROM evento'

    con.query(query, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar eventos' })
        } else {
            res.status(200).json(results)
        }
    })
}

module.exports = {
    cadastrar,
    listar
}