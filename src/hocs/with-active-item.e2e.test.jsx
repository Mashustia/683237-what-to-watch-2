import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveItem from './with-active-item';
import PropTypes from "prop-types";

configure({adapter: new Adapter()});
const id = `1`;
const MockComponent = (props) => <div
  className={`test`}
  id={id}
  onMouseEnter={() => props.onFocus(id)}
  onMouseOut={() => props.onBlur()}
/>;
const MockComponentWrapped = withActiveItem(MockComponent);

MockComponent.propTypes = {
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isActive: PropTypes.string
};

it(`Should change isActive to id on focus and to null on blur`, () => {
  const defaultState = null;
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  const wrapper = mount(<MockComponentWrapped
    onFocus={onFocus}
    onBlur={onBlur}
    isActive={defaultState}
  />);

  const activeItem = wrapper.find(`.test`);

  expect(wrapper.state().isActive).toEqual(defaultState);

  activeItem.simulate(`mouseEnter`, onFocus);
  expect(wrapper.state().isActive).toEqual(id);

  activeItem.simulate(`mouseLeave`, onBlur());
  expect(wrapper.state().isActive).toEqual(null);
});
