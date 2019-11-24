import {createSelector} from 'reselect';

import {FilterNames} from '../consts/consts';

export function getImgName(film) {
  const COLON = `:`;
  const COLON_REGEXP = /:/g;
  const SPACE = ` `;
  const LINE = `-`;

  const imgName = film
    .split(SPACE)
    .map((item) => {
      if (item.includes(COLON)) {
        const newName = item.replace(COLON_REGEXP, ``);
        return newName.toLowerCase();
      }
      return item.toLowerCase();
    })
    .join(LINE);

  return imgName;
}

const getFilter = (state) => state.currentFilter;
const getFilteredFilms = (state) => state.films;

export const getFilms = createSelector(
    [getFilter, getFilteredFilms],
    (currentFilter, films) => {
      switch (currentFilter) {
        case FilterNames.ALL:
          return films;
        default:
          return films.filter((film) => film.genre === currentFilter);
      }
    }
);
