const operaciones = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        if (b === 0) {
            alert("Error: No se puede dividir por cero.");
            return null;
        }
        return a / b;
    }
};

export default operaciones;
