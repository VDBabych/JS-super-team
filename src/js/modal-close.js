'use strict';

const refs = {
    btnCloseEl: document.querySelector('.modal__btn-close'),
    backdropEl: document.querySelector('.backdrop'),
    galleryEl: document.querySelector('.gallery')
};

function onGalleryClick(e) {
    if (e.target.tagName !== 'IMG') {
        return;
    }

    refs.backdropEl.classList.remove('visually-hidden');
    
    document.addEventListener('keydown', onEscDown);
   
    refs.btnCloseEl.addEventListener('click', closeModal);

    refs.backdropEl.addEventListener('click', onBackdropClick);
}

function closeModal() {
    refs.backdropEl.classList.add('visually-hidden');
    document.removeEventListener('keydown', onEscDown);
    document.removeEventListener('click', onBackdropClick);
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



