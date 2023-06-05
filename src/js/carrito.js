//El siguiente código es para que dal dar click en el ícono del carrito, se muestre el carrito de compras

//Se obtiene el elemento del ícono del carrito

function redirigirCarrito(){
   window.location.href = "src/index.html";
}

const divCarrito = document.getElementById("cart");
const iconoCarrito = document.getElementById(".bi-cart");

//Se agrega el evento click al ícono del carrito

