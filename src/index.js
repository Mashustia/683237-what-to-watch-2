import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {ActionCreator} from './actions/actions';
import {reducer} from './reducers/reducer';
import App from './components/app/app';
import configureAPI from './api';

const api = configureAPI((...args) => store.dispatch(...args));

const composeEnhancers = (typeof window !== `undefined` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(`root`)
  );
};

init();

store.dispatch(ActionCreator.getFilms());
