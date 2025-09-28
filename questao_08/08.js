"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Array original
const numeros = [1, 2, 3, 4, 5];
console.log(`Array original: [${numeros.join(', ')}]`);
// 1. Usando .map para dobrar os elementos
const dobrados = numeros.map(n => n * 2);
console.log(`Array com valores dobrados: [${dobrados.join(', ')}]`);
// 2. Usando .reduce para somar os elementos do novo array
const somaTotal = dobrados.reduce((soma, numeroAtual) => soma + numeroAtual, 0);
console.log(`Soma total dos elementos dobrados: ${somaTotal}`);
//# sourceMappingURL=08.js.map