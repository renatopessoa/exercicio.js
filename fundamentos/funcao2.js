//Armazenando uma funcao numa variavel
const imprimirSoma = function(a ,b){
    console.log(a + b)
}
imprimirSoma(2,3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a,b) =>{ //=> =function
    return a + b 
}
console.log(soma(2,3))

//return implilcito
const subtracao = (a,b)=> a - b 
console.log(subtracao(2,3))