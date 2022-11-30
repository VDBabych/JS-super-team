const STORAGE_WATCHED = 'watched-state';
const STORAGE_QUEUE = 'queue-state';

const refs = {
    libraryWatched: document.querySelector('.header-library__btn.watched'),
    libraryQueue: document.querySelector('.header-library__btn.queue'),
    addLibraryWatched: document.querySelector('.btn-add-watched'),
    addLibraryQueue: document.querySelector('.btn-add-queue')
};

console.log(refs.addLibraryWatched);

let selectedWatched = [];
let selectedQueue = [];

// initForm();

refs.addLibraryWatched.addEventListener('click', () => {
    // const selectedId = ;

    localStorage.setItem(STORAGE_WATCHED, JSON.stringify(selectedId));
});


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