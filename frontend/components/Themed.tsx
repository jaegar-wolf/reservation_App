/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView, Image,ImageBackground, Pressable, PressableProps} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ButtonProps= ThemeProps & PressableProps & { text: string};

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  //const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[style]} {...otherProps} />;
}

export function Header(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const theme = useColorScheme();
  const selectedTheme= theme=='light'?'dark': 'dark';
  return <View style={[{ backgroundColor: Colors[selectedTheme].background, flexDirection:"row", justifyContent:"center", alignItems:"center",height:100}, style]} {...otherProps}>
            <Image style={{width:100, height:150}}
                   source={require("../assets/images/logo.png")}/>
                   </View>;
}

export function Button(props: ButtonProps) {
  const { text, lightColor, darkColor, ...otherProps } = props;
  const theme = useColorScheme();
  const selectedTheme= theme=='light'?'dark': 'light';
  
  return <Pressable style={[{ backgroundColor: Colors[selectedTheme].background,
                              margin: 10, padding:10, paddingHorizontal:20, borderRadius:10}]} {...otherProps}>
            <Text style={{color: Colors[selectedTheme].text}}>{text}</Text>
          </Pressable>;
}




