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
    const btnWatched = document.querySelector('.btn-add-watched');

    if (selectedWatched.includes(ImgId)) {
        selectedWatched.splice(selectedWatched.indexOf(ImgId), 1);
        btnWatched.classList.remove('btn-add-active');
    } else { 
        selectedWatched.push(ImgId);
        btnWatched.classList.add('btn-add-active');
    };

    localStorage.setItem(STORAGE_WATCHED, JSON.stringify(selectedWatched));
};

export function addSelectedQueue(e) {
    
    const ImgSelecte = document.querySelector('.modal__img');
    const ImgId = ImgSelecte.dataset.id;
    const btnQueue = document.querySelector('.btn-add-queue');

    if (selectedQueue.includes(ImgId)) {
        selectedQueue.splice(selectedQueue.indexOf(ImgId), 1);
        btnQueue.classList.remove('btn-add-active');
    } else { 
        selectedQueue.push(ImgId);
        btnQueue.classList.add('btn-add-active');
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

export function initId() {
    let persistedFiltersQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
    let persistedFiltersWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
    const ImgSelecte = document.querySelector('.modal__img');
    const btnWatched = document.querySelector('.btn-add-watched');
    const btnQueue = document.querySelector('.btn-add-queue');

    const ImgId = ImgSelecte.dataset.id;
  
    if (persistedFiltersWatched.includes(ImgId)) {
        btnWatched.classList.add('btn-add-active');
    }
    if (persistedFiltersQueue.includes(ImgId)) {
        btnQueue.classList.add('btn-add-active');
    }    

}; 






