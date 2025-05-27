

const preco = 100; 
const tipoPagamento = 3;


if(tipoPagamento === 1){
    console.log(`O preço será: ${preco - (preco * 0.10)}`);
}
else if(tipoPagamento === 2){
    console.log(`O preço no dinheiro ou pix será: ${preco - (preco * 0.15)}`);
}
else if(tipoPagamento ===3){
    console.log(`O valor em duas vezes será de ${preco}$, com cada parcela por ${preco/2}$`)
}
else{
    console.log(`O preço dividido em duas será: ${preco +(preco*0.1)}`);
}

