import axios from 'axios';

const uri = 'https://api.github.com/users/Gabriel-Alexandre/repos';

async function getRepositorios (url) {
    const result = await (await axios.get(url)).data;
    return result;
}

getRepositorios(uri).then(v => console.log(v));