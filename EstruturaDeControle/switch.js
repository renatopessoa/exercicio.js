const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de hora!')
            break

        case 8:
        case 7:
            console.log('Aprovado!')
            break

        case 6:
        case 5:
            console.log('Recuperacao!')
            break

        case 4:
        case 3:
        case 2:
        case 1:
            console.log('Reprovado')
            break
        default:
        console.log('Nota invalida')
    }
}
imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(1)
imprimirResultado(11)