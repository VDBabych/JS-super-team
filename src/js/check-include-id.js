import { STORAGE_WATCHED, STORAGE_QUEUE } from './local-storage';

export function initId() {
  let persistedFiltersQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
  let persistedFiltersWatched = JSON.parse(
    localStorage.getItem(STORAGE_WATCHED)
  );
  const ImgSelecte = document.querySelector('.modal__img');
  const btnWatched = document.querySelector('.btn-add-watched');
  const btnQueue = document.querySelector('.btn-add-queue');

  const ImgId = ImgSelecte.dataset.id;

  if (persistedFiltersWatched.includes(ImgId)) {
    btnWatched.classList.add('btn-add-active');
  }
  if (persistedFiltersQueue.includes(ImgId)) {
    btnQueue.classList.add('btn-add-active');
  }
}
