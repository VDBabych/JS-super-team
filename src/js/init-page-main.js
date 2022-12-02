import { contentLoad } from './trends';
import { onFormSubmit } from './search';
import { refs } from './refs-homepage';
import { initForm } from './init-form';

// змінні для локал стореджа

export let selectedQueue = [];
export let selectedWatched = [];

// addEventListeners

document.addEventListener('DOMContentLoaded', contentLoad(1));
refs.searchForm.addEventListener('submit', onFormSubmit);

// ініціалізація локал сторедж

initForm(selectedWatched, selectedQueue);
