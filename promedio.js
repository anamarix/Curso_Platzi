
function calcularMediaAritmetica(lista){
    let sumaLista = 0;
    for(let i=0; i<lista.length; i++){
        sumaLista = sumaLista + lista[i];
    
    }
    const promedioLista = sumaLista / lista.length;
     return promedioLista;
}

function calcularMediaAritmetica2(lista){
    const suma = lista.reduce(acumulate, 0)
    return suma;
}
function acumulate(accumulator, item){
    return accumulator + item;
}

