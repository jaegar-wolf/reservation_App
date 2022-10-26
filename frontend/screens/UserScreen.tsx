import { RootStackScreenProps } from "../types";
import { Text, View } from '../components/Themed';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';

export default function UserScreen({ navigation }: RootStackScreenProps<'User'>){
    const LeftContent = (props:any) => <Avatar.Icon {...props} theme="green" icon="account" />

    return (
        <View style={styles.container}>
           <ImageBackground source = {require("../assets/images/Background.jpg")} resizeMode="repeat" style={styles.image}>
                <View style={{ display: "flex", justifyContent:"center", marginTop: 20}}>
                    <Card mode="outlined" style={{width:"80vw", height:"60vh", display:"flex", alignItems:"center"}}>
                        <Card.Title title="Utilisateur" left={LeftContent}/>
                        <Card.Content>
                        <Title>Mathieu ALBIN</Title>
                        <Paragraph>mathiiew972@gmail.com</Paragraph>
                        <Paragraph>0695342355</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button textColor="green" mode="outlined">Modifier</Button>
                        </Card.Actions>
                        <Card.Content>
                            <Paragraph>
                                Change Password
                                <TextInput mode="outlined" activeOutlineColor="green" label="password" style={{ margin: 5 }} />
                                <TextInput mode="outlined" activeOutlineColor="green" label="confirmation" style={{ margin: 5 }} />
                            </Paragraph>
                        <Card.Actions>
                            <Button textColor="green" mode="outlined">Valider</Button>
                        </Card.Actions>
                        </Card.Content>
                    </Card>
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