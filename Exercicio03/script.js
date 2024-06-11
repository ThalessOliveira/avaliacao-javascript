let n1 = document.getElementById('num1');
let pImposto = document.getElementById('imposto');

let pValor = document.getElementById('valor');
let pImpostoMostrar = document.getElementById('impostoMostrar');
let pCalculo = document.getElementById('calculo');

function Imposto() {
    let n = parseFloat(n1.value);
    let imposto = parseFloat(pImposto.value);


    if (isNaN(n) || isNaN(imposto) || n <= 0 || imposto < 0) {
        alert('Insira valores válidos e maiores que 0');
        limparCampos()
        return;
    }

    let calculo = n * (imposto / 100);
    calculo += n
    
    exibirDados(n, imposto, calculo);
}

function exibirDados(rValor = '', rImpostoMostrar = '', rCalculo = '') {
    limparCampos();
    pValor.textContent = rValor;
    pImpostoMostrar.textContent = rImpostoMostrar + '%';
    pCalculo.textContent = rCalculo;
}

function limparCampos() {
    n1.value = '';
    pImposto.value = '';
    n1.focus();
}
