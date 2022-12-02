
import { getWatched, getQueue } from './init-form';
export const STORAGE_WATCHED = 'watched-state';
export const STORAGE_QUEUE = 'queue-state';

export function addSelectedWatched(e) {
  const imgSelected = document.querySelector('.modal__img');
  const imgId = imgSelected.dataset.id;
  const btnWatched = document.querySelector('.btn-add-watched');
  let arrWatchedIds = getWatched();

  if (arrWatchedIds.includes(imgId)) {
    arrWatchedIds.splice(arrWatchedIds.indexOf(imgId), 1);
    btnWatched.classList.remove('btn-add-active');
  } else {
    arrWatchedIds.push(imgId);
    btnWatched.classList.add('btn-add-active');
  }

  localStorage.setItem(STORAGE_WATCHED, JSON.stringify(arrWatchedIds));
}

export function addSelectedQueue(e) {
  const imgSelected = document.querySelector('.modal__img');
  const imgId = imgSelected.dataset.id;
  const btnQueue = document.querySelector('.btn-add-queue');
  let arrQueueIds = getQueue();

  if (arrQueueIds.includes(imgId)) {
    arrQueueIds.splice(arrQueueIds.indexOf(imgId), 1);
    btnQueue.classList.remove('btn-add-active');
  } else {
    arrQueueIds.push(imgId);
    btnQueue.classList.add('btn-add-active');
  }

  localStorage.setItem(STORAGE_QUEUE, JSON.stringify(arrQueueIds));
}
