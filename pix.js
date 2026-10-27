const prompt = require ("prompt-sync") ();

let saldo = Number (prompt("Qual o seu saldo ? "));
let valor = Number (prompt("Qual valor do pix ? "));
let hora = Number (prompt("Que horas são (0 a 23) ? "));

if (saldo < valor) {
    console.log ("Saldo insuficiente");
} else if (hora >= 20 && valor > 1000) {
    console.log("Bloqueado: limite noturno");
} else {
    saldo = saldo - valor;
    console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
}