import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { changeSong, deleteSong, addSong } from "../../store/actions";

import Header from "../../components/Header/Header";
import SongDisplay from "../../components/SongDisplay/SongDisplay";
import SpotifyPlayer from "../../components/SpotifyPlayer/SpotifyPlayer";
import SearchBtn from "../../components/Search/SearchBtn";
import SearchModal from "../../components/Search/SearchModal";

class SquadifyPlayerScreen extends Component {
  state = {
    onSearchModalOpen: false,
  };

  onSearchModalOpenHandler = () => {
    if (this.state.onSearchModalOpen === false) {
      this.setState({
        ...this.state,
        onSearchModalOpen: true
      });
    } else {
      this.setState({
        ...this.state,
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
          onSearchModelHandler={() => this.onSearchModalOpenHandler()}
        />
        <Header rightComponent={<SearchBtn onModalOpenHandler={this.onSearchModalOpenHandler}/>}/>
        <SongDisplay
          data={songDisplayData}
          onShortPress={key => this.props.onChangeSong(key)}
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
)(SquadifyPlayerScreen);
