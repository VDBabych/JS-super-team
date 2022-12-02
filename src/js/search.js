import { pagination } from './pagination';
import { appendCardMarkup } from './appendCardMarkup';
import { refs } from './refs-homepage';
import image from '../images/search-cat/crying_cat@1x.png';
import { MovieAPI } from './movie-API';
import { Notify } from 'notiflix';

const movieAPI = new MovieAPI();

export let isSubmitActiv = false;

export async function getFilmCardsBySearch(page = 1) {
  refs.gallery.innerHTML = '';
  refs.notifySearchFailure.innerHTML = '';

  try {
    const searchedFilmsArr = await movieAPI.getSearchMovie(page);
    const totalResults = movieAPI.getTotalResults();
    appendCardMarkup(searchedFilmsArr, refs.gallery);

    if (totalResults === 0) {
      refs.container.style.cssText = 'display: none';
      refs.notifySearchFailure.innerHTML =
        'Search result not successful. Enter the correct movie name';
      refs.gallery.innerHTML = `<img src="${image}" alt="crying cat" width="294px" height="389px" style="margin: auto">`;
      return totalResults;
    }
    return totalResults;
  } catch (err) {
    Notify.failure(err.message);
  }
}

export async function onFormSubmit(event) {
  event.preventDefault();
  refs.container.removeAttribute('style');
  movieAPI.setQuery(event.target[0].value.trim());
  const totalResults = await getFilmCardsBySearch();
  pagination.reset(totalResults);
  isSubmitActiv = true;
}
