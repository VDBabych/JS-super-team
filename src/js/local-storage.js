import { selectedWatched, selectedQueue } from './init-page-main';

export const STORAGE_WATCHED = 'watched-state';
export const STORAGE_QUEUE = 'queue-state';

export function addSelectedWatched(e) {
  const ImgSelecte = document.querySelector('.modal__img');
  const ImgId = ImgSelecte.dataset.id;
  const btnWatched = document.querySelector('.btn-add-watched');

  if (selectedWatched.includes(ImgId)) {
    selectedWatched.splice(selectedWatched.indexOf(ImgId), 1);
    btnWatched.classList.remove('btn-add-active');
  } else {
    selectedWatched.push(ImgId);
    btnWatched.classList.add('btn-add-active');
  }

  localStorage.setItem(STORAGE_WATCHED, JSON.stringify(selectedWatched));
}

export function addSelectedQueue(e) {
  const ImgSelecte = document.querySelector('.modal__img');
  const ImgId = ImgSelecte.dataset.id;
  const btnQueue = document.querySelector('.btn-add-queue');

  if (selectedQueue.includes(ImgId)) {
    selectedQueue.splice(selectedQueue.indexOf(ImgId), 1);
    btnQueue.classList.remove('btn-add-active');
  } else {
    selectedQueue.push(ImgId);
    btnQueue.classList.add('btn-add-active');
  }

  localStorage.setItem(STORAGE_QUEUE, JSON.stringify(selectedQueue));
}
