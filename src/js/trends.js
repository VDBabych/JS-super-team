const axios = require('axios').default;

import cardHTML from '../tamlates/gallery-card.hbs';

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onClickGallery);

async function onClickGallery() {
  gallery.innerHTML = '';
  const arrCards = await fetchMovieCard();
  console.log(arrCards);
  console.log(arrCards.results);
  appendCardMarkup(arrCards);
}

async function fetchMovieCard() {
  const res = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=9cda16d98a6e510af2decf0d66e8e7d5'
  );
  return res.data;
}

function appendCardMarkup(arrCards) {
  //   let galleryCardsHTML = '';
  //   gallery.innerHTML = cardHTML(arrCards.results);
  //   arrCards.results.map(
  //       ({ title, release_date, poster_path, id }) =>

  //     );
  gallery.insertAdjacentHTML('beforeend', cardHTML(arrCards.results));
}
