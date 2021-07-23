function inserir(num){

    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;

}

function limpar(){

    document.getElementById('visor').innerHTML = "";

}

function apagar(){   

    var visor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = visor.substring (0, visor.length -1);

}

function quadrado(){

    var numero2 = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero2*numero2;

}

function negativoPositivo(){

    var numero3 = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero3*(-1);

}

function porcento(){

    var numero4 = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero4*0.01;

}

function calcular(){

    var visor = document.getElementById('visor').innerHTML;
    if(visor) {
        document.getElementById('visor').innerHTML = eval(visor);
    } else {
        document.getElementById('visor').innerHTML = "Nada...";
    }
}