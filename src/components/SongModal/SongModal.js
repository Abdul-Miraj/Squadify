import React from "react";
import {
  Modal,
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const songModal = props => {
  let modalContent = null;
  if (props.selectedSong) {
    modalContent = (
      <LinearGradient
        colors={["transparent", "black"]}
        style={styles.linearGradient}
        end={{ x: 0, y: 0.4 }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: props.selectedSong.songImage }}
              style={styles.songImage}
            />
          </View>
          <View style={styles.songInfoContainer}>
            <Text style={styles.songNameText}>
              {props.selectedSong.songName}
            </Text>
            <Text style={styles.artistNameText}>
              {props.selectedSong.artistNames}
            </Text>
          </View>
          <ScrollView style={styles.btnContainer}>
            <Button
              style={styles.addSongToSpotifyBtn}
              title="Add song to Spotify"
              onPress={props.onModalClosed}
              color="transparent"
            />
            <Button
              style={styles.removeFromQueueBtn}
              title="Remove from Queue"
              onPress={props.onDeleteFromQueue}
              color="transparent"
            />
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }

  return (
    <Modal
      visible={props.selectedSong !== null}
      animationType="slide"
      onRequestClose={props.onModalClosed}
      style={styles.modalContainer}
      transparent={true}
    >
      {modalContent}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },

  imageContainer: {
    flex: 2,
    justifyContent: "flex-end"
  },

  songInfoContainer: {
    flex: 0.3,
    justifyContent: "center"
  },

  btnContainer: {
    flex: 1
  },

  songImage: {
    width: 200,
    height: 200
  },

  linearGradient: {
    flex: 1
  },

  songNameText: {
    color: "white"
  },

  artistNameText: {
    color: "white"
  }
});

export default songModal;
