//Funçao sem retorno
function imprimirSome(a , b){
    console.log(a + b)
}
imprimirSome(2,3)
imprimirSome(2)//Vai retonar um NaN
imprimirSome(2,10,4,5,6)//retorna a soma apenas dos 2 primeiros numeros 

//funcao com retorno
function soma(a, b=1){
    return a + b
}
console.log(soma(2))