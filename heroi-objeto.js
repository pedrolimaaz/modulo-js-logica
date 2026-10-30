// // ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 10;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];

const heroi = {
    nome: "Magno",
    vida: 10
}


// Teste de alteração da propriedade, ao mudar a propriedade da CONSTANTE herói
// eu consigo sem problemas, pois estou mudandp uma propriedade da constante,
// e não a constante em si.
console.log("Antes de mudar: ", heroi)

heroi.nome = "João"

console.log("Antes de mudar: ", heroi)
