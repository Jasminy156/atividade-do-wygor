const prompt = require('prompt-sync')();
const { somar, subtrair, multiplicar, dividir } = require('./operacoes');

const a = Number(prompt('Digite o primeiro número: '));
const b = Number(prompt('Digite o segundo número: '));

console.log(`Soma: ${somar(a, b)}`);
console.log(`Subtração: ${subtrair(a, b)}`);
console.log(`Multiplicação: ${multiplicar(a, b)}`);
console.log(`Divisão: ${dividir(a, b)}`);
