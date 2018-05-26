import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { changeSong } from "../../store/actions/index";
import Icon from "react-native-vector-icons/Ionicons";
import Spotify from "rn-spotify-sdk";

class SpotifyPlayer extends Component {
  state = {
    playing: true
  };

  componentDidMount() {
    // play songs from begining of queue
    if (this.props.position === -1 && this.props.queue.length > 0) {
      this.props.onChangeSong(0);
    } else {
      this.playSpotifySong();
    }
  }

  componentWillUpdate(nextProps) {
    if(this.props.queue[this.props.position] !== undefined) {
      if((this.props.queue[this.props.position].key !== nextProps.queue[nextProps.position].key) && (nextProps.queue.length > 0)){
        Spotify.playURI(nextProps.queue[nextProps.position].key, 0, 0);
      }
    }
  }

  playSpotifySong = () => {
    const currSong = this.props.queue[this.props.position];
    if (currSong === null) {
      return false;
    } else {
      Spotify.playURI(currSong.key, 0, 0);
      return true;
    }
  };
  o;
  skipNextSong = currSong => {
    const newPosition = this.props.position + 1;

    if (newPosition <= this.props.queue.length - 1) {
      this.props.onChangeSong(newPosition);
    }
  };

  skipPrevSong = currSong => {
    const newPosition = this.props.position - 1;

    if (newPosition >= 0) {
      this.props.onChangeSong(newPosition);
    }
  };

  togglePause = currSong => {
    if (Spotify.getPlaybackState().playing === false) {
      Spotify.setPlaying(true);
      this.setState({
        playing: true
      });
    } else {
      Spotify.setPlaying(false);
      this.setState({
        playing: false
      });
    }
  };

  render() {
    const currSong = this.props.queue[this.props.position];
    let playOrPause = "ios-play";

    // play curr song if queue is not empty
    if (currSong === undefined) {
      return <View />;
    }

    // check playing status of song and change icon accordingly
    if (this.state.playing === true) {
      playOrPause = "ios-pause";
    }

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.songInfoScrollContainer}
          horizontal={true}
        >
          <Text style={styles.songText}>{currSong.songName}</Text>
          <Text style={styles.dividerText}> • </Text>
          <Text style={styles.albumText}>{currSong.albumName}</Text>
        </ScrollView>

        <View style={styles.playBackBtnsContainer}>
          <Icon.Button
            name="ios-skip-backward"
            backgroundColor="transparent"
            onPress={() => this.skipPrevSong(currSong)}
          />
          <Icon.Button
            name="ios-skip-forward"
            backgroundColor="transparent"
            onPress={() => this.skipNextSong(currSong)}
          />
          <Icon.Button
            name={playOrPause}
            backgroundColor="transparent"
            onPress={() => this.togglePause(currSong)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#222327",
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },

  songInfoScrollContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },

  playBackBtnsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },

  songText: {
    color: "white"
  },

  albumText: {
    color: "#b0b0b0"
  },

  dividerText: {
    color: "#b0b0b0"
  },

  btn: {
    borderColor: "white"
  }
});

const mapStateToProps = state => {
  return {
    queue: state.queue.queue,
    position: state.queue.position
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeSong: newPosition => dispatch(changeSong(newPosition))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyPlayer);
