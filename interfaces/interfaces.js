"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 29
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
