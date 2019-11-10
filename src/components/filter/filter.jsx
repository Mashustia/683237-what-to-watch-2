import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';
import FilterButton from './filter-button/filter-button';

class Filter extends PureComponent {
  render() {
    const {filters, onChooseFilter, currentFilter} = this.props;
    return (
      <ul className='catalog__genres-list'>
        {filters.map((filter) => (
          <FilterButton
            name={filter}
            key={filter}
            isActive={currentFilter === filter}
            onClick={onChooseFilter(filter)}
          />))}
      </ul>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string.isRequired),
  currentFilter: PropTypes.string.isRequired,
  onChooseFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
  onChooseFilter: (filerName) => dispatch(ActionCreator.changeGenre(filerName))
});

export {Filter};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
