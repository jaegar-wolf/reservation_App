import { RootStackScreenProps } from "../types";
import { Text, View } from '../components/Themed';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import { Button, RadioButton, Card, Snackbar } from 'react-native-paper';
import { useState } from "react";
import  DtPicker  from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'

export default function ReservationScreen({ navigation }: RootStackScreenProps<'Reservation'>){

    const [value, setValue] = useState('first');

    const [date, setDate] = useState(null)

    const [visible, setVisible] = useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);

    return (
      <View style={styles.container}>
              <Text style={styles.title}>Reservation</Text>
              <Card style={{ width: "75%", marginTop: 10}}>
                <Card.Content style={{display:"flex", alignItems:"center"}}>
                <View>
                  <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <RadioButton.Item label="Séance de Yoga" color="#fdb833" value="first" />
                    <RadioButton.Item label="Massage à l'huile" color="#fdb833" value="second" />
                    <RadioButton.Item label="Séance de Yoga" color="#fdb833" value="third" />
                    <RadioButton.Item label="Massage à l'huile" color="#fdb833" value="fourth" />
                  </RadioButton.Group>
                </View>
                <View style={{ width:"40%"}}>
                  <DtPicker
                    onChange={setDate}
                    type='single'
                    local='en'
                    withTime
                    showWeekend
                    inputClass='black'
                    daysClass='black'
                    headerClass='black'
                  />
                </View>
                <Button style={{marginTop:10}} textColor="#fdb833" mode="outlined" onPress={onToggleSnackBar}>{visible ? 'Annuler' : 'Valider'}</Button>
                </Card.Content>
              </Card>
              <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                  label: 'Undo',
                  onPress: () => {
                    // Do something
                  },
                }}>
                Rendez-vous validé
              </Snackbar>
      </View>
    );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          width: "100%",
          backgroundColor:"black",
          alignItems: "center",
          justifyContent: "center"
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fdb833'
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