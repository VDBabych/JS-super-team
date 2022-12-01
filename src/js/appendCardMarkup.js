import { definitionGenre } from "./definition-genre";
import cardHTML from '../tamlates/gallery-card.hbs';

export function appendCardMarkup(cardData, element) {
  const newArrCard = cardData.results.map(result => {
    return {
      ...result,
      release_date: result.release_date?.slice(0, 4),
      vote_average: result.vote_average?.toFixed(1),
      genre_names: result.genre_ids?.map(id => definitionGenre(id)).join(', '),
    };
  });

  element.insertAdjacentHTML('beforeend', cardHTML(newArrCard));
}