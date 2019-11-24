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
    return (dispatch) =>
      axios.get(`/films`, config).then((resp) => {
        dispatch({
          type: GET_FILMS,
          payload: resp.data
        });
      });
  }
};
