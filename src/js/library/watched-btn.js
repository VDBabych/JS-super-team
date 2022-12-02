import { refs } from './refs-library';

import { appendCardMarkupLibrary } from './append-card-markup-library';
import { getWatched } from '../init-form';
import { MovieAPI } from '../movie-API';

const movieApi = new MovieAPI();

const STORAGE_WATCHED = 'watched-state';
export async function onWatchedClick() {
  refs.gallery_library.innerHTML = '';

  refs.spinner.classList.remove('hidden');
  const arrSelectedWatched = getWatched();
  const arrFetchPromises = arrSelectedWatched.map(el =>
    movieApi.getMovieById(el)
  );

  const responseOfFetchPromises = await Promise.all(arrFetchPromises);

  appendCardMarkupLibrary(responseOfFetchPromises);
  refs.spinner.classList.add('hidden');
}
