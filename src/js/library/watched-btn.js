import { refs } from './refs-library';

import { appendCardMarkupLibrary } from './append-card-markup-library';
import { selectedWatched } from './init-page-library';
import { MovieAPI } from '../movie-API';

const movieApi = new MovieAPI();

const STORAGE_WATCHED = 'watched-state';
export async function onWatchedClick() {
  refs.gallery_library.innerHTML = '';

  refs.spinner.classList.remove('hidden');
  const arrFetchPromises = selectedWatched.map(el => movieApi.getMovieById(el));
  console.log(arrFetchPromises);
  const responseOfFetchPromises = await Promise.all(arrFetchPromises);
  console.log(responseOfFetchPromises);

  appendCardMarkupLibrary(responseOfFetchPromises);
  refs.spinner.classList.add('hidden');
}
