'use strict';
import { fetchMovieBuId } from './fatch-movie-by-id';
import createModalMurkupById from '../tamlates/modal.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addSelectedWatched } from './local-storage';
import { addSelectedQueue } from './local-storage';
import { initId } from './check-include-id';

const refs = {
  btnAddWatched: null,
  btnAddQueue: null,
  btnCloseEl: null,
  backdropEl: document.querySelector('.backdrop'),
  galleryEl: document.querySelector('.gallery'),
};

async function onGalleryClick(e) {
  const item = e.target.closest('.gallery_card');

  if (!item) {
    return;
  }

  const idMovie = item.dataset.id;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '17px';

  // =========================Получаю єлемент и делаю разметку========================
  try {
    const response = await fetchMovieBuId(idMovie);
    const propertieMovie = {
      ...response.data,
      popularity: response.data.popularity.toFixed(0),
      vote_average: response.data.vote_average.toFixed(1),
      genres: response.data.genres
        .map(({ name }) => {
          return name;
        })
        .join(', '),
    };

    refs.backdropEl.insertAdjacentHTML(
      'beforeend',
      createModalMurkupById(propertieMovie)
    );

    getElementsUntilOpenModals();
  } catch (error) {
    Notify.failure(error.message);
    return;
  }

  refs.backdropEl.classList.remove('is-hidden');

  makeEventListenerUntilOpenModal();

  initId();

  // ========================= Слайдер модалки =======================================

  const cardsElems = document.querySelectorAll('.gallery_card');

  let index = [...cardsElems].findIndex(itemLi => {
    return itemLi === item;
  });

  const btnPlus = document.querySelector('.btn-plus');
  const btnMinus = document.querySelector('.btn-minus');

  btnPlus.addEventListener('click', e => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    index += 1;
    console.log(index);
    if (index > cardsElems.length - 1) {
      index = 0;
    }

    const nextIdOfElements = cardsElems[index].dataset.id;

    getFetchCardById(nextIdOfElements, getElementsUntilOpenModals);
    makeEventListenerUntilOpenModal();

    initId();
  });

  btnMinus.addEventListener('click', e => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    index -= 1;
    console.log(index);
    if (index < 0) {
      index = cardsElems.length - 1;
    }

    const nextIdOfElements = cardsElems[index].dataset.id;

    getFetchCardById(nextIdOfElements, getElementsUntilOpenModals);

    initId();
  });

  // =========================== / Слайдер Модалки ======================================
}

// ============================Функции=================================================

function closeModal() {
  console.log('im close');
  document.body.style.paddingRight = '0';
  document.removeEventListener('keydown', onEscDown);
  refs.backdropEl.removeEventListener('click', onBackdropClick);
  refs.btnCloseEl.removeEventListener('click', closeModal);
  refs.backdropEl.classList.add('is-hidden');
  refs.btnAddWatched.removeEventListener('click', addSelectedWatched);
  refs.btnAddQueue.removeEventListener('click', addSelectedQueue);
  document.body.style.overflow = '';
  refs.backdropEl.querySelector('.modal').remove();
}

function onEscDown(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(e) {
  console.log(e.target);
  if (e.target.classList.contains('backdrop')) {
    closeModal();
  }
}

function getElementsUntilOpenModals() {
  refs.btnCloseEl = document.querySelector('.modal__btn-close');
  refs.btnAddWatched = document.querySelector('.btn-add-watched');
  refs.btnAddQueue = document.querySelector('.btn-add-queue');
}

function makeEventListenerUntilOpenModal() {
  refs.btnCloseEl.addEventListener('click', closeModal);
  console.log('hello');
  document.addEventListener('keydown', onEscDown);
  refs.backdropEl.addEventListener('click', onBackdropClick);
  refs.btnAddWatched.addEventListener('click', addSelectedWatched);
  refs.btnAddQueue.addEventListener('click', addSelectedQueue);
}

async function getFetchCardById(id, addEl) {
  try {
    const response = await fetchMovieBuId(id);
    const propertieMovie = {
      ...response.data,
      popularity: response.data.popularity.toFixed(0),
      vote_average: response.data.vote_average.toFixed(1),
      genres: response.data.genres
        .map(({ name }) => {
          return name;
        })
        .join(', '),
    };

    refs.backdropEl.querySelector('.modal').remove();
    refs.backdropEl.insertAdjacentHTML(
      'beforeend',
      createModalMurkupById(propertieMovie)
    );
    addEl();
    makeEventListenerUntilOpenModal();
  } catch (error) {
    Notify.failure(error.message);
    return;
  }
  refs.backdropEl.classList.remove('is-hidden');
}

refs.galleryEl.addEventListener('click', onGalleryClick);
