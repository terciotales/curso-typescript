interface Humano {
    nome: string,
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string) : void
}

function saudarComOla(pessoa: Humano) {
    console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = "Joana";
}

const pessoa: Humano = {
    nome: "João",
    idade: 29,
    saudar(sobrenome: string) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: "Jonas", idade: 22, altura: 1.82});
pessoa.saudar("Skywalker");