"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Autenticacao {
    usuario;
    senha;
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
    }
    validar() {
        if (this.usuario === "admin" && this.senha === "1234") {
            return "verdadeiro";
        }
        else {
            return "falso";
        }
    }
}
console.log("--- Teste 1: Autenticação Correta ---");
const loginCorreto = new Autenticacao("admin", "1234");
console.log(`O login é: ${loginCorreto.validar()}`);
console.log("\n--- Teste 2: Senha Incorreta ---");
const loginSenhaIncorreta = new Autenticacao("admin", "senha-errada");
console.log(`O login é: ${loginSenhaIncorreta.validar()}`);
console.log("\n--- Teste 3: Usuário Incorreto ---");
const loginUsuarioIncorreto = new Autenticacao("outro_usuario", "1234");
console.log(`O login é: ${loginUsuarioIncorreto.validar()}`);
//# sourceMappingURL=10.js.map