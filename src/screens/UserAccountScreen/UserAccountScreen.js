import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class UserAccountScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Squadify</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222327"
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  logInBtnContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  logoText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white"
  }
});

export default UserAccountScreen;