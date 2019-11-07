import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../FilmCard/FilmCard';

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusFilmId: null
    };

    this.onFilmFocus = this.onFilmFocus.bind(this);
    this.onFilmLeave = this.onFilmLeave.bind(this);
  }

  onFilmFocus(id) {
    this.setState({
      focusFilmId: id
    });
  }

  onFilmLeave() {
    this.setState({
      focusFilmId: null
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className='catalog__movies-list'>
        {films.map((film) => <FilmCard
          film={film.name}
          key={film.id}
          id={film.id}
          onClick={() => {}}
          preview={film.preview}
          onFilmFocus={this.onFilmFocus}
          onFilmLeave={this.onFilmLeave}
          isVideoActive={this.state.focusFilmId === film.id}
        />)}
      </div>
    );
  }
}

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
  )
};

export default FilmList;
