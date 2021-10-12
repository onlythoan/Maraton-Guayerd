//Maraton Guayerd - Germán Martinez 

//Ejercicio 1
let nombreUsuario;
nombreUsuario = window.prompt("Ingrese Su Nombre: ");
alert("Hola: " + nombreUsuario.toLocaleUpperCase());
alert("Hola: " + nombreUsuario.toLocaleLowerCase());

//Ejercicio 2
let primerNumero;
let segundoNumero;

primerNumero = parseInt(prompt("Ingrese el numero 1",""));
segundoNumero = parseInt(prompt("Ingrese el numero 2",""));

suma = primerNumero + segundoNumero
alert("El resultado sumado es: " + suma);

if(primerNumero > segundoNumero)
{
    resta = primerNumero - segundoNumero
}
else
{
     resta = segundoNumero - primerNumero

}
alert("Tu Resultado restado es: " + resta);

//Ejercicios 3

let IngreseTxt = window.prompt("Ingrese un texto");
let resultadoTxt = confirm("Aceptar para ver el resultado, o Cancelar para ver por consola");
function mostrartxtmayuscula(a,b) 
{
if (b == true) 
{
    alert("Su texto es: " + a.toUpperCase());
} 
else 
{
    console.log("Su texto es: " + a.toUpperCase());
}
}
mostrartxtmayuscula(IngreseTxt,resultadoTxt);

//Ejercicio 4

let numero1 = parseInt(prompt("Ingrese primer numero: "));
let numero2 = parseInt(prompt("Ingrese segundo número: "));
let operacion = window.prompt("Ingrese la operación que desee realizar (sumar, restar, multiplicar, dividir, potencia)");
switch(operacion){
    case "sumar":
        let suma = numero1 + numero2;
        alert("Tu suma es: " + suma);
        break;
    case "restar":
        let resta = numero1 - numero2;
        alert("Tu resta es: " + resta);
        break;
    case "multiplicar":
        let multiplicacion = numero1 * numero2;
        alert("Tu multiplicación es: " + multiplicacion);
        break;
    case "dividir":
        let div = numero1 / numero2;
        ("Tu divición es: " + div);
        break;
    case "potencia":
        alert("Tus numeros potenciados son: " + numero1 ** 2 + " & " + numero2 ** 2);
        break;
        default:
        alert("Error, solo funciones mencionadas funcionan");
        break;
}

//Ejercicio 5

let cierre = false;
do
{
    let numero1 = parseInt(prompt("Ingrese primer numero: "));
    let numero2 = parseInt(prompt("Ingrese segundo número: "));
    let operacion = window.prompt("Ingrese la operación que desee realizar (sumar, restar, multiplicar, dividir, potencia)");
    switch(operacion){
        case "sumar":
             let suma = numero1 + numero2; 
            alert("Tu suma es: " + suma);
            cierre = confirm("¿Si desea hacer otra funcion click en aceptar.")
            break;
        case "restar":
            let resta = numero1 - numero2;
            alert("Tu resta es: " + resta);
            cierre = confirm("¿Si desea hacer otra funcion click en aceptar.")
            break;
        case "multiplicar":
            let multiplicacion = numero1 * numero2;
            alert("Tu multiplicación es: " + multiplicacion);
            cierre = confirm("¿Si desea hacer otra funcion click en aceptar.")
            break;
        case "dividir":
            let div = numero1 / numero2;
            ("Tu divición es: " + div);
            cierre = confirm("¿Si desea hacer otra funcion click en aceptar.")
            break;
        case "potencia":
            alert("Tus numeros potenciados son: " + numero1 ** 2 + " & " + numero2 ** 2);
            cierre = confirm("¿Si desea hacer otra funcion click en aceptar.")
            break;
        default:
            alert("Error, solo funciones mencionadas funcionan");
            break;
    }   
}
while(cierre == true) 

//Ejercicio 6

const agregarNombredeAlumnos = [];
let finalizar = false;
do
{
    let nombreAlumnos = window.prompt("Ingrese Nombre del Alumno al Curso");
    agregarNombredeAlumnos.push(nombreAlumnos);
    finalizar = window.confirm("¿Desea agregar mas alumnos al curso?");
}
while(finalizar == true);
alert("Los alumnos agregados al curso son: " + agregarNombredeAlumnos);

//Ejercicio 7
/*const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];

for (let i = 0; i < ej7Nombres.length; i++){
   let primeraMasyu = i + "" + ej7Nombres[i].charAt(0).toLocaleUpperCase(); primeraMasyu.push(primeraMasyu);
}
console.log(primeraMasyu);









