import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const header = () => (
    <View style={styles.container}>
        <Text style={styles.headerText}>Squadify</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222327',
        width: '100%',
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }

});

export default header;