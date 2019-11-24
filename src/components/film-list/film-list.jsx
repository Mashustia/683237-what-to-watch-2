import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getFilms} from '../../utils/utils';
import FilmCard from '../film-card/film-card';

const FilmList = (props) => {
  const {films, onFocus, onBlur, isActive} = props;

  return (
    <div className='catalog__movies-list'>
      {films.map((film) => <FilmCard
        film={film}
        key={film.id}
        onClick={() => {}}
        onFilmFocus={onFocus}
        onFilmLeave={onBlur}
        isVideoActive={isActive === film.id}
      />)}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        // eslint-disable-next-line camelcase
        preview_image: PropTypes.string.isRequired,
        // eslint-disable-next-line camelcase
        preview_video_link: PropTypes.string.isRequired
      })
  ),
  filter: PropTypes.string.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isActive: PropTypes.number
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  filter: state.currentFilter
});

export {FilmList};

export default connect(
    mapStateToProps
)(FilmList);
