import axios from 'axios';
import { appendCardMarkup } from './trends';
import { refs } from './refs-homepage';


async function getFilmCardsBySearch () {
refs.gallery.innerHTML = '';
const serarchedFilmsArr = await fetchMovieBySearch();
appendCardMarkup(serarchedFilmsArr);
};

async function fetchMovieBySearch() {
  const searchQuery = refs.searchForm.elements[0].value
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=9cda16d98a6e510af2decf0d66e8e7d5&language=en-US&query=${searchQuery}`
  );
  return res.data;
}

refs.searchForm.addEventListener ("submit", (event) => {
  event.preventDefault();
  getFilmCardsBySearch()
})