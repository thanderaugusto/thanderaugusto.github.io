$(document).ready(function(){

function validarCampo() {

  var txtNome = $("#txtnome").val();
  var txtPeso = $("#txtpeso").val();
  var txtAltura = $("#txtaltura").val();


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

$("#btCalc").click(function(){

var trsPessoas = $(".pessoa");

var ps = 0;
while(ps <= trsPessoas.length - 1){

    var pessoa = trsPessoas[ps];

    var nomet = $(".nome").val(pessoa)[ps];
    var pesot = $(".peso").val(pessoa)[ps];
    var alturat = $(".altura").val(pessoa)[ps];

    var pessoaobj = {nome: nomet.textContent, 
                    peso: pesot.textContent, 
                    altura: alturat.textContent,
                    obtImcc: function ImcRes(){

                              var imc = this.peso / Math.pow(this.altura,2);

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
                              };


  
    var imc = pessoaobj.obtImcc();
      
    var imct = $(".resultado").val(pessoa)[ps];
    imct.textContent = imc.toString();

    ps++;
    
}

var trsPessoas = $(".pessoa");

var ps = 0;
while(ps <= trsPessoas.length - 1){

    var pessoa = trsPessoas[ps];

    var nomet = $(".nome").val(pessoa)[ps];
    var pesot = $(".peso").val(pessoa)[ps];
    var alturat = $(".altura").val(pessoa)[ps];

    var pessoaobj = {nome: nomet.textContent, 
                    peso: pesot.textContent, 
                    altura: alturat.textContent,
                    obtImc: function Imc(){

                              var imc = this.peso / Math.pow(this.altura,2);

                              return imc;
                            }
                              };


  
    var imc = pessoaobj.obtImc();
      
    var imct = $(".imc").val(pessoa)[ps];
    imct.textContent = imc.toFixed(2);

    ps++;
    
}

});

$("#btIns").click(function(){
    if (validarCampo()==0){
    return false;
    
  }else {
    var txtNome = $("#txtnome").val();
    var txtPeso = $("#txtpeso").val();
    var txtAltura = $("#txtaltura").val();

    var pessoaNew = "<tr class='pessoa'>"+
                        "<td class='nome'>"+txtNome+"</td>"+
                        "<td class='peso'>"+txtPeso+"</td>"+
                        "<td class='altura'>"+txtAltura+"</td>"+
                        "<td class='imc'></td>"+
              "<td class='resultado'></td>"+
                  "</tr>";


$(".tableadd")[0].innerHTML+= pessoaNew;



$("#txtnome").val("");
$("#txtpeso").val("");
$("#txtaltura").val("");


$(".tableadd").css('display','block');
$("#btCalc").css("display","inline-block");

}
});

});


