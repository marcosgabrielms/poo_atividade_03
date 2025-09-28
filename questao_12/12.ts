class JogoParImpar {
   
    public numeroJogador: number;
    public numeroMaquina: number;

    
    constructor(numeroJogador: number) {
        
        if (numeroJogador < 1 || numeroJogador > 10) {
            throw new Error("O número do jogador deve ser entre 1 e 10.");
        }
        this.numeroJogador = numeroJogador;
        
        this.numeroMaquina = 0;
    }

   
    public sortearMaquina(): void {
        
        this.numeroMaquina = Math.floor(Math.random() * 10) + 1;
    }

    
    public resultado(): 'par' | 'ímpar' {
        const soma = this.numeroJogador + this.numeroMaquina;
        
        return soma % 2 === 0 ? 'par' : 'ímpar';
    }

   
    public vencedor(escolhaDoJogador: 'par' | 'ímpar'): string {
        const resultadoFinal = this.resultado();

        if (escolhaDoJogador === resultadoFinal) {
            return "Jogador";
        } else {
            return "Máquina";
        }
    }
}


console.log("--- Rodada 1 ---");
try {
    
    const escolha = 'ímpar';
    const jogo1 = new JogoParImpar(5);

    
    jogo1.sortearMaquina();

    console.log(`Jogador escolheu: ${jogo1.numeroJogador}`);
    console.log(`Máquina sorteou: ${jogo1.numeroMaquina}`);

    const somaDosNumeros = jogo1.numeroJogador + jogo1.numeroMaquina;
    const resultadoParImpar = jogo1.resultado();
    console.log(`A soma é ${somaDosNumeros}, que é ${resultadoParImpar}.`);

    console.log(`O jogador escolheu ${escolha}.`);
    
    const quemVenceu = jogo1.vencedor(escolha);
    console.log(`Vencedor: ${quemVenceu}!`);

} catch(error: any) {
    console.error(error.message);
}
