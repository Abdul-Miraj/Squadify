import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../../components/Header/Header'
import SongDisplay from '../../components/SongDisplay/SongDisplay';
import SpotifyPlayer from '../../components/SpotifyPlayer/SpotifyPlayer';

class PlayerLayout extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <SongDisplay />
                <SpotifyPlayer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#121212'
    }
});

export default PlayerLayout;