const medias = [10, 7, 1.5, 3.5, 6.5, 8]
const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa", "Fábio"]
const mediaEscola = 7

for (let i = 0; i < medias.length; i++) {

    if (medias[i] >= mediaEscola) {
        console.log("Aluno(a): " + nomes[i] + ", está Aprovado " + "Nota: " + medias[i])
    } else {
        console.log("Aluno(a): " + nomes[i] + ", está Reprovado " + "Nota: " + medias[i])
    }
}


// console.log(medias[1]) // 7
// console.log(medias[5]) // 8
// console.log(medias[4]) // 6.5
// console.log(medias.length) // 6
// console.log(medias[10]) // undefined