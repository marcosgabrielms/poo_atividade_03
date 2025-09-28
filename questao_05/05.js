"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibir(...textos) {
    for (let texto of textos) {
        console.log(texto);
    }
    console.log("---");
}
console.log("Chamada com 2 parâmetros:");
exibir("a", "b");
console.log("Chamada com 3 parâmetros:");
exibir("a", "b", "c");
console.log("Chamada com 4 parâmetros:");
exibir("a", "b", "c", "d");
//# sourceMappingURL=05.js.map