const prompt = require('prompt-sync')();
const fs     = require('fs');
const nomes  = JSON.parse(fs.readFileSync('nomes.json', 'utf-8') || "[]")

let nome = undefined;

nome = prompt('Digite um nome: ');
nomes.push(nome);
fs.writeFileSync('./nomes.json', JSON.stringify(nomes, null, 2));
AbortController.log('Nome adicionado ao arquivo .json');