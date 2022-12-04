import { refs } from './refs-library';
import { onWatchedClick } from './watched-btn';
import { onQueueClick } from './queue-btn';


document.addEventListener('DOMContentLoaded', () => { 
    refs.spinner.classList.add('hidden');
});
refs.libraryWatched.addEventListener('click', onWatchedClick);
refs.libraryQueue.addEventListener('click', onQueueClick);
