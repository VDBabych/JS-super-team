const STORAGE_WATCHED = 'watched-state';
const STORAGE_QUEUE = 'queue-state';

const refs = {
    libraryWatched: document.querySelector('.header-library__btn.watched'),
    libraryQueue: document.querySelector('.header-library__btn.queue'),
    cardId: document.querySelector('modal__img')
    // addLibraryWatched: document.querySelector('.btn-add-watched'),
    // addLibraryQueue: document.querySelector('.btn-add-queue')
};



let selectedQueue = [];

// addSelectedQueue

export function addSelectedWatched(e) {
    let selectedWatched = [];
    selectedWatched.push(e)
    localStorage.setItem(STORAGE_WATCHED, JSON.stringify(selectedWatched));
}

export function addSelectedQueue(e) {
    let selectedWatched = [];
    selectedWatched.push(e)
    localStorage.setItem(STORAGE_WATCHED, JSON.stringify(selectedWatched));
}

function getSelectedWatched(e) {
   let StorageItem =  JSON.parse(localStorage.getItem(STORAGE_WATCHED));
}

// initForm();

// refs.addLibraryWatched.addEventListener('click', () => {
//     // const selectedId = ;

//     localStorage.setItem(STORAGE_WATCHED, JSON.stringify(selectedId));
// });


// filterForm.addEventListener('click', onFormSubmit);

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   selectedFilters = {}; 
// }


// function initForm() {
//   let persistedFilters = localStorage.getItem(STORAGE_KEY);
//   if (persistedFilters) {
//     persistedFilters = JSON.parse(persistedFilters)
//     Object.entries(persistedFilters).forEach(([name, value]) => {
//       selectedFilters[name] = value;
//       filterForm.elements[name].value = value;
//     });
//   }
// };