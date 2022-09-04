// string
let nome: string = "Tércio Tales";
console.log(nome);

// number
let idade: number = 19;
console.log(idade);

// bool
let possuiHobbies = false;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number = 19;
minhaIdade = 19;
console.log(typeof minhaIdade);
console.log(minhaIdade);
// minhaIdade = "minha idade é 27";

// array
let hobbies: any[] = ["Cozinhar", "Jogar vídeogames"];
console.log(typeof hobbies);
console.log(hobbies[0])
hobbies = [12];
console.log(hobbies);

// tuplas
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

endereco = ["Rua importante", 120];
console.log(endereco)

// enums
enum Cor {
    Cinza,
    Verde = 100,
    Azul= 10,
    Laranja,
    Amarelo,
    Vermelho = 100,
    Roxo
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Verde);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Azul)
