import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilterButton from './filter-button/filter-button';
import {FILTERS} from '../../consts/consts';

class Filter extends PureComponent {
  render() {
    return (
      <ul className='catalog__genres-list'>
        {FILTERS.map((filter) => <FilterButton name={filter} key={filter} isActive={this.props.filter === filter} />)}
      </ul>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  filter: state.filter
});

const mapDispatchToProps = () => ({});

export {Filter};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
