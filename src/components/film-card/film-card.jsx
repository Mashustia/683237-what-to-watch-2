import React from 'react';
import PropTypes from 'prop-types';

import {getImgName} from '../../utils/utils';
import VideoPlayer from '../video-player/video-player';

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onFilmFocus = this.onFilmFocus.bind(this);
  }

  onFilmFocus() {
    this.props.onFilmFocus(this.props.id);
  }

  render() {
    const {film, onClick, onFilmLeave, isVideoActive, preview} = this.props;

    return (
      <article
        className='small-movie-card catalog__movies-card'
        onMouseEnter={this.onFilmFocus}
        onMouseOut={onFilmLeave}
      >
        <div className='small-movie-card__image'>
          <img src={preview} alt={film} width='280' height='175'/>
        </div>
        <h3 className='small-movie-card__title' onClick={onClick}>
          <a className='small-movie-card__link' href='movie-page.html'>{film}</a>
        </h3>
        <VideoPlayer preview={preview} active={isVideoActive} />
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isVideoActive: PropTypes.bool.isRequired,
  onFilmFocus: PropTypes.func.isRequired,
  onFilmLeave: PropTypes.func.isRequired,
  preview: PropTypes.string.isRequired
};

export default FilmCard;
