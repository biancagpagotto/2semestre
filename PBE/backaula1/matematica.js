//Variáveis
x = 10
y = 2
//Operações
soma = x + y
sub = x - y
mult = x * y
div = x / y
resto = x % y
raiz = Math.sqrt(x)
potencia = Math.pow(x, y)
//Saídas com concatenação ex: 2+2 = 22
console.log("A soma de " + x + " + " + y + " = " + soma)
console.log("A subtração de " + x + " - " + y + " = " + sub)
//Saídas com aspas simples (apóstofre)
console.log('A multiplicação de ' + x + ' * ' + y + ' = ' + mult)
console.log('A divisão de ' + x + ' / ' + y + ' = ' + div)
console.log('O resto da divisão de ' + x + ' % ' + y + ' = ' + resto)
//Saídas com template string (crase)
console.log(`A raiz quadrada de ${x} = ${raiz}`)
console.log(`A potência de ${x} elevado a ${y} = ${potencia}`)