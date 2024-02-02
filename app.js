let numeroSecreto = 0;
let intentos  = 0;
let listaNumerosSorteados = [];
let numeromaximo = 10;

console.log(numeroSecreto)
function asignarTextoElement(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarintento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElement(`p`, `¡Acertaste el número en ${intentos} ${(intentos === 1) ? `vez`: `veces`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElement(`p`, `El número secreto es menor`);
    } else {
        asignarTextoElement(`p`, `El número secreto es mayor`);
    }
    intentos++;
    limpiarCaja();
    }
}


function limpiarCaja() { 
    document.querySelector(`#valorUsuario`).value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeromaximo)+ 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeromaximo) {
        asignarTextoElement('p', 'ya se sortearon todos los números posibles');
    }else {
        
        //si el numero generado esta incluido en la lista


        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){ 
    asignarTextoElement(`h1`, `Juego del número secreto`);
    asignarTextoElement(`p`, `Indica un número del 1 al ${numeromaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    //Inicializar el número intentos
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}



condicionesIniciales();

