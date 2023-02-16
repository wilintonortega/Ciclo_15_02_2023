let num=prompt("digite el numero del que desea saber la tabla de multiplicar.")

for (let i = 1; i <= num; i++) {
    console.log(`\n Tabla ${i} \n `);
    for (let j = 0; j < 11; j++) {
        console.log(`${i} X ${j} = ${i*j}`);
    }
    console.log("=================================================");
}