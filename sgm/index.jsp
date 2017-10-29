<%-- 
    Document   : index
    Created on : 05/10/2017, 21:42:07
    Author     : Thander
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SGM</title>

    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/login.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
                <form action="Sgm_servlet" method="post" class="col-md-4" id="LoginForm" accept-charset="utf-8">
                    
                        <span class="tit">ÁREA DE LOGIN</span>
                        
                         <div id="erro" style="color: red; font-size: 13px; padding: 3px; display: none;">
                             <strong>Erro!</strong> Verifique Login ou senha
                         </div>
          
                    <div class="id">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <input type="text" placeholder="login" class="txt" name="login" required>
                    </div>
                    <div class="pass">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="password" placeholder="senha" class="txt" name="senha" required>
                    </div> 
                        <br>
                    <button type="submit" class="bt">Logar</button>
                </form>
        </div>
      </div>
        <footer class="rodape"></<footer>
            <p>Powered by Thander Augusto, Rharison Lucas, Thiago Batista</p>
        </footer>


    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    
     <% 
        if (request.getParameter("falha") != null){
            out.print("<script>document.getElementById('erro').className = 'alert alert-danger';"
                    + "document.getElementById('erro').setAttribute('style','display: block;')</script>");
        }
    %>
</body>
</html>


