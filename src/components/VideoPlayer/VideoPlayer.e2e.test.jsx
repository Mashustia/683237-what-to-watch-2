import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './VideoPlayer';

Enzyme.configure({adapter: new Adapter()});

it(`Button click change state`, () => {
  const isStopped = false;
  const isPlayed = false;

  const videoPlayer = mount(
      <VideoPlayer
        preview={`test`}
        active={false}
      />
  );

  expect(videoPlayer.state(`isPlayed`)).toEqual(isStopped);

  videoPlayer.setProps({active: true});
  expect(videoPlayer.state(`isPlayed`)).toEqual(isPlayed);
});
