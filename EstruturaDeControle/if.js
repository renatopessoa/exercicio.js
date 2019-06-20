function resultado(nota){
    if(nota >=7){
        console.log('Aprovado com nota: '+ nota)
    }else{
        console.log('Reprovado, nota: ' + nota)
    }
    
}
resultado(8)
resultado(5)


//teste boolean
function verdade(valor){
    if(valor){
        console.lof('Verdade...'+ valor)
    }
}
verdade()
verdade(null)
verdade(undefined)
verdade(NaN)
verdade('')
verdade(0)


