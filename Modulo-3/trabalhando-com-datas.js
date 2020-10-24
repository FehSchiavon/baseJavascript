// Meses Começam no ZERO!

const dataAniversario = new Date(2000, 0, 20)
// console.log(dataAniversario)

const primeiraDataDoJs = new Date(0)
// console.log(primeiraDataDoJs)


const hoje = new Date()
// console.log(hoje.toString()) // Data sua regiao
// console.log(hoje.toLocaleDateString()) // Data da sua máquina

// ===ISO STRING=== // é o formato recomendado
// console.log(hoje.toISOString())



// ===Dia de Hoje=== // é formato do dia que queremos
const dia = hoje.getDate()
hoje.setDate(dia + 5) // +5 dias // console.log(hoje)
