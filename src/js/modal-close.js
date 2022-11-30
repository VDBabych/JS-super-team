'use strict';
import { fetchMovieBuId } from './fatch-movie-by-id';
import createModalMurkupById from '../tamlates/modal.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    btnCloseEl: null,
    backdropEl: document.querySelector('.backdrop'),
    galleryEl: document.querySelector('.gallery')
};

async function onGalleryClick(e) {
    const item = e.target.closest('.gallery_card');
    const idMovie = e.target.dataset.id;

    if (!item) {
        return;
    }

    
    try {
        const response = await fetchMovieBuId(idMovie);
        
        refs.backdropEl.innerHTML = createModalMurkupById(response.data);
    } catch (error) {
        Notify.failure(error.message);
        return;
    }

    
    refs.backdropEl.classList.remove('visually-hidden');
    
    refs.btnCloseEl = document.querySelector('.modal__btn-close');
    
    refs.btnCloseEl.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', onEscDown);
    
    refs.backdropEl.addEventListener('click', onBackdropClick);
}

function closeModal() {
    document.removeEventListener('keydown', onEscDown);
    refs.backdropEl.removeEventListener('click', onBackdropClick);
    refs.btnCloseEl.removeEventListener('click', closeModal);
    refs.backdropEl.classList.add('visually-hidden');
}

function onEscDown(e) {
    if (e.code === 'Escape') {
        closeModal();
    }
}


function onBackdropClick(e) {
    if (e.target.classList.contains('backdrop')) {
        closeModal();
    }
}


refs.galleryEl.addEventListener('click', onGalleryClick);



