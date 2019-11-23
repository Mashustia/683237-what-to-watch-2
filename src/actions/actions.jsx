import axios from 'axios';

import {config} from '../api';

export const CHANGE_FILTER = `CHANGE_FILTER`;
export const GET_FILMS = `GET_FILMS`;

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
