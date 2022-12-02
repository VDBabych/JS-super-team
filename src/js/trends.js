import { refs } from './refs-homepage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MovieAPI } from './movie-API';
import { appendCardMarkup } from './appendCardMarkup';
import { setGenresToStorage } from './session-storage';

const movieApi = new MovieAPI();

export async function contentLoad(page) {
  refs.gallery.innerHTML = '';
  refs.spinner.classList.remove('hidden');
  try {
    const arrCards = await movieApi.getTrendMovie(page);
    await setGenresToStorage();
    appendCardMarkup(arrCards, refs.gallery);
    refs.spinner.classList.add('hidden');
  } catch (error) {
    Notify.failure(error.message);
    return;
  }
}