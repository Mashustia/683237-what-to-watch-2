import {films} from './mocks/films';
import {FILTERS, FilterNames} from './consts/consts';

export const initialState = {
  filters: FILTERS,
  currentFilter: FilterNames.ALL,
  films,
  filteredFilms: films
};

export const CHANGE_FILTER = `CHANGE_FILTER`;
export const DEFAULT_STATE = `DEFAULT_STATE`;

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER: {
      const newFilms = state.films.filter((film) => film.genre === action.payload);
      return Object.assign({}, state, {
        filteredFilms: newFilms,
        currentFilter: action.payload
      });
    }
    case DEFAULT_STATE: {
      return Object.assign({}, state, initialState);
    }

    default:
      return Object.assign({}, state);
  }
}

export const ActionCreator = {
  changeFilter: (genre) => {
    if (genre === FilterNames.ALL) {
      return {
        type: DEFAULT_STATE,
        payload: genre
      };
    }
    return {
      type: CHANGE_FILTER,
      payload: genre
    };
  }
};
