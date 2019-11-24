import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player';

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onFilmFocus = this.onFilmFocus.bind(this);
  }

  onFilmFocus() {
    this.props.onFilmFocus(this.props.film.id);
  }

  render() {
    const {onClick, onFilmLeave, isVideoActive} = this.props;
    const {preview_image: previewImage, name, preview_video_link: previewVideo} = this.props.film;

    return (
      <article
        className='small-movie-card catalog__movies-card'
        onMouseEnter={this.onFilmFocus}
        onMouseOut={onFilmLeave}
      >
        <div className='small-movie-card__image'>
          <img src={previewImage} alt={name} width='280' height='175'/>
        </div>
        <h3 className='small-movie-card__title' onClick={onClick}>
          <a className='small-movie-card__link' href='movie-page.html'>{name}</a>
        </h3>
        <VideoPlayer preview={previewVideo} active={isVideoActive} />
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // eslint-disable-next-line camelcase
    preview_image: PropTypes.string.isRequired,
    // eslint-disable-next-line camelcase
    preview_video_link: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired,
  isVideoActive: PropTypes.bool.isRequired,
  onFilmFocus: PropTypes.func.isRequired,
  onFilmLeave: PropTypes.func.isRequired
};

export default FilmCard;
