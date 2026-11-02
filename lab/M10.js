const prompt = require ("prompt-sync")()

let valorSaque = parseInt(prompt("Qual o valor do saque ? "));
let nota100 = 0
let nota50 = 0
let nota20 = 0
let nota10 = 0

if (valorSaque <= 0 || valorSaque >= 10_000 || valorSaque % 10 !==0){
    console.log("Valor inválido !")
}else{
    nota100 =  Math.floor(valorSaque / 100)
    valorSaque = valorSaque % 100

    nota50 =  Math.floor(valorSaque / 50)
    valorSaque = valorSaque % 50

    nota20 =  Math.floor(valorSaque / 20)
    valorSaque = valorSaque % 20

    nota10 =  Math.floor(valorSaque / 10)
    valorSaque = valorSaque % 10

console.log("Notas de R$100,00: " + nota100);
console.log("Notas de R$50,00: " + nota50);
console.log("Notas de R$20,00: " + nota20);
console.log("Notas de R$10,00: " + nota10);
}
