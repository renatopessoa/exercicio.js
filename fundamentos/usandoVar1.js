//variavel só sem tem 2 tipos de escopo, o global ou função
{
    {
        {
            sera = 'Será!!'//variavel será visivel fora do bloco que não seja uma funcao
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}
teste()


