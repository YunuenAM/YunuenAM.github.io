//Login cuentas existentes

let usuarios = [
    {nombre: "Alejandro", correo:"alex@gmail.com", contraseña:"123za456&12"},
    {nombre: "María", correo:"maria@outlook.com", contraseña:"123za456&12"},
    {nombre: "Juan", correo:"juan@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Ana", correo:"ana@gmail.com", contraseña:"123za456&12"},
    {nombre: "Pedro", correo:"pedro@gmail.com", contraseña:"123za456&12"},
    {nombre: "Sofía", correo:"sofia@outlook.com", contraseña:"123za456&12"},
    {nombre: "Carlos", correo:"carlos@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Laura", correo:"laura@gmail.com", contraseña:"123za456&12"},
    {nombre: "Javier", correo:"javier@outlook.com", contraseña:"123za456&12"},
    {nombre: "Carmen", correo:"carmen@gmail.com", contraseña:"123za456&12"},
    {nombre: "Luis", correo:"luis@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Marta", correo:"marta@gmail.com", contraseña:"123za456&12"},
    {nombre: "Jorge", correo:"jorge@gmail.com", contraseña:"123za456&12"},
    {nombre: "Lucía", correo:"lucia@gmail.com", contraseña:"123za456&12"},
    {nombre: "Alberto", correo:"alberto@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Rosa", correo:"rosa@outlook.com", contraseña:"123za456&12"},
    {nombre: "Fernando", correo:"fer@gmail.com", contraseña:"123za456&12"},
    {nombre: "Elena", correo:"elena@gmail.com", contraseña:"123za456&12"},
    {nombre: "Diego", correo:"diego@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Sara", correo:"sara@gmail.com", contraseña:"123za456&12"},
    {nombre: "Manuel", correo:"manuel@outlook.com", contraseña:"123za456&12"},
    {nombre: "Cristina", correo:"cris@outlook.com", contraseña:"123za456&12"}
];



function  verificarCuenta(event){
    event.preventDefault(); //Evita que se recargue la página al hacer click en el botón de iniciar sesión
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;
    let mensajeError = document.getElementById("mensaje-error");

    //Hacemos un for para recorrer el arreglo de usuarios y verificar si el usuario y contraseña ingresados coinciden con los datos de alguna cuenta existente

    for(let i = 0; i < usuarios.length; i++){
        if(usuario === usuarios[i].nombre && password === usuarios[i].contraseña){
           alert("Bienvenido " + usuarios[i].nombre);
           window.location.href = "bienvenida.html";
           window.localStorage.setItem("usuario", usuarios[i].nombre);
           window.localStorage.setItem("correo", usuarios[i].correo);
           window.localStorage.setItem("contraseña", usuarios[i].contraseña);
              return;
    }
}
   mensajeError.innerHTML = "Usuario o contraseña incorrectos";
   
}


    //Reigistramos el usuario en el arreglo de usuarios

    function registrarUsuario(){
      let nombre = document.getElementById("usuario").value;
      let correo = document.getElementById("correo").value;
      let contraseña = document.getElementById("contraseña").value;

      usuarios.push({nombre: nombre, correo: correo, contraseña: contraseña});
      console.log(usuarios);
      window.localStorage.setItem("usuario", nombre);
      window.localStorage.setItem("correo", correo);
      window.localStorage.setItem("contraseña", contraseña);
    }

   //Funcion para redirigir a la página de inicio de sesión

   function redirigir(){
      window.location.href = "login.html";
   }
   
   //Función para redirigir a la página de inicio de sesión

   


//seleccion de elementos del DOM

const btnIniciarSesion= document.getElementById("btn-iniciar-sesion");
const btnRegistrarse= document.getElementById("btn-registrarse");

//Agregar evento a los botones

btnIniciarSesion.addEventListener("click", function(event){
    verificarCuenta(event);
});
btnRegistrarse.addEventListener("click", redirigir);