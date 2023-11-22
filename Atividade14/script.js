function transformarTexto(checkType) {
    let texto = document.getElementById('texto').value;
    
    if (checkType === "maiusculas") {
        document.getElementById('minusculas').checked = false;
    } else if (checkType === "minusculas") {
        document.getElementById('maiusculas').checked = false;
    }


    if (document.getElementById('maiusculas').checked) {
        document.getElementById('texto').value = texto.toUpperCase();
    } else if (document.getElementById('minusculas').checked) {
        document.getElementById('texto').value = texto.toLowerCase();
    }
}