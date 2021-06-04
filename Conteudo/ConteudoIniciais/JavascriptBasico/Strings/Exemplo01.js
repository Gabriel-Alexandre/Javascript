let nome = "um \"texto\""; // (\\) -> Caractere de escape. 

// -> Strings são iteráveis (Tem indice)
// -> As funções abaixa, são funções que facilitam o uso de strings com diferente funcionalidades

let nome2 = "01234";

console.log(nome2[1]) // valor da string no indice
console.log(nome2.charAt(1)) // valor da string no indice
console.log(nome2.concat("1", "2")) // concatena
console.log(nome2.indexOf("2")) // procura a primeira ocorrencia da string passada, se não encontrar retorn -1
console.log(nome2.indexOf("2", 0)) // ("string procurada", "a partir desse indice")
console.log(nome2.lastIndexOf("2", 2)) // ("string procurada", "a partir desse indice")
// A diferença é que procura de trás para frente
console.log(nome2.replace("1", "-1")) // Substitui a primeira string pela segunda
console.log(nome2.length); // Tamanho da string
console.log(nome2.slice(1, 6)) // Fatia strings (começo, fim) 
//Posso usar números negativos para referênciar o final
console.log(nome2.split("")); // Dividi a string a partir da string fornecida
//("string", "numero de resultados")
console.log(nome2.toUpperCase); // Tudo em maiúculo
console.log(nome2.toLowerCase); // Tudo em minúculo


// Na dúvida, buscar na documentação na internet

// IMPORTANTE!!!
/**Todas as aulas que eu não pratiquei o exercício sugerido vão está desmarcadas */ 