import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {FilterNames} from '../../consts/consts';
import FilmCard from '../film-card/film-card';

class FilmList extends PureComponent {
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
    const {films, filter} = this.props;
    const filteredFilms = filter === FilterNames.ALL ? films : films.filter((film) => film.genre === filter);

    return (
      <div className='catalog__movies-list'>
        {filteredFilms.map((film) => <FilmCard
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
  ),
  filter: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  filter: state.currentFilter
});

export {FilmList};

export default connect(
    mapStateToProps
)(FilmList);
