

$('.error').hide();
function submitlogin(event) {
    
    let email = $('#usuario').val();
    let senha = $('#senha').val();

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://infoprice.herokuapp.com/usuarios/autenticacao",
        "method": "POST",
        "data": "email="+email+"&password="+senha
    }).done(function (response) {

        if(response){
            window.sessionStorage.setItem("token", response.token);
            window.location = "cadastro.html";
        }
      
    }).catch(erro =>{
        $('.error').show();
        $('#error').text(erro.responseJSON.message);
    }) 

    event.preventDefault();
    return false;
}