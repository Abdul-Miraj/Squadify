import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const header = props => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHeader}>
        <Text />
      </View>
      <View style={styles.centerHeader}>
        <Text style={styles.headerText}>Squadify</Text>
      </View>
      <View style={styles.rightHeader}>
        <Icon.Button
          name="ios-search"
          backgroundColor="transparent"
          style={styles.searchBtn}
          onPress={props.onModalOpen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#222327",
    width: "100%"
  },

  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },

  centerHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },

  rightHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  leftHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  }
});

export default header;
