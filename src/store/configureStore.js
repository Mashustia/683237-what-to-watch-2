import {createStore} from 'redux';

import {filmsReducer} from '../reducer';

const store = createStore(filmsReducer);

export default store;
