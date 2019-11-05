import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './VideoPlayer';

it(`VideoPlayer component renders correctly`, () => {
  const component = renderer
    .create(<VideoPlayer
      preview={`test`}
      active={false}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
