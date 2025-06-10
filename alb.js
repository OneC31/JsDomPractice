const gaming = document.querySelector('.gamingzone');
//console.log(gaming)

const cuadros = document.getElementsByClassName('cuadro');

const numero_randon = Math.round(Math.random() * 8) //math random da valores de 0 a 1 entre ellos decimales(0.1...)
//funcion de comenzar
let clickk = 0;
let play = false;

function mostrarClick(e) {
    clickk++;
    e.target.innerHTML = `▶ Pincha aqui! ${clickk}`
    //console.log(e.target.innerText);
    console.log(clickk);
    for (const cuadro of cuadros) {
    cuadro.addEventListener('click',mostrarClick)
} 
    //Play
    if (clickk === 1) {

        [...cuadros].forEach((cuadro, i) => {
            if (numero_randon == i) {
                cuadro.innerText = 'this'
            } else {
                cuadro.innerText = 'those'
            }
        });
        e.target.innerHTML = '🔁 Refresh'
        //Refresh
    } else if (clickk === 2) {
        e.target.innerHTML = '▶ Pincha aqui!'
        play = true;
        clickk = 0;
        [...cuadros].forEach((cuadro) => {
            if (cuadro.innerText == 'those' || cuadro.innerText == 'this') {
                cuadro.innerText = ''
            }
        })
    }
}
















function escribiendo(e) {
    const mi_texto = document.getElementById('mi-texto')
    mi_texto.innerHTML = e.target.value

}

function cambiarColor(color) {
    document.body.style.backgroundColor = color

}

/*if(cuadro.innerText == 'yes'){

}*/







//u1.addEventListener('click',mostrarClick);

/*[...cuadros].forEach((cuadro, i) => {
    if(numero_randon == i){
        cuadro.innerText = 'WIN'
    }else{
        cuadro.innerText = 'LOSE'
    }
});*/







/*const boton = document.getElementById('btns')
boton.addEventListener('input', function () {
    console.log('me presionaron')
})*/