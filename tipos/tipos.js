"use strict";
// string
let nome = "Tércio Tales";
console.log(nome);
// number
let idade = 19;
console.log(idade);
// bool
let possuiHobbies = false;
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade = 19;
minhaIdade = 19;
console.log(typeof minhaIdade);
console.log(minhaIdade);
// minhaIdade = "minha idade é 27";
// array
let hobbies = ["Cozinhar", "Jogar vídeogames"];
console.log(typeof hobbies);
console.log(hobbies[0]);
hobbies = [12];
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99];
console.log(endereco);
endereco = ["Rua importante", 120];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
    Cor[Cor["Roxo"] = 101] = "Roxo";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Verde);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Azul);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
