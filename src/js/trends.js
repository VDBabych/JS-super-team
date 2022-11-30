import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import cardHTML from '../tamlates/gallery-card.hbs';
import { refs } from './refs-homepage';

// const gallery = document.querySelector('.gallery');
document.addEventListener('DOMContentLoaded', contentLoaded);
// const container = document.getElementById('tui-pagination-container');

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 10,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  // template: {
  //   page: '<a href="#" class="tui-page-btn">{{page}}</a>',
  //   currentPage:
  //     '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
  //   moveButton:
  //     '<a href="#" class="tui-page-btn tui-{{type}}">' +
  //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //     '</a>',
  //   disabledMoveButton:
  //     '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
  //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //     '</span>',
  //   moreButton:
  //     '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
  //     '<span class="tui-ico-ellip">...</span>' +
  //     '</a>',
  // },
};

const myPagination = new Pagination(refs.container, options);
myPagination.on('afterMove', eventData => {
  options.page = eventData.page;
  contentLoaded();
});

async function contentLoaded() {
  refs.gallery.innerHTML = '';
  const arrCards = await fetchMovieCard();
  const arrOfGenres = await fetchGenreIds();
  console.log(arrCards);
  sessionStorage.setItem('genres', JSON.stringify(arrOfGenres));
  appendCardMarkup(arrCards);
}

async function fetchMovieCard() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=9cda16d98a6e510af2decf0d66e8e7d5&page=${options.page}`
  );
  return res.data;
}
async function fetchGenreIds() {
  const arrGenres = await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=9cda16d98a6e510af2decf0d66e8e7d5'
  );

  return arrGenres.data.genres;
}
export function appendCardMarkup(arrCards) {
  const newArrCard = arrCards.results.map(result => {
    return {
      ...result,
      release_date: result.release_date.slice(0, 4),
      genre_names: result.genre_ids.map(id => definitionGenre(id)).join(', '),
    };
  });
  console.log(newArrCard);
  refs.gallery.insertAdjacentHTML('beforeend', cardHTML(newArrCard));
}
export function definitionGenre(id) {
  const listAllGenres = JSON.parse(sessionStorage.getItem('genres'));
  const searchedGenre = listAllGenres.find(genre => genre.id === id);

  return searchedGenre.name;
}
