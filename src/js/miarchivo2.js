//Filtro de alergenos pendiente

//En miarchivo2.js, se crea un array de objetos con los siguientes datos:
const productos = [
    {nombre: 'baguette', precio: 35, alergenos: ['gluten']},
    {nombre: 'batard', precio: 100, alergenos: ['gluten', 'huevo', ]},
    {nombre: 'boule', precio: 120, alergenos: [ 'huevo', 'lacteos']},
    {nombre: 'bagel', precio: 25, alergenos: [ 'huevo', 'almendras']},
    {nombre: 'pizza', precio: 250, alergenos: ['gluten', 'huevo', 'lacteos',]},
];

// //Se crea un array vacío llamado carrito para almacenar los productos que el cliente desea comprar
// let carrito = [];
// //Se pregunta al cliente si desea ver la lista de productos disponibles
// let verLista = prompt('¿Deseas ver la lista de productos?');

// //En caso de que el cliente no desee ver la lista de productos, se le agradece por su visita
// if( verLista === "no"){
//     alert (`Gracias por tu visita, esperamos verte pronto`);
// //En caso de que el cliente diga que si, se muestra la lista de productos disponibles  
// } else if ( verLista === "si"|| "sí)"){
//     alert (`Estos son los productos disponibles: ${productos.map(producto => `${producto.nombre}-$${producto.precio}`).join('\n')}`);
// //En caso de que el cliente ingrese una opción inválida, se le pide que ingrese una opción válida
// } else{

// while( verLista !="si" && verLista  !="no" && verLista  !="sí"){
//     verLista = prompt('Ingrese una opción válida: si/no');
// }
// }

//////////////////////////////////////////////////////////////////////////////////
// Ahora se utiliza el método filter para obtener la lista de panes sin gluten

// let sinGluten = productos.filter(producto => !producto.alergenos.includes('gluten'));
// se declara una variable sinGluten para almacenar los productos que no contienen gluten y después se utiliza el método filter para obtener la lista de panes sin gluten mediante el uso de la función flecha y el método includes para obtener los productos que no contienen gluten
// console.log(sinGluten);

//Finalmente se ocupa el método forEach para aplicar un descuento , cuando hay promoción en este caso del 10% a panes libres de gluten

let descuento = 0.10;
let carrito = [] //Se declaran las variables descuento y carrito para almacenar el descuento y los productos que el cliente desea comprar

productos.forEach(producto => {
 if(producto.alergenos.includes('gluten')){
    producto.precio = producto.precio - (producto.precio * descuento);
    carrito.push(producto);
 } //se ocupa el métod forEach para aplicar un descuento a los productos que no contienen gluten y se almacenan en el array carrito y finalmente se ocupa carrito.push para agregar los productos al array carrito
});


console.log('Productos con descuento: ', carrito);
