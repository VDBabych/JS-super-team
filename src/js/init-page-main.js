import { contentLoad } from './trends';
import { onFormSubmit } from './search';
import { refs } from './refs-homepage';

document.addEventListener('DOMContentLoaded', contentLoad(1));
refs.searchForm.addEventListener('submit', onFormSubmit);
