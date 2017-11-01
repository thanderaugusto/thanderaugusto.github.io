$( function() {
    var dialog, form,
 
      nome = $( "#nome" ),
      peso = $( "#peso" ),
      altura = $( "#altura" ),
      imc = this.imc;
      resultado = this.resultado;
      allFields = $( [] ).add( nome ).add( peso ).add( altura ).add( imc ).add( resultado );



function validarCampo() {

  var txtNome = $("#nome").val();
  var txtPeso = $("#peso").val();
  var txtAltura = $("#altura").val();


      if(txtNome==""){
      alert("Por favor, preencha o Nome");
      $("#txtnome").focus();
      return 0;
    } 
    let re = new RegExp('[/0-9/]');
    if (re.test(txtNome)!=0) {
      alert("Nome apenas caracteres!");  
      $("#txtnome").select();
      return 0;
    }

    if(txtPeso==""){
      alert("Por favor, preencha o Peso");
      $("#txtpeso").focus();
      return 0;
    }
    else if (isNaN(txtPeso)) {
      alert("Peso apenas números!");  
      $("#txtpeso").select();
      return 0;
    }
    
    if(txtAltura==""){
      alert("Por favor, preencha a Altura");
      $("#txtaltura").focus();
      return 0;
    }
    else if (isNaN(txtAltura)) {
      alert("Altura apenas números!");  
      $("#txtaltura").select();
      return 0;
    }
    return 1;
}


    function Imc() {
    var imc = peso.val() / Math.pow(altura.val(),2);
    return imc;
    }
    function Res() {
      var imc = peso.val() / Math.pow(altura.val(),2);
      var resultado;
      if(imc<17){
        resultado = " Muito abaixo do Peso";
      }
      else if(imc>=17.1 && imc<=18.49){
        resultado = " Abaixo do Peso";
      }
      else if(imc>=18.5 && imc<=24.99){
        resultado = " Peso Normal";
      }
      else if(imc>=25 && imc<=29.99){
         resultado = " Acima do Peso";
      }
      else if(imc>=30 && imc<=34.99){
        resultado = " Obesidade I";
      }
      else if(imc>=35 && imc<=39.99){
        resultado = " Obesidade II (Severa)";
      }
      else if(imc>=40){
        resultado = " Obesidade III (Mórbita)";
      }
      return resultado;
    }
 
 
  function addUser() {
    if (validarCampo()==0){
      return false;
  }else {

      allFields.removeClass( "ui-state-error" );
        $( "#users tbody" ).append( "<tr>" +
          "<td>" + nome.val() + "</td>" +
          "<td>" + peso.val() + "</td>" +
          "<td>" + altura.val() + "</td>" +
          "<td>" + Imc().toFixed(2) + "</td>" +
          "<td>" + Res().toString() + "</td>" +
        "</tr>" );
        nome.val("");
        peso.val("");
        altura.val("");
      }
    }
 
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 440,
      width: 350,
      modal: true,
      buttons: {
        "Inserir": addUser,
        Fechar: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });
 
    $( "#create-user" ).button().on( "click", function() {
      
      dialog.dialog( "open" );
    });
    $( "#limparTab" ).button().on( "click", function() {
      $("#users tbody").text("");
    });


  } );