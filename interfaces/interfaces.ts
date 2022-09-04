interface Humano {
    nome: string,
    idade?: number
    [prop: string]: any
}

function saudarComOla(pessoa: Humano) {
    console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = "Joana";
}

const pessoa: Humano = {
    nome: "João"
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({nome: "Jonas", idade: 22, altura: 1.82});