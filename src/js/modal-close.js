'use strict';
import createModalMurkupById from '../tamlates/modal.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addSelectedWatched } from './local-storage';
import { addSelectedQueue } from './local-storage';
import { initId } from './check-include-id';
import { MovieAPI } from './movie-API';
import { ModalPagination } from './moda-pagination';
import { refs } from './refs-homepage';

const movieApi = new MovieAPI();

const modalPagination = new ModalPagination();

refs.galleryEl.addEventListener('click', onGalleryClick);

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

  modalPagination.setIdArr('.gallery_card');
  modalPagination.setIndxOfId(item.dataset.id);
}

refs.backdropEl.addEventListener('click', onBackdropClick);

function onBackdropClick(e) {
  if (e.target.classList.contains('backdrop')) {
    closeModal();
  }

  if (e.target.classList.contains('btn-add-watched')) {
    addSelectedWatched();
  }

  if (e.target.classList.contains('btn-add-queue')) {
    addSelectedQueue();
  }
  
  if (e.target.closest('.modal__btn-close')) {
    closeModal();
  }

  if (e.target.classList.contains('btn-plus')) {
    getFetchCardById(modalPagination.getNextId());
  }

  if (e.target.classList.contains('btn-minus')) {
    getFetchCardById(modalPagination.getPreviousId())
  }
}

function closeModal() {
  refs.backdropEl.querySelector('.modal').remove();
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




