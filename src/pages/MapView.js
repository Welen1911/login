import MapView, { PROVIDER_DEFAULT } from "react-native-maps"
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export const MapViewComponent = () => {
    return (
        <View style={styles.container}>
            <Text>VAI FUNCIONAR SIM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
})
