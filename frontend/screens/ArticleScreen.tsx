import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ImageBackground,ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { CardTitle } from 'react-native-paper/lib/typescript/components/Card/CardTitle';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';


export default function ArticleScreen({ navigation }: RootStackScreenProps<'Article'>) {
  return (
    <View style={{flex: 1,backgroundColor:"black"}}>
      <View style={{alignItems:'center'}}>
       <Text style = {styles.title}>
          Offres en détails  
      </Text>
      </View>
           <ScrollView scrollEnabled>

      <View style={styles.top}>
          <Card style={{width:'100%',backgroundColor:"beige"}}>
              <Card.Content style={{alignItems:'center'}}>
              <Title>Massage anti-stress</Title>
              <Button style = {styles.button} onPress={() => {}}>
                <Text style={styles.text}>Learn More</Text>
                 </Button>
              {/* <Paragraph>Card content</Paragraph> */}
            </Card.Content>
          <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' }} />
          </Card>
      </View>

        <View style={styles.middle}>
            <Card style={{width:'100%',backgroundColor:"beige"}}>
            <Card.Content style={{alignItems:'center'}}>
                <Title>Massage à l'huile</Title>
                <Button style = {styles.button} onPress={() => {}}>
                <Text style={styles.text}>Learn More</Text>

                 </Button>
                {/* <Paragraph>Card content</Paragraph> */}
              </Card.Content>
            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' }} />
            </Card>
        </View>

        <View style={styles.bottom}>
        <Card style={{width:'100%',backgroundColor:"beige"}}>
          <Card.Content style={{alignItems:'center'}}>
            <Title>Massage thailandais</Title>
            <Button style = {styles.button} onPress={() => {}}>
                <Text style={styles.text}>Learn More</Text>
                 </Button>
            {/* <Paragraph>Card content</Paragraph> */}
          </Card.Content>
         <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1598901865264-4f5f30954532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80' }} />
        </Card>
        </View>

    
        </ScrollView>
     
    </View>
    
  );
}

const styles = StyleSheet.create({
 
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    justifyContent:'center',
    color: "#fdb833",
     fontFamily:'San-Franisco',

  },

  top: {
    flexGrow: 1, 
    backgroundColor: 'black', 
    alignItems: 'center',
    display:'flex',
    padding:25,
    borderTopEndRadius:1000,
    borderBottomStartRadius:100,
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,
       
  },

  middle: {
    flexGrow: 1, 
    backgroundColor: 'black', 
    alignItems: 'center',
    display:'flex',
    padding:25,
    borderTopEndRadius:1000,
    borderBottomStartRadius:100,
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,
  },

  bottom: {
    flexGrow: 1, 
    backgroundColor: 'black', 
    alignItems: 'center',
    display:'flex',
    padding:20,
    borderTopEndRadius:1000,
    borderBottomStartRadius:100,
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,

},
text: {
  color: "#bc6c25",
  fontSize: 10,
  width:"90%",
  marginTop:3,
  fontFamily:'San-Franisco',
  fontWeight:'bold',

},
button: {
  alignItems: 'center',
  marginBottom:10,
  paddingHorizontal: 1,
  borderRadius: 3,
  marginTop:5,
  elevation: 1,
  backgroundColor: 'black',
},

Endbottom: {
  flexGrow: 1, 
    backgroundColor: 'black', 
    alignItems: 'center',
    display:'flex',
    padding:25,
    borderTopEndRadius:1000,
    borderBottomStartRadius:100,
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,

},

});
