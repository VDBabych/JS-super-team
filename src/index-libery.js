import { fetchMovieBuId } from './js/fatch-movie-by-id';
import cardHTML from './tamlates/gallery-card.hbs';
import './js/modal-close' 

const STORAGE_WATCHED = 'watched-state';
const STORAGE_QUEUE = 'queue-state';

const refs = {
    gallery_library: document.querySelector('.library'),
    libraryWatched: document.querySelector('.header-library__btn.watched'),
    libraryQueue: document.querySelector('.header-library__btn.queue'),
    spinner: document.querySelector('.lds-roller'),
};

refs.libraryWatched.addEventListener('click', onWatchedClick);

let selectedQueue = [];
let selectedWatched = [];
initForm();
async function onWatchedClick() {
    refs.gallery_library.innerHTML = ''; 
    const arrObjectOfWatched = [];
    refs.spinner.classList.remove('hidden');
  for (let i = 0; i < selectedWatched.length; i++) {
    console.log(selectedWatched[i]);
    const response = await fetchMovieBuId(selectedWatched[i]);
    arrObjectOfWatched.push(response.data);
  }
    appendCardMarkupLibrary(arrObjectOfWatched);
    refs.spinner.classList.add('hidden');
}

refs.libraryQueue.addEventListener('click', onQueueClick);

async function onQueueClick() {
    refs.gallery_library.innerHTML = ''; 
    const arrObjectOfQueue = [];
    refs.spinner.classList.remove('hidden');
  for (let i = 0; i < selectedQueue.length; i++) {
    console.log(selectedQueue[i]);
    const response = await fetchMovieBuId(selectedQueue[i]);
    arrObjectOfQueue.push(response.data);
  }
    appendCardMarkupLibrary(arrObjectOfQueue);
    refs.spinner.classList.add('hidden');
}

function initForm() {
  let persistedFiltersQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
  let persistedFiltersWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));

  if (persistedFiltersWatched) {
    persistedFiltersWatched.forEach(e => {
      selectedWatched.push(e);
    });
  }

  if (persistedFiltersQueue) {
    persistedFiltersQueue.forEach(e => {
      selectedQueue.push(e);
    });
  }
}

function appendCardMarkupLibrary(arrCards) {
  console.log('arr', arrCards);
  const newArrCard = arrCards.map(result => {
    return {
      ...result,
      release_date: result.release_date.slice(0, 4),
      vote_average: result.vote_average.toFixed(1),
      genre_names: result.genres.map(({ name }) => name).join(', '),
    };
  });
  console.log('newArr', newArrCard);
  refs.gallery_library.insertAdjacentHTML('beforeend', cardHTML(newArrCard));
}