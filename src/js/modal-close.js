'use strict';
import createModalMurkupById from '../tamlates/modal.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addSelectedWatched } from './local-storage';
import { addSelectedQueue } from './local-storage';
import { initId } from './check-include-id';
import { MovieAPI } from './movie-API';

const movieApi = new MovieAPI();

const refs = {
  btnAddWatched: null,
  btnAddQueue: null,
  btnCloseEl: null,
  backdropEl: document.querySelector('.backdrop'),
  galleryEl: document.querySelector('.gallery'),
};

let cardsElems = [];
let index = null;

function updateDataForModal(data) {
  return {
    ...data,
    popularity: data.popularity.toFixed(0),
    vote_average: data.vote_average.toFixed(1),
    genres: data.genres
      .map(({ name }) => {
        return name;
      })
      .join(', '),
  };
}

async function onGalleryClick(e) {
  const item = e.target.closest('.gallery_card');

  if (!item) {
    return;
  }

  const idMovie = item.dataset.id;
  document.body.style.overflow = 'hidden';

  try {
    const data = await movieApi.getMovieById(idMovie);
    const propertieMovie = updateDataForModal(data);
    refs.backdropEl.insertAdjacentHTML('beforeend', createModalMurkupById(propertieMovie));
  } catch (error) {
    Notify.failure(error.message);
    return;
  }

  refs.backdropEl.classList.remove('is-hidden');
  document.addEventListener('keydown', onEscDown);

  initId();
  cardsElems = document.querySelectorAll('.gallery_card');
    
  index = [...cardsElems].findIndex((itemLi) => {
    return itemLi === item;
  });
}

refs.backdropEl.addEventListener('click', onBackdropClick);

function onBackdropClick(e) {
  
  

  if (e.target.classList.contains('backdrop')) {
    console.log('backdrop close');
    closeModal();
  }

  if (e.target.classList.contains('btn-add-watched')) {
    console.log('btn-wached');
    addSelectedWatched();
  }

  if (e.target.classList.contains('btn-add-queue')) {
    console.log('btn-queue');
    addSelectedQueue();
  }
  
  if (e.target.closest('.modal__btn-close')) {
    console.log('close btn');
    closeModal();
  }

  if (e.target.classList.contains('btn-plus')) {
    btnPlus();
  }

  if (e.target.classList.contains('btn-minus')) {
    console.log('btnMinus');
    onBtnMinus();
  }
}

 function btnPlus() {
    index += 1;
    console.log(index);
    if (index > cardsElems.length - 1) {
        index = 0;
    }
   
    const nextIdOfElements = cardsElems[index].dataset.id;
        
    getFetchCardById(nextIdOfElements);
}

function onBtnMinus() {
  index -= 1;
  console.log(index);
  if (index < 0) {
      index = cardsElems.length - 1;
  }

  const nextIdOfElements = cardsElems[index].dataset.id;

  getFetchCardById(nextIdOfElements);
}

function closeModal() {
  console.log('im close');
  refs.backdropEl.querySelector('.modal').remove();
  document.body.style.paddingRight = '0';
  document.removeEventListener('keydown', onEscDown);
  refs.backdropEl.classList.add('is-hidden');
  document.body.style.overflow = '';
}

function onEscDown(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

async function getFetchCardById(id) {
  try {
    const data = await movieApi.getMovieById(id);
    const propertieMovie = updateDataForModal(data);
    
    refs.backdropEl.querySelector('.modal').remove();
    refs.backdropEl.insertAdjacentHTML('beforeend', createModalMurkupById(propertieMovie));
    initId();
    
  } catch (error) {
    Notify.failure(error.message);
    return;
  }
  
}

refs.galleryEl.addEventListener('click', onGalleryClick);
