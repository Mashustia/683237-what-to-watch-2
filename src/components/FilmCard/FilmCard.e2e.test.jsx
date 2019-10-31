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
        id={`0`}
        onFilmFocus={jest.fn()}
        onClick={preventDefault}
      />
  );

  const heading = filmCard.find(`.small-movie-card__title`);
  heading.simulate(`click`, {preventDefault});

  expect(preventDefault).toHaveBeenCalledTimes(1);
});

it(`Handler get film id`, () => {
  const preventDefault = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={``}
        id={`0`}
        onFilmFocus={preventDefault}
        onClick={jest.fn()}
      />
  );

  const card = filmCard.find(`.small-movie-card__title`);
  card.simulate(`mouseEnter`, {preventDefault});

  expect(preventDefault).toHaveBeenCalledTimes(1);
});
