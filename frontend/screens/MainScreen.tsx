import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, ImageBackground,Alert } from 'react-native';
import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { UserContext } from '../contexts/UserContext';
import { RootStackScreenProps } from '../types';
import { Asset } from 'expo-asset';

export default function MainScreen({ navigation }: RootStackScreenProps<'Main'>) {
  const {token} = React.useContext(UserContext);
  return (
  
    <View style={{flex: 1}}>
    <View style={styles.Presenation}>
      <ImageBackground source = {require("../assets/images/5.jpg")} blurRadius={5} resizeMode="cover" style={styles.image}>
        <Text style = {styles.title}>
          Une experience unique, seulement sur Zone of Zen.
          
        </Text>

        <Text style = {styles.text}>
        Dans un ambiance chaleureuse,souritante et reposante ici le temps marque une pause, la votre.
        </Text>
        <Button style = {styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Nous rejoindre</Text>
        </Button>
      </ImageBackground>
      
    </View>
    <View style={{flexGrow: 1, backgroundColor: 'black', alignItems: 'center',display:'flex'}}>
    <ImageBackground source = {require("../assets/images/cover.png")} blurRadius={5} resizeMode="cover" style={styles.image}>
        <Text style = {styles.title}></Text>
      <Text style = {styles.title}>
          Nos offres  
      </Text>
      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
      <Image source={require("../assets/images/1.png")} style={styles.offres}></Image>
      <Image source={require("../assets/images/2.png")} style={styles.offres}></Image>
      <Image source={require("../assets/images/3.png")} style={styles.offres}></Image>
      <Image source={require("../assets/images/4.png")} style={styles.offres}></Image>
      </View>
      </ImageBackground>
    </View>
  </View>
  )



  //     {!token?
  //       <Button onPress={()=>{navigation.navigate("Login")}} text="Login"/>
  //     : <View/>}
  //     </ImageBackground>
  //   </View>
  // );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection:'column',
  },

  title: {
    fontSize: 15,
    color:'#fdb833',
    fontFamily:'San-Franisco',
    marginTop:10,
  
  },

  button: {
    alignItems: 'center',
    marginBottom:10,
    paddingHorizontal: 1,
    borderRadius: 3,
    marginTop:15,
    elevation: 1,
    backgroundColor: 'black',
  },

  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    
  },

  Presenation : {
    height:"30vh",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#fefae0",    
  },

  separator: {
    marginVertical: 30,
    height:'0.1%',
    borderRadius:1,
    backgroundColor:"white",
    width: '100%',
    color:"white"
  },

  text_introduction: {
    color: "#bc6c25",
    fontSize: 15,
    width:"40%",
    marginTop:50,
    fontFamily:'San-Franisco',
    fontWeight:'bold',

  },
  text: {
    color: "#bc6c25",
    fontSize: 10,
    width:"90%",
    marginTop:3,
    fontFamily:'San-Franisco',
    fontWeight:'bold',

  },

  offres : {
    width:200,
    height:'30vh',
    margin:10,
  },

  
});
