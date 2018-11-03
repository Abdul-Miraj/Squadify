import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { changeSong } from "../../store/actions/index";
import Icon from "react-native-vector-icons/Ionicons";
import Spotify from "rn-spotify-sdk";
import TrackProgressBar from "../../components/TrackProgressBar/TrackProgressBar";

class SpotifyPlayer extends Component {
  state = {
    playing: false
  };

  componentDidMount() {
    Spotify.addListener("audioDeliveryDone", () => {
      let newPos = this.props.position + 1;

      if (this.props.queue.length - 1 >= newPos) {
        this.onChangeSong(newPos);
      } else {
        newPos = -2;
        this.onChangeSong(newPos);
      }
    });
  }

  componentWillUnmount() {
    Spotify.removeListener("audioDeliveryDone", null);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const prevTrack = this.props.queue[this.props.position];
    const nextTrack = nextProps.queue[nextProps.position];

    if (this.state.playing !== nextState.playing) {
      return true;
    }

    // when going from no current song playing to playing a song
    if (this.props.position === -2 && nextProps.position !== -2) {
      this.playSpotifySong(nextTrack.key);
      return true;
    }

    // when the user switches songs
    else if (prevTrack !== undefined && nextTrack !== undefined) {
      // if the uri of the next track doesn't match the uri of the prev track then play that song
      if (prevTrack.key !== nextTrack.key) {
        this.playSpotifySong(nextTrack.key);
        return true;
      } else {
        return false;
      }
    }

    // TODO://
    // stop the music when nextProps recieves a stop signal
    else if (nextProps.position === -2) {
      Spotify.skipToNext();
      return true;
    } else {
      alert("This isn't supposed to happen :/");
      return false;
    }
  }

  playSpotifySong = songURI => {
    if (songURI === null) {
      this.setState({
        playing: false
      });
    } else {
      console.log(Spotify.getPlaybackState());
      Spotify.playURI(songURI, 0, 0)
        .then(res => {
          console.log("Playing SpotifyMETADATA: ");
          console.log(Spotify.getPlaybackState());
          this.setState(prevState => {
            return { playing: true };
          });
        })
        .catch(err => {
          alert("ERROR IN PLAYING A SONG: ", err);
        });
    }
  };

  onChangeSong = qPos => {
    this.props.onChangeSong(qPos);
  };

  togglePause = () => {
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
    let currSong = this.props.queue[this.props.position];
    let playOrPause = "ios-play";

    //console.log(Spotify.getPlaybackMetadata());

    // play curr song if queue is not empty
    if (currSong === undefined) {
      currSong = {
        name: "Queue up a song!",
        albumName: "SQUADIFY"
      };
    }

    // check playing status of song and change icon accordingly
    if (this.state.playing === true) {
      playOrPause = "ios-pause";
    }
    console.log("Playing SpotifyMETADATA IN RENDER: ");
    //console.log(Spotify.getPlaybackMetadata());

    return (
      <View style={styles.container}>
        <View style={styles.progressContainer} />
        <View style={styles.playerContainer}>
          <ScrollView
            contentContainerStyle={styles.songInfoScrollContainer}
            horizontal={true}
          >
            <Text style={styles.songText}>{currSong.name}</Text>
            <Text style={styles.dividerText}> • </Text>
            <Text style={styles.albumText}>{currSong.artistNames}</Text>
          </ScrollView>

          <View style={styles.playBackBtnsContainer}>
            <Icon.Button
              name="ios-skip-backward"
              backgroundColor="transparent"
              onPress={() => this.onChangeSong(this.props.position - 1)}
            />
            <Icon.Button
              name="ios-skip-forward"
              backgroundColor="transparent"
              onPress={() => this.onChangeSong(this.props.position + 1)}
            />
            <Icon.Button
              name={playOrPause}
              backgroundColor="transparent"
              onPress={() => this.togglePause()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#222327",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginTop: 0
  },

  progressContainer: {
    flex: 0.3
  },

  playerContainer: {
    flex: 1,
    flexDirection: "row"
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotifyPlayer);
