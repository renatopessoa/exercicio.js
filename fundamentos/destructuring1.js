const pessoa = {
    nome: 'Renato',
    idade: 38,
    endereco: {
        Logradouro: 'Rua Antonio de Sá Leitão',
        numero: 139
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const {nome:n, idade:i} = pessoa
console.log(n ,i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {Logradouro, numero, cep}} = pessoa
console.log(Logradouro,numero,cep)
