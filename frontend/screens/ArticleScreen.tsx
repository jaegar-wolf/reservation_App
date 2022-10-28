import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ImageBackground,ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { CardTitle } from 'react-native-paper/lib/typescript/components/Card/CardTitle';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Dialog, Portal, Provider } from 'react-native-paper';
import { useState } from 'react';


export default function ArticleScreen({ navigation }: RootStackScreenProps<'Article'>) {

  const [visible1, setVisible1] = useState(false);

  const [visible2, setVisible2] = useState(false);

  const [visible3, setVisible3] = useState(false);

  const showDialog1 = () => setVisible1(true);

  const hideDialog1 = () => setVisible1(false);

  const showDialog2 = () => setVisible2(true);

  const hideDialog2 = () => setVisible2(false);

  const showDialog3 = () => setVisible3(true);

  const hideDialog3 = () => setVisible3(false);

  return (
    <View style={{flex: 1,backgroundColor:"black"}}>
      <View style={{alignItems:'center'}}>
       <Text style = {styles.title}>
          Offres en détails  
      </Text>
      </View>
           <ScrollView scrollEnabled>

      <View style={styles.top}>
          <Card style={{width:'100%',backgroundColor:"#fff2b2"}}>
              <Card.Content style={{alignItems:'center'}}>
              <Title>Massage anti-stress</Title>
              <Button style = {styles.button} onPress={showDialog1}>
                <Text style={styles.text}>Learn More</Text>
              </Button>
              {/* <Paragraph>Card content</Paragraph> */}
            </Card.Content>
          <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' }} />
          </Card>
          <Provider>
                <Portal>
                  <Dialog style={{backgroundColor:"#fff2b2"}} visible={visible1} onDismiss={hideDialog1}>
                    <Dialog.Title>Massage anti-stress</Dialog.Title>
                    <Dialog.Content>
                      <Paragraph>Le massage cherche à promouvoir le bien-être général et renforcer l’estime de soi, ainsi que stimuler les systèmes circulatoires et immunitaires. Un massage doux peut déclencher la libération d’endorphines, les analgésiques naturels du corps, et provoquer une sensation de confort et de bien-être. Un massage plus vigoureux peut aider à étirer les muscles tendus ou douloureux, ainsi qu’à assouplir les articulations, dans le but d’améliorer la mobilité.</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                      <Button textColor='#bc6c25' onPress={hideDialog1}>Done</Button>
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
          </Provider>
      </View>

        <View style={styles.middle}>
            <Card style={{width:'100%',backgroundColor:"#fff2b2"}}>
            <Card.Content style={{alignItems:'center'}}>
                <Title>Massage à l'huile</Title>
                <Button style = {styles.button} onPress={showDialog2}>
                  <Text style={styles.text}>Learn More</Text>
                </Button>
                {/* <Paragraph>Card content</Paragraph> */}
              </Card.Content>
            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' }} />
            </Card>
            <Provider>
                <Portal>
                  <Dialog style={{backgroundColor:"#fff2b2"}} visible={visible2} onDismiss={hideDialog2}>
                    <Dialog.Title>Massage à l'huile</Dialog.Title>
                    <Dialog.Content>
                      <Paragraph>Le massage à l’huile d’olive est aujourd’hui le meilleur moyen pour apaiser l’abondance de stress et la fatigue persistante que subit le corps humain. C’est une technique relaxante qui consiste à apporter bien-être et détente. Plusieurs méthodes sont utilisées pour le pratiquer comme les huiles essentielles.</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                      <Button textColor='#bc6c25' onPress={hideDialog2}>Done</Button>
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
          </Provider>
        </View>

        <View style={styles.bottom}>
        <Card style={{width:'100%',backgroundColor:"#fff2b2"}}>
          <Card.Content style={{alignItems:'center'}}>
            <Title>Massage thaïlandais</Title>
            <Button style = {styles.button} onPress={showDialog3}>
                  <Text style={styles.text}>Learn More</Text>
            </Button>
            {/* <Paragraph>Card content</Paragraph> */}
          </Card.Content>
         <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1598901865264-4f5f30954532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80' }} />
        </Card>
        <Provider>
                <Portal>
                  <Dialog style={{backgroundColor:"#fff2b2"}} visible={visible3} onDismiss={hideDialog3}>
                    <Dialog.Title>Massage thaïlandais</Dialog.Title>
                    <Dialog.Content>
                      <Paragraph>
                      Le massage traditionnel thaïlandais est un massage complet du corps. Il stimule la circulation sanguine et favorise la souplesse essentielle du corps en travaillant sur la flexibilité des mouvements. Tout le but du massage thaïlandais, en plus de la détente et du bien-être immédiat qu’il apporte, est de favoriser une bonne circulation de l’énergie dans l’ensemble du corps.
                      </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                      <Button textColor='#bc6c25' onPress={hideDialog3}>Done</Button>
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
          </Provider>
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
