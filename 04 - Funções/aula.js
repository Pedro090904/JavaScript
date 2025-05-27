function sayMyName(name){
    console.log(`Seu nome é ${name}`);
}


sayMyName('Pedro');
sayMyName('joao');


function quadrado(valor){
    resultado = valor * valor
    console.log(`o valor da potencia é ${resultado}`);
}
quadrado(10);
quadrado(5);


function IncrementarJuros(valor, porcentual){
    const valordeAcrescimento = (porcentual / 100) * valor;
    return valor + valordeAcrescimento
}

console.log(IncrementarJuros(100, 10));
console.log(IncrementarJuros(100, 15));
console.log(IncrementarJuros(100, 50));