import ParOuImpar from "./Par_ou_Impar.js";
import Fibonacci from "./Fibonacci.js";
import readlineSync from ('readline-sync');

let loop = true;

while (loop === true) {
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
            loop = false;
            break;
        default:
            console.log("\n Opcao invalida, tente novamente.");
    }

}