import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active && !this.props.active) {
      this.videoRef.current.currentTime = 0;
    }
  }

  render() {
    const {preview, active} = this.props;

    return (
      <video
        className={active ? `film-active` : `film-hide`}
        src={preview}
        muted
        width='280'
        height='175'
        autoPlay
        preload={`none`}
        ref={this.videoRef}
      />
    );
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string,
  active: PropTypes.bool
};

export default VideoPlayer;
