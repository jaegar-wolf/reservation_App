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
import { MultiConfirm, RangeChange, SingleChange } from "react-native-paper-dates/lib/typescript/Date/Calendar";
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

    const [date, setDate] = useState<Date | undefined>();
    const [open, setOpen] = useState(false);

    const [dateS, setDateS] = useState("")
  
    const onDismissSingle = useCallback(() => {
      setOpen(false);
    }, [setOpen]);
  
    const onConfirmSingle = useCallback(
      (params:any) => {
        setOpen(false);
        setDate(params.date);
        console.log(params.date)
        
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
                    <RadioButton.Item label="Massage Anti-Stress" color="#bc6c25" value="fourth" />
                    <RadioButton.Item label="Massage ?? l'huile" color="#bc6c25" value="second" />
                    <RadioButton.Item label="Massage Tha??landais" color="#bc6c25" value="third" />
                  </RadioButton.Group>
                </View>
                <View style={{ width:"60%"}}>
                <Button textColor="#bc6c25" onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                    { !date? "Pick Date" : `${date?.getDate()}/${date?.getMonth()+1}/${date?.getFullYear()}`}
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
                <Button style={{marginTop:10}} textColor="black" buttonColor="#bc6c25" mode="contained" onPress={() => {onToggleSnackBar(); setDateS(`${date?.getDate()}/${date?.getMonth()}/${date?.getFullYear()}`)}}>{visible ? 'Annuler' : 'Valider'}</Button>
                </Card.Content>
              </Card>
              <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                  textColor:'#fff2b2',
                  label: 'Done',
                  onPress: () => {
                    // Do something
                  },
                }}>
                Rendez-vous valid?? le {dateS}
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
          color: '#bc6c25'
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