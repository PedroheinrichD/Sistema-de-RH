let media
let funcionarios = {
    nome: '',
    cargo: '',
    nota1: 5,
    nota2: 8,
    nota3: 3
}


for (let i = 0; i < funcionarios.length; i++) {
    const elementos = funcionarios[i];
}


function calcMedia() {
     media = (funcionarios.nota1 + funcionarios.nota2 + funcionarios.nota3) / 3
     console.log(`Cálculo da média é: ${media.toFixed(1)}`);
}


function desempenho(){
    if(media >= 8){
        console.log(`Desempenho: Excelente!`);
        
    }else if(media >= 6){
        console.log(`Desempenho: Satifatório`);
        
    }else{
        console.log(`Desempenho: Necessista Treinamento`);
    }
}


