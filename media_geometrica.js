lista = [
    {
        clase: "matematica",
        nota: 3,
        credit: 0.6
    },
    {   clase: "polaco",
        nota: 4,
        credit: 0.3
    },
    {
        clase: "geografia",
        nota: 5,
        credit: 0.2
    }
]


function calculateAccumulatedValue(lista){
    let sum=0;
    for (key of lista){
        const accum = key.nota * key.credit;
        sum = sum + accum;
    }
    return sum.toFixed(2)
}
function calculateAccumulatedCredit(lista){
    let sum=0;
    for (key of lista){
        sum = sum + key.credit;
    }
    return sum.toFixed(2)
}
// function calculateAccumulatedValue(lista){
//     let sum = 0 ;
//     for(let i=0; i<lista.length; i++){
//        let accumValue = (lista[i].nota*lista[i].credit);
//         sum = sum + accumValue;
//     }
//     const sumToFixed = sum.toFixed(1);
//     return sumToFixed;
// }

// function calculateAccumulatedCredit(lista){
//     let sumCredits = 0 ;
//     for(let i=0; i<lista.length; i++){
//        let accumCredit = lista[i].credit;
//         sumCredits = sumCredits + accumCredit;
//     }
//     const sumCreditsToFixed = sumCredits.toFixed(1);
//     return sumCreditsToFixed;
// }

function calculateMediaGeometrica(lista){
    const mediaGeometrica = calculateAccumulatedValue(lista)/calculateAccumulatedCredit(lista);
    return mediaGeometrica.toFixed(2);
}


