// 0 1 1 2 3 5 8 13



function main(tamanho, readlineSync) {

    tamanho = Number(tamanho);

    let fibonacciArray  = [0, 1];

    for (let i = 2; i < tamanho; i++ ) {

        fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i -2]);
        
    }

    console.log("\nSequencia de fibonacci e: " + fibonacciArray);

    let posicao = readlineSync.question("\nEscolha a posicao do numero da lista que voce quer que o algoritmo informe: ");

    console.log("\nO numero da sequencia na posicao "+posicao+" e "+fibonacciArray[posicao]);

}
function executaFibonacci(readlineSync) {

let tamanho;

while(isNaN(tamanho)) {
    tamanho = readlineSync.question("\nEscolha o tamanho da sua lista fibonacci: ");
}

main(tamanho, readlineSync);
}

module.exports = {
    executaFibonacci
};