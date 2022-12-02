import { selectedWatched, selectedQueue } from './library/init-page-library';

import { refs } from './library/refs-library';
const STORAGE_WATCHED = 'watched-state';
const STORAGE_QUEUE = 'queue-state';
export function initForm() {
  refs.spinner.classList.add('hidden');
  let persistedFiltersQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
  let persistedFiltersWatched = JSON.parse(
    localStorage.getItem(STORAGE_WATCHED)
  );

  if (persistedFiltersWatched) {
    persistedFiltersWatched.forEach(e => {
      selectedWatched.push(e);
    });
  }

  if (persistedFiltersQueue) {
    persistedFiltersQueue.forEach(e => {
      selectedQueue.push(e);
    });
  }
}
