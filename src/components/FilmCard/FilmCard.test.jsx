import React from 'react';
import renderer from 'react-test-renderer';

import FilmCard from './FilmCard';

it(`FilmCard component renders correctly`, () => {
  const component = renderer
    .create(<FilmCard
      film={`Robocop`}
      id={`1`}
      onFilmFocus={jest.fn()}
      onClick={jest.fn()}
      isVideoActive={false}
      preview={`test`}
      onFilmLeave={jest.fn()}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
