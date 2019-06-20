const escola = "Cod3r"
console.log(escola.charAt(4)) // A contagem inicia do 0
console.log(escola.charAt(5))  //Não vai gerar erro, vai retornar vazio.
console.log(escola.charCodeAt(3)) //Vai retornar o valor da tabela unicode
console.log(escola.indexOf(3)) //Saber em que posição o digita se encontra no texto

console.log(escola.substring(1)) //vai imprimir a partir do indice 1
console.log(escola.substring(0, 3)) //vai imprimir a partir do indice 0 até o indice 3
console.log('Escola '.concat(escola).concat("!")) //concatenação
console.log(escola.replace(3 , 'e')) //substitui o número 3 por "e"

console.log('Vitoria, Maria, Isabela'.split(','))//Converte uma String num Array