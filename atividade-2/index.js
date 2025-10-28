// Importa o módulo prompt-sync para ler entradas do usuário
const prompt = require('prompt-sync')();

// Função que recebe dois números e retorna o maior
function maiorNumero(a, b) {
  if (a > b) {
    return a; // se 'a' for maior que 'b', retorna 'a'
  } else {
    return b; // caso contrário, retorna 'b'
  }
}

// Solicita os dois números ao usuário
const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));

// Chama a função e armazena o resultado
const resultado = maiorNumero(num1, num2);

// Exibe o resultado no console
console.log(`O maior número é: ${resultado}`);
