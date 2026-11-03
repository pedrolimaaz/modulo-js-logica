const prompt = require ("prompt-sync")()

let n = Number(prompt("Digite número(s): "));
let eprimo = true

while (!Number.isInteger(n) || n < 1 || n > 1_000_000) {
        console.log("Número ou caracter inválido")
        n = Number(prompt("Digite número(s): ")); 
}

if (n <= 1) {
    eprimo = false
}

for (let i = 2; i * i <= n; i++)

    if (n % i === 0) {
        eprimo = false
        break  
}

if (eprimo === true)
console.log("Primo");
    else 
        console.log("Não é primo");
