import axios from 'axios';

const uri = 'https://api.github.com/search/users?q=ufpb';

async function getRepositorios (url) {
    const result = (await axios.get(url)).data;
    //console.log(result)
    return result.items;
}

getRepositorios(uri).then(v => console.log(v));

/**
 * >> Essa requisição funciona direitinho (O restante vai depender do usuário -> Da forma como ele perquisar)
 * >> Como eu quero fazer uma requisição simples, essa requisição apartir do que o usuário digitar, vai servir
 * 
 * >> Próximos objetivos: (API de Pesquisa)
 * 
 * -> Exibir a lista de usuários (Após o usuário clicar em buscar)(Limitada até 15)
 * -> De acordo com o que o usuário digitar ir para a próxima tela
 * 
 * >> Depois disso, meu objetivo vai ser deixar o App bonitinho (Utilizar: react-native-paper)
 */



/**
 * >> Não entendi como esse '.data' funciona ()
 * 
 * -> Ficar tranquilo, pois quando chegar o tempo, vou estudar o funcionamento das APIs detalhadamente mais na frente. (No mais, lembrar que meu objetivo agora é fazer o projeto, então focar apenas em fazer as requisições e não nos detalhes por trás)
 */