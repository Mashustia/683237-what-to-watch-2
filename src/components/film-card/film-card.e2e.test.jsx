import React from 'react';
import Enzyme, {shallow} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import FilmCard from './film-card';

Enzyme.configure({adapter: new Adapter()});

it(`Handler is called by click on heading`, () => {
  const preventDefault = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={``}
        id={0}
        onFilmFocus={jest.fn()}
        onClick={preventDefault}
        isVideoActive={false}
        preview={``}
        onFilmLeave={jest.fn()}
      />
  );

  const heading = filmCard.find(`.small-movie-card__title`);
  heading.simulate(`click`, {preventDefault});

  expect(preventDefault).toHaveBeenCalledTimes(1);
});

it(`Handler returns film id`, () => {
  const id = `1`;
  const returnId = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={``}
        id={0}
        onFilmFocus={returnId}
        onClick={jest.fn()}
        isVideoActive={false}
        preview={``}
        onFilmLeave={jest.fn()}
      />
  );

  const card = filmCard.find(`.small-movie-card__title`);
  card.simulate(`mouseEnter`, returnId(id));

  expect(returnId).toHaveBeenCalledWith(id);
});
