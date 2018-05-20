import React from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import Spotify from "rn-spotify-sdk";

const player = props => {
  const currSong = props.queue[props.position];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.songInfoContainer}
        horizontal={true}
      >
        <Text style={styles.songText}>{currSong.songName}</Text>
        <Text style={styles.dividerText}> • </Text>
        <Text style={styles.albumText}>{currSong.albumName}</Text>
      </ScrollView>

      <View style={styles.playBackBtnsContainer}>
        <Button
          style={styles.btn}
          title="SkipB"
          color="transparent"
          onPress=""
        />
        <Button title="SkipF" color="transparent" onPress="" />
        <Button title="Play" color="transparent" onPress="Play" />
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

  songInfoContainer: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center"
  },

  playBackBtnsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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
