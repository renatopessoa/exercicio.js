let isAtivo = false
console.log(isAtivo)

 isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(![])

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!('' || null ||''))

let nome = 'Renato'
console.log(nome || 'O nome não foi informado!')