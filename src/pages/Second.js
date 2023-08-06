import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export const Second = (props) => {
    const navigate = useNavigation()

    const navigateToMap = () => {
        navigate.navigate("mapView")
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 60, fontSize: 30 }}>Nome: {props.route.params.user.nome}</Text>
            <Text style={{ marginBottom: 60, fontSize: 20 }}>Senha: {props.route.params.user.senha}</Text>
            <Button title='Mapa' style={{ height: 20, with: 240, marginBottom: 60 }} onPress={navigateToMap}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});