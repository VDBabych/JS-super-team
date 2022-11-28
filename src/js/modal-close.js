'use strict';

const refs = {
    btnCloseEl: document.querySelector('.modal__btn-close'),
    backdropEl: document.querySelector('.backdrop')
};

refs.btnCloseEl.addEventListener('click', onBtnCloseClick);

function onBtnCloseClick() {
    refs.backdropEl.classList.add('visually-hidden');
}