import React from 'react';
import renderer from 'react-test-renderer';

import {FilterButton} from './filter-button';

it(`FilterButton component renders correctly`, () => {
  const component = renderer
    .create(<FilterButton
      name={`name`}
      isActive={true}
      onChooseFilter={jest.fn()}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
