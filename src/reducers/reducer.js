import {FILTERS, FilterNames} from '../consts/consts';
import {CHANGE_FILTER, GET_FILMS} from '../actions/actions';

export const initialState = {
  filters: FILTERS,
  currentFilter: FilterNames.ALL,
  films: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER: {
      return Object.assign({}, state, {currentFilter: action.payload});
    }

    case GET_FILMS: {
      return Object.assign({}, state, {films: action.payload});
    }

    default:
      return Object.assign({}, state);
  }
}
