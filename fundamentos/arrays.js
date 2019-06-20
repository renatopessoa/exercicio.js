const valores = [7.7, 8.9, 6.3, 9.2]
console.log(`Array de posição: ` + (valores[0]),`
Array de posição: `+ valores[3])
console.log(`Array de posição: `+valores[4])//Não foi declarado nenhum array na posição 4, por isso retornou undefined

valores[4] = 10
console.log(`Array de posição: ` + valores[4])
console.log(valores.length)
console.log(valores.pop())//Função pop, retorna a última posição do array
delete valores[0]
console.log(valores)
console.log(typeof valores)

