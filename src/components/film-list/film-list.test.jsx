import React from 'react';
import renderer from 'react-test-renderer';

import FilmList from './film-list';

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
      cover: ``,
      preview: ``
    }]} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
