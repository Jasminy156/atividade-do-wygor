try{
let a = "m";
let b = 50;
let reultado = 0;


    if( b=== 0){
        throw new Error('Divisão por 0 não é permitido');
    }
    if (!parseInt(a)){
         throw new Error('valor informado para "a" não é um número')
    }
    resultado = a/b;
    console.log(`Resultado: ${resultado}`)
} catch(e) {
    console.log(`Erro ao realizar operação: \n ${e}.`)
}