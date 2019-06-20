const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)

// funcao Number.isInteger serve para saber se o tipo da variavel declarada é do tipo Number ou não.
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media) //resultado 7.8709999999999996, com várias casas decimais.
console.log(media.toFixed(2)) //Função toFixed serve para limitar o número de casas decimais que serão impressos.
console.log(media.toString()) //converter variavel tipo number para string
console.log(media.toString(2)) //converter tipo ponto flutuante para binário
console.log(typeof media)

console.log(typeof Number) // Number com "N" é uma função
