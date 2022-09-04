"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 29,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: "Jonas", idade: 22, altura: 1.82});
pessoa.saudar("Skywalker");
// Usando no contexto de classe
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = (base, expo) => {
    // Math.pow(base, expo);
    // base ** expo
    return Array(expo).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(2, 2));
