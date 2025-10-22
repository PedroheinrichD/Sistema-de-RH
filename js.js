let media
/* let funcionarios = {
    nome: '',
    cargo: '',
    nota1: 5,
    nota2: 8,
    nota3: 3
}
*/



let funcionarios = [
    {
        nome: document.querySelector('#nome'),
        cargo: document.querySelector('#cargo'),
        nota1: document.querySelector('#nota1'),
        nota2: document.querySelector('#nota2'),
        nota3: document.querySelector('#nota3')
    }
]

for (let i = 0; i < funcionarios.length; i++) {
    const elementos = funcionarios[i];
}


function calcMedia() {
    media = (funcionarios.nota1 + funcionarios.nota2 + funcionarios.nota3) / 3
    console.log(`Cálculo da média é: ${media.toFixed(1)}`);
}


function desempenho() {
    if (media >= 8) {
        console.log(`Desempenho: Excelente!`);

    } else if (media >= 6) {
        console.log(`Desempenho: Satifatório`);

    } else {
        console.log(`Desempenho: Necessista Treinamento`);
    }
}




function adicionarForm(event) {
    event.preventDefault()
}

let meuFormulario = document.querySelector('#formFuncionario')
