import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight
} from "react-native";

const songItem = props => {

  let isPlaying = styles.songText;

  if (props.trackPosition === props.playingPosition) {
    isPlaying = styles.songTextSelected;
  }

  return (
    <TouchableHighlight onPress={props.onShortPress} onLongPress={props.onLongPress} underlayColor="black">
      <View style={styles.container}>
        <View style={styles.songInfoContainer}>
          <View>
            <Text style={isPlaying}>{props.trackData.name}</Text>
          </View>
          <View style={styles.moreInfoText}>
            <Text style={styles.artistText}>{props.trackData.artistNames}</Text>
            <Text style={styles.dotStyle}> • </Text>
            <Text style={styles.albumText}>{props.trackData.albumName}</Text>
          </View>
        </View>

        <View style={styles.songModalContainer}>
          <Button color="transparent" title="⋮" onPress={props.onLongPress} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 12
  },

  songInfoContainer: {
    flex: 1,
    flexDirection: "column"
  },

  songModalContainer: {
    alignSelf: "flex-end"
  },

  moreInfoText: {
    flexDirection: "row"
  },

  songText: {
    fontSize: 15,
    color: "white"
  },

  songTextSelected: {
    fontSize: 15,
    color: "#36be6a"
  },

  artistText: {
    color: "#b0b0b0"
  },
  albumText: {
    color: "#b0b0b0"
  },

  dotStyle: {
    color: "#b0b0b0"
  }
});

export default songItem;
