import React from 'react';
import Enzyme, {shallow} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import FilmCard from './FilmCard';

Enzyme.configure({adapter: new Adapter()});

it(`Handler is called by click on heading`, () => {
  const preventDefault = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={``}
        onClick={preventDefault}
      />
  );

  const heading = filmCard.find(`.small-movie-card__title`);
  heading.simulate(`click`, {preventDefault});

  expect(preventDefault).toHaveBeenCalledTimes(1);
});
