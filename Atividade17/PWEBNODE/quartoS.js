const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf8');

// a execução é bloqueada aqui até que o arquivo ser lido

console.log(data.toString());