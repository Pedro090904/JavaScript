
const numero = 63;

const eNumeroPar = (numero % 2) === 0;
const NumeroImpar = (numero % 2) > 0;

if(eNumeroPar){
console.log('É par');
}

if(!eNumeroPar){
console.log('O numero é impar');
}