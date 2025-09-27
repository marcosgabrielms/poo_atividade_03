function ehPar(numero: number): boolean {
    return numero % 2 === 0;
}

const numero1 = 10;
const resultado1 = ehPar(numero1);
console.log(`O número ${numero1} é par? ${resultado1}`);

const numero2 = 5;
const resultado2 = ehPar(numero2);
console.log(`O número ${numero2} é par? ${resultado2}`);