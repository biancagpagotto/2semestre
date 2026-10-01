const express = require("express")
const clubes = require("../dados.json")

const mostrarClubes = (req, res) => {
    calcularDados()
    res.send(clubes)
}

const novoClube = (req, res) => {
    if (req.body) {
        res.send("Clube recebido, em análise")
        clubes.push(req.body)
    } else {
        res.send("Erro ao receber clube")
    }
}

const calcularDados = () => {

    clubes.forEach(c => {
        c.jogos = c.vitorias + c.empates + c.derrotas
        c.pontos = (c.vitorias * 3) + c.empates
    })
}

const excluirClube = (req, res) => {
    const id = req.query.id

    clubes.forEach((clube, indice) => {
        if(clube.id == id){
            clubes.splice(indice, 1);
        }
});

    res.send("Clube excluído com sucesso");
};

const alterarClube = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    clubes.forEach((clube) => {
        if (clube.id == id) {
            clube.nome = dados.nome;
            clube.vitorias = dados.vitorias;
            clube.empates = dados.empates;
            clube.derrotas = dados.derrotas;
        }
    });

    res.send("Clube atualizado com sucesso!");
};

const app = express()

app.use(express.urlencoded({ extended: true }))

const porta = 3000

app.post("/", novoClube)
app.get("/", mostrarClubes)
app.delete("/", excluirClube);
app.put("/:id", alterarClube);

app.listen(porta, () => {
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
    console.log(`Servidor: http://127.0.0.1:${porta}`)
})