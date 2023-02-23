import { createList } from './createList';
import { formatData } from './fetcFunctions';

// Variáveis
const listElement = document.querySelector('.poke-list');
const inputElement = document.getElementById('filter');
const pokeballElement = document.querySelector('.pokeball-back');

// Funções

const setList = () => {
  formatData((pokemonList) => {
    const template = createList(pokemonList);
    listElement.innerHTML = template;
   });
};
setList();