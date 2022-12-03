import { refs } from './refs-library';
import cardHTML from '../../tamlates/gallery-card.hbs';

export function appendCardMarkupLibrary(arrCards) {
  const newArrCard = arrCards.map(result => {
    return {
      ...result,
       poster_path: result.poster_path
        ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
        : `https://mobiltelefon.ru/photo/february21/05/nothing_naznachila_anons_na_sleduuschuu_nedelu_i_otozvala_ego_picture2_0_resize.jpg`,
      release_date: result.release_date.slice(0, 4),
      vote_average: result.vote_average.toFixed(1),
      genre_names: result.genres.map(({ name }) => name).join(', '),
    };
  });

  refs.gallery_library.insertAdjacentHTML('beforeend', cardHTML(newArrCard));
}
