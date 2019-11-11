import React from 'react';
import PropTypes from 'prop-types';

export const FilterButton = (props) => {
  return (
    <li className={`catalog__genres-item${props.isActive ? ` catalog__genres-item--active` : ``}`} onClick={props.onChooseFilter}>
      <a href='#' className='catalog__genres-link'>{props.name}</a>
    </li>
  );
};

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChooseFilter: PropTypes.func.isRequired
};

export default FilterButton;
