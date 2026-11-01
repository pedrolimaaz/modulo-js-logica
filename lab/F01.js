const prompt = require ("prompt-sync")()

const numero = Number(prompt("Digite número(s) inteiro de 1 a 1 milhão: "));
if (numero % 1 !== 0 || numero < 0 || numero > 1000000) {
    console.log("Número inválido")
} else {
    console.log("O último algarismo é: " + numero % 10);
}
