
function formatarArray(numeros: number[]): string {
    let resultado = "";

   
    numeros.forEach((numero, index) => {
       
        if (index > 0) {
            resultado += "-";
        }
        resultado += numero;
    });

    return resultado;
}

let minhaLista: number[] = [1, 2, 3, 4];
let stringFormatada = formatarArray(minhaLista);
console.log(stringFormatada); 

let outraLista = [10, 20, 30];
console.log(formatarArray(outraLista)); 