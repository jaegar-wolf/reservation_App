import { RootStackScreenProps } from "../types";
import { Text, View } from '../components/Themed';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider, RadioButton, Card } from 'react-native-paper';
import { useState } from "react";
import  DtPicker  from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'

export default function ReservationScreen({ navigation }: RootStackScreenProps<'Reservation'>){

    const [value, setValue] = useState('first');

    const [date, setDate] = useState(null)

    return (
        <View style={styles.container}>
           <ImageBackground source = {require("../assets/images/cover.png")} blurRadius={0} resizeMode="cover" style={styles.image}>
              <Text style={styles.title}>Reservation</Text>
              <Card style={{ width: "75%", marginTop: 10}}>
                <Card.Content style={{display:"flex", alignItems:"center"}}>
                <View>
                  <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <RadioButton.Item label="Séance de Yoga" color="green" value="first" />
                    <RadioButton.Item label="Massage à l'huile" color="green" value="second" />
                    <RadioButton.Item label="Séance de Yoga" color="green" value="third" />
                    <RadioButton.Item label="Massage à l'huile" color="green" value="fourth" />
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
                <Button style={{marginTop:10}} textColor="green" mode="outlined">Valider</Button>
                </Card.Content>
              </Card>
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
          justifyContent: "flex-start"
          
        }
      });