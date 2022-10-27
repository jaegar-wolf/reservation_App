/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Header } from '../components/Themed';

import Colors from '../constants/Colors';
import { UserContext, UserContextProvider } from '../contexts/UserContext';
import useColorScheme from '../hooks/useColorScheme';
import ArticleScreen from '../screens/ArticleScreen';
import InscriptionScreen from '../screens/InscriptionScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ReservationScreen from '../screens/ReservationScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { login } from '../services/AuthService';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDumbbell, faUser, faHouse, faCalendarCheck, faCircleUser, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import UserScreen from '../screens/UserScreen';
import Chatbox from '../screens/Chatbox';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <UserContextProvider>
        <Header />
        <RootNavigator />
      </UserContextProvider>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const {token} = React.useContext(UserContext);
  if(!token){
    return (
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Article" component={ArticleScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Reservation" component={ReservationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chatbox" component={Chatbox} options={{ headerShown: false  }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    );
  }else{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Article" component={ArticleScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chatbox" component={Chatbox} options={{ headerShown: false  }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    );
  }
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Accueil',
          headerShown:false,
          tabBarIcon: ({ color="green" }) => <FontAwesomeIcon icon={faHouse} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          title: 'Article',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faNewspaper} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Reservation"
        component={ReservationScreen}
        options={{
          title: 'Reservation',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faCalendarCheck} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserScreen}
        options={{
          title: 'User',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faCircleUser} color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
/* function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
} */
