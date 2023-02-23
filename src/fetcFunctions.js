 const URL_DATA = 'https://pokeapi.co/api/v2/pokemon?limit=999&offset=0'; // Dados pokemon
 const URL_IMAGE = 'https://serebii.net/pokemon/art/'; // Numero do pokemon .png

 const getData = async (callback) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=999&offset=0');
  const data = await response.json();
  callback(data);
 };

 export const formatData = async () => {
  getData(({ results }) => {
    console.log(results);
  });
 };