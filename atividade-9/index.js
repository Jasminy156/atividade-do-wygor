const fs = require('fs');

const conteudo = fs.readFileSync('texto.txt', 'utf-8');

// Divide o texto em palavras e conta
const palavras = conteudo.split(/\s+/).filter(p => p.length > 0);

console.log(`O arquivo possui ${palavras.length} palavras.`);