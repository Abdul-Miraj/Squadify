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
  const modalOptions = props.modalOptions.map((option, index) => {
    return (
      <Button
        key={index}
        title={option.value}
        onPress={option.action}
        color="transparent"
      />
    );
  });

  let modalContent = null;
  if (props.selectedTrack) {
    modalContent = (
      <LinearGradient
        colors={["transparent", "black"]}
        style={styles.linearGradient}
        end={{ x: 0, y: 0.4 }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: props.selectedTrack.songImage }}
              style={styles.songImage}
            />
          </View>
          <View style={styles.songInfoContainer}>
            <Text style={styles.songNameText}>
              {props.selectedTrack.songName}
            </Text>
            <Text style={styles.artistNameText}>
              {props.selectedTrack.artistNames}
            </Text>
          </View>
          <ScrollView style={styles.btnContainer}>
          {modalOptions}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }

  return (
    <Modal
      visible={props.selectedTrack !== null}
      animationType="slide"
      onRequestClose={props.onModalClosed}
      style={props.onModalClosed}
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
