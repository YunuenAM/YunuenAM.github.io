let boton = document.getElementById("btn-iniciar-sesion");

//Sweet Alert

boton.addEventListener("click", function () {
    Swal.fire(Swal.fire({
        title: '¡Bienvenid@ ' + usuarios[i].nombre, 
        text: '¡Has iniciado sesión correctamente!',
        timer: 2000,
        showConfirmButton:false
       })) 
    })