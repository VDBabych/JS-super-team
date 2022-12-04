import { refs } from './refs-library';
import cardHTML from '../../tamlates/gallery-card.hbs';
import poster from '../../images/no-poster.png'

export function appendCardMarkupLibrary(arrCards) {
  const newArrCard = arrCards.map(result => {
    return {
      ...result,
       poster_path: result.poster_path
        ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
        : `${poster}`,
      release_date: result.release_date.slice(0, 4),
      vote_average: result.vote_average.toFixed(1),
      genre_names: result.genres.map(({ name }) => name).join(', '),
      overview: result.overview
      ? `${result.overview}`
      :'These is no description for now...',
    };
  });
  refs.gallery_library.insertAdjacentHTML('beforeend', cardHTML(newArrCard));
}
