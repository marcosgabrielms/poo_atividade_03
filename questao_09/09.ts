class Sorteador {
    private nomes: string[];

    constructor(nomes: string[]) {
        if (!nomes || nomes.length === 0) {
            throw new Error("O array de nomes não pode ser vazio.");
        }
        this.nomes = nomes;
    }

    public sortear(): string {
        const indiceAleatorio = Math.floor(Math.random() * this.nomes.length);
        
       
        return this.nomes[indiceAleatorio]!;
    }
}



const listaDeNomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
console.log("Lista de participantes:", listaDeNomes);

const meuSorteador = new Sorteador(listaDeNomes);
const nomeSorteado = meuSorteador.sortear();
console.log(`O nome sorteado foi: ${nomeSorteado}`);