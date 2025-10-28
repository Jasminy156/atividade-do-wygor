// Cria um array de números
const numeros = [3, 10, 22, 5, 18, 7, 40, 13];

// Percorre o array com um laço de repetição
for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i]; // Pega o número atual do array

  // Verifica se o número é par
  if (numero % 2 === 0) {
    console.log(numero); // Exibe o número par no console
  }
}
