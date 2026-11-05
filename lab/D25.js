
const K = 3;
const notas = [70, 75, 85, 60, 65, 55];

let corte = 0;
let qtdAprovados = 0;

let notasValida = true;

for (let i = 0; i < notas.length; i++) {
  if (!Number.isInteger(notas[i]) || notas[i] < 0 || notas[i] > 100) {
    notasValida = false;
  }
}

if (notasValida) {
  for (let C = 0; C <= 100; C++) {
    let contador = 0;

    for (let i = 0; i < notas.length; i++) {
      if (notas[i] >= C) {
        contador++;
      }
    }

    if (contador >= K) {
      corte = C;
      qtdAprovados = contador;
    }
  }

  console.log("Nota de corte: " + corte);
  console.log("Aprovados: " + qtdAprovados);
} else {
  console.log("Notas inválidas");
}