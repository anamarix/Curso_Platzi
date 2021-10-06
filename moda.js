
//We have an array of unordened elements. We create an object to count how many times appears each number.Later we change that object into an array and we sort it. Our result is the last element in the array//

function calcularModa(lista){
    const listaCount ={};
    lista.map(
        function(el){
           if(listaCount[el]){
            listaCount[el]++;
           }else{
               listaCount[el]=1;
           }
        }
    );
    const listaArray = Object.entries(listaCount).sort((a,b)=>a[1]-b[1]);
    const moda = listaArray[listaArray.length-1];
    return moda;
}