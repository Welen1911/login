import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [nome, setNome] = useState("Digite o seu nome")

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 60, fontSize: 30}}>Login</Text>
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
      <TextInput placeholder='Senha' secureTextEntry={true}  style={{ height: 40, width: 240, borderColor: 'black', borderWidth: 1, marginBottom: 20 }}></TextInput>
      <Button title={nome} style={{height: 20, with: 240}}></Button>
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
