function nomeDaFuncao (parametro1) {
    // bloco de codigo
}

function queDiaEHoje() {
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`)
}
// queDiaEHoje()

function soma(valor1, valor2) {
    console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2)
}
// soma(23, 21)


// Funcoes retornando valores
function soma(valor1, valor2) {
    return valor1 + valor2
}

const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho)

console.log('Resultado', resultado)


// Escopo das function
function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2
    return resultado
}

console.log(`O resultado da multiplicação é:`, multiplicar(10, 30))

