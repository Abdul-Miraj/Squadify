import React from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import Spotify from "rn-spotify-sdk";

const player = props => {
  const currSong = props.queue[props.position];

  // queue is empty
  if (currSong === undefined) {
    return <View />;
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
        <Icon name="ios-skip-backward" style={{ width: 10, color: "white" }} />
        <Icon name="ios-skip-forward" style={{ width: 10, color: "white" }} />
        <Icon name="ios-play" style={{ width: 10, color: "white" }} />
      </View>
    </View>
  );
};

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

export default connect(mapStateToProps)(player);
