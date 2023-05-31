Tercera Entrega hacia el Proyecto Final🦄


De acuerdo a la consigna de pre-entrega, este trabajo contiene


1. Implemetación con uso de JSON y Storage
2. Modificación del DOM y detección de eventos de usuario

Formato:

Página HTML y código fuente en JavaScript

Lo nuevo en esta pre-entrega en js contiene:

💻-Un archivo carrito.js dónde se implementa una función que al dar click al carrito muestre el carrito de compras

💻-Un archivo addCarrito  que mediante código, captura el evento agregar a carrito de cada producto, obteniendo la cantidad seleccionada y la almacena en el local storage mismos datos que serán recuperados y generar un carrito dinámicamente con los productos seleccionados. Ejemplo :

`localStorage.setItem('carrito',JSON.stringify(articulosCarrito));`

💻-Un archivo modal.js donde se añade un evento al ícono ingresa para que al dar click acceda a la página del login a través del modal

💻-Un archivo cuenta.js donde se encuentra dentro de un array de objetos las cuentas una database (hardcodeada)  de usuarios, email y contraseñas, así como las funciones que permiten verificarCuenta, y cerrar sesión.

💻-Un archivo blog.js en el cuál mediante un input se puede hacer la búsqueda de entradas por autor del blog, se usa el método filter() e includes()

Nota: Es recomendable acceder desde el index.html y al iniciar sesión utilizar el nombre de Manuel (o consúltese las cuentas) y la contraseña :"123za456&12"
