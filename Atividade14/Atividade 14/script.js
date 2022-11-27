function validacao() {
            
    if (document.forms.formulario.elements[0].value == "" || document.forms.formulario.elements[0].length < 10) {
        alert("Nome não pode ter menos de 10 caracteres!");
        document.forms.formulario.elements[0].focus();
        return false;
    };

    if (document.forms.formulario.elements.idEmail.value == "" || document.forms.formulario.elements.idEmail.value.indexOf('@') == -1 || 
        document.forms.formulario.elements.idEmail.value.indexOf('.') == -1) {
        alert("Preencha campo e-mail corretamente!");
        document.forms.formulario.elements.idEmail.focus();
       return false;
    }

    if (document.forms.formulario.elements.idComent.value == "" || document.forms.formulario.elements.idComent.value.length < 20) {
        alert("É necessario preencher o campo Comentario com mais de 20 caracteres!");
        document.getElementById("idComent").focus();
        return false;
    }

    if (radioSim.checked){
        alert("Volte sempre a esta página!");
    } else if (radioNao.checked){
        alert("Que bom que você voltou a visitar página!");
    } else {
        alert("Selecione uma opção na pesquisa!");
        return false;
    }

    return true;
}