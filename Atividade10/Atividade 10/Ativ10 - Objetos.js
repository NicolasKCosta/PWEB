var Aluno1 = new Object();
        ra1 = "";
        nome1 = "diferir";
        Aluno1[ra1] = "0030481911039";
        Aluno1[nome1] = "Nicolas Katashi Uenojo Costa";

var Aluno2 = {};
var ra = 'ra2';
var nome = 'nome2';
Aluno2[ra] = '0030481911020';
Aluno2[nome] = 'Sérgio Lima';

var Aluno3 = {};
Aluno3["ra3"] = "0030481911078";
Aluno3["nome3"] = "Ziraldo Pabolo";

alert("Aluno 1: \n\n"
        +"RA: "+Aluno1[ra1]+"\n"
        +"Nome: "+Aluno1[nome1]);
alert("Aluno 2: \n\n"
        +"RA: "+Aluno2.ra2+"\n"
        +"Nome: "+Aluno2.nome2);
alert("Aluno 3: \n\n"
        +"RA: "+Aluno3.ra3+"\n"
        +"Nome: "+Aluno3.nome3);