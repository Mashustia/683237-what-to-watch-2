import React from 'react';
import renderer from 'react-test-renderer';

import FilmCard from './film-card';

const film = {
  id: 1,
  name: `name`,
  // eslint-disable-next-line camelcase
  preview_image: `123.jpg`,
  // eslint-disable-next-line camelcase
  preview_video_link: `123link`
};

it(`FilmCard component renders correctly`, () => {
  const component = renderer
    .create(<FilmCard
      film={film}
      onFilmFocus={jest.fn()}
      onClick={jest.fn()}
      isVideoActive={false}
      onFilmLeave={jest.fn()}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
