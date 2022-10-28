/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Main: {
            screens: {
              TabOneScreen: 'Main',
            },
          },
          Article: {
            screens: {
              TabTwoScreen: 'Article',
            },
          },
          Reservation:{
            screens: {
              TabThreeScreen: 'three',
            },
          },
          User: {
            screens: {
              TabFourScreen: 'four',
            }
          }
        },
      },
      Main: 'main',
      User: 'user',
      Article: 'article',
      Login: 'login',
      Inscription: 'inscription',
      Reservation:'reservation',
      Modal: 'modal',
      Chatbox:'chatbox',
      NotFound: '*',
    },
  },
};

export default linking;
