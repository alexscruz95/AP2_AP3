function validarCampo(){
    if(document.getElementById("nome").value == ""){
        alert("Por favor, informe o seu nome !")
    }
    else if(document.getElementById("email").value == ""){
        alert("Por favor, informe o seu e-mail !")
    }
    else if(document.getElementById("mensagem").value == ""){
        alert("Por favor, informe a sua mensagem !")
    }
    else{
        limparCampo();
        alert("Mensagem enviada com sucesso !")
        setTimeout(redirecionarPagina, 200);
    }
}

function redirecionarPagina(){
    window.location.href = "index.html"
}

function limparCampo(){
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
}