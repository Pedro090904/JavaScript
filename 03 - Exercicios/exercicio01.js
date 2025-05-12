/*
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade,
calcule e imprima a sua média e a sua classificação conforme a tabela a baixo: 

media = (nota1 + nota2 + nota3)/3;

Classificação: 
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou;
*/

const nota1 = 9;
const nota2 = 9;
const nota3 = 9; 

const media = ((nota1 + nota2 + nota3)/3);

if (media < 5){
    console.log(`Com a média de ${media.toFixed(2)} você está reprovado!`);
}

if(media >= 5 && media <= 7){
console.log(`Com a média de ${media.toFixed(2)} você está de recuperação!`);
}

if(media > 7){
console.log(`Com a média de ${media.toFixed(2)} você está Aprovado!!`);
}