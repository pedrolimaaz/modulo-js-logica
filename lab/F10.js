const prompt = require ("prompt-sync")()

const media1 = Number(prompt("Qual a nota da prova 1: "));
const media2 = Number(prompt("Qual a nota da prova 2: "));
const media3 = Number(prompt("Qual a nota da prova 3: "));

mediaFinal = ((media1 + media2 + media3) / 3);

if  (media1 < 0 || media1 > 10 || media2 < 0 || media2 > 10 || media3 < 0 || media3 > 10){
    console.log("Notas deve ser entre 0 e 10 ! ");
} else {
    console.log("Sua média é: " + mediaFinal.toFixed(1));
}