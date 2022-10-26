import { RootStackScreenProps } from "../types";
import { Text, View } from '../components/Themed';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import * as React from 'react';

export default function ReservationScreen({ navigation }: RootStackScreenProps<'Reservation'>){
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);
  
    const hideDialog = () => setVisible(false);
    return (
        <View style={styles.container}>
           <ImageBackground source = {require("../assets/images/Background.jpg")} resizeMode="repeat" style={styles.image}>
              <Text style={styles.title}>Reservation</Text>
              <Provider>
                <View>
                    <Button onPress={showDialog}>Choisir Prestation</Button>
                    <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.Content>
                        <Paragraph>This is simple dialog</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button onPress={hideDialog}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                    </Portal>
                </View>
                </Provider>
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
          justifyContent: "center"
          
        }
      });