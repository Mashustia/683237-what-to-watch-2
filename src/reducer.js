import {films} from './mocks/films';
import {FILTERS, FilterNames} from './consts/consts';

export const initialState = {
  filters: FILTERS,
  currentFilter: FilterNames.ALL,
  films
};

export const CHANGE_FILTER = `CHANGE_FILTER`;

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER: {
      return Object.assign({}, state, {currentFilter: action.payload});
    }

    default:
      return Object.assign({}, state);
  }
}

export const ActionCreator = {
  changeFilter: (genre) => {
    return {
      type: CHANGE_FILTER,
      payload: genre
    };
  }
};
