import { RootStackScreenProps } from "../types";
import { Text, View } from '../components/Themed';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import { Button, RadioButton, Card, Snackbar } from 'react-native-paper';
import { useCallback, useState } from "react";
import { DatePickerModal } from 'react-native-paper-dates';
// e.g in your index.js
import {
   en,
  // fr,
  // nl,
  // de,
  // pl,
  // pt,
  // ar,
  // ko
  // fr
  //enGB,
  registerTranslation,
} from 'react-native-paper-dates'
 registerTranslation('en', en)
// registerTranslation('fr', fr)
// registerTranslation('nl', nl)
// registerTranslation('pl', pl)
// registerTranslation('pt', pt)
// registerTranslation('de', de)
// registerTranslation('ar', ar)
// registerTranslation('ko', ko)
// registerTranslation('fr', fr)
//registerTranslation('en-GB', enGB)

export default function ReservationScreen({ navigation }: RootStackScreenProps<'Reservation'>){

    const [value, setValue] = useState('first');

    const [date, setDate] = useState<Date | undefined>(undefined);
    const [open, setOpen] = useState(false);
  
    const onDismissSingle = useCallback(() => {
      setOpen(false);
    }, [setOpen]);
  
    const onConfirmSingle = useCallback(
      (params:any) => {
        setOpen(false);
        setDate(params.date);
        console.log(date)
      },
      [setOpen, setDate]
    );

    const [visible, setVisible] = useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);

    return (
      <View style={styles.container}>
              <Text style={styles.title}>Reservation</Text>
              <Card style={{ height:"50vh",width: "75%", marginTop: 10, backgroundColor:"#fff2b2"}}>
                <Card.Content style={{display:"flex", alignItems:"center"}}>
                <View>
                  <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <RadioButton.Item label="Massage Anti-Stress" color="#fdb833" value="fourth" />
                    <RadioButton.Item label="Massage à l'huile" color="#fdb833" value="second" />
                    <RadioButton.Item label="Massage Thaïlandais" color="#fdb833" value="third" />
                  </RadioButton.Group>
                </View>
                <View style={{ width:"60%"}}>
                <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                    Pick single date
                  </Button>
                  <DatePickerModal
                    locale="en"
                    mode="single"
                    visible={open}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
                    onChange={onConfirmSingle}/>
                </View>
                <Button style={{marginTop:10}} textColor="black" buttonColor="#fdb833" mode="contained" onPress={onToggleSnackBar}>{visible ? 'Annuler' : 'Valider'}</Button>
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