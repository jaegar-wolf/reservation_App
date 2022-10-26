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
      <ImageBackground source = {require("../assets/images/presentation.jpg")}  blurRadius={3} resizeMode="cover" style={styles.image}>
        <Text style = {styles.text_introduction}>
          En franchissant les portes de notre centre de beauté, vous pénéterez dans un havre où calme et professionnalisme se conjugent au bénéfice de la beauté et du soin et où vous laisserez derrière vous l'agitation urbaine. 
          Zone of zen se fera un plaisir de s'occuper de vous aussi bien des femmes que des hommes.
          Dans un ambiance chaleureuse,souritante et reposante ici le temps marque une pause, la votre.
        </Text>
        <Button onPress={() => Alert.alert('Simple Button pressed')}>
          Découvrir
        </Button>
      </ImageBackground>
      
    </View>
    <View style={{flexGrow: 1, backgroundColor: '#dda15e', alignItems: 'center',display:'flex'}}>

      <Text style = {styles.title}>
          Nos offres  
      </Text>
      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
      <Image source={require("../assets/images/1.png")} style={styles.offres}></Image>
      <Image source={require("../assets/images/2.png")} style={styles.offres}></Image>
      <Image source={require("../assets/images/3.png")} style={styles.offres}></Image>
      <Image source={require("../assets/images/4.png")} style={styles.offres}></Image>
      </View>
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
    fontSize: 20,
    color:'black',
    fontFamily:'San-Franisco',
    marginTop:10,
  
  },


  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    
  },

  Presenation : {
    height:"50vh",
    alignItems:'center',
    justifyContent:'center',
    
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
    color: "white",
    fontSize: 10,
    width:"40%",
    marginTop:50,
    fontWeight:'bold',

  },

  offres : {
    width:200,
    height:'30vh',
    margin:10,
   
  
  },

  
});
