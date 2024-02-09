// Tabela de Operadores em JavaScript

// Aritméticos
let soma = 5 + 3;        // Adição
let subtracao = 8 - 2;    // Subtração
let multiplicacao = 4 * 6; // Multiplicação
let divisao = 10 / 2;      // Divisão
let modulo = 15 % 4;       // Módulo (resto da divisão)

// Atribuição
let x = 10;              // Atribuição simples
x += 5;                  // Atribuição de adição
x -= 3;                  // Atribuição de subtração
x *= 2;                  // Atribuição de multiplicação
x /= 4;                 // Atribuição de divisão

// Comparação
let igualdade = 5 == '5'; // Igualdade (com coerção de tipo)
let igualdadeEstrita = 5 === '5'; // Igualdade estrita (sem coerção de tipo)
let diferente = 10 != 8;  // Diferença (com coerção de tipo)
let diferenteEstrito = 10 !== '10'; // Diferença estrita (sem coerção de tipo)
let maiorQue = 15 > 10;   // Maior que
let menorQue = 8 < 12;    // Menor que
let maiorIgual = 20 >= 20; // Maior ou igual a
let menorIgual = 7 <= 7;   // Menor ou igual a

// Lógicos
let andLogico = true && false; // AND lógico
let orLogico = true || false;  // OR lógico
let notLogico = !true;         // NOT lógico

// Bitwise
let bitwiseAnd = 5 & 3;   // AND bitwise
let bitwiseOr = 5 | 3;    // OR bitwise
let bitwiseXor = 5 ^ 3;   // XOR bitwise
let bitwiseNot = ~5;      // NOT bitwise
let leftShift = 5 << 1;   // Deslocamento à esquerda
let rightShift = 5 >> 1;  // Deslocamento à direita
let zeroFillRightShift = 5 >>> 1; // Deslocamento à direita com preenchimento de zero

// Outros
let condicional = (x > 0) ? 'Positivo' : 'Negativo'; // Operador condicional (ternário)
let typeofExemplo = typeof x; // Tipo de dado

// Concatenação de strings
let string1 = 'Olá';
let string2 = ' Mundo!';
let concatenacao = string1 + string2;

// Operador de coalescência nula (nullish coalescing)
let valorNulo = null;
let valorPadrao = 'Valor Padrão';
let resultadoCoalescencia = valorNulo ?? valorPadrao;

// Exibindo resultados
console.log('Soma:', soma);
console.log('Multiplicação:', multiplicacao);
console.log('Atribuição:', x);
console.log('Igualdade:', igualdade);
console.log('AND lógico:', andLogico);
console.log('Deslocamento à direita:', rightShift);
console.log('Concatenação de strings:', concatenacao);
console.log('Coalescência nula:', resultadoCoalescencia);
