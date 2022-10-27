import { StyleSheet,Text } from 'react-native';
import * as React from 'react';
import { RootStackScreenProps } from '../types';
import { Avatar,TextInput, Button} from 'react-native-paper';
import { View } from '../components/Themed';

export default function Chatbox({ navigation }: RootStackScreenProps<'Chatbox'>) {
  const [text, setText] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <View style={{flexGrow: 1,backgroundColor:'black', display:'flex', alignItems:'center'}}>
      
      <TextInput
            label="Nom"
            value={nom}
            mode="outlined"
            style={{marginTop:30,height:50}}
            onChangeText={nom => setNom(nom)}
          />

      <TextInput
            label="Prénom"
            value={prenom}
            mode="outlined"
            style={{marginTop:30,height:50}}
            onChangeText={prenom => setPrenom(prenom)}
          />
      <TextInput
            label="Email"
            value={email}
            mode="outlined"
            style={{marginTop:30,height:50}}
            onChangeText={email => setEmail(email)}
          />   
      <TextInput
            label="Message"
            value={text}
            multiline = {true}
            numberOfLines={10}
            mode="outlined"
            style={{marginTop:30,height:160}}
            onChangeText={text => setText(text)}
          />                   
      <Button mode='outlined' style={{marginTop: 15}}>
          <Text style={styles.text}>Envoyez</Text>
        </Button>
  

    </View>
  );
};

const styles = StyleSheet.create({


  text: {
    color: "#bc6c25",
    fontSize: 16,
    width:"90%",
    marginTop:3,
    fontFamily:'San-Franisco',
    fontWeight:'bold',

  },
  
});

