interface humano {
    nome: string,
}

function saudarComOla(pessoa: humano) {
    console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: humano) {
    pessoa.nome = "Joana";
}

const pessoa = {
    nome: "João",
    idade: 29
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);