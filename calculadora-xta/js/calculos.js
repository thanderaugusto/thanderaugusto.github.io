var l1 = document.getElementById("lado1");
var l2 = document.getElementById("lado2");
var res= document.getElementById("resultado");
var valorM = document.getElementById("metro");
var resValor= document.getElementById("valor");


var custoM = document.getElementById("custoM");
var resValorModalTotal = document.getElementById('valorModalTotal');
var resValorModalLucro = document.getElementById('valorModalLucro');

var checkbox = document.getElementById('check');
var lucro = document.getElementById('custo');

var valorMt = 0;

// Unidades
var qtdMetro = document.getElementById('qtdMetro');
var resQtde = document.getElementById('resQtde');

replaceString= ()=> {
    l1.value = l1.value.replace(",",".");
    l2.value = l2.value.replace(",",".");
    valorM.value = valorM.value.replace(",",".");
    custoM.value = custoM.value.replace(",",".");
    l1.value = l1.value.replace(/[^\d.,]+/g,'');
    l2.value = l2.value.replace(/[^\d.,]+/g,'');
    valorM.value = valorM.value.replace(/[^\d.,]+/g,'');
    custoM.value = custoM.value.replace(/[^\d.,]+/g,'');

    if(l2.value != ""){
        res.innerHTML = (l1.value * l2.value).toFixed(2) +" m²";
    }

    if(valorM.value != ""){
        resValor.innerHTML = "R$ " + (parseFloat(res.innerText) * valorM.value).toFixed(2);
    } 
    else resValor.innerHTML = "R$ 0,00";


    if(custoM.value != ""){
        resValorModalTotal.innerHTML = "R$ " + (parseFloat(res.innerText) * custoM.value).toFixed(2);
        let v1 = (parseFloat(resValor.innerText.replace("R$","")));
        let v2 = (parseFloat(resValorModalTotal.innerText.replace("R$","")));
        resValorModalLucro.innerHTML = "R$ " + (v1 - v2).toFixed(2);
    } 
    else {
        resValorModalTotal.innerHTML = "R$ 0,00";
        resValorModalLucro.innerHTML = "R$ 0,00";
    }
 }

replaceStringUnidade= ()=> {
    l1.value = l1.value.replace(",",".");
    l2.value = l2.value.replace(",",".");
    qtdMetro.value = qtdMetro.value.replace(",",".");

    l1.value = l1.value.replace(/[^\d.,]+/g,'');
    l2.value = l2.value.replace(/[^\d.,]+/g,'');
    qtdMetro.value = qtdMetro.value.replace(/[^\d.,]+/g,'');

    if(checkbox.checked){
        if(l2.value != ""){
            valorMt = (((l1.value * l2.value) / 10000)  * 1.11);
        } 
    } else {
        if(l2.value != ""){
            valorMt = ((l1.value * l2.value) / 10000);
        } 
    }

    if(qtdMetro.value != ""){
        resQtde.innerHTML = (parseFloat(qtdMetro.value) / parseFloat(valorMt)).toFixed(0);
    } else  resQtde.innerHTML = "0";
 }

 Verificar = ()=>{
     if(l1.value != "" && l2.value != "" && valorM.value != ""){
        lucro.setAttribute("data-target","#modalLucro");
     } else {
        lucro.setAttribute("data-target","#modalAviso");
     }
 }

Limpar = ()=> {
    l1.value = "";
    l2.value = "";
    valorM.value = ""
    res.innerHTML = "0.0 m²";
    resValor.innerHTML = "R$ 0,00";
    l1.focus();
}

LimparUn = ()=> {
    l1.value = "";
    l2.value = "";
    qtdMetro.value = "";
    resQtde.innerHTML = "0";
    l1.focus();
}

LimparModal = ()=> {
    custoM.value = "";
    resValorModalTotal.innerHTML = "R$ 0,00";
    resValorModalLucro.innerHTML = "R$ 0,00";
}

 




 