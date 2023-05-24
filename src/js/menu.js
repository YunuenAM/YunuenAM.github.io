//Este código sirve para que ald ar click en ver menú o en ícono de hamburguesa redireccione a la página de pedidos

function redirigirMenu(){
    window.location.href = "seleccionarPedido.html";
}

const divMenu = document.getElementById("menu");
const iconoMenu = document.getElementsByClassName("bi-list")[0];
const divMenu2 = document.getElementById("menu2");
const iconoMenu2 = document.getElementsByClassName("bi-list2")[0];

//Se agrega el evento click al ícono del menu

divMenu.addEventListener("click", redirigirMenu);
iconoMenu.addEventListener("click", redirigirMenu);
divMenu2.addEventListener("click", redirigirMenu);
iconoMenu2.addEventListener("click", redirigirMenu);