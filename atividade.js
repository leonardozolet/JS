// Função para solicitar e processar a escolha da bebida
function escolherBebida() {
    // Solicita a escolha da bebida ao cliente
    let opcao = prompt("Escolha a bebida (café, leite ou chá):").toLowerCase().trim();

    // Inicializa a variável de valor
    let valor;
    let bebida;

    // Avalia a opção escolhida e atribui o valor correspondente
    switch (opcao) {
        case 'café':
            valor = 3.50;
            bebida = 'café';
            break;
        case 'leite':
            valor = 2.50;
            bebida = 'leite';
            break;
        case 'chá':
            valor = 2.00;
            bebida = 'chá';
            break;
        default:
            console.log("Escolha inválida. Por favor, selecione entre café, leite ou chá.");
            return; // Encerra a função se a opção for inválida
    }

    // Exibe a mensagem personalizada
    console.log(`Você escolheu ${bebida}. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
}

// Chama a função para executar
escolherBebida();
