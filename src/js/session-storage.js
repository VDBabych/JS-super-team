import { MovieAPI } from './movie-API';
const movieApi = new MovieAPI();
export async function setGenresToStorage() {
  if (sessionStorage.getItem('genres') !== null) {
    return;
  }
  const arrGenres = await movieApi.getGenres();

  sessionStorage.setItem('genres', JSON.stringify(arrGenres.genres));
}
