import React from "react";
import { View, StyleSheet, Text } from "react-native";

const nav = () => (
  <View style={styles.container}>
    <View style={styles.homeBtnContainer}>
      <Text style={styles.textColor}>Home</Text>
    </View>
    <View style={styles.searchBtnContainer}>
      <Text style={styles.textColor}>Search</Text>
    </View>
    <View style={styles.libraryBtnContainer}>
      <Text style={styles.textColor}>Library</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#222327"
  },

  homeBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  libraryBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textColor: {
      color: 'white'
  }
});

export default nav;
