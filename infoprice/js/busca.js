function submitdata(event) {

    let form = document.getElementById("myform");

    let search = form.getElementsByTagName("input")["search"].value

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": `https://infoprice.herokuapp.com/produtos/busca/${search}`,
        "method": "GET"
    }).done(function (response) {

        if (response.length) {
            $('#erro').html("");

            let resu = document.getElementById('lista-produtos');
            let resultado = $('#lista-produtos');

            while (resu.firstChild) {
                resu.removeChild(resu.firstChild);
            }


            response.forEach(element => {
                
                resultado.append('<article><strong id="titulo">' + element.titulo +'</strong>'+
                    '<p id="descricao">' + element.descricao +'</p>'+
                    '<a onclick="getItem(event)" id="'+element._id+'" class="btIdProduto">VER DETALHES</a></article>');
            });

            
            
            $('#search').val("");

        } else {
            $('#lista-produtos').html("");
            $('#erro').text("Não foi encontrada a sua busca");
        }

    });



    event.preventDefault();
    return false;
}



function getItem(event) {
 

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": `https://infoprice.herokuapp.com/produtos/adm/${event.target.id}`,
        "method": "GET"
    }).done(function (response) {
            $('#erro').html("");
            
            let resu = document.getElementById('lista-produtos');
            let resultado = $('#lista-produtos');

            while (resu.firstChild) {
                resu.removeChild(resu.firstChild);
            }

                resultado.append('<article><strong id="tituloExibicao">' + response.titulo +
                    '</strong><p id="descricaoCompleta">' + response.descricao +
                    '</p><h3 id="preco">R$ ' + response.preco + ',00</h3></article>');



    }).catch (err => {
        $('#lista-produtos').html("");
        alert("Erro, Aconteceu Algo!");
    });

    event.preventDefault();
    return false;
}


function exibirTudo(event) {

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://infoprice.herokuapp.com/produtos",
        "method": "GET"
    }).done(function (response) {

        if (response.length) {
            $('#erro').html("");

            let resu = document.getElementById('lista-produtos');
            let resultado = $('#lista-produtos');

            while (resu.firstChild) {
                resu.removeChild(resu.firstChild);
            }


            response.forEach(element => {
                
                resultado.append('<article><strong id="titulo">' + element.titulo +'</strong>'+
                    '<p id="descricao">' + element.descricao +'</p>'+
                    '<a onclick="getItem(event)" id="'+element._id+'" class="btIdProduto">VER DETALHES</a></article>');
            });

            
            
            $('#search').val("");

        } else {
            $('#lista-produtos').html("");
            $('#erro').text("Não foi encontrada a sua busca");
        }

    });



    event.preventDefault();
    return false;
}