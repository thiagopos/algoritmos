// Receba o valor de um depósito em poupança. Calcule e mostre o valor após 1 mês de aplicação sabendo que rende 1,3% a. m.

let valorDeposito = 10000
let taxaRendimento = 0.013

const valorAplicacao = valorDeposito * (1 + taxaRendimento);

console.log(valorAplicacao.toFixed(2))