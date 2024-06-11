let n1 = document.getElementById('num1');
let pNumero = document.getElementById('numero');
let pStatus = document.getElementById('status');

function Primo() {

    let num = parseInt(n1.value);  
    let strStatus;


    if (isNaN(num) || num <= 0) {
        alert('Insira valores válidos e maiores que 0');
        limparCampos()
        return;
    }

    if (num <= 1) {
        strStatus = 'Falso';
        exibirDados(num, strStatus);
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) {
            strStatus = 'Falso';
            exibirDados(num, strStatus);
            return false;
        }
    }
    strStatus = 'Verdadeiro'; 
    exibirDados(num, strStatus);
    return true;
}

function exibirDados(rNumero='', rStatus='') {
    limparCampos();
    pNumero.textContent = rNumero;
    pStatus.textContent = rStatus;
}

function limparCampos() {
    n1.value = '';
    n1.focus();
}