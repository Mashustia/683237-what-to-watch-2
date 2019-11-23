import {CHANGE_FILTER, ActionCreator} from './actions/actions';
import {FilterNames} from './consts/consts';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing filter returns correct action`, () =>
    expect(ActionCreator.changeFilter(FilterNames.KIDS_AND_FAMILY)).toEqual({
      type: CHANGE_FILTER,
      payload: FilterNames.KIDS_AND_FAMILY
    })
  );
});
