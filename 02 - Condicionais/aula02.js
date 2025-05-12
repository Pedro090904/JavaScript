
const numero = 0;

const eNumeroPar = (numero % 2) === 0;
const NUMERO_DIVISIVEL_5 = (numero % 5) ===0;

if(numero === 0){
    console.log(`O numero é invaldio`);
} 

else{

    if(eNumeroPar){
    console.log(`O numero ${numero} é par!`);
    }

    if(!eNumeroPar){
    console.log(`O numero ${numero} é impar!`);
    }

    if(NUMERO_DIVISIVEL_5){
    console.log(`SIM, o numero ${numero} é divisivel por 5`);
    }

    else{
    console.log(`NÃO é divisive por 5, pois o numero é: ${numero}`);
    }
}


