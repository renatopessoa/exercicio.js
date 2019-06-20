//Exemplo de undefined
let valor //não inicializada
console.log(valor)

//exemplo de null
valor = null //não está apontando para nenhum endereço de memoria
console.log(valor)
//console.log(valor.toString()) String não pode acessar um valor nulo

const produto = {}
console.log(produto.preco)// UNDEFINEED - O preço não está definido
produto.preco = 3.5
console.log(produto.preco)

produto.preco = null //sem preço EX.produto de brinde
console.log(produto)