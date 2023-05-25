//Para lograr mediante código un carrito exitoso se capturara el evento agregar al carrito de cada producto, obteniendo la cantidad seleccionada y almacenandola en el local storage, luego en la página del carrito se podrá resuperar los datos almacenados en el local storage y generar el carrito dinamicamente con los productos seleccionados:

// Variables
const carrito = document.querySelector('#carrito');
const listaPanes = document.querySelector('#lista-panes');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaPanes.addEventListener('click', agregarPan);

     // Cuando se elimina un pane del carrito
     carrito.addEventListener('click', eliminarPan);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}




// Funciones
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

     // console.log(articulosCarrito)

     

     // console.log(articulosCarrito)
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

}

// Elimina los panes del carrito en el DOM
function vaciarCarrito() {
     // forma lenta
     // contenedorCarrito.innerHTML = '';


     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}
