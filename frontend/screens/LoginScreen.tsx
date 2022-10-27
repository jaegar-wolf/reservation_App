import {useState, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { TextInput, Button } from 'react-native-paper';
import { login } from '../services/AuthService';
import { UserContext } from '../contexts/UserContext';
import { LoginResponse } from '../services/AuthService';
import { getUser } from '../services/userService';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setTokens, setUser, token } = useContext(UserContext)

  function connect(email:string, password:string){
    if(email && password){
      login(email,password).then( (response) => {
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
  }

  return (
    <View style={styles.container}>
      <ImageBackground source = {require("../assets/images/cover.png")} blurRadius={0} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Login</Text>
        <TextInput mode="outlined" label="Email" activeOutlineColor="black" style={{ margin: 5 }} 
          value={email} onChangeText={email => setEmail(email)} />
        <TextInput mode="outlined" label="Password" activeOutlineColor="black" secureTextEntry={true} style={{ margin: 5 }} 
          value={password} onChangeText={password => setPassword(password)}/>
        <Button style={{ marginTop: 10}} textColor="#fdb833" mode="outlined" onPress={() => connect(email, password)}>
          Sign In
        </Button>
        <Button style={{marginTop: 20}} buttonColor="black" textColor='#fdb833' mode='contained' onPress={() => navigation.navigate("Inscription")}>
          New Account
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
    color:'#fdb833',
    fontWeight: 'bold',
    marginBottom: 15,
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
