class TradutorEmojis {
    
    private dicionario: { [palavra: string]: string } = {
        "amor": "❤️",
        "futebol": "⚽",
        "cachorro": "🐶",
        "casa": "🏠",
        "sol": "☀️",
        "dinheiro": "💵",
        "brasil": "🇧🇷"
    };

    public traduzir(frase: string): string {
        
        const palavras = frase.split(' ');

        
        const palavrasTraduzidas = palavras.map(palavra => {
            
            const palavraChave = palavra.toLowerCase();
            
            
            return this.dicionario[palavraChave] || palavra;
        });

       
        return palavrasTraduzidas.join(' ');
    }
}

const tradutor = new TradutorEmojis();

const fraseOriginal = "O amor do brasileiro é o futebol e ter um cachorro em casa";
console.log(`Frase Original: ${fraseOriginal}`);

const fraseTraduzida = tradutor.traduzir(fraseOriginal);

console.log(`Frase Traduzida: ${fraseTraduzida}`);

const outraFrase = "No Brasil, o Sol brilha e o Cachorro late.";
console.log(`\nFrase Original: ${outraFrase}`);
console.log(`Frase Traduzida: ${tradutor.traduzir(outraFrase)}`);