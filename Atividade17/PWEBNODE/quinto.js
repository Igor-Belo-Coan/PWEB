var eventos = require('events');
 
// Atribuição da classe EventEmitter a uma variável
var EmissorEventos = eventos.EventEmitter;
 
//Criação de uma instância do EventEmittervariável:
var ee = new EmissorEventos();
 
 
//ou criando direto sem a variável intermediária
//var ee = new eventos.EventEmitter();  mas da forma anterior é uma boa prática
 
//É registrado um ouvinte (listener) para o evento 'dados'.
//Quando esse evento é emitido, a função passada como argumento será executada. A função neste caso //imprime no console o valor recebido.
 
ee.on('dados', function(fecha){ 
  console.log(fecha);
});
 
//Emissão do evento a cada 500 milissegundos:
setInterval(function(){
  ee.emit('dados', Date.now());
}, 500);
