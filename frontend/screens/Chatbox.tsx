import { StyleSheet,Text } from 'react-native';
import * as React from 'react';
import { RootStackScreenProps } from '../types';
import { Avatar,TextInput, Button} from 'react-native-paper';
import { View } from '../components/Themed';

export default function Chatbox({ navigation }: RootStackScreenProps<'Chatbox'>) {
  const [text, setText] = React.useState("");
  const [nom, setnom] = React.useState("");
  const [prenom, setprenom] = React.useState("");
  const [email, setemail] = React.useState("");

  return (
    <View style={{flexGrow: 1,backgroundColor:'black', display:'flex', alignItems:'center'}}>
      
      <TextInput
            label="Nom"
            value={nom}
            mode="outlined"
            style={{marginTop:30,height:'5vh'}}
            onChangeText={nom => setnom(nom)}
          />

      <TextInput
            label="Prénom"
            value={prenom}
            mode="outlined"
            style={{marginTop:30,height:'5vh'}}
            onChangeText={prenom => setprenom(prenom)}
          />
      <TextInput
            label="Email"
            value={email}
            mode="outlined"
            style={{marginTop:30,height:'5vh'}}
            onChangeText={email => setemail(email)}
          />   
      <TextInput
            label="Message"
            value={text}
            multiline = {true}
            numberOfLines={10}
            mode="outlined"
            style={{marginTop:30,height:'15vh'}}
            onChangeText={text => setText(text)}
          />                   
      <Button style = {styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Envoyez</Text>
        </Button>
  

    </View>
  );
};

const styles = StyleSheet.create({

  button: {
    alignItems: 'center',
    marginBottom:10,
    paddingHorizontal: 1,
    borderRadius: 3,
    marginTop:15,
    elevation: 1,
    backgroundColor: 'black',
  },


  text: {
    color: "#bc6c25",
    fontSize: 10,
    width:"90%",
    marginTop:3,
    fontFamily:'San-Franisco',
    fontWeight:'bold',

  },
  
});

