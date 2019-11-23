import axios from 'axios';

import {FILTERS, FilterNames} from './consts/consts';
import {config} from './api';

export const initialState = {
  filters: FILTERS,
  currentFilter: FilterNames.ALL,
  films: []
};

export const CHANGE_FILTER = `CHANGE_FILTER`;
export const GET_FILMS = `GET_FILMS`;

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

export const ActionCreator = {
  changeFilter: (genre) => {
    return {
      type: CHANGE_FILTER,
      payload: genre
    };
  },
  getFilms: () => {
    const films = axios.get(`/films`, config);

    return {
      type: CHANGE_FILTER,
      payload: films
    };
  }
};
