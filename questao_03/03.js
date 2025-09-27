"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatarArray(numeros) {
    let resultado = "";
    numeros.forEach((numero, index) => {
        if (index > 0) {
            resultado += "-";
        }
        resultado += numero;
    });
    return resultado;
}
let minhaLista = [1, 2, 3, 4];
let stringFormatada = formatarArray(minhaLista);
console.log(stringFormatada);
let outraLista = [10, 20, 30];
console.log(formatarArray(outraLista));
//# sourceMappingURL=03.js.map