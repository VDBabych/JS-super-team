import './js/modal-close';
import './js/local-storage';
import './js/search';
import './js/trends';


const axios = require('axios').default;

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onClickGallery);

async function onClickGallery() {
  gallery.innerHTML = '';
  const arrCards = await fetchMovieCard();
  console.log(arrCards);
  appendCardMarkup(arrCards);
}

async function fetchMovieCard() {
  const res = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=9cda16d98a6e510af2decf0d66e8e7d5'
  );
  return res.data;
}

function appendCardMarkup(arrCards) {
  let galleryCardsHTML = '';
  arrCards.results.map(
    ({ title, release_date, poster_path }) =>
      (galleryCardsHTML += ` <div class="gallery_card_position">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt='${title}' class="gallery_img" />
        <p class="card_name">${title}</p>
        <p class="card_descr">Drama | ${release_date.slice(0, 4)}</p>
    </div>`)
  );
  gallery.insertAdjacentHTML('beforeend', galleryCardsHTML);
}
