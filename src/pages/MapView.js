import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync,
    LocationAccuracy
} from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import { styles } from './css/Styles';
import { BtNavi } from './components/BtNavi';

export const MapViewComponent = () => {

    const [location, setLocation] = useState(null)

    const mapRef = useRef(null)

    async function requestForegroundPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition)
        }

    }

    useEffect(() => {
        requestForegroundPermissions()
    }, []);
    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1,
        }, (response) => {
            setLocation(response);
            mapRef.current?.animateCamera({
                pitch: 70,
                center: response.coords
            })
        })
    }, []);


    return (
        <View style={styles.container}>
            {
                location &&
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        longitudeDelta: 0.005,
                        latitudeDelta: 0.005
                    }}
                >
                    <Marker coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,

                    }} />
                </MapView>
            }
            <BtNavi></BtNavi>
        </View>
    );
}