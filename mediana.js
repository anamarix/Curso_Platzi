
function calcularMediana(unsortedLista){
    const lista = unsortedLista.sort((a,b)=> a-b);
    const mitadLista = lista.length /2 ;


    let mediana;
    if(esPar(lista.length)){
     const elemento1 = lista[mitadLista];
     const elemento2 = lista[mitadLista-1];
     mediana = (elemento1 + elemento2)/2;
    
    }else{
        let index = Math.floor(mitadLista);
        mediana = lista[index];
    }
    return mediana;
}

function esPar(number){
    if (number % 2 ===0){
        return true;
    } else {
        return false;
    }
}
