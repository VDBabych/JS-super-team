import { definitionGenre } from './definition-genre';
import cardHTML from '../tamlates/gallery-card.hbs';

export function appendCardMarkup(cardData, element) {
  const newArrCard = cardData.results.map(result => {
    return {
      ...result,
      poster_path: result.poster_path
        ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
        : `https://mobiltelefon.ru/photo/february21/05/nothing_naznachila_anons_na_sleduuschuu_nedelu_i_otozvala_ego_picture2_0_resize.jpg`,
      release_date: result.release_date?.slice(0, 4),
      vote_average: result.vote_average?.toFixed(1),
      genre_names: result.genre_ids?.map(id => definitionGenre(id)).join(', '),
    };
  });

  element.insertAdjacentHTML('beforeend', cardHTML(newArrCard));
}
