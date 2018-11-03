import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ProgressBarAndroid,
  ProgressViewIOS,
  Dimensions
} from "react-native";
import Spotify from "rn-spotify-sdk";

class TrackProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress_val: 0.0
    };
    this.interval = null;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  ontest = durationPerctange => {
    this.interval = setInterval(() => {
      this.setState({ progress_val: durationPerctange });
    }, 1200);
  };

  onProgressBarClickedHandler = evt => {
    const xCoord = evt.nativeEvent.locationX;
    const phoneWidth = Dimensions.get("window").width;
    const progressVal = Math.round((xCoord / phoneWidth) * 100) / 100;

    this.setState({
      progress_val: progressVal
    });
  };

  render() {
    const spotifyPlayBackState = Spotify.getPlaybackState();
    const durationPerctange =
      spotifyPlayBackState.position / this.props.track.trackDuration;

      console.log(durationPerctange);

    if (spotifyPlayBackState.activeDevice === true) {
      this.ontest(durationPerctange);
    }

    return (
      <TouchableWithoutFeedback
        onPress={evt => this.onProgressBarClickedHandler(evt)}
      >
        <ProgressBarAndroid
          styleAttr="Horizontal"
          progress={this.state.progress_val}
          indeterminate={false}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default TrackProgressBar;
