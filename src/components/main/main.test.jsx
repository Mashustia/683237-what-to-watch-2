import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`Main component renders correctly`, () => {
  const component = renderer
    .create(<Main />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
