let n1 = document.getElementById('num1');
let pNumero = document.getElementById('numero');
let pFatorial = document.getElementById('fatorial');

function Fatorial() {

    let n = parseInt(n1.value);
    let fatorial

    if (isNaN(n) || n <= 0) {
        alert('Insira valores válidos e maiores que 0');
        limparCampos()
        return;
    }

    fatorial = 1

    for (let i = n; i > 0; i--) {
        fatorial *= i;
    }
    exibirDados(n, fatorial)

}

function exibirDados(rNumero='', rFatorial='') {
    limparCampos();
    pNumero.textContent = rNumero;
    pFatorial.textContent = rFatorial;
}

function limparCampos() {
    n1.value = '';
    n1.focus();
}