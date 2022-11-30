const STORAGE_WATCHED = 'watched-state';
const STORAGE_QUEUE = 'queue-state';

const refs = {
    libraryWatched: document.querySelector('.header-library__btn.watched'),
    libraryQueue: document.querySelector('.header-library__btn.queue')
};

// initForm();

let selectedQueue = [];
let selectedWatched = [];

initForm();

export function addSelectedWatched(e) {
    
    const ImgSelecte = document.querySelector('.modal__img');
    const ImgId = ImgSelecte.dataset.id;

    if (selectedWatched.includes(ImgId)) {
        selectedWatched.splice(selectedWatched.indexOf(ImgId), 1)
    } else { 
        selectedWatched.push(ImgId);
    };

    localStorage.setItem(STORAGE_WATCHED, JSON.stringify(selectedWatched));
};

export function addSelectedQueue(e) {
    
    const ImgSelecte = document.querySelector('.modal__img');
    const ImgId = ImgSelecte.dataset.id;

    if (selectedQueue.includes(ImgId)) {
        selectedQueue.splice(selectedQueue.indexOf(ImgId), 1)
    } else { 
        selectedQueue.push(ImgId);
    };

    localStorage.setItem(STORAGE_QUEUE, JSON.stringify(selectedQueue));
};

function initForm() {
    let persistedFiltersQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
    let persistedFiltersWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
  
  if (persistedFiltersWatched) {
    persistedFiltersWatched.forEach(e => {
        selectedWatched.push(e);
    });
    };
    
  if (persistedFiltersQueue) {
    persistedFiltersQueue.forEach(e => {
        selectedQueue.push(e);
    });
    };  
};


