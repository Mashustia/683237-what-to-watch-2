import {createStore, combineReducers} from 'redux';

import {filmsReducer} from '../reducer';

export const rootReducer = combineReducers({
  films: filmsReducer
});

const store = createStore(rootReducer);

export default store;
