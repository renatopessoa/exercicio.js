function tratarErroELancar(erro){
    throw new erro('ERRO...')
   //throw 10
   
}

function imprimirnome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')    
    } catch (e){
        tratarErroELancar(e)
    }finally{
        console.log('Final')
    }
    
}

const obj = { nome: 'Renato'}
imprimirnome(obj)