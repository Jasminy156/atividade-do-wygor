const fs = require('fs');

// Cria o log
const log = {
  data: new Date().toLocaleDateString(),
  hora: new Date().toLocaleTimeString(),
  mensagem: 'Script executado com sucesso.'
};

// Lê logs existentes (ou cria lista nova)
let logs = [];
if (fs.existsSync('logs.json')) {
  const dados = fs.readFileSync('logs.json', 'utf-8');
  logs = JSON.parse(dados);
}

// Adiciona o novo log e salva
logs.push(log);
fs.writeFileSync('logs.json', JSON.stringify(logs, null, 2));

console.log('Log registrado com sucesso!');
