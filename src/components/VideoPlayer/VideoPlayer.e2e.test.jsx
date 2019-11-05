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
        isPlaying={isStopped}
        src={``}
        onPlayButtonClick={jest.fn()}
      />
  );

  const button = videoPlayer.find(`.track__button`);
  expect(videoPlayer.state(`isPlaying`)).toEqual(isStopped);

  button.simulate(`click`);
  expect(videoPlayer.state(`isPlaying`)).toEqual(isPlayed);

  button.simulate(`click`);
  expect(videoPlayer.state(`isPlaying`)).toEqual(isStopped);
});
