function calcularCostoPedido(){
    let producto = document.getElementById('producto').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let costo = 0;
    let costoProducto = 0;

    switch(producto) {
        case 'baguette':
            costoProducto = 2;
            break;
        case 'batard':
            costoProducto = 5;
            break;
        case 'boule':
            costoProducto = 7;
            break;
        case 'bagel':
            costoProducto = 1.5;
            break;
        case 'pizza':
            costoProducto = 15;
            break;
        default:
            return;
    }

    // Calcula el costo total del pedido
    costo = costoProducto * cantidad;

    document.getElementById("costo").textContent = `${costo.toFixed(2)}`; //Muestra el costo total del pedido utilizando el método toFixed para mostrar solo dos decimales y se ocupa getElementsByClassName para obtener el elemento con el id costo y mostrar el costo total del pedido en el HTML
}

document.addEventListener("DOMContentLoaded", function(){
let elemento = document.getElementById("carrito");

function mostrarModal() {
    let modal = document.getElementById("modal-compras");
    modal.style.display = "block";
}

if (elemento !==null){
    elemento.addEventListener("click", mostrarModal);

}   })