import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {FilterNames} from '../../consts/consts';
import FilmCard from '../film-card/film-card';

const FilmList = (props) => {
  const {films, filter, onFilmFocus, onFilmLeave, activeFilm} = props;
  const filteredFilms = filter === FilterNames.ALL ? films : films.filter((film) => film.genre === filter);

  return (
    <div className='catalog__movies-list'>
      {filteredFilms.map((film) => <FilmCard
        film={film.name}
        key={film.id}
        id={film.id}
        onClick={() => {}}
        preview={film.preview}
        onFilmFocus={onFilmFocus}
        onFilmLeave={onFilmLeave}
        isVideoActive={activeFilm === film.id}
      />)}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        description: PropTypes.string,
        director: PropTypes.string,
        starring: PropTypes.string,
        rating: PropTypes.string,
        runTime: PropTypes.string,
        released: PropTypes.string,
        reviews: PropTypes.array,
        cover: PropTypes.string,
        preview: PropTypes.string
      })
  ),
  filter: PropTypes.string.isRequired,
  onFilmFocus: PropTypes.func.isRequired,
  onFilmLeave: PropTypes.func.isRequired,
  activeFilm: PropTypes.string
};

const mapStateToProps = (state) => ({
  films: state.films,
  filter: state.currentFilter
});

export {FilmList};

export default connect(
    mapStateToProps
)(FilmList);
