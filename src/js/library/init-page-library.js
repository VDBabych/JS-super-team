import { refs } from './refs-library';
import { onWatchedClick } from './watched-btn';
import { onQueueClick } from './queue-btn';
import { initForm } from '../init-form';

refs.libraryWatched.addEventListener('click', onWatchedClick);
refs.libraryQueue.addEventListener('click', onQueueClick);

export let selectedWatched = [];
export let selectedQueue = [];
initForm(selectedWatched, selectedQueue);
