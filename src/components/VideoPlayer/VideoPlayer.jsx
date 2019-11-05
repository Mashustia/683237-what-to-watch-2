import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlayed: false
    };

    this.videoRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const video = this.videoRef.current;
    if (prevProps.active !== this.props.active && !this.props.active) {
      video.currentTime = 0;
      video.pause();
      this.setState({
        isPlayed: false
      });
    }

    if (prevProps.active !== this.props.active && this.props.active) {
      setTimeout(() => this.setState({
        isPlayed: true
      }, () => video.play()), 1000);
    }
  }

  render() {
    const {preview} = this.props;

    return (
      <div className={this.state.isPlayed ? `film-active` : `film-hide`}>
        <video
          className={`preview`}
          src={preview}
          ref={this.videoRef}
          controls
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string,
  active: PropTypes.bool
};

export default VideoPlayer;
