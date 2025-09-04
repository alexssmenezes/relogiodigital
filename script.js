// Função responsável por atualizar o horário exibido no elemento com a classe "display"
function atualizarTempo() {

    // Seleciona o elemento HTML onde o horário será exibido
    let display = document.querySelector('.display');

    // Cria um objeto Date para obter a hora atual
    let agora = new Date();

    // Monta a string do horário no formato HH:MM:SS
    // A função corrigirHorario garante que números menores que 10 tenham um zero à esquerda
    let horario = corrigirHorario(agora.getHours()) + ':' +
        corrigirHorario(agora.getMinutes()) + ':' +
        corrigirHorario(agora.getSeconds());

    // Atualiza o conteúdo de texto do elemento "display" com o horário formatado
    display.textContent = horario;
}

// Função auxiliar para adicionar zero à esquerda em números menores que 10
function corrigirHorario(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

// Chama a função imediatamente para exibir o horário assim que a página carregar
atualizarTempo();

// Configura a atualização do horário a cada 1000 milissegundos (1 segundo)
setInterval(atualizarTempo, 1000);

// Tentativa de exibir a variável "horario" no console
// OBS: Isso causará erro, pois "horario" está definida apenas dentro da função atualizarTempo()
// e não existe no escopo global
console.log(horario);
