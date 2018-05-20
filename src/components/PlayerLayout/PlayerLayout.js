import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../Header/Header';
import SongDisplay from '../SongDisplay/SongDisplay';
import Player from '../Player/Player';
import Nav from '../Nav/Nav';

class PlayerLayout extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <SongDisplay />
                <Player />
                <Nav />
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