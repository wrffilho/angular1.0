var Pessoa = function(idade, nome){
    console.log("this.nome: "+this.nome);
    this.nome = nome;
    console.log("this.nome: "+nome);
    this.idade = idade;
};

var andre = new Pessoa(32, "André");

var pessoa1 = {
    nome: "Wanderlei",
    idade: 32
}

console.log(pessoa1.nome);