import React, { Component } from "react";
import { View, StyleSheet, Modal } from "react-native";
import Spotify from "rn-spotify-sdk";

import SearchBar from "./SearchBar";
import SongDisplay from "../SongDisplay/SongDisplay";
import Track from "../../models/Track";

class SearchModal extends Component {
  state = {
    trackData: {
      queue: [],
      position: -1
    }
  };

  onSearchHandler = searchQuery => {
    if (searchQuery.length > 3) {
      Spotify.search(searchQuery, ["track"])
        .then(res => {
          const nSearchResults = res.tracks.items.map((track, index) => {
            return Track(track);
          });

          this.setState(prevState => {
            return {
              trackData: {
                ...prevState.trackData,
                queue: nSearchResults
              }
            };
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("Query not long enough ", searchQuery);
    }
  };

  renderHead = () => {
    return (
      <SearchBar
        onSearchRequest={searchQuery => this.onSearchHandler(searchQuery)}
      />
    );
  };

  render() {
    const modalContent = (
      <View style={styles.container}>
        <SongDisplay
          data={this.state.trackData}
          onClick={null}
          headerComponent={this.renderHead}
          modalOptions={[1]}
        />
      </View>
    );
    return (
      <Modal
        visible={this.props.onSearchModalOpen === true}
        animationType="slide"
        onRequestClose={this.props.onSearchModelHandler}
        style={styles.modalContainer}
      >
        {modalContent}
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#121212"
  }
});

export default SearchModal;
