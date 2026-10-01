let macarrao = 30
let arroz = 20
let feijao = 10

function calcularTotal(macarrao, arroz, feijao){
    return macarrao + arroz + feijao
}

function processarCompra(macarrao, arroz, feijao){
    let total = calcularTotal(macarrao, arroz, feijao)
    return total
}

let total = processarCompra(macarrao, arroz, feijao)
console.log("Preço total da compra foi R$" + total.toFixed(2))

if (total > 200){
    console.log("A compra falhou. O cartão não passou.")
} else {
    console.log("A compra foi um sucesso. Volte sempre!")
}