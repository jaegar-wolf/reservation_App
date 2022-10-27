import { RootStackScreenProps } from "../types";
import { Text, View } from '../components/Themed';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import { useState, useContext, useEffect}from 'react';
import { UserContext } from "../contexts/UserContext";
import { getUser, updateEmail, updateFirstname, updateLastname, updatePassword, updatePhone } from "../services/userService";

type userToUpdate = {
  firstname?: string
  lastname?: string
  email?: string
  phone?: string
  password?: string
}

export default function UserScreen({ navigation }: RootStackScreenProps<'User'>){
    const [modif, setModif] = useState(false)
    const [varUser, setVarUser ] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
    })

    const [confirmation, setConfirmation ] = useState("")

    const { removeTokens, user, setUser, removeUser } = useContext(UserContext)

    function getData(){
      getUser().then(response => {
        const {status, data} = response
        if(status == 200){
          setUser(data)
        }
      }).catch(err => console.log(err))
    }
    
    useEffect(() => {
      getData()
    }, [])
    
    function logout(){
        removeTokens()
        removeUser()
    }

    function updateUser(user:userToUpdate){
      if(user.firstname){
        updateFirstname(user.firstname)
      }
      if(user.lastname){
        updateLastname(user.lastname)
      }
      if(user.phone){
        updatePhone(user.phone)
      }
      if(user.email){
        updateEmail(user.email)
      }
      if(user.password && confirmation == user.password){
        updatePassword(user.password)
      }
      getData()
      setVarUser({...varUser, password:""})
      setConfirmation("")
    }

    return (
        <View style={styles.container}>
           <ImageBackground source = {require("../assets/images/cover.png")} blurRadius={0} resizeMode="cover" style={styles.image}>
                <Text style={[styles.title, {marginTop: 10}]} darkColor="dark">User</Text>
                <Button mode="contained" buttonColor="black" textColor="#fdb833" style={{ marginTop: 10}} onPress={() => logout()}>Log Out</Button>
                <View style={{ display: "flex", alignItems:"center", flexDirection:"row", marginTop: 40}}>
                        { !modif? 
                        <View>
                            <Text style={styles.text}>{user.firstname} {user.lastname}</Text>
                            <Paragraph style={styles.text}>{user.email}</Paragraph>
                            <Paragraph style={styles.text}>{user.phone}</Paragraph>
                        </View>
                        : 
                        <View>
                            <TextInput mode="outlined" activeOutlineColor="black" label="First Name" style={{ margin: 5 }} value={varUser.firstname} onChangeText={value => setVarUser({...varUser, firstname:value})} />
                            <TextInput mode="outlined" activeOutlineColor="black" label="Last Name" style={{ margin: 5 }} value={varUser.lastname} onChangeText={value => setVarUser({...varUser, lastname:value})} />
                            <TextInput mode="outlined" activeOutlineColor="black" label="Email" style={{ margin: 5 }} value={varUser.email} onChangeText={value => setVarUser({...varUser, email:value})}/>
                            <TextInput mode="outlined" activeOutlineColor="black" label="Phone" style={{ margin: 5 }} value={varUser.phone} onChangeText={value => setVarUser({...varUser, phone:value})}/>
                        </View>
                        }
                    <View style={styles.separator}></View>
                    { !modif?
                    <Button textColor="#fdb833" mode="outlined" onPress={ () => setModif(!modif)}>Modifier</Button>
                    :
                    <Button textColor="#fdb833" mode="outlined" onPress={ () => {updateUser(varUser); setModif(!modif)}}>Valider</Button>
                    }
                    
                </View>
                <View style={styles.separator}></View>
                <View style={{display: "flex", alignItems: "center"}}>
                    <Text style={{fontSize:15, fontWeight:"bold", color:"#fdb833"}}>Change Password</Text>
                    <TextInput mode="outlined" activeOutlineColor="black" label="password" style={{ margin: 5 }} secureTextEntry={true} value={varUser.password} onChangeText={value => setVarUser({...varUser, password:value})}/>
                    <TextInput mode="outlined" activeOutlineColor="black" label="confirmation" style={{ margin: 5 }} secureTextEntry={true} value={confirmation} onChangeText={value => setConfirmation(value)} />
                    <Button textColor="#fdb833" mode="outlined" style={{marginTop:10}} onPress={()=>updateUser(varUser)}>Valider</Button>
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