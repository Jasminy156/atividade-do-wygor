const fs    = require('fs');
const nomes = JSON.parse(fs.readFileSync('../atividade-7/nomes.json', 'utf-8'));
nomes.sort();
console.log('Nomes ordenados: ', nomes);