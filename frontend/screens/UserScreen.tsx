import { RootStackScreenProps } from "../types";
import { Text, View } from '../components/Themed';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';

export default function UserScreen({ navigation }: RootStackScreenProps<'User'>){
    const LeftContent = (props:any) => <Avatar.Icon {...props} color="green" icon="account" />

    return (
        <View style={styles.container}>
           <ImageBackground source = {require("../assets/images/Background.jpg")} resizeMode="repeat" style={styles.image}>
                <View style={{ display: "flex", justifyContent:"center", alignItems:"center", marginTop: 20}}>
                    <Text darkColor="black">Mathieu ALBIN</Text>
                    <Paragraph>mathiiew972@gmail.com</Paragraph>
                    <Paragraph>0695342355</Paragraph>
                    <Button textColor="green" mode="outlined">Modifier</Button>
                </View>
                <View>
                    <Paragraph>
                        Change Password
                        <TextInput mode="outlined" activeOutlineColor="green" label="password" style={{ margin: 5 }} />
                        <TextInput mode="outlined" activeOutlineColor="green" label="confirmation" style={{ margin: 5 }} />
                    </Paragraph>
                    <Button textColor="green" mode="outlined">Valider</Button>
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
        },
        separator: {
          marginVertical: 30,
          height: 1,
          width: '80%',
        },
        image: {
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start"
          
        }
      });