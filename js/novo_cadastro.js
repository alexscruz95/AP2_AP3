function criarConta(){
    if(document.getElementById("nome").value == ""){
        alert("Por favor, informe o seu nome !")
    }
    else if(document.getElementById("celular").value == ""){
        alert("Por favor, informe o seu celular !")
    }
    else if(document.getElementById("email").value == ""){
        alert("Por favor, informe o seu e-mail !")
    }
    else{
        alert("Cadastro realizado com sucesso !")
       
        limparCampo();

        setTimeout(redirecionarPagina, 200);
    }
}

function redirecionarPagina(){
    window.location.href = "index.html"
}

function limparCampo(){
    document.getElementById("nome").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("email").value = "";
}