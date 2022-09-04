"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João"
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: "Jonas", idade: 22, altura: 1.82 });
