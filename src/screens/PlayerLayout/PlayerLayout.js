import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { changeSong, deleteSong, addSong } from "../../store/actions/index";

import Header from "../../components/Header/Header";
import SongDisplay from "../../components/SongDisplay/SongDisplay";
import SpotifyPlayer from "../../components/SpotifyPlayer/SpotifyPlayer";
import SearchModal from "../../components/SearchModal/SearchModal";

class PlayerLayout extends Component {
  state = {
    onSearchModalOpen: false
  };

  onModalOpenHandler = () => {
    if (this.state.onSearchModalOpen === false) {
      this.setState({
        onSearchModalOpen: true
      });
    } else {
      this.setState({
        onSearchModalOpen: false
      });
    }
  };

  render() {
    const songDisplayData = {
      position: this.props.position,
      queue: this.props.queue
    };

    return (
      <View style={styles.container}>
        <SearchModal
          onSearchModalOpen={this.state.onSearchModalOpen}
          onSearchModelHandler={() => this.onModalOpenHandler()}
        />
        <Header onModalOpen={() => this.onModalOpenHandler()} />
        <SongDisplay
          data={songDisplayData}
          onClick={key => this.props.onChangeSong(key)}
          modalOptions={[0, 2]}
        />
        <SpotifyPlayer />
      </View>
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

const mapStateToProps = state => {
  return {
    queue: state.queue.queue,
    position: state.queue.position
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeSong: newPosition => dispatch(changeSong(newPosition)),
    onDeleteSong: key => dispatch(deleteSong(key)),
    onAddSong: track => dispatch(addSong(track))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerLayout);
