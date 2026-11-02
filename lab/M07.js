const prompt = require ("prompt-sync")()

let tentativas = 0
let acertou = false


while (!acertou && tentativas < 3){

    let senha = prompt("Senha: ");
    tentativas++
    if (senha === "caju2026"){
        console.log("Acesso liberado");
        acertou = true

    }else if  (tentativas === 3) {
        console.log("Conta bloqueada");

    }else{ 
        console.log("Senha incorreta");
    }
}
