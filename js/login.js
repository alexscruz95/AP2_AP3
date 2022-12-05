function criarConta(){
    if(document.getElementById("email").value == ""){
        alert("Por favor, informe o seu e-mail !")
    }
    else if(document.getElementById("senha").value == ""){
        alert("Por favor, informe a sua senha !")
    }
    else{
       
        limparCampo();

        setTimeout(redirecionarPagina, 200);
    }
}

function redirecionarPagina(){
    window.location.href = "index.html"
}

function limparCampo(){
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
}