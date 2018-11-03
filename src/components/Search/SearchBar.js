import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const searchBar = props => {
  let searchTimerHandler = window.setTimeout(() => null, 0);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBox}
          onChangeText={searchQuery => {
            window.clearTimeout(searchTimerHandler);
            searchTimerHandler = window.setTimeout(
              () => props.onSearchRequest(searchQuery),
              3000
            );
          }}
          placeholder="Search"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141517"
  },

  searchContainer: {
    width: "95%",
    backgroundColor: "#222327",
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    backgroundColor: "#424345",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 5
  }
});

export default searchBar;
