import React from 'react';
import renderer from 'react-test-renderer';

import {Filter} from './filter';

it(`Filter component renders correctly`, () => {
  const component = renderer
    .create(<Filter filter={`All genre`} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
