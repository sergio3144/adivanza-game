let numRandomOne = Math.floor(Math.random() * 50);
let numRandomTwo = Math.floor(Math.random() * 50);

let resultadoReal = numRandomOne + numRandomTwo;

document.querySelector('.num1').textContent = numRandomOne;
document.querySelector('.num2').textContent = numRandomTwo;


let resultado;

let formulario = document.querySelector('form');
let inputSubmit = document.querySelector('.input-number')
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    resultado = parseInt(inputSubmit.value);
    
    if(resultadoReal === resultado) {
        alert(`Suma correcta: ${numRandomOne} + ${numRandomTwo} = ${resultadoReal}`)
    } else {
        alert(`Error el resultado es: ${resultadoReal}`)
    }
})

