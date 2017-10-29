

var nome = new Array();
var peso = new Array();
var altura = new Array();
var imc = new Array();
var resultado = new Array();
var i = new Array();
var p = 0;

function add(){
	nome[p] = prompt("Digite seu Nome: ","Nome");
	peso[p] = prompt("Digite seu Peso: ","Peso");
	altura[p] = prompt("Digite seu Altura: ","Altura");
		
	var opc = prompt("Adicionar Pessoa[1], Calcular[2]: ","opção");
	switch(opc) {
		case "1":
			p++;
    	add();
			break;
		case "2":
			for (var a = 0; a <= p; a++ ) {
	i[a] = ("Nome: "+nome[a]+"  Peso: "+peso[a]+"  Altura: "+altura[a]+"  IMC: "+CalcularImc(peso[a], altura[a]).toFixed(2)+"  Resultado: "+Result(CalcularImc(peso[a], altura[a]))+"\n\n");
	}
   alert(i.toString());
   var conf = confirm("Deseja calcular outro IMC?");
   if(conf== true){
   	add();
   }
		break;
		default:
			alert("Não existe essa opção!");
			add();
	}

}

function CalcularImc(peso,altura){
	imc[p] = peso / Math.pow(altura,2);
	return imc[p];
}
    
function Result(imc){
	if(imc<17){
		resultado[p] = " Muito abaixo do Peso";
	}
	else if(imc>=17.1 && imc<=18.49){
		resultado[p] = " Abaixo do Peso";
	}
	else if(imc>=18.5 && imc<=24.99){
		resultado[p] = " Peso Normal";
	}
	else if(imc>=25 && imc<=29.99){
		resultado[p] = " Acima do Peso";
	}
	else if(imc>=30 && imc<=34.99){
		resultado[p] = " Obesidade I";
	}
	else if(imc>=35 && imc<=39.99){
		resultado[p] = " Obesidade II (Severa)";
	}
	else if(imc>=40){
		resultado[p] = " Obesidade III (Mórbita)";
	}
	return resultado[p];
}