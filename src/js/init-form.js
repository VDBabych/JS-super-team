const STORAGE_WATCHED = 'watched-state';
const STORAGE_QUEUE = 'queue-state';

export function getWatched() {
  return JSON.parse(localStorage.getItem(STORAGE_WATCHED)) || [];
}

export function getQueue() {
  return JSON.parse(localStorage.getItem(STORAGE_QUEUE)) || [];
}
