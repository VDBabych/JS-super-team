import { definitionGenre } from './definition-genre';
import cardHTML from '../tamlates/gallery-card.hbs';
import poster from '../images/no-poster.png'


export function appendCardMarkup(cardData, element) {
  const newArrCard = cardData.results.map(result => {
    return {
      ...result,
      poster_path: result.poster_path
        ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
        : `${poster}`,
      release_date: result.release_date?.slice(0, 4),
      vote_average: result.vote_average?.toFixed(1),
      genre_names: result.genre_ids?.map(id => definitionGenre(id)).join(', '),
      overview: result.overview
      ? `${result.overview}`
      :'These is no description for now...',
    };
  });

  element.insertAdjacentHTML('beforeend', cardHTML(newArrCard));
}
