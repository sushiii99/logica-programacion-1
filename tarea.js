

// Debe solicitar al usuario 3 números por prompt 
// y guardarlos en sus respectivas variables.
// let num1 = parseInt(prompt("Ingrese un numero: "))
// let num2 = parseInt(prompt("Ingrese un numero: "))
// let num3 = parseInt(prompt("Ingrese un numero: "))

//Debe analizar los números, identificar cual es el número mayor,
//  el número del centro y el número menor

function comparar(num1, num2, num3){
// ver si son iguales
    if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales");
    } 
    else{ 

    // obtenemos el num mayor
    let mayor= num1
    if (num2 > mayor){ 
        mayor = num2}
    if (num3 > mayor){
        mayor = num3}

    //obt el menor
    let menor = num1;
    if (num2 < menor){
menor = num2}
    else if (num3 < menor){
    menor = num3}

    //obt el centro
    if (num1 !== mayor && num1 !== menor) {
        centro = num1;
    } else if (num2 !== mayor && num2 !== menor) {
        centro = num2;
    } else {
        centro = num3;
    }

    console.log("Mayor a menor:", mayor, centro, menor);
    console.log("Menor a mayor:", menor, centro, mayor);
}
}

comparar(4,4,2)
comparar(4,2,4)
comparar(2,4,4)
comparar(3,3,3)
comparar(3,1,9)
