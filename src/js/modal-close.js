'use strict';
import { fetchMovieBuId } from './fatch-movie-by-id';
import createModalMurkupById from '../tamlates/modal.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { definitionGenre } from './trends';
import { addSelectedWatched } from './local-storage';
import { addSelectedQueue } from './local-storage';

const refs = {
    btnAddWatched: null,
    btnAddQueue: null,
    btnCloseEl: null,
    backdropEl: document.querySelector('.backdrop'),
    galleryEl: document.querySelector('.gallery'),
};

async function onGalleryClick(e) {
    const item = e.target.closest('.gallery_card');
    const idMovie = item.dataset.id;
    document.body.style.overflow = "hidden";

    if (!item) {
        return;
    }

    
    try {
        const response = await fetchMovieBuId(idMovie);
        console.log(response.data);
        const propertieMovie = {
            ...response.data,
            popularity: response.data.popularity.toFixed(0),
            vote_average: response.data.vote_average.toFixed(1),
            genres: response.data.genres.map(({name}) => {
                return name;
            }).join(', ')
        };
        console.log(propertieMovie);


        refs.backdropEl.innerHTML = createModalMurkupById(propertieMovie);
    } catch (error) {
        Notify.failure(error.message);
        return;
    }

    
    refs.backdropEl.classList.remove('visually-hidden');
    
    
    refs.btnCloseEl = document.querySelector('.modal__btn-close');
    refs.btnAddWatched = document.querySelector('.btn-add-watched');
    refs.btnAddQueue = document.querySelector('.btn-add-queue');
    
    refs.btnCloseEl.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', onEscDown);
    
    refs.backdropEl.addEventListener('click', onBackdropClick);

    refs.btnAddWatched.addEventListener('click', addSelectedWatched);
    refs.btnAddQueue.addEventListener('click', addSelectedQueue);
}

function closeModal() {
    document.removeEventListener('keydown', onEscDown);
    refs.backdropEl.removeEventListener('click', onBackdropClick);
    refs.btnCloseEl.removeEventListener('click', closeModal);
    refs.backdropEl.classList.add('visually-hidden');
    refs.btnAddWatched.removeEventListener('click', addSelectedWatched);
    refs.btnAddQueue.removeEventListener('click', addSelectedQueue);
    document.body.style.overflow = "";
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

// function gangePropertiesOfMovie(movie) {
//     movie.data.popularity = Number(movie.data.popularity).toFixed(1);
//     movie.data.vote_average = movie.data.vote_average.toFixed(1);
// }

refs.galleryEl.addEventListener('click', onGalleryClick);
