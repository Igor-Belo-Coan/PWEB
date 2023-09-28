function jogar(escolha) {
    var escolhaPc = Math.floor((Math.random() * 3) + 1);

    switch (escolha) {
        case 1:
            document.getElementById('voce').innerHTML = 'Você: Pedra';
            break;
        case 2:
            document.getElementById('voce').innerHTML = 'Você: Papel';
            break;
        case 3:
            document.getElementById('voce').innerHTML = 'Você: Tesoura';
            break;
    }

    switch (escolhaPc) {
        case 1:
            document.getElementById('pc').innerHTML = 'Computador: Pedra';
            break;
        case 2:
            document.getElementById('pc').innerHTML = 'Computador: Papel';
            break;
        case 3:
            document.getElementById('pc').innerHTML = 'Computador: Tesoura';
            break;
    }

    if(escolha === escolhaPc){
        document.getElementById('result').innerHTML = 'EMPATE';
        document.getElementById('result').className = "";
        document.getElementById('result').classList.add('empate');
    }else if((escolha === 1 && escolhaPc === 2) || (escolha === 2 && escolhaPc === 3) || (escolha === 3 && escolhaPc === 1)){
        document.getElementById('result').innerHTML = 'DERROTA';
        document.getElementById('result').className = "";
        document.getElementById('result').classList.add('derrota');
    }else{
        document.getElementById('result').innerHTML = 'VITÓRIA';
        document.getElementById('result').className = "";
        document.getElementById('result').classList.add('vitoria');
    }
}