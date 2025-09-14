function verificaSePar(numero) {
    if (numero %2 == 0) {
        return true;
    } else {
        return false;
    }
}

function executaParOuImpar(readlineSync) {

let arrNumero = [],
    numeros_pares = [],
    numeros_impares = [];

let quantidade = readlineSync.question("\nInforme a quantidade de numeros a analisar: ");

for (let i = 0; i < quantidade; i++) {
    let numero = readlineSync.question("\nInforme um numero: ");
    arrNumero.push(numero);
}

for (let i=0; i < arrNumero.length; i++) {

    var resultado = verificaSePar(arrNumero[i]);

    if(resultado === true){ 
        numeros_pares.push(arrNumero[i]);
    } else {
        numeros_impares.push(arrNumero[i]);
    }
}
console.log("\nNumeros pares: ");
console.log(numeros_pares);
console.log("\nNumeros impares: ");
console.log(numeros_impares);
}

module.exports = {
    executaParOuImpar
};