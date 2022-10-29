var player;
var oponent;
var opc1;
var opc2;

function jogarPedra(){
	player = "Pedra";
	jogadaOp();
	compara(player, opc2);
}

function jogarTesoura(){
	player = "Tesoura";
	jogadaOp();
	compara(player, opc2);
}

function jogarPapel(){
	player = "Papel";
	jogadaOp();
	compara(player, opc2);
}

function jogadaOp(){
	oponent = Math.random();

	if (oponent <= 0.33){
		opc2 = "Pedra";
	} else if (oponent > 0.33 && oponent <= 0.66){
		opc2 = "Tesoura";
	} else if (oponent > 0.66){
		opc2 = "Papel";
	}
	alert("Jogada do oponente: "+opc2);
}

function compara(p1, p2){
	if (p1 == p2){
		alert("Empate!");
	} else if (p1 == "Papel" && p2 == "Pedra"){
		alert("Você venceu!");
	} else if (p1 == "Papel" && p2 == "Tesoura"){
		alert("Você perdeu!");
	} else if (p1 == "Pedra" && p2 == "Tesoura"){
		alert("Você venceu!");
	} else if (p1 == "Pedra" && p2 == "Papel"){
		alert("Você perdeu!");
	} else if (p1 == "Tesoura" && p2 == "Papel"){
		alert("Você venceu!");
	} else if (p1 == "Tesoura" && p2 == "Pedra"){
		alert("Você perdeu!");
	}

}