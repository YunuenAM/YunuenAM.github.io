// Datos de prueba hardcodeados
const database = [
    {
      Titulo: 'Título 1',
      contenido: 'Contenido 1',
      autor: 'Ana'
    },
    {
      Titulo: 'Título 2',
      contenido: 'Contenido 2',
      autor: 'Alex',
      imagen: 'img/01-baguette.jpg'
      
    },
    {
      Titulo: 'Título 3',
      contenido: 'Contenido 3',
      autor: 'Diana'
    }
  ];
  
  // Obtener referencias a elementos HTML
  const searchInput = document.querySelector('#searchInput');
  const searchButton = document.querySelector('#searchButton');
  const resultContainer = document.querySelector('#result');
  
  // Agregar evento al botón de búsqueda
  searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const filteredEntries = filterEntries(searchTerm);
  
    showEntries(filteredEntries);
  });
  
  // Función para filtrar las entradas basado en el término de búsqueda
  function filterEntries(searchTerm) {
    const filteredEntries = database.filter(entry =>
      entry.autor.toLowerCase() === searchTerm
    );
  
    return filteredEntries;
  }
  
  // Función para mostrar los resultados filtrados
  function showEntries(entries) {
    clearHTML();
  
    if (entries.length === 0) {
      noResult();
    } else {
      entries.forEach(entry => {
        const entryHTML = document.createElement('div');
        const image = document.createElement('img');
      image.src = entry.imagen; 
     image.style.width = '100px';
     image.style.height = 'auto';
      entryHTML.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = entry.Titulo;
      entryHTML.appendChild(title);

      const content = document.createElement('p');
      content.textContent = entry.contenido;
      entryHTML.appendChild(content);

      const author = document.createElement('p');
      author.textContent = `Autor: ${entry.autor}`;
      entryHTML.appendChild(author);

      resultContainer.appendChild(entryHTML);
    });
  }
}
    
  // Función para borrar el contenido del contenedor de resultados
  function clearHTML() {
    resultContainer.innerHTML = '';
  }
  
  // Función para mostrar el mensaje de "No se encontraron resultados"
  function noResult() {
    const noResult = document.createElement('div');
    noResult.classList.add('alert', 'error');
    noResult.textContent = 'No se encontraron resultados';
    resultContainer.appendChild(noResult);
  }
  