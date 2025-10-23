// ==========================================================
// 1. ESTRUTURA DE DADOS (Estado Global)
// ==========================================================

// O array que armazena todos os objetos de funcionários.
let funcionarios = [];


// ==========================================================


// Função Pura 1: Calcula a média a partir das 3 notas.
// A função DEVE RETORNAR o valor da média, não apenas imprimi-lo.
function calcMedia(nota1, nota2, nota3) {
    // Retorna o resultado para quem chamou
    return (nota1 + nota2 + nota3) / 3;
}


// Função Pura 2: Classifica o desempenho a partir da MÉDIA.
// A função deve ser chamada com a média já calculada.
function desempenho(media) {
    if (media >= 8) {
        return "Excelente!";
    } else if (media >= 6) {
        return "Satisfatório";
    } else {
        return "Necessita Treinamento";
    }
}


// ==========================================================
// 3. FUNÇÃO DE GESTÃO (Modifica o Estado Global)
// Responsabilidade: Receber dados, criar o objeto e adicioná-lo.
// ==========================================================

function cadastrarFuncionarioPuro(nome, cargo, nota1, nota2, nota3) {
    const novoFuncionario = {
        nome,
        cargo,
        nota1,
        nota2,
        nota3
    };
    funcionarios.push(novoFuncionario);

}


// ==========================================================
// 4. CHAMADA DE TESTE (Simulação de Entrada)
// ==========================================================
cadastrarFuncionarioPuro('Pedro', 'dev', 2, 2, 2);
cadastrarFuncionarioPuro('joao', 'analista', 9, 9, 7);




// ==========================================================
// 5. FUNÇÃO DE LISTAGEM/RELATÓRIO (Ainda precisa ser escrita)
// ==========================================================

function gerarRelatorio() {
    for (let i = 0; i < funcionarios.length; i++) {
        let elementos = funcionarios[i];
        let media = calcMedia(elementos.nota1, elementos.nota2, elementos.nota3)
        let classificacao = desempenho(media);


     console.log(
    `Nome: ${elementos.nome} 
     Média: ${media.toFixed(1)}
     Desempenho: ${classificacao}
    `
        );
    }




}

gerarRelatorio()

