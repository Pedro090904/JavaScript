/*
2) O IMC - Indice de Massa Corporal é um criterio da Organização Mundial de Saúde
 para dar uma indicaçao sobre a condição de peso de uma pessoa adulta.

 Formula IMC: IMC = peso/ (altura * altura)

 Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo 
 com a atabela a baixo:

 IMC em adultos:
 - Abaixo de 18.5, Abaixo do peso;
 - Entre 18.5 e 25, peso normal;
 - Entre 25 e 30, acima do peso;
 - Entre 30 e 40, obeso;
 - Acima de 40, Obesidade grave;
*/

const peso = 70;
const altura = 1.70; 

const IMC = (peso / Math.pow(altura, 2));


if (IMC < 18.5){
    console.log(`Com o IMC de ${IMC.toFixed(2)}, você está abaixo do peso`);
}

if(IMC >= 18.5 && IMC < 25){
    console.log(`Com o IMC de ${IMC.toFixed(2)}, você está com o peso normal`);
}

if(IMC >= 25 && IMC < 30){
     console.log(`Com o IMC de ${IMC.toFixed(2)}, você está acima do peso`);
}

if(IMC >= 30 && IMC < 40){
     console.log(`Com o IMC de ${IMC.toFixed(2)}, você está Obeso`);
}

if(IMC > 40){
     console.log(`Com o IMC de ${IMC.toFixed(2)}, você está em Obesidade Grave`);
}