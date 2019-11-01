import React from 'react';
import renderer from 'react-test-renderer';

import FilmList from './FilmList';

it(`FilmList component renders correctly`, () => {
  const component = renderer
    .create(<FilmList films={[{
      id: `1`,
      name: `F`,
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
