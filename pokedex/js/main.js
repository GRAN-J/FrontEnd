//In this part is declarate the constants i gone use
const pokemonNombre = document.querySelector(".pokemonNombre");
const pokemonNum = document.querySelector(".pokemonNum");
const pokemonType = document.querySelector(".pokemonType");
const pokemonAbili = document.querySelector(".pokemonAbili");
const pokemonStats = document.querySelector(".pokemonStats");
const pokemonMove = document.querySelector(".pokemonMove");
const pokemonMove0 = document.querySelector(".pokemonMove0");
const pokemonImg = document.querySelector(".pokemonImg");

const form = document.querySelector(".form");
const input = document.querySelector(".inputBuscar");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let searchPokemon = 1;

//this is the conexion with the API and get a response and validation of the API
const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};
// with this part show the info if is not used
const renderPokemon = async (pokemon) => {
  pokemonNum.innerHTML = "?...";
  pokemonNombre.innerHTML = "Cargando...";
  pokemonType.innerHTML = "?";
  pokemonAbili.innerHTML = "?...";
  pokemonStats.innerHTML = "?...";
  pokemonMove.innerHTML = "?";
  pokemonMove0.innerHTML = "?";

  // In this part get the data i gone use
  const data = await fetchPokemon(pokemon);

  pokemonNombre.innerHTML = data.name;
  pokemonNum.innerHTML = data.id;
  pokemonType.innerHTML = data.types[0].type.name;
  pokemonAbili.innerHTML = data.abilities[0].ability.name;
  pokemonStats.innerHTML = data.stats[0].base_stat;
  pokemonMove.innerHTML = data.moves[0].move.name;
  pokemonMove0.innerHTML = data.moves[1].move.name;
  pokemonImg.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];
};

// I use the form to validate the grammar for the search
form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});
// The function of the button next to change the pokemon
buttonPrev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});
// The function of the button previous to change the pokemon
buttonNext.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});
//the initialization of render pokemon
renderPokemon("searchPokemon");
// CODE CREATED BY GRAN J.
