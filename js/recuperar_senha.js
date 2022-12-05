function recuperarSenha(){
    if(document.getElementById("email").value == ""){
        alert("Por favor, digite o seu e-mail !");
    }
    else{
        alert("Você receberá no seu e-mail nosso passo a passo para recuperar a senha !");

        document.getElementById("email").value = "";

        setTimeout(redirecionarPagina, 200);
    }
}

function redirecionarPagina(){
    window.location.href = "index.html"
}