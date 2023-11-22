function validar() {
    var nome = document.nomeform.elements['nome'].value;
    var email = document.nomeform.elements['email'].value;
    var comentario = document.nomeform.elements['comentario'].value;
    var pesquisa = document.getElementsByName('pesquisa');

    if (nome.length < 10) {
        alert('O nome deve ter pelo menos 10 caracteres.');
        return false;
    }

    if (!(email.includes('@') && email.includes('.'))) {
        alert('Insira um e-mail válido.');
        return false;
    }

    if (comentario.length < 20) {
        alert('O comentário deve ter pelo menos 20 caracteres.');
        return false;
    }

    if (!pesquisa[0].checked && !pesquisa[1].checked) {
        alert('Por favor, responda à pesquisa.');
        return false;
    }

    if (pesquisa[1].checked) {
        alert('Que bom que você voltou a visitar esta página!');
    } else {
        alert('Volte sempre à esta página!');
    }

    return true;
}

function limparCampos() {
    document.nomeform.elements['nome'].value = '';
    document.nomeform.elements['email'].value = '';
    document.nomeform.elements['comentario'].value = '';
    document.nomeform.elements['pesquisa'][0].checked = false;
    document.nomeform.elements['pesquisa'][1].checked = false;
}
