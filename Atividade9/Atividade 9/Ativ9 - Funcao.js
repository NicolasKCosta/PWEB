var num1;
var num2;
var num3;

num1 = prompt("Digite o valor do numero 1: ");
num2 = prompt("Digite o valor do numero 2: ");
num3 = prompt("Digite o valor do numero 3: ");

Number(num1);
Number(num2);
Number(num3);

compara(num1, num2, num3);

function compara(a, b, c){
    if (a == b && a > c){
        alert("Numeros 1 e 2 são maiores.");
    } else if( a == c && a > b){
        alert("Numeros 1 e 3 são maiores.");
    } else if( b == c && b > a){
        alert("Numeros 2 e 3 são maiores.");
    }else if( a == b && a == c){
        alert("Numeros são iguais.");
    }else if(a > b && a > c){
        alert("O maior numero é: "+a);
    }else if(b > a && b > c){
        alert("O maior numero é: "+b);
    }else if(c > a && c > b){
        alert("O maior numero é: "+c);
    }
}