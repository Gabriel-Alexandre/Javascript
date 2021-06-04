// Operadores Lógicos:

// && -> AND -> E
// || -> OR -> OU
// ! -> NOT -> NÃO

/*
Avaliação de curto circuito:

-> Mesmo lógica de C para AND e OR
-> O valor retornado, é o valor da última expressão avaliada como true (AND)
-> O valor retornado, é o valor da primeira expressão avaliada com true (OR)

>> Se todas expressões foram falsa, o valor retornado é o valor da última expressão falsa

*FALSY:

- false
- 0
- '' "" ``
- null / undefined
- NaN

>> Em js "tudo" pode ser avaliado
>> Qualquer coisa diferente desses valores acima, sera avaliado como true

*/

// const gabrielBonioto = true
// const gabrielLindo = false

// Importante para simplificar código
// A função só é executada quando vaiexecutar é true

// function falaOi () {
//   return 'Oi'
// }

// const vaiexecutar = true

// console.log(vaiexecutar && falaOi())

const corUsuario = null
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)
