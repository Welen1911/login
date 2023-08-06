import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export const First = () => {

    const [name, password] = ["", ""]

    const navigation = useNavigation()
    const [nome, setNome] = useState("Digite o seu nome")
    const [senha, setSenha] = useState("")
    const navigateToSecond = () => {
        navigation.navigate(`Principal`, { user: {nome: nome, senha: senha}, })
    }
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 60, fontSize: 30 }}>Login</Text>
            <TextInput placeholder='Nome'
                onChangeText={(newNome) => {
                    if (newNome === "") {
                        setNome("Digite o seu nome")
                    } else {
                        setNome(newNome)
                    }
                }}
                style={{ height: 40, width: 240, borderColor: 'black', borderWidth: 1, marginBottom: 20 }}
            ></TextInput>
            <TextInput placeholder='Senha' secureTextEntry={true} onChangeText={(newSenha) => setSenha(newSenha)} style={{ height: 40, width: 240, borderColor: 'black', borderWidth: 1, marginBottom: 20 }}></TextInput>
            <Button title={nome} style={{ height: 20, with: 240, backgroundColor: "red" }} onPress={navigateToSecond}></Button>
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