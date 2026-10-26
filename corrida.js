const prompt = require ("prompt-sync") ();

const tarifaBase = 5;
const pkm = 2;
const pmin = 0.5;

let km = Number (prompt("Quantos Km a corrida tem ?"));

let minuto = Number (prompt("Quantos minutos durou a corrida ?"));


let valorDaCorrida = tarifaBase + pkm * km + minuto * pmin
console.log("Total R$: " + valorDaCorrida.toFixed(2))
