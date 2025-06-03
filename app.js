//console.log("Hola Mundo");

/*const toppings = document.getElementsByClassName('toppings');
//const titulo= document.getElementById('titulo');
//console.log(toppings[3]);

const misToppings = document.getElementsByTagName('li');
//console.log(misToppings);

const toppingsFondosmarr= document.getElementsByClassName('fondo-marron');
//console.log(toppingsFondosmarr) */; 

/*const toppings2 = document.querySelector('ul li:not(.fondo-marron)');
console.log(toppings2);*/

/*const toppingsmarrones = document.querySelectorAll('.toppings.fondo-marron');
console.log(toppingsmarrones[0], toppingsmarrones[1]);

const toppingsnaranjas = document.querySelectorAll('.toppings.fondo-naranja');
console.log(toppingsnaranjas[0], toppingsnaranjas[1]);*/
const primertopping = document.querySelector('.toppings');
//nsole.log(primertopping);

const segundoTopping = document.querySelector('.toppings');
//segundoTopping.style.backgroundColor = 'blue';
segundoTopping.style.fontSize = '30px';
//segundoTopping.style.color = '#ffff00';
segundoTopping.style.textTransform = 'uppercase';
segundoTopping.style.fontFamily = 'Arial, Helvetica, sans-serif';
segundoTopping.style.fontWeight = 'bold';
segundoTopping.classList.add('text-azulito');

const listadoToppings = document.getElementById('lista-toppings');
console.log(listadoToppings.innerText);

const nuevoTopping =document.getElementById('Titulo')
titulo.innerText = "hola mundo";

const enlaces = document.getElementsByTagName('a');
console.log(enlaces[0].getAttribute('href'));
enlaces[0].setAttribute('href', 'https://www.google.com');



const PrimerTOPPINSKI = document.querySelector('.toppings');
console.log("Hola Mundo");
console.log(PrimerTOPPINSKI.classList);
console.log(segundoTopping.classList.contains('fondo-marron'));
//console.log(toppingsmarrones[0], toppingsmarrones[1]);

const listaDeToppings= document.getElementById('lista-toppings');
const toppingnuevo = document.createElement('li');
listaDeToppings.append(toppingnuevo);

function mostrarClick () {
    console.log('click ');
}
function backgroundColor() {
    console.log('cambio de color');
    document.body.style.backgroundColor = generarColorHexadecimal(); 
}

//console.log(colorText.innerText);
//funcion de generar color aleatorio hexadecimal
function generarColorHexadecimal() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
   let color_generado = "#fff";

   const red = document.getElementById('red');
   red.oninput = () => document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
   let textoRojo = document.getElementById('red');
    textoRojo.innerText = red.value;

    const green = document.getElementById('green');
    green.oninput = () => document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;

    const blue = document.getElementById('blue');
    blue.oninput = () => document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;

    
//document.body.style.backgroundColor = 

const boton = document.getElementById('boton');
const colorText= document.getElementById('color');


/*boton.addEventListener('click', function(){
    let newColor = generarColorHexadecimal();
    colorText.innerText = newColor;
    document.body.style.backgroundColor = newColor; 
});*/

const tercerTopping = document.querySelectorAll('.toppings');

[...tercerTopping].forEach(topping => topping.onclick = e => console.log(e.target.id));








/*async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));*/