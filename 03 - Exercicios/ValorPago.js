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
const Debito = preco - (preco * 0.10);
const Dinheiro = preco - (preco * 0.15);
const Pix = preco - (preco * 0.15);
const Credito = preco + (preco * 0.10);

const parcela = (Credito/2);

const tipoPagamento = Credito;


if(tipoPagamento === Debito){
    console.log(`O preço será: ${Debito}`);
}
else if(tipoPagamento === Dinheiro || tipoPagamento === Pix){
    console.log(`O preço no dinheiro ou pix será: ${Dinheiro}`);
}

else if(tipoPagamento === Credito){
    console.log(`O preço dividido em duas será: ${Credito}`);
    console.log(`e suas parcelas serao de ${parcela}`);
}

