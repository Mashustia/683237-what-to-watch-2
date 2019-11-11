import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player';

it(`VideoPlayer component renders correctly`, () => {
  const component = renderer
    .create(<VideoPlayer
      preview={`test`}
      active={false}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
