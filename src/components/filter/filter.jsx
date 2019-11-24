import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../actions/actions';
import FilterButton from './filter-button/filter-button';

class Filter extends PureComponent {
  onChoose(name) {
    return (e) => {
      e.preventDefault();
      this.props.onChooseFilter(name);
    };
  }

  render() {
    const {filters, currentFilter} = this.props;
    return (
      <ul className='catalog__genres-list'>
        {filters.map((filter) => (
          <FilterButton
            name={filter}
            key={filter}
            isActive={currentFilter === filter}
            onChooseFilter={this.onChoose(filter)}
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
  onChooseFilter: (name) => dispatch(ActionCreator.changeFilter(name))
});

export {Filter};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
