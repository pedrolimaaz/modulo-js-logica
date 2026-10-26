const prompt = require ("prompt-sync") ();

let saldo = Number (prompt("Qual o seu saldo ? "));
let valor = Number (prompt("Qual valor do pix ? "));

if (saldo >= valor) {
    saldo = saldo - valor;
    console.log ("Pix enviado. Saldo: R$", saldo.toFixed(2))
} else {
    console.log("Saldo insuficiente");
}
