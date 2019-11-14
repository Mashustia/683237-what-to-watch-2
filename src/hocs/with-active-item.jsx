import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
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
      return (
        <Component
          {...this.props}
          onFilmFocus={this.onFilmFocus}
          onFilmLeave={this.onFilmLeave}
          activeFilm={this.state.focusFilmId}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
