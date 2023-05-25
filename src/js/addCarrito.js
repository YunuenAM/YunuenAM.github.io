//Para lograr mediante código un carrito exitoso se capturara el evento agregar al carrito de cada producto, obteniendo la cantidad seleccionada y almacenandola en el local storage, luego en la página del carrito se podrá resuperar los datos almacenados en el local storage y generar el carrito dinamicamente con los productos seleccionados:

// Función para obtener los productos almacenados en el Local Storage
function getProductsFromLocalStorage() {
    const products = localStorage.getItem('products');
    if (products) {
      return JSON.parse(products);
    } else {
      return [];
    }
  }
  
  // Función para guardar los productos en el Local Storage
  function saveProductsToLocalStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }
  
  // Función para actualizar el carrito en la página del carrito
  function updateCartTable() {
    const cartTable = document.querySelector('#carrito tbody');
    cartTable.innerHTML = '';
  
    const products = getProductsFromLocalStorage();
  
    products.forEach((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
        <td>${product.price * product.quantity}</td>
        <td>
          <button class="btn btn-danger btn-remove" data-id="${product.id}">Eliminar</button>
        </td>
      `;
      cartTable.appendChild(row);
    });
  }
  
  // Función para actualizar los totales en el resumen de compra
  function updateTotals() {
    const products = getProductsFromLocalStorage();
  
    let subtotal = 0;
    products.forEach((product) => {
      subtotal += product.price * product.quantity;
    });
  
    const shipping = 0; // Puedes agregar lógica para calcular el costo de envío
    const discount = 0; // Puedes agregar lógica para aplicar descuentos
  
    const total = subtotal + shipping - discount;
  
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('envio').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('descuento').textContent = `$${discount.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
  }
  
  // Función para eliminar un producto del carrito
  function removeProductFromCart(productId) {
    const products = getProductsFromLocalStorage();
  
    const updatedProducts = products.filter((product) => product.id !== productId);
  
    saveProductsToLocalStorage(updatedProducts);
  
    updateCartTable();
    updateTotals();
  }
  
  // Función para manejar el evento de clic en el botón "Agregar a mi carrito"
  function handleAddToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');
    const quantityInput = document.querySelector(`#input-${productId}`);
    const quantity = parseInt(quantityInput.value, 10);
  
    if (quantity > 0) {
      const product = {
        id: productId,
        name: button.parentNode.querySelector('.card-title').textContent,
        quantity: quantity,
        price: 0 // Puedes agregar lógica para obtener el precio del producto
      };
  
      const products = getProductsFromLocalStorage();
      products.push(product);
      saveProductsToLocalStorage(products);
  
      quantityInput.value = ''; // Limpiar el campo de cantidad
  
      updateCartTable();
      updateTotals();
    }
  }
  
  // Función para manejar el evento de clic en el botón "Eliminar"
  function handleRemoveFromCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');
  
    removeProductFromCart(productId);
  }
  
  // Agregar event listeners a los botones correspondientes
  document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-dark.text-end');
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', handleAddToCart);
    });
  
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach((button) => {
      button.addEventListener('click', handleRemoveFromCart);
    });
  
    updateCartTable();
    updateTotals();
  });
  