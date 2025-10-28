const prompt = require('prompt-sync')();
function validarDados(nome, idade, logradouro, numero, cep) {
    // Verifica se nome e logradouro não estão vazios
    if (!nome) {
      throw new Error("Nome não pode ser vazio!");
    }
  if (!logradouro){
    throw new Error("logradouro não pode ser vazio!");
  }
    // Verifica se idade e número são números válidos
    if (isNaN(idade) || isNaN(numero)) {
      throw new Error("Idade e número devem ser valores numéricos!");
    }
  
    // Converte para número (caso venham como string)
    idade = Number(idade);
    numero = Number(numero);
  
    // Verifica se a idade é maior que 18
    if (idade < 18) {
      throw new Error("A idade deve ser maior ou igual a 18 anos!");
    }
  
    // Return:
    return {
      nome,
      idade,
      logradouro,
      numero,
      cep,
    };
  }

  try {
    nome = prompt('Digite um nome: ');
    idade = prompt('Digite sua idade: ')
    logradouro = prompt('Digite seu logradouro: ');
    numero = prompt('Digite seu numero: ');
    cep = prompt('Digite seu cep: ');

    const dados = validarDados(nome, idade, logradouro, numero, cep);
    console.log("✅ Dados válidos:", dados);
  } catch (erro) {
    console.error("❌ Erro:", erro.message);
  }