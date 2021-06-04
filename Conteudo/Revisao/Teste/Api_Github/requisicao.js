//axios -> Bibliotéca que me permite fazer requisições e consumir API utilizando Promisses (Requisições Assincronas)
/**
 * Comandos para iniciar projeto:
 * 
 * 1- npm init -y (Cria json)
 * 2- npm install axios (Instala axios)
 * 3- Configurar json ( "type": "module",) -> depois do main
 */

//Processo de requisição da api do github compreendido
//Para compreender tudo Preciso aprender/revisar:
//1- Classes (Js)
//2- Função static (POO)
//3- async e await (Js)

//-> Compreendendo isso, vou compreender direitinho todo esse código

import axios from 'axios';

class Api{
    //async -> Função assincrona que trabalha com Promisses
    //await -> Para o processo e aguardar o processamento da requisição
    //Fui até 12:00
    static async getRepositorio (rep){
        //Agora vou fazer a requisição através do link
        //Cada link me da acesso a uma informação diferente da API
        //No caso eu estou fazendo uma requisição para a API do github através do axios pelo meu local host
        //Como não estou autenticado, tenho um limite de 10 requisições por minuto
        //Nesse caso, essa API recebe a requisição utilizando o json

        // -> Posso usar o mesmo raciocínio para as demais requisições que o projeto precisar
        const response = await axios.get(`https://api.github.com/users/${rep}/repos`);
        console.log("renponse", response);
    }
}

Api.getRepositorio('nadiaaoliverr');

/**
 * Situação do projeto:
 * 
 * -> Já sei fazer requisições a API do github utilizando Js (No mais, é apenas implementação de código)
 * -> Agora, preciso entender melhor o react-native, para saber como posso dar os próximos passo em relação ao projeto
 * 
 * >> Assim que possível, criar primeira versão do projeto começar a codificar.
 */

/**
 * Lembrar: Compreensão necessária para o projeto
 * 
 * -> Js (Bem encaminhado)
 * -> Requisições API Github (Bem encaminhado)
 * -> React-native (Iniciando)
 */