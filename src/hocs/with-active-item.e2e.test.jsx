import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveItem from './with-active-item';
import PropTypes from "prop-types";

configure({adapter: new Adapter()});

const id = 1;

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
  isActive: PropTypes.number
};

it(`Should change isActive to id on focus and to null on blur`, () => {
  const defaultState = null;

  const wrapper = mount(<MockComponentWrapped/>);

  expect(wrapper.state().isActive).toEqual(defaultState);
  wrapper.simulate(`mouseEnter`);

  expect(wrapper.state().isActive).toEqual(id);
  wrapper.simulate(`mouseout`);

  expect(wrapper.state().isActive).toEqual(null);
});
