import { refs } from './refs-library';
import { getQueue } from '../init-form';

import { MovieAPI } from '../movie-API';
import { appendCardMarkupLibrary } from './append-card-markup-library';
const movieApi = new MovieAPI();
const STORAGE_QUEUE = 'queue-state';

export async function onQueueClick() {
  refs.gallery_library.innerHTML = '';

  refs.spinner.classList.remove('hidden');
  const arrSelectedQueue = getQueue();
  const arrFetchPromises = arrSelectedQueue.map(el =>
    movieApi.getMovieById(el)
  );
  const responseOfFetchPromises = await Promise.all(arrFetchPromises);

  appendCardMarkupLibrary(responseOfFetchPromises);
  refs.spinner.classList.add('hidden');
}
