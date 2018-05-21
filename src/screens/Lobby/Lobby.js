import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Linking } from "react-native";
import startMainTabs from "../MainTabs/startMainTabs";

import Spotify from "rn-spotify-sdk";

class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      spotifyInitialized: false
    };
  }

  componentDidMount() {
    // initialize Spotify if it hasn't been initialized yet
    if (!Spotify.isInitialized()) {
      // initialize spotify
      var spotifyOptions = {
        clientID: "dda6343c29ab4fe58235ddf78a2c01e8",
        sessionUserDefaultsKey: "SpotifySession",
        redirectURL: "squadify://Lobby",
        scopes: [
          "user-read-private",
          "playlist-read",
          "playlist-read-private",
          "streaming"
        ]
      };
      Spotify.initialize(spotifyOptions)
        .then(loggedIn => {
          // update UI state
          this.setState({ spotifyInitialized: true });
          // handle initialization
          if (loggedIn) {
            startMainTabs();
          }
        })
        .catch(error => {
          alert("Error", error.message);
        });
    } else {
      // update UI state
      this.setState(state => {
        state.spotifyInitialized = true;
        return state;
      });
      // handle logged in
      if (Spotify.isLoggedIn()) {
        alert("YOU ARE LOGGED IN");
      }
    }
  }

  spotifyLogInButtonHandler = () => {
    // log into Spotify
    Spotify.login()
      .then(loggedIn => {
        if (loggedIn) {
          // logged in
          startMainTabs();
        } else {
          // cancelled
          console.log("CANCELLED");
        }
      })
      .catch(error => {
        // error
        console.log("ERROR");
        alert("Error", error.message);
      });
  };

  spotifyLogOutButtonHandler = () => {
    // log into Spotify
    Spotify.logout()
      .then(loggedOut => {
        if (loggedOut) {
          // logged out
          alert("LOGGED OUT");
        } else {
          // cancelled
          console.log("CANCELLED");
        }
      })
      .catch(error => {
        // error
        console.log("ERROR");
        alert("Error", error.message);
      });
  };

  render() {
    let logInOutBtn = null;
    if (Spotify.isLoggedIn()) {
      logInOutBtn = (
        <Button
          color="#84bd00"
          title="Log Out"
          onPress={this.spotifyLogOutButtonHandler}
        />
      );
    } else {
      logInOutBtn = (
        <Button
          color="#84bd00"
          title="Log In With Spotify"
          onPress={this.spotifyLogInButtonHandler}
        />
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Squadify</Text>
        </View>

        <View style={styles.logInBtnContainer}>{logInOutBtn}</View>
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

export default Lobby;
