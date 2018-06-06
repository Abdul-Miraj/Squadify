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

    return (
      <View style={styles.container}>
        {modalView}
        <FlatList
          ListHeaderComponent={this.props.headerComponent}
          ListFooterComponent={this.props.footerComponent}
          data={this.props.data.queue}
          extraData={this.props.data.position}
          keyboardShouldPersistTaps="always"
          renderItem={info => {
            return (
              <SongItem
                trackData={info.item}
                playingPosition={this.props.data.position}
                trackPosition={info.index}
                onLongPress={() => this.songItemSelectedHandler(info.item.key)}
                onShortPress={() => this.props.onClick(info.index)}
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
