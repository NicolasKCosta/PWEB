var chkMax = document.getElementById("idMax");
var chkMin = document.getElementById("idMin");

function alterarShift(){
    if(chkMax.checked && chkMin.checked){
        alert("Selecione apenas uma das opções");
    } else if(chkMax.checked){
        document.getElementById("idNome").value = document.getElementById("idNome").value.toUpperCase();
    }else if(chkMin.checked){
        document.getElementById("idNome").value = document.getElementById("idNome").value.toLowerCase();
    }else{
        alert("Selecione uma das opções");
    }
}
