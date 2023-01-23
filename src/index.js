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

const containerForm = document.getElementById('form');
const containerDatosEnviados = document.getElementById('containerDatosEnviados');



function validarTarjeta() {

    let nombreCorrecto = false;
    let numeroCorrecto = false;
    let fechaCorrecto = false;
    let cvcCorrecto = false;

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
    }else if(validarNombre.length < 6){
        errorNombre.textContent = 'Nombre demasiado corto';
    }else{
        tarjetaNombre.textContent = validarNombre;
        nombreCorrecto = true;
        errorNombre.textContent = '';
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
        numeroCorrecto = true;
    }


    if (validarMes > 12 || validarMes < 1 || validarYear > 30 || validarYear < 23) {
        errorFecha.textContent = 'Fecha no valido';
    } else {
        tarjetafecha.textContent = `${mes.value}/${year.value}`;
        errorFecha.textContent = '';
        fechaCorrecto = true;
    }


    if (validarCvc.length != 3) {
        errorCvc.textContent = 'CVC no valido'
    } else {
        tarjetaCvc.textContent = cvc.value;
        errorCvc.textContent = '';
        cvcCorrecto = true;
    }

    if(nombreCorrecto && numeroCorrecto && fechaCorrecto && cvcCorrecto){
        nombre.value = '';
        numero.value = '';
        mes.value = '';
        year.value = '';
        cvc.value = '';
        containerForm.classList.add('inactive');
        containerDatosEnviados.classList.remove('inactive');
    }
}



btnConfirmar.addEventListener('click', validarTarjeta, false);

btnContinuar.addEventListener('click', ()=>{
    containerDatosEnviados.classList.add('inactive');
    containerForm.classList.remove('inactive');
    tarjetaNombre.textContent = 'Nombre';
    tarjetaNumero.textContent = '0000 0000 0000 0000';
    tarjetaCvc.textContent = '000';
    tarjetafecha.textContent = '00/00';
},false);

// 1212121212121212