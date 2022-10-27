import { StyleSheet } from 'react-native';
import * as React from 'react';
import { RootStackScreenProps } from '../types';
import { TextInput } from 'react-native-paper';
import { View } from '../components/Themed';

export default function Chatbox({ navigation }: RootStackScreenProps<'Chatbox'>) {
  const [text, setText] = React.useState("");
  const [nom, setnom] = React.useState("");
  const [prenom, setprenom] = React.useState("");
  const [email, setemail] = React.useState("");

  return (
    <View style={{backgroundColor:'black',alignItems:'center'}}>
<TextInput
      label="Nom"
      
      value={nom}
      mode="flat"
      style={{marginTop:80,width:'50%'}}
      onChangeText={nom => setnom(nom)}
    />

<TextInput
      label="Prénom"
      value={prenom}
      mode="flat"
      style={{marginTop:90,height:'5vh'}}
      onChangeText={prenom => setprenom(prenom)}
    />
<TextInput
      label="Email"
      value={email}
      mode="flat"
      style={{marginTop:100,height:'5vh'}}
      onChangeText={email => setemail(email)}
    />    

<TextInput
      multiline={true}
      numberOfLines={10}
      label="Email"
      value={email}
      mode="flat"
      style={{marginTop:100,height:'30vh'}}
      onChangeText={email => setemail(email)}
    />  

    </View>
  );
};

