
/* capturar clique dos botões */
function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
};

/* Limpa o display da calculadora */
function clean() {
    document.getElementById('resultado').innerHTML = "";
};

/* apaga 1 caractere ou numero por vez */
function back() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
};

function percentual(num) {
    let resultado = document.getElementById('resultado').innerHTML;
};
function calculate() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "";
    }

};
