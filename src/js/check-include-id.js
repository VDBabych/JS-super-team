import { STORAGE_WATCHED, STORAGE_QUEUE } from './local-storage';
import { getWatched, getQueue } from './init-form';
// theme
import methodsStorage from './storage-theme';
import { THEME_KEY } from './theme';
// ================================
export function initId() {
  let persistedFiltersQueue = getQueue();

  let persistedFiltersWatched = getWatched();

  // Theme
  const savedTheme = methodsStorage.load(THEME_KEY);
  // ===============================
  const ImgSelecte = document.querySelector('.modal__img');
  const btnWatched = document.querySelector('.btn-add-watched');
  const btnQueue = document.querySelector('.btn-add-queue');

  const ImgId = ImgSelecte.dataset.id;

  if (persistedFiltersWatched.includes(ImgId)) {
    // Theme
    if (savedTheme) {
      btnWatched.classList.add('btn-add-active-dark');
    }
// ===============================================
    btnWatched.classList.add('btn-add-active');
  }
  if (persistedFiltersQueue.includes(ImgId)) {
    // Theme
    if (savedTheme) {
      btnQueue.classList.add('btn-add-active-dark');
    }
   // =============================================
    btnQueue.classList.add('btn-add-active');
  }
}
