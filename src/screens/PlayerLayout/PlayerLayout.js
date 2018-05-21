import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../../components/Header/Header'
import SongDisplay from '../../components/SongDisplay/SongDisplay';
import Player from '../../components/Player/Player';

class PlayerLayout extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <SongDisplay />
                <Player />
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