import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it(`App component renders correctly`, () => {
  const component = renderer
    .create(<App />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
