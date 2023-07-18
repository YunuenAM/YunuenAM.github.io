// Datos de prueba hardcodeados
const database = [
    {
      
      title: "Grandma's bread",
      content: 'Bread is one of the oldest and most appreciated foods in the world. Each culture has its own version, but there is something special about bread made by grandmothers. That homemade bread, with its unique aroma and flavor, brings with it a sense of nostalgia and warmth that transports us to our most precious memories. In this article, we will explore the magic of Grandma´s Bread and how this culinary treasure becomes the center of attention in many families.',
      author: 'Hannah',
      imagen: '../img/hannah.png'
      
    },
    {
     
      title: 'Sourdough bread',
      content: "Welcome to my blog, bread lovers! Today I want to share with you a special recipe that will allow you to enjoy a delicious homemade bread using sourdough in a much shorter time than usual. Sourdough is a magical ingredient that adds flavor, texture, and durability to our breads, but it is often associated with lengthy fermentation processes. But don't worry Today I will show you how to make sourdough bread in the blink of an eye",
      author: 'John',
      imagen: '../img/John.png'
      
    },
    {
      title: 'Wheat',
      content: 'Did you know that wheat is one of the most important and immensely cultivated crops worldwide? With its rich history and crucial role in human nutrition, wheat has left an indelible mark on our civilization. In this blog post, we will explore some fascinating aspects of wheat in a brief overview. Wheat, scientifically known as Triticum, belongs to the grass family and is grown on almost every continent. It is considered a fundamental grain, and its versatility has made it a staple in the diet of many cultures. The wheat plant is tall, with stalks that can reach impressive heights and ears full of grains that are harvested and processed into different products.',
      author: 'Diana',
      imagen: '../img/baker.png'
    },
    {
        title: 'Gluten',
        content: "Gluten has been the subject of debate and controversy in recent years. For some, it's a food villain to be avoided at all costs, while others consider it an essential part of a balanced diet. In this article, we'll explore what exactly gluten is, how it affects our bodies, and how to approach its consumption in an informed way. Gluten is a protein found in several grains, such as wheat, barley, and rye. Its main function is to provide elasticity and structure to baked goods, such as bread and cakes. However, for people with celiac disease, an autoimmune condition, gluten can trigger a damaging immune response that affects the lining of the small intestine. Additionally, some people may experience non-celiac gluten sensitivity, which causes digestive symptoms and discomfort.",
        author: 'Sara',
        imagen: '../img/bakery4.png'
      },
      {
        title: 'Bagel',
        content: "The bagel has its roots in Eastern Europe, specifically in Jewish communities. Although its exact origin is uncertain, bagels are believed to have originated in Poland in the 17th century. These round buns became popular among Jews due to their versatility and ability to stay fresh longer. Over time, bagels spread beyond Jewish communities and became a beloved food around the world. Varieties and flavors:Today, bagels come in a wide variety of flavors and textures. From classic sesame bagels and everything to more creative options like onion, garlic, raisin or chocolate, there's a bagel for everyone. Additionally, whole grain, gluten-free, and vegan bagels can be found, making them accessible for different food preferences.",
        author: 'Julieta',
        imagen: '../img/baker7.png'
      }
  ];

  const cardDeck = document.getElementById('cardDeck');

 

for (let i = 0; i < database.length; i++) {
  const entrada = database[i];
  const card = document.createElement('div');
  card.classList.add('card', 'mb-4');

  if (entrada.imagen) {
    const img = document.createElement('img');
    img.src = entrada.imagen;
    img.classList.add('card-img-top');
    img.alt = 'Imagen de la entrada';
    card.appendChild(img);
  }

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = ` ${entrada.title}`;
  cardBody.appendChild(title);

  const content = document.createElement('p');
  content.classList.add('card-text');
  content.textContent =  `${entrada.content}`;
  cardBody.appendChild(content);

  const author = document.createElement('p');
  author.classList.add('card-text', 'text-muted');
  author.textContent = `Author: ${entrada.author}`;
  cardBody.appendChild(author);

  cardDeck.appendChild(card);
}

  
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
      entry.author.toLowerCase() === searchTerm
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
      title.textContent = entry.title;
      entryHTML.appendChild(title);

      const content = document.createElement('p');
      content.textContent = entry.content;
      entryHTML.appendChild(content);

      const author = document.createElement('p');
      author.textContent = `Author: ${entry.author}`;
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
  