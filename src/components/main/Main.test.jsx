import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

it(`Main component renders correctly`, () => {
  const component = renderer
    .create(<Main films={[`Robocop`]} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
