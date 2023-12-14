
// 1.-Crearemos una calculadora para comprobar si un año es bisiesto o no. las condiciones a cumplir de un año bisiesto son que :-   es divisible por 4-   no es divisible por 100 o es divisible por 400    finalmente ,se debe imprimir por pantalla si es bisiesto , o no lo es.

function esBisiesto(anio) {
    if (anio % 4 == 0) {
        if (anio % 100 == 0) {
            if (anio % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let anio = parseInt(prompt("Ingrese un año: "));
if (esBisiesto(anio)) {
    alert(anio + " es bisiesto.");
} else {
    alert(anio + " no es bisiesto.");
}


// 2.-Crea una función llamada calculadora en javascript que tendrá 3 parámetros -un string llamada operación y dos números llamados “x” e “y entonces la string nos indicara el tipo de operación  que se llevara a cabo  entre “x” e “y” , es decir ,si operación es igual a “sumar”,”x” e “y” se van a sumar … esto lo tenemos que hacer con suma ,resta ,multiplicacion,division,exponenciacion y residuo, en caso de que el valor de operación ni corresponda con ninguno de estos , la función devolverá “-1” y que pueda imprimir los resultados en pantalla

function calculadora(operacion, x, y) {
    let resultado;
   
    switch (operacion) {
       case "sumar":
         resultado = x + y;
         break;
       case "restar":
         resultado = x - y;
         break;
       case "multiplicar":
         resultado = x * y;
         break;
       case "dividir":
         if (y != 0) {
           resultado = x / y;
         } else {
           return "No se puede dividir por cero";
         }
         break;
       case "exponente":
         resultado = Math.pow(x, y);
         break;
       case "residuo":
         resultado = x % y;
         break;
       default:
         return -1;
    }
   
    console.log("El resultado de la operación es: " + resultado);
    return resultado;
   }

console.log(calculadora("sumar", 5, 3)); 
   // El resultado de la operación es: 8
   
console.log(calculadora("restar", 5, 3)); // El resultado de la operación es: 2

console.log(calculadora("multiplicar", 5, 3)); 
// El resultado de la operación es: 15

console.log(calculadora("dividir", 5, 3)); 
// El resultado de la operación es: 1.6666666666666667

console.log(calculadora("exponente", 5, 3)); 
// El resultado de la operación es: 125

console.log(calculadora("residuo", 5, 3)); 
// El resultado de la operación es: 2

console.log(calculadora("resta", 5, 3)); 
// -1


// 3. en javascript vamos a crear dos variables, una va a ser string(nombre) y la otra un numero [cantidad], el nombre de producto puede ser, juntamente con su precio:-refresco 1,00 soles-cerveza 2.50 soles-papitas 5.00 solessegún la cantidad y el nombre del producto especificados, vamos a tener que calcular el precio total del pedido.

// Objeto con propiedades del nombre del producto y su precio
let productos = {
    "refresco": 1.00,
    "cerveza": 2.50,
    "papitas": 5.00
};

// Función para calcular el precio total del pedido
function calcularPrecioTotal(nombre, cantidad) {
    if (productos.hasOwnProperty(nombre)) {
        return productos[nombre] * cantidad;
    } else {
        console.log("Error: El producto no existe.");
        return null;
    }
}

// Ejemplo de uso
let nombre = "refresco";
let cantidad = 3;
let precioTotal = calcularPrecioTotal(nombre, cantidad);


console.log("El precio total del pedido es: " + precioTotal + " soles");