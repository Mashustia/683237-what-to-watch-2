import React from 'react';
import renderer from 'react-test-renderer';

import {FilmList} from './film-list';

it(`FilmList component renders correctly`, () => {
  const component = renderer
    .create(<FilmList
      films={[{
        id: `1`,
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Kids & Family`,
        description: ``,
        director: ``,
        starring: ``,
        rating: ``,
        runTime: ``,
        released: ``,
        reviews: [],
        cover: ``,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      }]}
      filter={`Kids & Family`}
      onFilmFocus={jest.fn()}
      onFilmLeave={jest.fn()}
      activeFilm={`1`}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
