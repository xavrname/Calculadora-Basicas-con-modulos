import { sumar, restar, multiplicar, dividir } from "./operaciones.js";

function calcular(operacion, num1, num2) {
    switch (operacion) {
        case "1": return sumar(num1, num2);
        case "2": return restar(num1, num2);
        case "3": return multiplicar(num1, num2);
        case "4": return dividir(num1, num2);
        default: return null;
    }
}

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt("Calculadora Básica\nSeleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");
        
        if (["1", "2", "3", "4"].includes(opcion)) {
            let num1 = parseFloat(prompt("Ponga el primer número:"));
            let num2 = parseFloat(prompt("Ponga el segundo número:"));
            let resultado = calcular(opcion, num1, num2);
            alert("El resultado es: " + resultado);
        } else if (opcion !== "5") {
            alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "5");
    
    alert("¡Adiós!");
}

window.onload = () => {
    document.getElementById("mensaje").textContent = "La calculadora se ejecutará en la consola del navegador.";
    mostrarMenu();
};
