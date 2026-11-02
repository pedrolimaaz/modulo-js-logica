const prompt = require ("prompt-sync")()

const x = Number(prompt("Digite um número inteiro de 1 a 100: "));

if (!Number.isInteger (x) || x < 1 || x > 100) {
    console.log("Número inválido" );
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(x + " x " + i + " = " + (x * i));
    }
}
