import RickAndMortyService from "./service";

// acá deberás crear una instancia del servicio RickAndMortyService
const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor

async function createCharacterList() {
  // y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
  let data = await service.getAllCharacters();
  let characters = data.results
  // iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
  if (data.results) {
    data.results.forEach((character) => {
      // a el contenedor puedes usar la propiedad innerHTML para esto
      const characterLits = document.querySelector(".character-list");
      characterLits.innerHTML += createCharacterCard(character);
    });
  }
  // console.log("hola")
  // // llamar primero createCharacterCard(character);
  // createCharacterCard()
  // // llamar segundo addCharacterListeners(character);
  addCharacterListeners(characters)
}

function createCharacterCard(character) {
  // deberás usar los elementos correctos de HTML para poder visualizar el personaje
  // esta función debe devolver la estructura html en string de tu personaje ejemplo
  const heart = document.querySelector(".heart")
  const live = document.querySelector(".live")
  const planet = document.querySelector(".planet")
  const race = document.querySelector(".race")
  const status = character.status.toLowerCase() === 'alive' ? 'status-alive':
  character.status.toLowerCase() === 'dead' ? 'status-dead': 'status-unknown'
  return `
  
      <div class="card">
        <img src="${character.image}" alt="${character.name}" class="character-image" />
         <div class="cualidades">
          <h3>${character.name}</h3>
           <img src="${heart.src}" id="heart" class="heartIcon"/>
          </div>
          <div class="description">
                
                    <div>
                            <img src="${live.src}" class="${status}">
                            ${character.status}
                    </div>
                    <div>
                          <img src="${planet.src}">
                            ${character.species}
                    </div>
                    <div>
                          <img src="${race.src}">
                            ${character.origin.name}
                    </div>
                    </div>
                   
                    

        
        </div>
        
`;
}

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

async function addCharacterListeners(characters) {
  
  // esta función deberá obtener todos los personajes y deberá agregarles un evento de click en el icono de corazon
  const heart= document.querySelectorAll(".heartIcon")
   heart.forEach((icon, index) =>{
    const character = characters[index]
    console.log(character)
    icon.addEventListener('click', () =>{
        
        alert(`hola soy ${character.name}`)
    })
   })
}

// cuando se haga click al icono de corazon aparecer una alerta con un mensaje

// que diga Hola soy (nombre personaje), recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

// por último se llama la función y se renderiza la vista
createCharacterList();
