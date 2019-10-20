import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main';

Enzyme.configure({adapter: new Adapter()});

it(`Click on heading works`, () => {
  const clickHandler = jest.fn();

  const main = shallow(
      <Main
        films={[``]}
        onClick={clickHandler}
      />
  );

  const heading = main.find(`h3`);
  heading.map((item) => item.simulate(`click`));
  // heading.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(20);
});

it(`Handler is called by click on heading`, () => {
  const preventDefault = jest.fn();

  const main = shallow(
      <Main
        films={[``]}
        onClick={preventDefault}
      />
  );

  const heading = main.find(`h3`);
  heading.map((item) => item.simulate(`click`));

  expect(preventDefault).toHaveBeenCalledTimes(20);
});

