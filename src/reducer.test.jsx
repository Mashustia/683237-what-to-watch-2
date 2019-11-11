import {CHANGE_FILTER, reducer, initialState, ActionCreator} from './reducer';
import {FilterNames} from './consts/consts';

describe(`Action creators work correctly`, () => {
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

  it(`Changing filter reducer returned new currentFilter in state`, () => {
    const newState = Object.assign({}, initialState, {
      currentFilter: FilterNames.KIDS_AND_FAMILY
    });

    return expect(reducer(Object.assign({}, initialState), {
      type: CHANGE_FILTER,
      payload: FilterNames.KIDS_AND_FAMILY
    })).toEqual(newState);
  });
});
