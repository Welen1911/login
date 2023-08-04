import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export const Second = () => {
    const navigate = useNavigation()

    const navigateBack = () => {
        navigate.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 60, fontSize: 30 }}>{1+2}</Text>
            <Text style={{ marginBottom: 60, fontSize: 20}}>{2-1}</Text>
            <Button title='Voltar' style={{ height: 20, with: 240 }} onPress={navigateBack}></Button>
            <StatusBar style="auto" />
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