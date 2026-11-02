const prompt = require ("prompt-sync")()

let numero = Number(prompt("Digite número(s) inteiro de 0 a 1 bilhão: "));
let soma = 0;

while (!Number.isInteger(numero) || numero < 0 || numero > 1_000_000_000) {
        console.log("Número ou caracter inválido")
        numero = Number(prompt("Digite número(s) inteiro de 0 a 1 bilhão: ")); 
}

while (numero > 0){
    soma += numero % 10;
    numero = Math.floor (numero / 10);
}

console.log("A soma do(s) algarismo é: " + soma);
