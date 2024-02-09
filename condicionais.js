// Condicionais
let idade = 25;

if (idade >= 18) {
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}

let diaDaSemana = 'Domingo';

switch (diaDaSemana) {
  case 'Segunda':
    console.log('É um dia de trabalho.');
    break;
  case 'Sábado':
  case 'Domingo':
    console.log('É um dia de folga.');
    break;
  default:
    console.log('É um dia comum.');
}
