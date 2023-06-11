const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const searchTerm = 'pan'; // término de búsqueda de ejemplo

const container = document.getElementById('recipes-container'); // ID del contenedor donde se mostrarán las recetas

fetch(url + searchTerm)
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manipular los datos obtenidos de la API y generar el contenido HTML
    const recipes = data.meals;
    let html = '';

    recipes.forEach(recipe => {
      html += `
      
        <div class="card">
          <img src="${recipe.strMealThumb}"  alt="${recipe.strMeal}">
          <div class="card-body">
            <h5 class="card-title">${recipe.strMeal}</h5>
            <p class="card-text">${recipe.strInstructions}</p>
          </div>
        </div>
      `;
    });
    

    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('container');
      container ? container.innerHTML = html : console.error("El elemento 'container' no se encuentra en el DOM.");
    });
    

   
    container.innerHTML = html
  })
  .catch(error => {
    // Manejo de errores
    console.log('Error:', error);
  });



