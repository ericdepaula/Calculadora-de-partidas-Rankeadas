function calcularPonto(vitoria, derrota) {
    let result = vitoria - derrota;
    return result;
}

let quantidadeVitoria = prompt("Digite a quantidade de Vitórias: ");
let quantidadeDerrota = prompt("Digite a quantidade de Derrotas: ");
// console.log(quantidadeVitoria)
// console.log(quantidadeDerrota)
let saldoVitorias = calcularPonto(quantidadeVitoria, quantidadeDerrota);
let nivel;

if (saldoVitorias <= 10) {
    nivel = "Ferro";
}
else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
}
else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
}
else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
}
else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
}
else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
}
else if (saldoVitorias >= 101) {
    nivel = "Imortal";
}


console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)