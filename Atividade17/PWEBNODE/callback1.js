const prompt = require('prompt-sync')();
// não esquecer de instalar
// npm install prompt-sync

function saudacao(nome) {
 console.log(' OI ' + nome);
}

function entradaNome(callback) {
 var nome = prompt('Digite seu nome: ');
 callback(nome); // chamando a função callback (saudação)
}

entradaNome(saudacao);
// obter o nome do usuário através de uma caixa de diálogo e, em seguida, chamar a função de retorno (callback) fornecida como parâmetro, passando o nome digitado como argumento.
