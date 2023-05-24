//Este código sirve para que ald ar click en ver menú o en ícono de hamburguesa redireccione a la página de pedidos

function redirigirMenu(){
    window.location.href = "seleccionarPedido.html";
}

const divMenu = document.getElementById("menu");
const iconoMenu = document.getElementsByClassName("bi-list");

//Se agrega el evento click al ícono del menu

divMenu.addEventListener("click", redirigirMenu);
iconoMenu.addEventListener("click", redirigirMenu);