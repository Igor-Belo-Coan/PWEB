var dados = [];

// Enviar dados
document.getElementById('enviar').addEventListener('click', () => {

    document.getElementById('boxRelatorio').classList.remove('dflex');
    document.getElementById('boxRelatorio').classList.add('dnone');

    if (document.getElementById('idade').value != 0) {

        let pessoa = {
            idade: Number(document.getElementById('idade').value),
            sexo: document.getElementById('sexo').value,
            opiniao: document.getElementById('opiniao').value
        }

        dados.push(pessoa);

        document.getElementById('sucess').innerHTML = 'Sua resposta foi enviada!';

        setTimeout(() => {
            document.getElementById('sucess').innerHTML = '';
        }, 2000);

    } else {
        alert('Você precisa inserir sua idade!');
    }
});

// Gerar relatório
document.getElementById('relatorio').addEventListener('click', () => {

    if (dados.length > 1) {

        document.getElementById('mediaIdade').innerHTML = mediaIdade();
        document.getElementById('maiorIdade').innerHTML = maiorIdade();
        document.getElementById('menorIdade').innerHTML = menorIdade();
        document.getElementById('qtdPessimo').innerHTML = qtdPessimo();
        document.getElementById('porcentOtimoBom').innerHTML = porcentOtimoBom();

        var sexos = mascFem();
        document.getElementById('mascFemf').innerHTML = sexos.fem;
        document.getElementById('mascFemm').innerHTML = sexos.masc;

        document.getElementById('boxRelatorio').classList.remove('dnone');
        document.getElementById('boxRelatorio').classList.add('dflex');
    } else {
        alert("Não há respostas cadastradas para criar um relatório!")
    }
});


// Limpar formulário (campo idade)
document.getElementById('limpar').addEventListener('click', () => {

    document.getElementById('idade').value = null;
});

document.getElementById('fechar').addEventListener('click', () => {

    document.getElementById('boxRelatorio').classList.remove('dflex');
    document.getElementById('boxRelatorio').classList.add('dnone');
});


function mediaIdade() {

    let idades = 0;

    dados.map((i) => {
        idades += i.idade;
    });

    return (idades / dados.length);
}

function maiorIdade() {

    let idade = 0;

    dados.map((i) => {
        if (i.idade > idade) {
            idade = i.idade;
        }
    });

    return idade;
}

function menorIdade() {

    let idade = Infinity;

    dados.map((i) => {
        if (i.idade < idade) {
            idade = i.idade;
        }
    });

    return idade;
}

function qtdPessimo() {

    let qtd = 0;

    dados.map((i) => {
        if (i.opiniao == '1') {
            qtd++;
        }
    });

    return qtd;
}

function porcentOtimoBom() {

    let qtd = 0;

    dados.map((i) => {
        if (i.opiniao == '4' || i.opiniao == '3') {
            qtd++;
        }
    });

    return ((qtd / dados.length) * 100);
}

function mascFem() {

    let sexos = {
        masc: 0,
        fem: 0
    }

    dados.map((i) => {
        if (i.sexo == 'masculino') {
            sexos.masc++;
        } else if (i.sexo == 'feminino') {
            sexos.fem++;
        }
    });

    return sexos;
}