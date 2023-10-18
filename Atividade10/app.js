document.getElementById('limpar').addEventListener('click', () => {

    document.getElementById('numero1').value = null;
    document.getElementById('numero2').value = null;
    document.getElementById('numero3').value = null;
    document.getElementById('maior').innerHTML = '';
    document.getElementById('ordem').innerHTML = '';
});

document.getElementById('calcular').addEventListener('click', () => {

    var num1 = Number(document.getElementById('numero1').value);
    var num2 = Number(document.getElementById('numero2').value);
    var num3 = Number(document.getElementById('numero3').value);

    document.getElementById('maior').innerHTML = maior(num1, num2, num3);
    document.getElementById('ordem').innerHTML = ordem(num1, num2, num3);
});

function ordem(n1, n2, n3) {

    let array = [n1, n2, n3];
    return array.sort((a, b) => {
        return a - b;
    });
}

function maior(n1, n2, n3) {

    return Math.max(n1, n2, n3);
}