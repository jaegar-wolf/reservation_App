import { RootStackScreenProps } from "../types";
import { Text, View } from '../components/Themed';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import { useState, useContext}from 'react';
import { UserContext } from "../contexts/UserContext";

export default function UserScreen({ navigation }: RootStackScreenProps<'User'>){
    const [modif, setModif] = useState(false)

    const { removeTokens } = useContext(UserContext)
    
    function logout(){
        removeTokens()
    }

    return (
        <View style={styles.container}>
           <ImageBackground source = {require("../assets/images/cover.png")} blurRadius={0} resizeMode="cover" style={styles.image}>
                <Text style={[styles.title, {marginTop: 10}]} darkColor="dark">User</Text>
                <Button mode="contained" buttonColor="black" textColor="#fdb833" style={{ marginTop: 10}} onPress={() => logout()}>Log Out</Button>
                <View style={{ display: "flex", alignItems:"center", flexDirection:"row", marginTop: 40}}>
                        { !modif? 
                        <View>
                            <Text style={styles.text}>Mathieu ALBIN</Text>
                            <Paragraph style={styles.text}>mathiiew972@gmail.com</Paragraph>
                            <Paragraph style={styles.text}>0695342355</Paragraph>
                        </View>
                        : 
                        <View>
                            <TextInput mode="outlined" activeOutlineColor="black" label="First Name" style={{ margin: 5 }} />
                            <TextInput mode="outlined" activeOutlineColor="black" label="Last Name" style={{ margin: 5 }} />
                            <TextInput mode="outlined" activeOutlineColor="black" label="Email" style={{ margin: 5 }} />
                            <TextInput mode="outlined" activeOutlineColor="black" label="Phone" style={{ margin: 5 }} />
                        </View>
                        }
                    <View style={styles.separator}></View>
                    <Button textColor="#fdb833" mode="outlined" onPress={ () => setModif(!modif)}>Modifier</Button>
                </View>
                <View style={styles.separator}></View>
                <View style={{display: "flex", alignItems: "center"}}>
                    <Text style={{fontSize:15, fontWeight:"bold", color:"#fdb833"}}>Change Password</Text>
                    <TextInput mode="outlined" activeOutlineColor="black" label="password" style={{ margin: 5 }} />
                    <TextInput mode="outlined" activeOutlineColor="black" label="confirmation" style={{ margin: 5 }} />
                    <Button textColor="#fdb833" mode="outlined" style={{marginTop:10}}>Valider</Button>
                </View>
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
          fontWeight: 'bold',
          color:"#fdb833"
        },
        separator: {
          marginVertical: 30,
          height: 1,
          width: '5%',
        },
        image: {
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start"
          
        },
        text: {
          color:"#fdb833"
        }
      });