
function validation(){
    let usuario = [
        {user: "Kahoru25", pass: "Gatito25"}
    ]
    let u = document.getElementById("floatingInput");
    let p = document.getElementById("floatingPassword");
    campoVacioCorreo();
    limiteNomUsuario()
    campoVacioContaseña();
    contraseñaMin5_15Words();
    for (let i=0; i< usuario.length; i++){

        if(u.value==usuario[i].user && p.value == usuario[i].pass){
            window.location.replace("../index.html");
    }else if(u.value==usuario[i].user){
        alert("contraseña invalida");
    }else if(p.value == usuario[i].pass){
        alert("contraseña valido pero no el correo");
    }
    else{
        alert("correo y contraseña invalido");
    }
    }
    limpiar();
}

function limpiar(){
    let vacio = ""
    document.getElementById("floatingPassword").value = vacio; //toma el id y le introduce campos vacios a los inputs
    document.getElementById("floatingInput").value = vacio;
    // console.log("limpio?");
}


function campoVacioCorreo() {
    //obteniendo el valor que se puso en campo text del formulario
    campoCorreo = document.getElementById("floatingInput").value;

    //la condición
    if (campoCorreo.length == 0) {
        alert("Campo correo vacio")
        return false;
    }
    return true;
}

function campoVacioContaseña() {
    //obteniendo el valor que se puso en campo text del formulario
    campoContraseña = document.getElementById("floatingPassword").value;

    //la condición
    if (campoContraseña.length == 0 ) {
        alert("Campo contraseña vacio")
        return false;
    }
    return true;
}

function contraseñaMin5_15Words() {
    //obteniendo el valor que se puso en campo text del formulario
    campoContraseña = document.getElementById("floatingPassword").value;

    //la condición
    if (campoContraseña.length <= 5 || campoVacioContaseña.length >= 15 ) {
        alert("Contraseña debe ser menor a 5 y menor a 15 letras")
        return false;
    }
    return true;
}

function limiteNomUsuario() {
    //obteniendo el valor que se puso en campo text del formulario
    campoUsuario = document.getElementById("floatingInput").value;

    //la condición
    if (campoUsuario.length >= 10 ) {
        alert("No puede ser mayor a 10 letras")
        return false;
    }
    return true;
}

document
  .getElementById('floatingInput')
  .addEventListener('input', function(evt) {
    const campo = evt.target,
          valido = document.getElementById('campoOK'),
        
          regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

    //Se muestra un texto válido/inválido
    if (regex.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }
  });