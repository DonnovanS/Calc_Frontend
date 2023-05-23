// Crear un event listen
//1. Tener una fer al elemento del DOM que se quiere agregar

const miBoton = document.getElementById('submit');
console.log(miBoton);

miBoton.addEventListener(
    'click',
    async(event) => {
        event.preventDefault();
        const numero_1 = document.getElementById('num1').value;
        const numero_2 = document.getElementById('num2').value;

        const respuesta = await fetch(
            'http://localhost:3000/api/sumar', {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({ numero_1, numero_2 })
            }
        );
        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML = dato;
    }
);