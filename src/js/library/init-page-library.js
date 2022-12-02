import { refs } from './refs-library';
import { onWatchedClick } from './watched-btn';
import { onQueueClick } from './queue-btn';

refs.libraryWatched.addEventListener('click', onWatchedClick);
refs.libraryQueue.addEventListener('click', onQueueClick);
