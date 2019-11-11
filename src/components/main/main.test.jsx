import React from 'react';
import Enzyme, {shallow} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';

import Main from './main';

Enzyme.configure({adapter: new Adapter()});

it(`Main component renders correctly`, () => {
  const main = shallow(
      <Main />
  );
  expect(main).toMatchSnapshot();
});
