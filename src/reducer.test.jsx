import {DEFAULT_STATE, CHANGE_FILTER, reducer, initialState, ActionCreator} from './reducer';
import {FilterNames} from './consts/consts';

describe(`Action creators work correctly`, () => {
  it(`Action creator for returning to initial state returns correct action`, () =>
    expect(ActionCreator.changeFilter(FilterNames.ALL)).toEqual({
      type: DEFAULT_STATE,
      payload: FilterNames.ALL
    })
  );

  it(`Action creator for changing filter returns correct action`, () =>
    expect(ActionCreator.changeFilter(FilterNames.KIDS_AND_FAMILY)).toEqual({
      type: CHANGE_FILTER,
      payload: FilterNames.KIDS_AND_FAMILY
    })
  );
});

describe(`Reducer works correctly`, () => {
  it(`Default reducer returned state`, () =>
    expect(reducer(undefined, {})).toEqual(initialState)
  );

  it(`Reducer should correctly reset application state`, () =>
    expect(reducer(Object.assign({}, initialState), {
      type: DEFAULT_STATE,
      payload: FilterNames.ALL
    })).toEqual(initialState)
  );

  it(`Changing filter reducer returned new state`, () => {
    const newState = Object.assign({}, initialState, {
      currentFilter: FilterNames.KIDS_AND_FAMILY,
      filteredFilms: initialState.films.filter((film) => film.genre === FilterNames.KIDS_AND_FAMILY)
    });

    return expect(reducer(Object.assign({}, initialState), {
      type: CHANGE_FILTER,
      payload: FilterNames.KIDS_AND_FAMILY
    })).toEqual(newState);
  });
});
