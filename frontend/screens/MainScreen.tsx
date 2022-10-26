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
    // <View style={styles.container}>
    //   <ImageBackground source={require("../assets/images/Background.jpg")} resizeMode="cover" style={styles.image}>
    // <View> 
    //     <View style={{flex:1}}>
    //         <Text> En franchissant les portes de notre centre de beauté, vous pénéterez dans un havre où calme et professionnalisme se conjugent au bénéfice de la beauté et du soin et où vous laisserez derrière vous l'agitation urbaine. Zone of zen se fera un plaisir de s'occuper de vous aussi bien des femmes que des hommes.Dans un ambiance chaleureuse,souritante et reposante ici le temps marque une pause, la votre.
    //         </Text>
    //     </View>
  
    //      <View style={{flex:1}} >
    //       <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //       </Text>
    //     </View>   
      
    // </View> 

    <View style={{flex: 1}}>
    <View style={styles.Presenation}>
      <ImageBackground source = {require("../assets/images/Background.jpg")} resizeMode="repeat" style={styles.image}>
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
    <View style={{flexGrow: 1, backgroundColor: '#fefae0', alignItems: 'center'}}>
      {/* <Image
        source={require('../assets/images/Background.jpg')} 
        style={{
          position: 'absolute',
          top: -40,
          borderColor:"green",
          borderWidth : 10,
          resizeMode:'repeat',
          height: '100%',
          width: '100%'}}
      ></Image> */}
      
      <Text style = {styles.title}>
          Nos offres  
      </Text>

        
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
    
  },

  Presenation : {
    height:300,
    alignItems:'center',
   // alignContent:'center',
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
    color: "black",
    fontSize: 13,
    width:"50%",
    marginTop:50,
    fontWeight:'bold',
    fontFamily:'San-Francisco',

  },

  text_article: {
    fontSize: 18,
    lineHeight: 20,
    width : 500,
    borderColor:"green",
    borderWidth : 10,
  },

  
});
