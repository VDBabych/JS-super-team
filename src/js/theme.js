import methodsStorage from './storage-theme';


export const inputTogleEl = document.querySelector('.theme-switch__toggle');
const iconLigthEl = document.querySelector('.sun-icon');
const iconDarkEl = document.querySelector('.moon-icon');

const THEME_KEY = 'theme';



inputTogleEl.addEventListener('change', onInputClick);



function onInputClick() {
    const textChangeDark = document.querySelectorAll('.card_descr');
    const spanChangeDark = document.querySelectorAll('.card_rating');

    inputTogleEl.checked ? iconDarkEl.classList.add('active-color')
    : iconDarkEl.classList.remove('active-color');

    inputTogleEl.checked ? iconLigthEl.classList.remove('active-color')
        : iconLigthEl.classList.add('active-color');
    
    document.body.className = inputTogleEl.checked ? 'dark-theme' : '';
   
    textChangeDark.forEach(el => {
       inputTogleEl.checked ? el.classList.add('dark-theme-text')
        : el.classList.remove('dark-theme-text'); 
    });

    spanChangeDark.forEach(el => {
        inputTogleEl.checked ? el.classList.add('dark-theme-bg')
            : el.classList.remove('dark-theme-bg');
    });

    methodsStorage.remove(THEME_KEY);
    methodsStorage.save(THEME_KEY, inputTogleEl.checked);
}

export function setTheme() {
    const savedTheme = methodsStorage.load(THEME_KEY);
    
    if (!savedTheme) {
        return;
    }

    inputTogleEl.checked = true;

    const textChangeDark = document.querySelectorAll('.card_descr');
    const spanChangeDark = document.querySelectorAll('.card_rating');

    inputTogleEl.checked ? iconDarkEl.classList.add('active-color')
    : iconDarkEl.classList.remove('active-color');

    inputTogleEl.checked ? iconLigthEl.classList.remove('active-color')
        : iconLigthEl.classList.add('active-color');
    
    document.body.className = inputTogleEl.checked ? 'dark-theme' : '';
   
    textChangeDark.forEach(el => {
       inputTogleEl.checked ? el.classList.add('dark-theme-text')
        : el.classList.remove('dark-theme-text'); 
    });

    spanChangeDark.forEach(el => {
        inputTogleEl.checked ? el.classList.add('dark-theme-bg')
            : el.classList.remove('dark-theme-bg');
    });

}

setTheme();