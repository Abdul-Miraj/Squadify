import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';

const songItem = props => {
  return (
    <TouchableHighlight onLongPress={props.onModalOpened} underlayColor='black'>
      <View style={styles.container}>

        <View style={styles.songInfoContainer}>
          <View>
            <Text style={styles.songText}>{props.songName}</Text>
          </View>
          <View style={styles.moreInfoText}>
            <Text style={styles.artistText}>{props.artistNames}</Text>
            <Text style={styles.dotStyle}> • </Text>
            <Text style={styles.albumText}>{props.albumName}</Text>
          </View>
        </View>

        <View style={styles.songModalContainer}>
          <Button color="transparent" title="⋮" onPress={props.onModalOpened} />
        </View>

      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    margin: 12,
  },

  songInfoContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  songModalContainer: {
    alignSelf: 'flex-end',
  },

  moreInfoText: {
    flexDirection: 'row',
  },

  songText: {
    fontSize: 15,
    color: 'white',
  },

  artistText: {
    color: '#b0b0b0',
  },
  albumText: {
    color: '#b0b0b0',
  },

  dotStyle: {
    color: '#b0b0b0',
  },
});

export default songItem;
