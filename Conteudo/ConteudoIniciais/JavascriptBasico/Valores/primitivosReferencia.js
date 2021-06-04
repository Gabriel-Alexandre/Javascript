//As anotações dessa aula está o artigo "Const com valores mutáveis" do curso

// Tipos primitivos -> Passagem por cópia
// Arrays, Objetos, Função -> Passagem por referência

/**
 * Assim sendo, quando eu atribuir uma variável a um tipo que tem passagem por referência, vou está fazendo ele apontar para o mesmo endereço de memória da variável.
 * 
 * -> Compreenssão melhor vai vim depois
 */

//Arrays

// Copia:
let a1 = 1;
let a2 = a1;
a2++;
console.log(a1, a2);

// Referência:
let a = [1,2,3];
let b = a;
b.push(2);
//let b = [...a]; Fazendo assim, eu faço uma cópia
//O mesmo funcina para objeto e função
console.log(a, b);

