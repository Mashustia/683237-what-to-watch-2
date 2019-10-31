import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

it(`Main component renders correctly`, () => {
  const component = renderer
    .create(<Main films={[{
      id: `1`,
      name: `Robocop`,
      genre: ``,
      description: ``,
      director: ``,
      starring: ``,
      rating: ``,
      runTime: ``,
      released: ``,
      reviews: [],
      cover: ``
    }]} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
