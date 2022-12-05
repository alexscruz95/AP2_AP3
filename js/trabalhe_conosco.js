function enviarCurriculo(){
    if(document.getElementById("nome").value == ""){
        alert("Por favor, informe o seu e-mail !")
    }
    else if(document.getElementById("email").value == ""){
        alert("Por favor, informe o seu e-mail !")
    }
    else{
       
        alert("Currículo enviado com sucesso !");

        setTimeout(redirecionarPagina, 200);  
    }
}

function redirecionarPagina(){
    window.location.href = "index.html"
}