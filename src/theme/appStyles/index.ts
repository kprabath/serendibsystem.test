import {DefaultTheme} from '@react-navigation/native';
import {TransitionPresets} from '@react-navigation/stack';

export const screenOptions = {
  headerStyle: {
    backgroundColor: '#13728c',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  gestureEnabled: true,
  ...TransitionPresets.ModalPresentationIOS,
};
export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#ced4da',
  },
};
