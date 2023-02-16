// let num=prompt("digite el numero del que desea saber la tabla de multiplicar.")

// for (let i = 1; i <= num; i++) {
//     console.log(`\n Tabla ${i} \n `);
//     for (let j = 0; j < 11; j++) {
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
//     console.log("=================================================");
// }

// Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
// ingresando el costo de los medicamentos calcules el descuento y el precio final.

// let precio=parseInt( prompt("Ingrese el costo de los medicamentos"));
// let descuento;
// let preciofinal;
// descuento=precio*0.1
// preciofinal=precio-descuento;
// console.log(`Los medicamentos costaron ${precio} el descuento del 10% es: ${descuento} y el precio final es: ${preciofinal}`);



// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se compone de los siguientes porcentajes:
// • 55% del promedio final de sus calificaciones de los tres(3) parciales.
// • 30% de la calificación examen final y
// • 15% de la calificación trabajo final.

let nota1=parseFloat(prompt("ingrese la nota 1 del parcial"));
let nota2=parseFloat(prompt("ingrese la nota 2 del parcial"));
let nota3=parseFloat(prompt("ingrese la nota 3 del parcial"));
let examenf=parseFloat(prompt("Ingrese la calificación del examen final"));
let trabajof=parseFloat(prompt("Ingrese la calificación del trabajo final"));
let promedio=(nota1+nota2+nota3)/3
let total=((promedio*0.55) + (examenf*0.3) + (trabajof * 0.15));
console.log(`El promedio de los parciales es: ${promedio} cuyo porcentaje es ${(promedio*0.55)}%`);
console.log(`La calificacion del examen final es : ${examenf} cuyo porcentaje es ${(examenf*0.3)}`);
console.log(`La calificacion del trabajo final es : ${trabajof} cuyo porcentaje es ${(trabajof * 0.15)}`);
console.log(`La nota final es: ${total}`);



