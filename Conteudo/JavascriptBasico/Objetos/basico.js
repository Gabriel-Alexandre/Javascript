/*const nome = 'Gabriel';
const idada = 19;

const nome = 'Emanuel';
const idada = 21;*/


// Esse objeto funciona como um dicionário em python
const pessoa1 = {
    nome: 'Gabriel',
    idade: 19,

    //Funções dentro de objetos são chamados de métodos
    //Dentro desse escopo não precisa da palavra reservada function
    //Para poder usar o atributo do objeto dentro da função, eu devo utilizar o "this."
    fala() {
        console.log(`${this.nome} oi`);
    }
};

console.log(pessoa1.nome);
pessoa1.fala();

/*
// Função que cria um objeto:
// -> Funciona como uma classe
function criarPessoa (nome, idade) {
    //return {nome, idade}; -> Posso escrever assim também
    return {
        nome: nome,
        idade: idade
    };
}

// No mais, ficar tranquilo, pois vou aprendendo com o passar do tempo.

const pessoa1 = criarPessoa('Gabriel', 19);*/