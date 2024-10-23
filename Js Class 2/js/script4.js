    // let name = prompt("Por favor, inserta tu nombre");
    // alert("Buenos días, " + name);

    // let num = parseFloat(prompt("Ingresa la cantidad"));
    // let moneda = parseInt(prompt("Selecciona la moneda: \n1. Colón\n2. Yenes\n3. Peso\n4. Quetzales\n5. Libras\n6. Soles"));

    // let total;

    // if (moneda === 1) {
    //     total = num * 8.74;
    //     alert("Tu total en Colones es: " + total);
    // } else if (moneda === 2) {
    //     total = num * 152.99;
    //     alert("Tu total en Yenes es: " + total);
    // } else if (moneda === 3) {
    //     total = num * 19.98;
    //     alert("Tu total en Pesos es: " + total);
    // } else if (moneda === 4) {
    //     total = num * 0.13;
    //     alert("Tu total en Quetzales es: " + total);
    // } else if (moneda === 5) {
    //     total = num * 1.30;
    //     alert("Tu total en Libras es: " + total);
    // } else if (moneda === 6) {
    //     total = num * 7.73;
    //     alert("Tu total en Soles es: " + total);
    // } else {
    //     alert("Opción no válida. Por favor, selecciona un número del 1 al 6.");
    // }

    let i = 1, suma = 0;

    for (i = 1; i <= 100; i += 2) {
      let sumaPar = i + (i + 1);
      console.log("La suma de", i, "y", i + 1, "es:", sumaPar);
      suma += sumaPar; // Acumula la suma total
    }
    
    console.log("La suma total de los números pares consecutivos hasta 100 es:", suma);
    
    