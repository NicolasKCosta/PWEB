var Tam = 45;
var Idade = Array (Tam);
var Sexo = Array (Tam);
var Opiniao = Array (Tam);
var SomaId = 0;
var MaiorId = 0;
var MenorId = 10000000;
var Pessim = 0;
var PercOtmBm = 0;
var Mulher = 0   
var Homem = 0;

for(i = 0; i < Tam; i++){
    Idade[i] = parseFloat(prompt("Quanto anos voce tem? "));
    Sexo[i] = prompt("Digite o seu sexo, sendo F para feminino e M para masculino: ");
    Opiniao[i] = prompt("Digite qual a sua opiniao, 1(pessimo), 2(regular), 3(bom), 4(otimo):  ");
}

for(i = 0; i < Tam; i++){
    if(Idade[i] > MaiorId){
        MaiorId = Idade[i];
    }
    if(Idade[i] < MenorId){
        MenorId = Idade[i];
    }
    
    SomaId += Idade[i];

    if((Opiniao[i]==1)){
        Pessim++;
    }
    if((Opiniao[i]==3) || (Opiniao[i]==4)){
        PercOtmBm++;
    }
    
    if((Sexo[i]=="f") || (Sexo[i]=="F")){
        Mulher++;
    }
    if((Sexo[i]=="m") || (Sexo[i]=="M")){
        Homem++;
    }
}
alert("Media de todas as Idades = " + (SomaId/Tam));
alert("Pessoa mais velha = " + MaiorId);
alert("Pessoa mais nova = " + MenorId);
alert("Quantidades de notas pessimas = " + Pessim);
alert("Quantidades de notas boas e otimas = " + ((PercOtmBm/Tam) * 100) + "%");
alert("Quantidade de Homens = " + Homem);
alert("Quantidade de Mulheres = " + Mulher);
