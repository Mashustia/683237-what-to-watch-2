import React from 'react';
import PropTypes from 'prop-types';

const COLON = `:`;
const COLON_REGEXP = /:/g;
const SPACE = ` `;
const LINE = `-`;

const FilmCard = (props) => {
  const {film} = props;

  const imgName = film
    .split(SPACE)
    .map((item) => {
      if (item.includes(COLON)) {
        const newName = item.replace(COLON_REGEXP, ``);
        return newName.toLowerCase();
      }
      return item.toLowerCase();
    })
    .join(LINE);

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/${imgName}.jpg`} alt={film} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.string.isRequired
};

export default FilmCard;
