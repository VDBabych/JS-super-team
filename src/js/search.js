import axios from 'axios';
import { appendCardMarkup } from './trends';
import { refs } from './refs-homepage';
import image from '../images/search-cat/crying_cat@1x.png'


async function getFilmCardsBySearch () {
refs.gallery.innerHTML = '';
refs.notifySearchFailure.innerHTML = '';

try {
  const serarchedFilmsArr = await fetchMovieBySearch();
  appendCardMarkup(serarchedFilmsArr);
  const { total_results } = serarchedFilmsArr;
  console.log(total_results);

  if (total_results === 0) {
    refs.notifySearchFailure.innerHTML = 'Search result not successful. Enter the correct movie name';
    refs.gallery.innerHTML = `<img src="${image}" alt="crying cat" width="294px" height="389px" style="margin: auto">`;
    return;
  }

}
catch (err) {
  console.log(err);
}
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