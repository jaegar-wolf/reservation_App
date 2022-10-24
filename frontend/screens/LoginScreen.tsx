import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { TextInput, Button } from "@react-native-material/core";

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput variant="outlined" label="User" style={{ margin: 5 }} />
      <TextInput variant="outlined" label="Password" secureTextEntry={true} style={{ margin: 5 }} />
      <Button variant="outlined" title="Sign In"/>
      <Text style={{color: 'blue', paddingTop: 50}} onPress={() => navigation.navigate("Inscription")}>
        Créer un compte
      </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
