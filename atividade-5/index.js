const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um número: '));

console.log(`\nTabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
