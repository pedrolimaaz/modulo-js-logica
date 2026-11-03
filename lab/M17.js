const times = [
    { nome: "Fluminense", v: 4, e: 1, d: 1 },
    { nome: "Flamengo", v: 3, e: 3, d: 0 },
    { nome: "Vasco", v: 3, e: 2, d: 1 },
    { nome: "Botafogo", v: 3, e: 0, d: 3 }
];
let lider = times[0]
let pontosLider = 3 * times[0].v + times[0].e

for (const time of times) {
    const pontos = 3 * time.v + time.e
    console.log(`${time.nome}: ${pontos} pontos`);
    if (pontos > pontosLider){
        lider = time
        pontosLider = pontos
    } else if 
        (pontos === pontosLider && time.v > lider.v){
        lider = time
        }
    }

console.log(`Líder: ${lider.nome}`);