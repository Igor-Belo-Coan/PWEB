var aluno = {
    nome: null,
    nota1: null,
    nota2: null,
    nota3: null,
    media: null
}

aluno.nome = prompt("Digite o nome do aluno:");
aluno.nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
aluno.nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
aluno.nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"));

aluno.media = ((aluno.nota1 + aluno.nota2 + aluno.nota3) / 3).toFixed(2) ;

confirm(
    "Nome do aluno: " + aluno.nome + 
    "\nNota 1: " + aluno.nota1 +
    "\nNota 2: " + aluno.nota2 +
    "\nNota 3: " + aluno.nota3 +
    "\nMédia do aluno: " + aluno.media
);