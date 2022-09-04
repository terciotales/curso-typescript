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

// Usando no contexto de classe

class Cliente implements Humano {
    nome: string = "";
    ultimaCompra: Date = new Date();
    saudar(sobrenome: string) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }

}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);

// Interface no contexto de função
interface FuncaoCalculo {
    (a: number, b:number) : number
}

let potencia: FuncaoCalculo;

potencia = (base: number, expo: number) : number => {
    // Math.pow(base, expo);
    // base ** expo
    return Array(expo).fill(base).reduce((t, a) => t * a);
}

console.log(potencia(2, 2));