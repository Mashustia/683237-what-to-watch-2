import React from 'react';
import renderer from 'react-test-renderer';

import {Filter} from './filter';

it(`Filter component renders correctly`, () => {
  const component = renderer
    .create(<Filter
      filters={[`All genre`]}
      currentFilter={`All genre`}
      onChooseFilter={jest.fn()}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
