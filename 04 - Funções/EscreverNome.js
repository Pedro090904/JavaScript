function escreverNome(nome){
    console.log (`O meu nome é ${nome}`)
}

function verificaIdade(idade){
    if(idade >= 18){ 
        console.log(`Maior de idade`);
    }
    else{
        console.log(`Menor de idade`);
    }
}


escreverNome('Pedro de Sousa Mesquita');
verificaIdade(21);
escreverNome('joão neto');
verificaIdade(10);
frase('Estou testando minha nova funcao de texto redigido');
testeNome('julia');
testeIdade(33);

function testeNome(Nome){
    return `Meu nome é ${Nome}`;
}

function testeIdade(Idade){
    if(Idade >= 18){
        console.log(testeNome)
    }
}



function frase(texto){
   console.log( `Seu texto foi: ${texto}`);
}

