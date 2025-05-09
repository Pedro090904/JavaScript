/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Send elas:

1- Preço do combustivel;
2- Gasto médio de combustivel do carro por km;
3- Distância em KM da viagem ;

Imprima no console o valor que sera gasto de combustivel para realizar esta viagem. */


const PrecoCombustivel = 5.79;
const KM_Litros = 10;
const distancia= 100;


const GastoKm = ((distancia/KM_Litros)*PrecoCombustivel);


console.log( `o valor é ${GastoKm.toFixed(5)}`);

let valorA = 5;

let valorB = '10';

console.log(valorA + valorB);
