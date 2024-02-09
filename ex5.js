// Receba os coeficientes A, B e C de uma equação do 2º grau (AX²+BX+C=0). Calcule e mostre as raízes reais (considerar que a equação possue2 raízes).

let a = 2
let b = 0
let c = 10

const delta = b ** 2 - 4 * a * c;

if (delta >= 0) {
  const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
  const raiz2 = (-B + Math.sqrt(delta)) / (2 * A);

  console.log('As raízes reais são: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}');
} else {
  console.log ('A equação não possui raízes reais');
}