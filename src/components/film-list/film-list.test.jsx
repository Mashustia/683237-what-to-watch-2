import React from 'react';
import renderer from 'react-test-renderer';

import {FilmList} from './film-list';

it(`FilmList component renders correctly`, () => {
  const component = renderer
    .create(<FilmList
      films={[{
        id: 1,
        name: `name`,
        // eslint-disable-next-line camelcase
        preview_image: `123.jpg`
      }]}
      filter={`Kids & Family`}
      onFocus={jest.fn()}
      onBlur={jest.fn()}
      isActive={1}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
