import React from 'react';
import Enzyme, {shallow} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';

import App from './app';

Enzyme.configure({adapter: new Adapter()});

it(`App component renders correctly`, () => {
  const app = shallow(
      <App />
  );
  expect(app).toMatchSnapshot();
});
