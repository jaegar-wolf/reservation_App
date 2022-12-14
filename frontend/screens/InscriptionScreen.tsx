import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { TextInput, Button } from 'react-native-paper';
import { useContext, useState } from 'react';
import { createAccount, login, Registration } from '../services/AuthService';
import { UserContext } from '../contexts/UserContext';
import { getUser } from '../services/userService';

export default function InscriptionScreen({ navigation }: RootStackScreenProps<'Inscription'>) {
  const [user, setUser ] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    typeUser: 1
  })

  const { token, setTokens } = useContext(UserContext)

  const [confirmation, setConfirmation ] = useState("")

  function newAccount(user:Registration){
    if(!user.firstname || !user.lastname || !user.email || !user.phone || !user.password){
      console.error("Champ manquant")
      return
    }
    else if (user.password != confirmation){
      console.error("Le mot de passe n'est pas identique")
      return
    }
    createAccount(user).then(response => {
      let { status } = response
      if(status == 201){
        login(user.email,user.password).then( (response) => {
          const { status, data } = response
          if(status === 401) {
            console.log("Identifiant ou mot de passe incorrecte")
            return 
          }
          setTokens(String(data.acces_token))
          getUser().then(response => {
            const {status, data} = response
            if(status == 200){
              setUser(data)
            }
          }).catch(err => console.log(err))
      }).catch(err => console.log(err))
      }
      else console.log(response)
    }).catch(err => console.error(err));

  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <TextInput mode="outlined" activeOutlineColor="black" label="First Name" style={{ margin: 5 }}  
          value={user.firstname} 
          onChangeText={value => setUser({...user, firstname:value})}/>
        <TextInput mode="outlined" activeOutlineColor="black" label="Last Name" style={{ margin: 5 }} 
          value={user.lastname} 
          onChangeText={value => setUser({...user, lastname:value})}/>
        <TextInput mode="outlined" activeOutlineColor="black" label="Email" style={{ margin: 10 }} 
          value={user.email} 
          onChangeText={value => setUser({...user, email:value})}/>
        <TextInput mode="outlined" activeOutlineColor="black" label="Phone" style={{ margin: 10 }} 
          value={user.phone} 
          onChangeText={value => setUser({...user, phone:value})}/>
        <TextInput mode="outlined" activeOutlineColor="black" label="Password" secureTextEntry={true} style={{ margin: 5 }} 
          value={user.password} 
          onChangeText={value => setUser({...user, password:value})} />
        <TextInput mode="outlined" activeOutlineColor="black" label="Confirmation Password" secureTextEntry={true} style={{ margin: 5 }}
          value={confirmation}
          onChangeText={value => setConfirmation(value)} />
        <Button textColor="black" buttonColor="#bc6c25" mode="contained" style={{ marginTop: 10}} onPress={() => newAccount(user)}>
          Create Account
        </Button>
        <Button mode="outlined" buttonColor="black" textColor="#bc6c25" style={{ marginTop: 10}} onPress={() => navigation.navigate("Login")}>
          Log in
        </Button>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor:"black",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color:"#bc6c25",
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
