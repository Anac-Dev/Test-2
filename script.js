// Estrutura para representar os dados de faturamento diário
class FaturamentoDiario {
    constructor(dia, valor) {
        this.dia = dia;
        this.valor = valor;
    }
}

// Função para calcular o menor valor de faturamento
function menorFaturamento(mensal) {
    let menor = mensal[0].valor;
    for (let i = 1; i < mensal.length; i++) {
        if (mensal[i].valor < menor) {
            menor = mensal[i].valor;
        }
    }
    return menor;
}

// Função para calcular o maior valor de faturamento
function maiorFaturamento(mensal) {
    let maior = mensal[0].valor;
    for (let i = 1; i < mensal.length; i++) {
        if (mensal[i].valor > maior) {
            maior = mensal[i].valor;
        }
    }
    return maior;
}

// Função para calcular a média mensal de faturamento
function mediaFaturamento(mensal) {
    let total = mensal.reduce((acc, curr) => acc + curr.valor, 0);
    return total / mensal.length;
}

// Função para contar dias em que o faturamento diário foi superior à média mensal
function diasAcimaDaMedia(mensal) {
    const media = mediaFaturamento(mensal);
    let contador = 0;
    for (let i = 0; i < mensal.length; i++) {
        if (mensal[i].valor > media) {
            contador++;
        }
    }
    return contador;
}

// Dados de faturamento mensal
const faturamentoMensal = [
     new FaturamentoDiario(1, 22174.1664),
     new FaturamentoDiario(2, 24537.6698),
     new FaturamentoDiario(3, 26139.6134),
     new FaturamentoDiario(4, 0.0),
     new FaturamentoDiario(6, 26742.6612),
     new FaturamentoDiario(7, 0.0),
     new FaturamentoDiario(8, 42889.2258),
     new FaturamentoDiario(9, 46251.174),
     new FaturamentoDiario(10,  11191.4722),
     new FaturamentoDiario(11, 0.0),
     new FaturamentoDiario(12, 0.0),
     new FaturamentoDiario(13, 3847.4823),
     new FaturamentoDiario(14, 373.7838),
     new FaturamentoDiario(15, 2659.7563),
     new FaturamentoDiario(16,  48924.2448),
     new FaturamentoDiario(17, 18419.2614),
     new FaturamentoDiario(18, 0.0),
     new FaturamentoDiario(19, 0.0),
     new FaturamentoDiario(20,  35240.1826),
     new FaturamentoDiario(21,  43829.1667),
     new FaturamentoDiario(22, 18235.6852),
     new FaturamentoDiario(23, 4355.0662),
     new FaturamentoDiario(24, 13327.1025 ),
     new FaturamentoDiario(25, 0.0),
     new FaturamentoDiario(26, 0.0),
     new FaturamentoDiario(27, 25681.8318),
     new FaturamentoDiario(28, 1718.1221),
     new FaturamentoDiario(29, 13220.495),
     new FaturamentoDiario(30, 8414.61)
];

// Exibindo resultados
console.log("Menor faturamento do mês:", menorFaturamento(faturamentoMensal));
console.log("Maior faturamento do mês:", maiorFaturamento(faturamentoMensal));
console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia(faturamentoMensal));
