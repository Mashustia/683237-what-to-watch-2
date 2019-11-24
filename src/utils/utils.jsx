import {createSelector} from 'reselect';

import {FilterNames} from '../consts/consts';

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
