//Para lograr mediante código un carrito exitoso se capturara el evento agregar al carrito de cada producto, obteniendo la cantidad seleccionada y almacenandola en el local storage, luego en la página del carrito se podrá resuperar los datos almacenados en el local storage y generar el carrito dinamicamente con los productos seleccionados:

// Variables
const carrito = document.querySelector('#carrito');
const listaPanes = document.querySelector('#lista-panes');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// // Listeners

document.addEventListener("DOMContentLoaded", function(){
     cargarEventListeners();

});
 function cargarEventListeners(){
     const listaPanes = document.getElementById("lista-panes");
     const carrito = document.getElementById("carrito");
     const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

     //Dispara cuando se dispara agregar carrito

     if (listaPanes){
          listaPanes.addEventListener('click', agregarPan);
     }

     //Cuando se elimina un pan del carrito
     if(carrito){
          carrito.addEventListener('click', eliminarPan);
     }

     //Al vaciar carrito

     if (vaciarCarritoBtn){
          vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
     }

 }

//      //Recuperar carrito en local storage al cargar la página

     document.addEventListener('DOMContentLoaded', () => {
        if(localStorage.getItem('carrito')){
            articulosCarrito = JSON.parse(localStorage.getItem('carrito'));
            carritoHTML();
        }
    });




// Función que añade el pan al carrito
function agregarPan(e) {
     e.preventDefault();
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const pan = e.target.parentElement.parentElement;
          // Enviamos el pan seleccionado para tomar sus datos
          leerDatosPan(pan);
     }
}

// Lee los datos del pan
function leerDatosPan(pan) {
     const infoPan = {
          imagen: pan.querySelector('img').src,
          titulo: pan.querySelector('h4').textContent,
          precio: pan.querySelector('.precio span').textContent,
          id: pan.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( pan => pan.id === infoPan.id ) ) { 
          const panes = articulosCarrito.map( pan => {
               if( pan.id === infoPan.id ) {
                    pan.cantidad++;
                     return pan;
                } else {
                     return pan;
             }
          })
          articulosCarrito = [...panes];
     }  else {
          articulosCarrito = [...articulosCarrito, infoPan];
     }

     //Guardar carrito en local storage
     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
 
     carritoHTML();
}

// Elimina el pan del carrito en el DOM
function eliminarPan(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-pan') ) {
          // e.target.parentElement.parentElement.remove();
          const panId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(pan => pan.id !== panId);

          carritoHTML();
     }
}


// Muestra el pan seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(pan => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${pan.imagen}" width=100>
               </td>
               <td>${pan.titulo}</td>
               <td>${pan.precio}</td>
               <td>${pan.cantidad} </td>
               <td>
                    <a href="#" class="borrar-pan" data-id="${pan.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

     //Actualiza el carrito en el local storage

     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));

}

// Elimina los panes del carrito en el DOM
function vaciarCarrito() {

    limpiarHTML(); // Elimina todo el HTML

    localStorage.removeItem ('carrito'); 
}
     

// Elimina los panes del carrito en el DOM

function limpiarHTML() {
     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}
