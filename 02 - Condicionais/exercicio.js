
/*
Faça um programapara calcular o valor de uma viagem. 

Você terá 5 variaveis, sendo elas:

1 - Preço etanol;
2 - Preço da gasolina; 
3 - O tipo de combustivel que esta no seu carro;
4 - Gasto médio de combustivel do seu carro;
5 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. 
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;

const tipoCombustivel = 'Gasolina';
const kmPorLitro = 10;
const distanciaEmKM = 100;

if(tipoCombustivel === "Gasolina"){
    
let gastoTotal = ((distanciaEmKM/kmPorLitro) * precoGasolina);

console.log(`O gasto total com gasolina será de ${gastoTotal.toFixed(2)}`);

}

else {

    gastoTotal = ((distanciaEmKM/kmPorLitro) * precoEtanol);

    console.log(`O gasto total com etanol será de ${gastoTotal.toFixed(2)}`);
}