'use strict';

const refs = {
    btnCloseEl: document.querySelector('.modal__btn-close'),
    backdropEl: document.querySelector('.backdrop')
};

const closeModal = () => {
    refs.backdropEl.classList.add('visually-hidden');
};

const onEscDown = e => {
    if (e.code === 'Escape') {
        closeModal();
    }
};

refs.btnCloseEl.addEventListener('click', closeModal);
document.addEventListener('keydown', onEscDown);
