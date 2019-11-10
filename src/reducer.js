import {films} from './mocks/films';
import {FILTERS, FilterNames} from './consts/consts';

const initialState = {
  filters: FILTERS,
  currentFilter: FilterNames.ALL,
  films,
  filteredFilms: films
};

const CHANGE_GENRE = `CHANGE_GENRE`;

export function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GENRE:
      const newFilms = state.films.filter((film) => film.genre === action.payload);
      return Object.assign({}, state, {filteredFilms: newFilms});

    default:
      return Object.assign({}, state);
  }
}

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: CHANGE_GENRE,
    payload: genre
  })
};
