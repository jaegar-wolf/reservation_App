import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

export default function InscriptionScreen({ navigation }: RootStackScreenProps<'Inscription'>) {
  const [firstname, setFirstname ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
       <ImageBackground source = {require("../assets/images/cover.png")} blurRadius={0} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Registration</Text>
        <TextInput mode="outlined" activeOutlineColor="black" label="First Name" style={{ margin: 5 }} />
        <TextInput mode="outlined" activeOutlineColor="black" label="Last Name" style={{ margin: 5 }} />
        <TextInput mode="outlined" activeOutlineColor="black" label="Email" style={{ margin: 10 }} />
        <TextInput mode="outlined" activeOutlineColor="black" label="Phone" style={{ margin: 10 }} />
        <TextInput mode="outlined" activeOutlineColor="black" label="Password" secureTextEntry={true} style={{ margin: 5 }} />
        <TextInput mode="outlined" activeOutlineColor="black" label="Confirmation Password" secureTextEntry={true} style={{ margin: 5 }} />
        <Button mode="outlined" textColor='#fdb833' style={{ marginTop: 10}} onPress={() => console.log('Pressed')}>
          Create Account
        </Button>
        <Button buttonColor="black" textColor='#fdb833' mode='contained' style={{ marginTop: 10}} onPress={() => navigation.navigate("Login")}>
          Log in
        </Button>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  title: {
    fontSize: 20,
    color:"#fdb833",
    fontWeight: 'bold',
    marginBottom: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    
  }
});
