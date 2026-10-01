const listaChamada = require("./lista.json")
console.log(listaChamada)

listaChamada.forEach(aluno, indice =>{
    if(aluno.nota < 5){
        console.log(aluno.nome + " reprovado")
        listaChamada[indice].situacao = "Reprovado"
    }else{
        console.log(aluno.nome + " aprovado")
        listaChamada[indice].situacao = "Aprovado"
    }}
)
console.log(listaChamada)