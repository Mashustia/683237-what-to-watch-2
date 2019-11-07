import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlayed: false
    };

    this.videoRef = React.createRef();
    this.timer = null;
    this.onStopVideo = this.onStopVideo.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active && !this.props.active) {
      this.onStopVideo();
    }

    if (prevProps.active !== this.props.active && this.props.active) {
      this.onPlayVideo();
    }
  }

  onStopVideo() {
    this.setState({
      isPlayed: false
    }, () => {
      const video = this.videoRef.current;
      clearTimeout(this.timer);
      video.currentTime = 0;
      video.pause();
    });
  }

  onPlayVideo() {
    const video = this.videoRef.current;
    this.timer = setTimeout(() => {
      this.setState({isPlayed: true}, () => video.play());
    }, 1000);
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
          muted
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
