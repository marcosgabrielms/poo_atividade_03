"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorteador {
    nomes;
    constructor(nomes) {
        if (!nomes || nomes.length === 0) {
            throw new Error("O array de nomes não pode ser vazio.");
        }
        this.nomes = nomes;
    }
    sortear() {
        const indiceAleatorio = Math.floor(Math.random() * this.nomes.length);
        return this.nomes[indiceAleatorio];
    }
}
const listaDeNomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
console.log("Lista de participantes:", listaDeNomes);
const meuSorteador = new Sorteador(listaDeNomes);
const nomeSorteado = meuSorteador.sortear();
console.log(`O nome sorteado foi: ${nomeSorteado}`);
//# sourceMappingURL=09.js.map