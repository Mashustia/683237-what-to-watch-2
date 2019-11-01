import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../FilmCard/FilmCard';

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inFocus: ``
    };

    this.onFilmFocus = this.onFilmFocus.bind(this);
  }

  onFilmFocus(id) {
    this.setState({
      inFocus: id
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className='catalog__movies-list'>
        {films.map((film) => <FilmCard
          film={film.name}
          key={`${film.id}`}
          id={film.id}
          onClick={() => {}}
          onFilmFocus={this.onFilmFocus}
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
      })
  )
};

export default FilmList;
