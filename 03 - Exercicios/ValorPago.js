/*
3) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço 
normal de etiqueta e a escolha da condição do pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
o calculo adequado.

Código Condição de pagamento:
- A vista no Débito, recebe 10% de desconto;
- A vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta mais juros de 10%;
*/

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
    console.log(`O preço dividido em duas será: ${Credito}`);
    console.log(`e suas parcelas serao de ${parcela}`);
}


