import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Linking } from "react-native";

import startSingleScreen from "../SingleScreen/startSingleScreen";
import startMainTabs from "../MainTabs/startMainTabs";

import Spotify from "rn-spotify-sdk";

class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      spotifyInitialized: false,
    };
  }

  componentDidMount() {
    // initialize Spotify if it hasn't been initialized yet
    if (!Spotify.isInitialized()) {
      // initialize spotify
      var spotifyOptions = {
        clientID: "dda6343c29ab4fe58235ddf78a2c01e8",
        sessionUserDefaultsKey: "SpotifySession",
        redirectURL: "squadify://home",
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
          // handle initialization
          if (loggedIn) {
            startMainTabs();
            this.setState({ spotifyInitialized: true});
          } else {
            this.setState({ spotifyInitialized: true });
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
        //
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
          alert("Log in was cancelled");
        }
      })
      .catch(error => {
        // error
        alert("Error", error.message);
      });
  };

  spotifyLogOutButtonHandler = () => {
    // log into Spotify
    Spotify.logout()
      .then(loggedOut => {
        if (!Spotify.isLoggedIn()) {
          // logged out
          startSingleScreen();
        } else {
          // cancelled
          alert("Log out was cancelled", loggedOut);
        }
      })
      .catch(error => {
        // error
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