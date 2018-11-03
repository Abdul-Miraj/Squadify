import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { changeSong, deleteSong, addSong } from "../../store/actions/index";

import SongItem from "./SongItem/SongItem";
import SongModal from "./SongModal/SongModal";

class SongDisplay extends Component {
  state = {
    selected: null
  };

  songItemSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selected: this.props.data.queue.find(song => {
          return song.key === key;
        })
      };
    });
  };

  modalCloseHandler = () => {
    this.setState({ selected: null });
  };

  setModalOptionsHandler = indexes => {
    
    const modalActions = [
      {
        value: "PLAY SONG",
        action: pos => {
          this.props.onChangeSong(pos);
          this.modalCloseHandler();
        }
      },
      {
        value: "ADD SONG TO QUEUE",
        action: () => {
          this.props.onAddSong(this.state.selected);
          this.modalCloseHandler();
        }
      },
      {
        value: "DELETE SONG FROM QUEUE",
        action: () => {
          this.props.onDeleteSong(this.state.selected.key);
          this.modalCloseHandler();
        }
      }
    ];

    const modalOptions = [];

    indexes.forEach(item => {
      modalOptions.push(modalActions[item]);
    });

    const modalView = (
      <SongModal
        selectedTrack={this.state.selected}
        modalOptions={modalOptions}
        onModalClosed={this.modalCloseHandler}
      />
    );

    return modalView;
  };

  render() {
    const modalView = this.setModalOptionsHandler(this.props.modalOptions);

    let onSongItemShortPress = this.props.onShortPress;
    let onSongItemLongPress = this.props.onLongPress;

    if(onSongItemShortPress === undefined){
      onSongItemShortPress = info => this.songItemSelectedHandler(info.item.key)
    }

    if(onSongItemLongPress === undefined){
      onSongItemLongPress = info => this.songItemSelectedHandler(info.item.key)
    }


    return (
      <View style={styles.container}>
        {modalView}
        <FlatList
          keyboardShouldPersistTaps={'handled'}
          ListHeaderComponent={this.props.headerComponent}
          ListFooterComponent={this.props.footerComponent}
          data={this.props.data.queue}
          extraData={this.props.data.position}
          renderItem={info => {
            return (
              <SongItem
                trackData={info.item}
                playingPosition={this.props.data.position}
                trackPosition={info.index}
                onLongPress={() => onSongItemLongPress(info)}
                onShortPress={() => onSongItemShortPress(info)}
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

const mapDispatchToProps = dispatch => {
  return {
    onChangeSong: newPosition => dispatch(changeSong(newPosition)),
    onDeleteSong: key => dispatch(deleteSong(key)),
    onAddSong: songInfo => dispatch(addSong(songInfo))
  };
};
export default connect(null, mapDispatchToProps)(SongDisplay);
