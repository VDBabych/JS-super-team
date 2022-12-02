import { refs } from './refs-library';
import cardHTML from '../../tamlates/gallery-card.hbs';

export function appendCardMarkupLibrary(arrCards) {
  const newArrCard = arrCards.map(result => {
    return {
      ...result,
      release_date: result.release_date.slice(0, 4),
      vote_average: result.vote_average.toFixed(1),
      genre_names: result.genres.map(({ name }) => name).join(', '),
    };
  });

  refs.gallery_library.insertAdjacentHTML('beforeend', cardHTML(newArrCard));
}
