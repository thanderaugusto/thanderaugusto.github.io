    if (window.sessionStorage.length == 0 && window.sessionStorage.getItem != "token") {
        alert("Somente Administradores podem acessar essa página!");
        window.location = "index.html";
    }

