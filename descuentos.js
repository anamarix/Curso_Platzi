


function calcularPrecioConDescuento( precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento + " zł";
}

function onClickButtonPrice(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value ;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value ;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue );
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText=" El precio con descuento es " + precioConDescuento
}

function onClickCouponDiscount(){
const userCouponInput = document.getElementById("InputCoupon");
const code = userCouponInput.value;
let coupons = [
    "kotek",
    "dinozaur",
    "ola"
];
let discount;
switch(code){
    case coupons[0]:
    discount = 10;
    break;
    case coupons[1]:
    discount = 15;
    break;
    case coupons[2]:
    discount = 20;
    break;
    default : 
    discount = 0;
}
const resultCoupon = document.getElementById("ResultCoupon");
resultCoupon.innerText = "Tienes " + discount + " % de descuento";
console.log(discount);
}