function validarCampo() {

  var txtNome = document.getElementById("txtnome");
  var txtPeso = document.getElementById("txtpeso");
  var txtAltura = document.getElementById("txtaltura");


      
      if(txtNome.value==""){
      alert("Por favor, preencha o Nome");
      txtNome.focus();
      txtNome.setAttribute('style','background-color: #f9bdbd');
      return 0;
    } 
    let re = new RegExp('[/0-9/]');
    if (re.test(txtNome.value)!=0) {
      alert("Nome apenas caracteres!");  
      txtNome.select();
      txtNome.setAttribute('style','background-color: #f9bdbd');
      return 0;
    }txtNome.setAttribute('style','background-color: #d3ffde');
    

    if(txtPeso.value==""){
      alert("Por favor, preencha o Peso");
      txtPeso.focus();
      txtPeso.setAttribute('style','background-color: #f9bdbd');
      return 0;
    }
    else if (isNaN(txtPeso.value)) {
      alert("Peso apenas números!");  
      txtPeso.select();
      txtPeso.setAttribute('style','background-color: #f9bdbd');
      return 0;
    }txtPeso.setAttribute('style','background-color: #d3ffde');
    
    
    if(txtAltura.value==""){
      alert("Por favor, preencha a Altura");
      txtAltura.focus();
      txtAltura.setAttribute('style','background-color: #f9bdbd');
      return 0;
    }
    else if (isNaN(txtAltura.value)) {
      alert("Altura apenas números!");  
      txtAltura.select();
      txtAltura.setAttribute('style','background-color: #f9bdbd');
      return 0;
    }txtAltura.setAttribute('style','background-color: #d3ffde');
    return 1;
}

calcRes = function(event){

var trsPessoas = document.getElementsByClassName("pessoa");

var ps = 0;
while(ps <= trsPessoas.length - 1){

    var pessoa = trsPessoas[ps];

    var nomet = pessoa.getElementsByClassName("nome")[0];
    var pesot = pessoa.getElementsByClassName("peso")[0];
    var alturat = pessoa.getElementsByClassName("altura")[0];

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
      
    var imct = pessoa.getElementsByClassName("resultado")[0];
    imct.textContent = imc.toString();

    ps++;
    
}event.preventDefault();

}



calc = function(event){

var trsPessoas = document.getElementsByClassName("pessoa");

var ps = 0;
while(ps <= trsPessoas.length - 1){

    var pessoa = trsPessoas[ps];

    var nomet = pessoa.getElementsByClassName("nome")[0];
    var pesot = pessoa.getElementsByClassName("peso")[0];
    var alturat = pessoa.getElementsByClassName("altura")[0];

    var pessoaobj = {nome: nomet.textContent, 
                    peso: pesot.textContent, 
                    altura: alturat.textContent,
                    obtImc: function Imc(){

                              var imc = this.peso / Math.pow(this.altura,2);

                              return imc;
                            }
                              };


  
    var imc = pessoaobj.obtImc();
      
    var imct = pessoa.getElementsByClassName("imc")[0];
    imct.textContent = imc.toFixed(2);

    ps++;
    
}event.preventDefault();

}

add = function(event) {
    if (validarCampo()==0){
    event.preventDefault();
    return false;
    
  }else {
    var txtNome = document.getElementById("txtnome");
    var txtPeso = document.getElementById("txtpeso");
    var txtAltura = document.getElementById("txtaltura");

    var pessoaNew = "<tr class='pessoa'>"+
                        "<td class='nome'>"+txtNome.value+"</td>"+
                        "<td class='peso'>"+txtPeso.value+"</td>"+
                        "<td class='altura'>"+txtAltura.value+"</td>"+
                        "<td class='imc'></td>"+
              "<td class='resultado'></td>"+
                  "</tr>";

var tb = document.getElementsByTagName("table")[0];

tb.innerHTML += pessoaNew;

txtNome.value="";
txtPeso.value="";
txtAltura.value="";


document.getElementsByTagName("table")[0].setAttribute("style","display: block;");
document.getElementsByClassName("btCalc")[0].setAttribute("style","display: inline-block;");

event.preventDefault();
}

}


