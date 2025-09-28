"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorteio {
    participantes = [];
    adicionar(nome) {
        if (nome && nome.trim() !== "") {
            this.participantes.push(nome);
            console.log(`"${nome}" foi adicionado(a) à lista de participantes.`);
        }
        else {
            console.log("Tentativa de adicionar um nome inválido.");
        }
    }
    sortear() {
        if (this.participantes.length === 0) {
            throw new Error("Não há participantes para realizar o sorteio.");
        }
        const indiceVencedor = Math.floor(Math.random() * this.participantes.length);
        return this.participantes[indiceVencedor];
    }
    mostrarParticipantes() {
        console.log("Lista atual de participantes:", this.participantes);
    }
}
const meuSorteio = new Sorteio();
console.log("--- Adicionando Participantes ---");
meuSorteio.adicionar("Alice");
meuSorteio.adicionar("Beto");
meuSorteio.adicionar("Carla");
meuSorteio.adicionar("Daniel");
console.log("---------------------------------");
meuSorteio.mostrarParticipantes();
try {
    const vencedor = meuSorteio.sortear();
    console.log(`\n O(A) grande vencedor(a) do sorteio é: ${vencedor}! `);
}
catch (error) {
    console.error(error.message);
}
//# sourceMappingURL=11.js.map