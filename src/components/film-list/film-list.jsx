import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => ({
  films: state.filteredFilms
});

export {FilmList};

export default connect(
    mapStateToProps
)(FilmList);
