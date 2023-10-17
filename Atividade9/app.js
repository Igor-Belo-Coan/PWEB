var dados = [];

document.getElementById('enviar').addEventListener('click', (event) => {
    event.preventDefault();

    let pessoa = {
        idade: document.getElementById('idade').value,
        sexo: document.getElementById('sexo').value,
        opiniao: document.getElementById('opiniao').value
    }

    console.log(pessoa.idade)
    console.log(pessoa.sexo)
    console.log(pessoa.opiniao)

    dados.push(pessoa);

});

document.getElementById('relatorio').addEventListener('click', () => {

    console.log(dados);
});



