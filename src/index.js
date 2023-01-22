const tarjetaNumero = document.getElementById('tarjetaNumero');
const tarjetaNombre = document.getElementById('tarjetaNombre');
const tarjetafecha = document.getElementById('tarjetafecha');
const tarjetaCvc = document.getElementById('tarjetaCvc');

const nombre = document.getElementById('nombre');
const numero = document.getElementById('numero');
const mes = document.getElementById('mes');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const btnConfirmar = document.getElementById('confirnar');
const btnContinuar = document.getElementById('continuar');

const errorNombre = document.querySelector('.errorNombre');
const errorNumero = document.querySelector('.errorNumero');
const errorFecha = document.querySelector('.errorFecha');
const errorCvc = document.querySelector('.errorCvc');



function validarTarjeta() {

    let validarNumero = numero.value
        .toString()
        .split('')
        .filter(item => item >= 0 && item <= 9)
        .join('');

    let validarMes = Number(mes.value
        .toString()
        .split('')
        .filter(item => item >= 0 && item <= 9)
        .join(''));

    let validarYear = Number(year.value
        .toString()
        .split('')
        .filter(item => item >= 0 && item <= 9)
        .join(''));

    let validarCvc = cvc.value
        .toString()
        .split('')
        .filter(item => item >= 0 && item <= 9);

    
    let validarNombre = nombre.value;

    if(validarNombre.length > 25){
        errorNombre.textContent = 'Nombre demasiado largo';
    }else{
        tarjetaNombre.textContent = validarNombre;
    }
    

    if (numero.value.length != 16 || validarNumero.length < numero.value.length) {
        errorNumero.textContent = 'Numero invalido';
    } else {
        let nuevoNumero = [];
        for (let i = 0; i < validarNumero.length; i++) {
            if (i == 4 || i == 8 || i == 12) nuevoNumero.push(" ");
            nuevoNumero.push(validarNumero[i]);
        }

        tarjetaNumero.textContent = nuevoNumero.join('');
        errorNumero.textContent = '';
    }


    if (validarMes > 12 || validarMes < 1 || validarYear > 30 || validarYear < 23) {
        errorFecha.textContent = 'Fecha no valido';
    } else {
        tarjetafecha.textContent = `${mes.value}/${year.value}`;
        errorFecha.textContent = '';
    }


    if (validarCvc.length != 3) {
        errorCvc.textContent = 'CVC no valido'
    } else {
        tarjetaCvc.textContent = cvc.value;
        errorCvc.textContent = '';
    }
}



btnConfirmar.addEventListener('click', validarTarjeta, false);

// 1212121212121212