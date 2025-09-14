var readlineSync = require('readline-sync');

const ParOuImpar = require("./Par_ou_Impar");
const Fibonacci = require("./Fibonacci");

while (true) {
    console.log("\n Menu");
    console.log("\n 1 - Par ou Impar");
    console.log("\n 2 - Fibonacci");
    console.log("\n 3 - Sair");

    let opcao = readlineSync.question("\n Escolha uma opcao: ");

    switch (opcao) {
        case "1":
            console.log("\n Executa a função de Par ou Impar...");
                ParOuImpar.executaParOuImpar(readlineSync);
            break;
        case "2":
            console.log("\n Executa a função de Fibonacci...");
                Fibonacci.executaFibonacci(readlineSync);
            break;
        case "3":
            console.log("\n Saindo...");
            return;
        default:
            console.log("\n Opcao invalida, tente novamente.");
            break;
    }

}