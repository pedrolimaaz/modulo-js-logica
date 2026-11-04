const prompt = require ("prompt-sync")()

let n = Number(prompt("Digite número(s): "));

while (!Number.isInteger(n) || n < 0 || n > 1_000_000_000) {
        console.log("Número ou caractere inválido")
        n = Number(prompt("Digite número(s): "));
}

const original = n
let inverso = 0

while (n > 0){ 
    const digito = n % 10
    inverso = inverso * 10 + digito
    n = Math.floor (n / 10);
}

if (inverso === original)
    console.log("Palíndromo")
else
    console.log("Não é palíndromo")
