function verifiqueDados(quantidade, de, ate) {
    if (quantidade === '' || de === '' || ate === '') {
        alert('Por favor, preencha todos os campos abaixo.');
        return false; // Retorna false para indicar que os dados não foram preenchidos corretamente
    }
    return true; // Retorna true para indicar que os dados foram preenchidos corretamente
}

function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    if (!verifiqueDados(quantidade, de, ate)) {
        return; // Interrompe a execução da função se os dados não estiverem preenchidos corretamente
    }

    quantidade = parseInt(quantidade);
    de = parseInt(de);
    ate = parseInt(ate);

    let sorteados = [];
    let numero;
    let botaoSortear = document.getElementById('btn-sortear');
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    let palavraSorteado = quantidade > 1 ? 'Números sorteados' : 'Número sorteado';
    let mensagem = `<label class="texto__paragrafo">${palavraSorteado}: ${sorteados}</label>`;
    resultado.innerHTML = mensagem; // Atualiza o conteúdo HTML do elemento 'resultado' com a mensagem criada
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) { 
        botao.classList.remove('container__botao-desabilitado'); 
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() { // para limpar o valor/imput digitado, pegar o .value e atribuir uma string vazia
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

