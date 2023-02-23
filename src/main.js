import { createList } from './createList';
import { formatData } from './fetcFunctions';

// Variáveis
const listElement = document.querySelector('.poke-list');
const inputElement = document.getElementById('filter');
const pokeballElement = document.querySelector('.pokeball-back');
let filterTerm = '';

// Funções
inputElement.addEventListener('keyup', () => {
  filterTerm = inputElement.value;
  setList();
});

const setList = () => {
  formatData((pokemonList) => {
    const listFiltered = filterList(pokemonList);
    const template = createList(listFiltered);
    listElement.innerHTML = template;
   });
};

const filterList = (pokemonList) => {
  return pokemonList.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filterTerm.toLowerCase());
  });
};

setList();