export function definitionGenre(id) {
  const listAllGenres = JSON.parse(sessionStorage.getItem('genres'));
  const searchedGenre = listAllGenres.find(genre => genre.id === id);
  
    return searchedGenre.name;
}