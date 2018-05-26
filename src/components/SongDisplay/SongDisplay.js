import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { changeSong, deleteSong } from "../../store/actions/index";

import SongItem from "./SongItem/SongItem";
import SongModal from "./../SongModal/SongModal";

class SongDisplay extends Component {
  state = {
    selected: null
  };

  songItemSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selected: this.props.queue.find(song => {
          return song.key === key;
        })
      };
    });
  };

  modalCloseHandler = () => {
    this.setState({ selected: null });
  };

  render() {
    return (
      <View style={styles.container}>
        <SongModal
          selectedSong={this.state.selected}
          onDeleteFromQueue={() => {
            this.modalCloseHandler();
            this.props.onDeleteSong(this.state.selected.key);
          }}
          onModalClosed={this.modalCloseHandler}
        />
        <FlatList
          data={this.props.queue}
          renderItem={info => {
            return (
              <SongItem
                songName={info.item.songName}
                artistNames={info.item.artistNames}
                albumName={info.item.albumName}
                positionPlaying={this.props.position}
                myPosition={info.index}
                onModalOpened={() =>
                  this.songItemSelectedHandler(info.item.key)
                }
                onSongItemClicked={() => this.props.onChangeSong(info.index)}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6
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
    onDeleteSong: key => dispatch(deleteSong(key))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SongDisplay);
