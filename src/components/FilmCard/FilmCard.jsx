import React from 'react';
import PropTypes from 'prop-types';

import {getImgName} from '../../utils/utils';

const FilmCard = (props) => {
  const {film, onClick, onFilmFocus, id} = props;

  return (
    <article className='small-movie-card catalog__movies-card' onMouseEnter={() => onFilmFocus(id)}>
      <div className='small-movie-card__image'>
        <img src={`img/${getImgName(film)}.jpg`} alt={film} width='280' height='175'/>
      </div>
      <h3 className='small-movie-card__title' onClick={onClick}>
        <a className='small-movie-card__link' href='movie-page.html'>{film}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onFilmFocus: PropTypes.func.isRequired
};

export default FilmCard;
