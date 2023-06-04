

//Añadimos un evento al ícono de 'Ingresa' para que al dar click acceda a la página de login a través de un modal.

document.getElementById("icono-ingresa").addEventListener("click", function() {
    // Aquí puedes agregar el código para abrir el modal de compras
    const modal = document.getElementById("modal-ingresa");
    modal.style.display = "block";

   // Obtener referencia al elemento de cierre del modal
const closeBtn = document.querySelector(".close");

// Agregar evento de click al elemento de cierre
closeBtn.addEventListener("click", function() {
  const modal = document.getElementById("modal-ingresa");
  modal.style.display = "none";
});

    // Función para mostrar el modal
function mostrarModal() {
    modal.style.display = "block";
  }
  
  // Función para ocultar el modal
  function ocultarModal() {
    modal.style.display = "none";
  }
  });