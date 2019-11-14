import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: null
      };

      this.onFocus = this.onFocus.bind(this);
      this.onBlur = this.onBlur.bind(this);
    }

    onFocus(id) {
      this.setState({
        isActive: id
      });
    }

    onBlur() {
      this.setState({
        isActive: null
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          isActive={this.state.isActive}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
