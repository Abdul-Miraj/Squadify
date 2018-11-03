import React from "react";
import { View, StyleSheet, Text } from "react-native";

const header = props => {
  if (props.leftComponent === undefined) {
    props.leftComponent = null;
  } else if (props.rightComponent === undefined) {
    props.rightComponent = null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftHeader}>{props.leftComponent}</View>
      <View style={styles.centerHeader}>
        <Text style={styles.headerText}>Squadify</Text>
      </View>
      <View style={styles.rightHeader}>{props.rightComponent}</View>
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
