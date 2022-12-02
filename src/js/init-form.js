import { refs } from './library/refs-library';
const STORAGE_WATCHED = 'watched-state';
const STORAGE_QUEUE = 'queue-state';
export function initForm(selectedWatched, selectedQueue) {
  refs.spinner.classList.add('hidden');
  let persistedFiltersQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
  let persistedFiltersWatched = JSON.parse(
    localStorage.getItem(STORAGE_WATCHED)
  );

  if (persistedFiltersWatched) {
    selectedWatched = [...persistedFiltersWatched];
  }

  if (persistedFiltersQueue) {
    selectedQueue = [...persistedFiltersQueue];
  }
}
