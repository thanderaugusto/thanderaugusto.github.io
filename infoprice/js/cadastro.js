$('.error').hide();
function submitcadastrar(event) {
    
    let titulo = $('#titulo').val();
    let descricao = $('#descricao').val();
    let slug = $('#slug').val();
    let preco = $('#preco').val();
    let token = window.sessionStorage.getItem("token");

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://infoprice.herokuapp.com/produtos",
        "method": "POST",
        "data": "token="+token+"&titulo="+titulo+"&descricao="+descricao+"&slug="+slug+"&preco="+preco
    }).done(function (response) {

        if(window.sessionStorage.getItem != "token"){
            $('#error').hide();
            $('#success').text(response.message);
            
            $('#titulo').val("");
            $('#descricao').val("");
            $('#slug').val("");
            $('#preco').val("");
        } else {
            alert("Somente adminitradores podem Cadastrar Produtos");
        }
    
        
      
    }).catch(erro =>{
        $('.error').show();
        $('#error').text(erro.responseJSON.message);

        
    }) 

    event.preventDefault();
    return false;
}