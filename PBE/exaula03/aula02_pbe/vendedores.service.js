let vendedores = require("./mockup.vendedores")

const cadastrar = (matricula, nome, salario, comissao) => {
    let vendedor = {
        matricula,
        nome,
        salario,
        comissao
    }
    vendedores.push(vendedor)
}

const listar = () => {
    vendedores.forEach((vendedor, indice) => {
        console.log(indice, vendedor)
    })
}

const buscar = (busca) => {
    let resultado = []

    vendedores.forEach((vendedor) => {
        if(JSON.stringify(vendedor).toLowerCase().includes(busca.toLowerCase())) {
            resultado.push(vendedor)
        }
    })

    console.log(resultado)
}

const buscarPorMatricula = (matricula) => {
    vendedores.forEach((vendedor) => {
        if(vendedor.matricula == matricula) {
            console.log(vendedor)
        }
    })
}

const buscarPorNome = (nome) => {
    vendedores.forEach((vendedor) => {
        if(vendedor.nome.toLowerCase().includes(nome.toLowerCase())) {
            console.log(vendedor)
        }
    })
}

const excluir = (indice) => {
    vendedores.splice(indice, 1)
}

const excluirPorMatricula = (matricula) => {
    vendedores.forEach((vendedor, indice) => {
        if(vendedor.matricula == matricula) {
            vendedores.splice(indice, 1)
        }
    })
}

cadastrar(4, "Gustavo", 1500, 0.10)
listar()
buscar("2800")
buscarPorMatricula(0)
buscarPorNome("Marina")
excluirPorMatricula(3)
listar()