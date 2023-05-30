// Datos de prueba hardcodeados
const database = [
    {
      title: 'El pan de la abuela',
      content: 'El pan es uno de los alimentos más antiguos y apreciados en todo el mundo. Cada cultura tiene su propia versión, pero hay algo especial en el pan hecho por las abuelas. Ese pan casero, con su aroma y sabor únicos, trae consigo un sentido de nostalgia y calidez que nos transporta a nuestros recuerdos más preciados. En este artículo, exploraremos la magia del "Pan de la Abuela" y cómo este tesoro culinario se convierte en el centro de atención en muchas familias. ',
      autor: 'Hannah',
      imagen: 'img/02-batard.jpg'
      
    },
    {
      title: 'Pan de masa madre',
      content: '¡Bienvenidos a mi blog, amantes del pan! Hoy quiero compartir con ustedes una receta especial que les permitirá disfrutar de un delicioso pan casero utilizando masa madre en un tiempo mucho más corto de lo habitual. La masa madre es un ingrediente mágico que agrega sabor, textura y durabilidad a nuestros panes, pero a menudo se asocia con largos procesos de fermentación. ¡Pero no se preocupen! Hoy les mostraré cómo hacer un pan con masa madre en un abrir y cerrar de ojos.',
      autor: 'Edgar',
      imagen: 'img/01-baguette.jpg'
      
    },
    {
      title: 'Trigo',
      content: '¿Sabías que el trigo es uno de los cultivos más importantes y ampliamente cultivados en todo el mundo? Con su rica historia y su papel crucial en la alimentación humana, el trigo ha dejado una huella indeleble en nuestra civilización. En esta entrada de blog, exploraremos algunos aspectos fascinantes del trigo en un panorama breve.El trigo, científicamente conocido como Triticum, pertenece a la familia de las gramíneas y se cultiva en casi todos los continentes. Es considerado un cereal fundamental, y su versatilidad lo ha convertido en un elemento básico en la dieta de muchas culturas. La planta del trigo es alta, con tallos que pueden alcanzar alturas impresionantes y espigas llenas de granos que se cosechan y procesan para obtener diferentes productos.',
      autor: 'Diana',
      imagen: 'img/04-bagel.jpg'
    },
    {
        title: 'Gluten',
        content: '¿Sabías que el trigo es uno de los cultivos más importantes y ampliamente cultivados en todo el mundo? Con su rica historia y su papel crucial en la alimentación humana, el trigo ha dejado una huella indeleble en nuestra civilización. En esta entrada de blog, exploraremos algunos aspectos fascinantes del trigo en un panorama breve.El trigo, científicamente conocido como Triticum, pertenece a la familia de las gramíneas y se cultiva en casi todos los continentes. Es considerado un cereal fundamental, y su versatilidad lo ha convertido en un elemento básico en la dieta de muchas culturas. La planta del trigo es alta, con tallos que pueden alcanzar alturas impresionantes y espigas llenas de granos que se cosechan y procesan para obtener diferentes productos.',
        autor: 'Sara',
        imagen: 'img/04-bagel.jpg'
      },
      {
        title: 'Bagel',
        content: '¿Sabías que el trigo es uno de los cultivos más importantes y ampliamente cultivados en todo el mundo? Con su rica historia y su papel crucial en la alimentación humana, el trigo ha dejado una huella indeleble en nuestra civilización. En esta entrada de blog, exploraremos algunos aspectos fascinantes del trigo en un panorama breve.El trigo, científicamente conocido como Triticum, pertenece a la familia de las gramíneas y se cultiva en casi todos los continentes. Es considerado un cereal fundamental, y su versatilidad lo ha convertido en un elemento básico en la dieta de muchas culturas. La planta del trigo es alta, con tallos que pueden alcanzar alturas impresionantes y espigas llenas de granos que se cosechan y procesan para obtener diferentes productos.',
        autor: 'Julieta',
        imagen: 'img/04-bagel.jpg'
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
  author.textContent = `Autor: ${entrada.autor}`;
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
      title.textContent = entry.title;
      entryHTML.appendChild(title);

      const content = document.createElement('p');
      content.textContent = entry.content;
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
  