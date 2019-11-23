import {reducer, initialState} from './reducer';
import {CHANGE_FILTER} from '../actions/actions';
import {FilterNames} from '../consts/consts';

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
