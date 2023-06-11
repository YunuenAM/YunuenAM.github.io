

//Añadimos un evento al ícono de 'Ingresa' para que al dar click acceda a la página de login a través de un modal.


document.addEventListener("DOMContentLoaded", function() {
  const iconoIngresa = document.getElementById("icono-ingresa");
// Verificar si el elemento se encuentra correctamente
 if(iconoIngresa){
  iconoIngresa.addEventListener("click", function() {
    const modal = document.getElementById("modal-ingresa");
    modal.style.display = "block";
  });
}
});

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function(){
    const modal = document.getElementById("modal-ingresa");
    modal.style.display = "none"
  });


    // Función para mostrar el modal
function mostrarModal() {
    modal.style.display = "block";
  }
  
  // Función para ocultar el modal
  function ocultarModal() {
    modal.style.display = "none";
  }