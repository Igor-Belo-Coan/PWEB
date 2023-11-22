var janela = document.getElementById("janela");
 
function abrirJanela() {
    janela.src = "janelaaberta.png";
    document.querySelector("h1").textContent = "Janela Aberta";
}
function fecharJanela() {
    janela.src = "janelafechada.png";
    document.querySelector("h1").textContent = "Janela Fechada";
}
function quebrarJanela() {
    janela.src = "janelaquebrada.png";
    document.querySelector("h1").textContent = "Janela Quebrada";
}
janela.addEventListener("mouseover", abrirJanela);
janela.addEventListener("mouseout", fecharJanela);
janela.addEventListener("dblclick", quebrarJanela);