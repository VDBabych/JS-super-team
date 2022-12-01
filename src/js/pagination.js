import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getFilmCardsBySearch, isSubmitActiv } from './search';
import { contentLoad } from './trends';
import { refs } from './refs-homepage';

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'main-first-child',
  lastItemClassName: 'main-last-child',
  template: {
    page: '<a href="#" class="  main-page-pag-btn">{{page}}</a>',
    currentPage:
      '<strong class=" main-page-pag-btn main-page-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class=" main-page-pag-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class=" main-page-pag-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class=" main-page-pag-btn main-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination(refs.container, options);

pagination.on('afterMove', event => {
  console.log(isSubmitActiv);
  if (isSubmitActiv === true) {
    getFilmCardsBySearch(event.page);
    return;
  }
  contentLoad(event.page);
});
